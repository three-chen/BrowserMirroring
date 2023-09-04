<script setup>
import { useLanguageJsonStore } from '@/stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;
</script>

<template>
    <div class="pause_mask">
        <div class="pause-mask__con">
            <div class="pause-mask__img">
                <img src="/images/pause.png" alt="pause">
            </div>
            <div>{{ lang.language_json.pause_mask }}</div>
        </div>
    </div>
</template>

<style scoped>
.pause_mask {
    text-align: center;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    z-index: 5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}

.pause_mask .pause-mask__con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.pause_mask .pause-mask__img {
    width: 200px;
    height: 200px;
    margin: auto;
}

.pause_mask .pause-mask__img img {
    width: 128px;
    height: auto;
}
</style>