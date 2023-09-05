import pinia from '@/stores'
import { useProgressState } from '@/stores/progressState';
import { useVideoState } from '@/stores/videoState';
import { usePannelState } from '@/stores/pannelState';
import { useConfirmDialogState } from '@/stores/confirmDialogState';
const videoState = useVideoState(pinia);
const progressState = useProgressState(pinia);
const pannelState = usePannelState(pinia);
const confirmDialogState = useConfirmDialogState(pinia);

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
            const id = socketId;
            sessionStorage.setItem('socketId', 'true');
            let videoStateConfig = {
                id: id,
                class: "other",
                autoplay: "autoplay",
                volume: 0,
                muted: true,
                playsinline: "",
                pause: false,
                opensound: false,
            }
            rtc.attachStream(stream, id);
            videoState.addVideoStateConfig(id, videoStateConfig);
            progressState.setProgressState("mirror");
        }
        else {

        }
    });
    //接收到声音请求
    rtc.on('open_audio', function (socketId, mute) {
        if (mute == 0) {
            if (!sessionStorage.getItem('soundPermission')) {
                // show soundPermission dialog
                confirmDialogState.setConfirmSoundPerState(true);
            } else {
                pannelState.setPannelState("soundState", {
                    isDisable: false,
                    soundTooltip: lang.language_json.videos_Sidebar_sound_open_tooltip,
                    soundImageUrl: "/images/open_sound.png",
                })

                videoState.setVideoState(socketId, "opensound", true);
                videoState.setVideoState(socketId, "volume", 1);
                videoState.setVideoState(socketId, "muted", false);
            }
        }
        else if (mute == 1) {
            pannelState.setPannelState("soundState", {
                isDisable: true,
                soundTooltip: lang.language_json.videos_Sidebar_sound_disable_tooltip,
                soundImageUrl: "/images/sound_disable.png",
            })

            videoState.setVideoState(socketId, "opensound", false);
            videoState.setVideoState(socketId, "volume", 0);
            videoState.setVideoState(socketId, "muted", true);
        }
    });
    //接收到暂停请求
    rtc.on('pause', function (socketId, paused) {
        if (paused == 1) {
            videoState.setVideoState(socketId, "pause", true);
        }
        else if (paused == 0) {
            videoState.setVideoState(socketId, "pause", false);
        }
    });
    //接收到断开请求
    rtc.on('remove_peer', function (socketId) {
        videoState.removeVideoStateConfig();
        progressState.setProgressState("close");
    });
}

export {
    initMixin
};

