<script setup>
import VideoPannel from '@/components/VideoPannel.vue';
import PauseMask from '@/components/PauseMask.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
import { useVideoState } from '@/stores/videoState';
const lang = useLanguageJsonStore().store_language_json;
const videoState = useVideoState().store_video_state;
</script>

<template>
    <div id="videos">
        <VideoPannel></VideoPannel>
        <div id="sound_tips">
            <span class="tips_text">{{ lang.language_json.videos_sound_tips_tips_text }}</span>
        </div>
        <PauseMask v-show="videoState.pause"></PauseMask>
        <video v-if="videoState.id"></video>
    </div>
</template>

<style scoped>
#videos {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #040108;
}

#videos video {
    display: block;
    margin: auto;
    margin-top: 0;
    z-index: 2;
    max-width: 100vw;
    max-height: 100%;
    width: 100vw;
    height: calc(100% - 10px);
    object-fit: contain;
}

#sound_tips {
    position: absolute;
    color: #152E42;
    max-width: 320px;
    border: 1px solid #000;
    padding: 12px;
    font-size: 14px;
    color: #000;
    top: calc(50% + 80px);
    right: 64px;
    box-sizing: border-box;
    z-index: 5;
    display: none;
    background: #aab6c0;
}
</style>