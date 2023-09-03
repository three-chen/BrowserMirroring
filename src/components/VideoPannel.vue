<script setup>
import { useLanguageJsonStore } from '@/stores/languageJson';
import { ref } from 'vue';
const lang = useLanguageJsonStore().store_language_json;

//tooltip
function showTooltip(event) {
    event.target.lastElementChild.classList.remove("hideTooltip")
    event.target.lastElementChild.classList.add("showTooltip");
}
function hideTooltip(event) {
    event.target.lastElementChild.classList.remove("showTooltip")
    event.target.lastElementChild.classList.add("hideTooltip");
}

// sound

//关于全屏
let fullscreenState = false;//初始没有全屏
//全屏
function myFullScreen() {
    if (document.fullscreenEnabled) {
        let ele = document.documentElement;
        if (ele.requestFullscreen) {
            ele.requestFullscreen();
        } else if (ele.mozRequestFullScreen) {
            ele.mozRequestFullScreen();
        } else if (ele.webkitRequestFullScreen) {
            ele.webkitRequestFullScreen();
        }
    } else {
        console.log("fullscreen is not supported");
    }
}
//退出全屏
function myExitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}
//点击全屏按钮全屏，再点退出全屏
function changeFullscreen(event) {
    if (fullscreenState) {
        myExitFullscreen();
        fullscreenState = false;
        event.target.firstElementChild.src = "./images/enterFullscreen.png";
        event.target.lastElementChild.innerText = "Fullscreen";
    } else {
        myFullScreen();
        fullscreenState = true;
        event.target.firstElementChild.src = "./images/exitFullscreen.png";
        event.target.lastElementChild.innerText = "Non-Fullscreen";
    }
}

// shrink & expand
const shrinkState = ref(false);
function shrink() {
    shrinkState.value = true;
}
function expand() {
    shrinkState.value = false;
}
</script>

<template>
    <div id="pannel">
        <div id="Sidebar">
            <div v-show="!shrinkState">
                <div class="icons">
                    <div class="img_box" id="shrink" @mouseenter="showTooltip" @mouseleave="hideTooltip" @click="shrink">
                        <img src="@/assets/images/shrink.png" alt="shrink">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_shrink_tooltip }}</div>
                    </div>
                </div>
                <div class="icons split"></div>

                <div class="icons">
                    <div class="disable" id="sound" @mouseenter="showTooltip" @mouseleave="hideTooltip"
                        @click="changeSound">
                        <img src="@/assets/images/sound_disable.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_sound_disable_tooltip }}</div>
                    </div>
                </div>
                <div class="icons">
                    <div class="img_box" id="fullscreen" @mouseenter="showTooltip" @mouseleave="hideTooltip"
                        @click="changeFullscreen">
                        <img src="@/assets/images/enterFullscreen.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_enterFullscreen_tooltip }}
                        </div>
                    </div>
                </div>

                <div class="icons split"></div>
                <div class="icons">
                    <div class="img_box" id="endlink" @mouseenter="showTooltip" @mouseleave="hideTooltip" @click="endlink">
                        <img src="@/assets/images/disconnect.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_endlink_tooltip }}</div>
                    </div>
                </div>
            </div>
            <div v-show="shrinkState">
                <div class="icons">
                    <div class="img_box" id="expand" @mouseenter="showTooltip" @mouseleave="hideTooltip" @click="expand">
                        <img src="@/assets/images/expand.png" alt="">
                        <div class="tooltip hideTooltip">{{ lang.language_json.videos_Sidebar_expand_tooltip }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#pannel {
    z-index: 10;
    position: fixed;
    top: calc(50% - 80px);
    right: 0;
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