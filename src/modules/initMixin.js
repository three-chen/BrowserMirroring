function initMixin(rtc) {
    //成功创建WebSocket连接
    rtc.on("connected", function (socket) {
        //创建本地视频流
        rtc.createStream({
            "video": false,
            "audio": false
        });
    });

    //接收到其他用户的视频流
    rtc.on('pc_add_stream', function (stream, socketId) {
        if (!sessionStorage.getItem('socketId')) {

            sessionStorage.setItem('socketId', 'true')
            var newVideo = document.createElement("video");
            id = socketId;
            newVideo.setAttribute("class", "other");
            newVideo.setAttribute("autoplay", "autoplay");
            newVideo.muted = true
            newVideo.setAttribute("playsinline", "");
            newVideo.setAttribute("id", id);
            videos.appendChild(newVideo);
            rtc.attachStream(stream, id);
            videoElement = document.querySelector('video');
            // 找到video后icons pannel 展示出来
            pannel.style.display = 'block';
            progress.style.display = 'none';
        }
        else {

        }
    });
    //接收到声音请求
    rtc.on('open_audio', function (socketId, mute) {
        if (mute == 0) {
            if (!sessionStorage.getItem('soundPermission')) {
                soundPermission.style.display = 'block';
            } else {
                soundicon.className = "img_box";
                soundicon.firstElementChild.src = './images/open_sound.png';
                soundicon.lastElementChild.innerText = language_json.videos_Sidebar_sound_open_tooltip;
                opensound = true;
                videoElement.volume = 1;
                videoElement.muted = false;
            }
        }
        else if (mute == 1) {
            soundicon.className = 'disable'
            videoElement.mute = true;
            videoElement.volume = 0;
            opensound = false;
            soundicon.firstElementChild.src = './images/sound_disable.png';
            soundicon.lastElementChild.innerText = language_json.videos_Sidebar_sound_disable_tooltip;
        }
    });
    //接收到暂停请求
    rtc.on('pause', function (socketId, paused) {
        if (paused == 1) {
            pause_mask.style.display = 'block'
        }
        else if (paused == 0) {
            pause_mask.style.display = 'none'
        }
    });
    //接收到断开请求
    rtc.on('remove_peer', function (socketId) {
        if (videoElement.id == socketId) {
            pannel.style.display = 'none'
            confirmEndLink.style.display = 'none'
            progress.style.display = 'block';
            progress_close.style.display = 'block'
            progress_break.style.display = 'none'
            progress_failed.style.display = 'none'
            progress_success.style.display = 'none'
            videos.removeChild(videoElement);
        }
    });
}

export {
    initMixin
};

