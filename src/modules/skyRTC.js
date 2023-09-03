function SkyRTC() {
    var PeerConnection = (window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection);
    var nativeRTCIceCandidate = (window.mozRTCIceCandidate || window.RTCIceCandidate);
    var nativeRTCSessionDescription = (window.mozRTCSessionDescription || window.RTCSessionDescription);
    var iceServer = {
        iceServers: [
            { urls: "stun:23.21.150.121" },
            { urls: "stun:stun.l.google.com:19302" }
        ]
    };
    var remoteMediaStream = new MediaStream();

    function EventEmitter() {
        this.events = {};
    }

    EventEmitter.prototype.on = function (eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
    };

    EventEmitter.prototype.emit = function (eventName, _) {
        var events = this.events[eventName],
            args = Array.prototype.slice.call(arguments, 1),
            i, m;

        if (!events) {
            return;
        }
        for (i = 0, m = events.length; i < m; i++) {
            events[i].apply(null, args);
        }
    };

    function skyrtc() {
        this.room = "";
        this.socket = null;
        this.me = null;
        this.peerConnections = {};
        this.connections = [];
    }

    skyrtc.prototype = new EventEmitter();

    skyrtc.prototype.connect = function (server, room) {
        var socket,
            that = this;
        room = room || "";
        socket = this.socket = new WebSocket("%%WEBSOCKET_URL%%");
        socket.onopen = function () {
            socket.send(JSON.stringify({
                "eventName": "__join",
                "data": {
                    "room": room
                }
            }));
            that.emit("socket_opened", socket);
        };

        socket.onmessage = function (message) {
            var json = JSON.parse(message.data);
            //            console.log(json)
            if (json.eventName) {
                that.emit(json.eventName, json.data);
            } else {
                that.emit("socket_receive_message", socket, json);
            }
        };

        socket.onerror = function (error) {
            that.emit("socket_error", error, socket);
        };

        socket.onclose = function (data) {
            var pcs = that.peerConnections;
            for (i = pcs.length; i--;) {
                that.closePeerConnection(pcs[i]);
            }
            that.peerConnections = [];
            that.connections = [];
            that.emit('socket_closed', socket);
        };

        this.on('_peers', function (data) {
            that.connections = data.connections;
            that.me = data.you;
            that.emit("get_peers", that.connections);
            that.emit('connected', socket);
        });

        this.on("_ice_candidate", function (data) {
            var candidate = new nativeRTCIceCandidate({ sdpMLineIndex: data.label, candidate: data.candidate });
            var pc = that.peerConnections[data.socketId];
            pc.addIceCandidate(candidate);
            that.emit('get_ice_candidate', candidate);
        });

        this.on('_new_peer', function (data) {
            that.connections.push(data.socketId);
            var pc = that.createPeerConnection(data.socketId),
                i, m;
            that.emit('new_peer', data.socketId);
        });

        this.on('_remove_peer', function (data) {
            //            console.log('_remove_peer' + data.socketId)
            var sendId;
            that.closePeerConnection(that.peerConnections[data.socketId]);
            delete that.peerConnections[data.socketId];
            that.emit("remove_peer", data.socketId);
        });

        this.on('_offer', function (data) {
            that.receiveOffer(data.socketId, data.sdp);
            that.emit("get_offer", data);
        });

        this.on('_answer', function (data) {
            that.receiveAnswer(data.socketId, data.sdp);
            that.emit('get_answer', data);
        });

        this.on('_open_audio', function (data) {
            that.emit('open_audio', data.socketId, data.mute);
        });

        this.on('_pause', function (data) {
            that.emit('pause', data.socketId, data.paused);
        });

        this.on('ready', function () {
            that.createPeerConnections();
            that.sendOffers();
        });
    };

    skyrtc.prototype.createStream = function (options) {
        var that = this;
        that.emit("ready");
    };

    skyrtc.prototype.attachStream = function (stream, domId) {
        var element = document.getElementById(domId);
        console.log(stream);
        element.srcObject = stream;

        //        var remoteVideo = element
        //
        //        remoteVideo.addEventListener('resize', () => {
        //          console.log(`Remote video size changed to ${remoteVideo.videoWidth}x${remoteVideo.videoHeight}`);
        //        });
        //        remoteVideo.addEventListener('loadedmetadata', function () {
        //          console.log(`Remote video videoWidth: ${this.videoWidth}px,  videoHeight: ${this.videoHeight}px`);
        //        });
    };

    skyrtc.prototype.sendOffers = function () {
        var i, m,
            pc,
            that = this,
            pcCreateOfferCbGen = function (pc, socketId) {
                return function (session_desc) {
                    pc.setLocalDescription(session_desc);
                    that.socket.send(JSON.stringify({
                        "eventName": "__offer",
                        "data": {
                            "sdp": session_desc,
                            "socketId": socketId
                        }
                    }));
                };
            },
            pcCreateOfferErrorCb = function (error) {
                console.log(error);
            };
        for (i = 0, m = this.connections.length; i < m; i++) {
            pc = this.peerConnections[this.connections[i]];
            pc.createOffer(pcCreateOfferCbGen(pc, this.connections[i]), pcCreateOfferErrorCb);
        }
    };

    skyrtc.prototype.receiveOffer = function (socketId, sdp) {
        var pc = this.peerConnections[socketId];
        this.sendAnswer(socketId, sdp);
    };

    skyrtc.prototype.sendAnswer = function (socketId, sdp) {
        var pc = this.peerConnections[socketId];
        var that = this;
        pc.setRemoteDescription(new nativeRTCSessionDescription(sdp));
        pc.createAnswer(function (session_desc) {
            pc.setLocalDescription(session_desc);
            that.socket.send(JSON.stringify({
                "eventName": "__answer",
                "data": {
                    "socketId": socketId,
                    "sdp": session_desc
                }
            }));
        }, function (error) {
            console.log(error);
        });
    };

    skyrtc.prototype.receiveAnswer = function (socketId, sdp) {
        var pc = this.peerConnections[socketId];
        const remoteAnswer = new nativeRTCSessionDescription(sdp);
        pc.setRemoteDescription(remoteAnswer)
            .then(() => {
                console.log('Remote answer set successfully');
            })
            .catch((error) => {
                console.error('Failed to set remote answer:', error);
            });
    };

    skyrtc.prototype.createPeerConnections = function () {
        var i, m;
        for (i = 0, m = this.connections.length; i < m; i++) {
            this.createPeerConnection(this.connections[i]);
        }
    };

    skyrtc.prototype.createPeerConnection = function (socketId) {
        var that = this;
        var pc = new PeerConnection(iceServer);
        this.peerConnections[socketId] = pc;
        pc.onicecandidate = function (evt) {
            if (evt.candidate)
                if (evt.candidate.candidate) {
                    that.socket.send(JSON.stringify({
                        "eventName": "__ice_candidate",
                        "data": {
                            "label": evt.candidate.sdpMLineIndex,
                            "candidate": evt.candidate.candidate,
                            "id": evt.candidate.sdpMid,
                            "socketId": socketId
                        }
                    }));
                    that.emit("pc_get_ice_candidate", evt.candidate, socketId, pc);
                } else {
                    console.log("evt.candidate.candidate is null!")
                }
        };

        pc.onopen = function () {
            that.emit("pc_opened", socketId, pc);
        };

        pc.ontrack = function (evt) {
            remoteMediaStream.addTrack(evt.track)
            that.emit('pc_add_stream', remoteMediaStream, socketId, pc);
        };
        return pc;
    };

    skyrtc.prototype.closePeerConnection = function (pc) {
        if (!pc) return;
        pc.close();
    };

    skyrtc.prototype.exit = function () {
        var that = this;
        that.socket.send(JSON.stringify({
            "eventName": "__remove_peer",
            "data": {
                "socketId": that.me
            }
        }));
        var pcs = that.peerConnections;
        var i;
        for (i = pcs.length; i--;) {
            that.closePeerConnection(pcs[i]);
        }
        that.peerConnections = [];
        that.connections = [];
    };

    return new skyrtc();
};

export {
    SkyRTC
};

