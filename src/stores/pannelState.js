import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useLanguageJsonStore } from './LanguageJson';

export const usePannelState = defineStore('pannelState', () => {
    const lang = useLanguageJsonStore().store_language_json;
    const store_pannel_state = reactive({
        shrinkState: false, // 初始展开
        fullscreenState: {
            isFullscreen: false, // 初始没有全屏
            fullscreenTooltip: lang.language_json.videos_Sidebar_enterFullscreen_tooltip,
            fullscreenImageUrl: "/images/enterFullscreen.png",
        },
        soundState: {
            isDisable: true, // 初始禁用
            soundTooltip: lang.language_json.videos_Sidebar_sound_disable_tooltip,
            soundImageUrl: "/images/sound_disable.png",
        },
    });

    const setPannelState = (key, newState) => {
        store_pannel_state[key] = newState;
    }

    return { store_pannel_state, setPannelState, }
})
