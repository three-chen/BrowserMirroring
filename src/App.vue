<script setup>
import { initMixin } from '@/modules/initMixin';
import { SkyRTC } from '@/modules/skyRTC';
import { useLanguageJsonStore } from '@/stores/languageJson';
import { chooseLanguage } from '@/utils/languageUrl';
import MirrorContainer from '@/views/MirrorContainer.vue';
import MirrorHeader from '@/views/MirrorHeader.vue';

let language_url = chooseLanguage();
// 动态导入json文件
import(language_url).then(res => {
  // 赋值给pinia
  const lang = useLanguageJsonStore();
  lang.setLanguageJson(res.default);
});

var rtc = new SkyRTC();
initMixin(rtc);
//连接WebSocket服务器
try {
  rtc.connect("ws:" + window.location.href.substring(window.location.protocol.length).split('#')[0], window.location.hash.slice(1));
} catch (error) {
  console.log(error);
}
</script>

<template>
  <div class="container">
    <MirrorHeader />
    <MirrorContainer />
  </div>
</template>

<style scoped>
.container {
  height: 100%;
}
</style>
