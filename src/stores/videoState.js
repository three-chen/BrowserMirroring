import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useVideoState = defineStore('videoState', () => {
    const store_video_state = reactive({
        id: '',
        class: "other",
        autoplay: "autoplay",
        volume: 0,
        muted: true,
        playsinline: "",
        pause: false,
        opensound: false,
    });

    const setVideoState = (key, newState) => {
        store_video_state[key] = newState;
    }

    const addVideoStateConfig = (stateObj) => {
        for (const key in stateObj) {
            if (Object.hasOwnProperty.call(stateObj, key)) {
                const value = stateObj[key];
                store_video_state[key] = value;
            }
        }
    }

    const removeVideoStateConfig = () => {
        store_video_state.id = '';
        store_video_state.class = 'other';
        store_video_state.autoplay = 'autoplay';
        store_video_state.muted = true;
        store_video_state.opensound = false;
        store_video_state.playsinline = "";
        store_video_state.pause = false;
    }

    return { store_video_state, setVideoState, addVideoStateConfig, removeVideoStateConfig }
})
