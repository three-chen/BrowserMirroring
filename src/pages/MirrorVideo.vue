<script setup>
import { useLanguageJsonStore } from '../stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;
</script>

<template>
    <div id="videos">
        <div id="pannel">
            <div id="Sidebar">
                <div class="icons">
                    <div class="img_box" id="shrink" onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)">
                        <img src="@/assets/images/shrink.png" alt="shrink">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_shrink_tooltip }}</div>
                    </div>
                </div>
                <div class="icons split"></div>

                <div class="icons">
                    <div class="disable" id="sound" onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)">
                        <img src="@/assets/images/sound_disable.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_sound_disable_tooltip }}</div>
                    </div>
                </div>
                <div class="icons">
                    <div class="img_box" id="fullscreen" onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)">
                        <img src="@/assets/images/enterFullscreen.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_enterFullscreen_tooltip }}
                        </div>
                    </div>
                </div>

                <div class="icons split"></div>
                <div class="icons">
                    <div class="img_box" id="endlink" onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)">
                        <img src="@/assets/images/disconnect.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_endlink_tooltip }}</div>
                    </div>
                </div>
                <div class="icons" style="display: none;">
                    <div class="img_box" id="expand" onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)">
                        <img src="@/assets/images/expand.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_expand_tooltip }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sound_tips">
            <span class="tips_text">{{ videos_sound_tips_tips_text }}</span>
        </div>
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

#pannel {
    z-index: 10;
    position: fixed;
    top: calc(50% - 80px);
    right: 0;
    display: none;
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

#Sidebar {
    width: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #403F41;
}

.icons {
    margin: 25px 0;
    width: 40px;
    height: auto;
    /* overflow: hidden; */
}

.icons .img_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    cursor: pointer;
    position: relative;
}

.icons .disable {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    position: relative;
    cursor: not-allowed !important;
}

.icons .img_box:hover {
    background-color: rgba(217, 217, 217, 0.12);
}

.icons .img_box:active {
    background-color: rgba(217, 217, 217, 0.06);
}

.icons .disable .tooltip,
.icons .img_box .tooltip {
    position: absolute;
    font-size: 10px;
    background-color: #383838;
    color: #FFFFFF;
    padding: 6px;
    top: 40px;
    right: 20px;
    text-wrap: nowrap;
}

.icons .disable .showTooltip,
.icons .img_box .showTooltip {
    display: block;
}

.icons .disable .hideTooltip,
.icons .img_box .hideTooltip {
    display: none;
}

.split {
    border-bottom: 1px solid #5A648B;
    width: 40px;
    margin: 0 auto;
}
</style>