<script setup>
import { SkyRTC } from '@/modules/skyRTC';
import { initMixin } from '@/modules/initMixin';
import { useLanguageJsonStore } from '@/stores/languageJson';
import { chooseLanguage } from '@/utils/languageUrl';
import MirrorContainer from '@/views/MirrorContainer.vue';
import MirrorHeader from '@/views/MirrorHeader.vue';
const lang = useLanguageJsonStore();

let language_url = chooseLanguage();
// 动态导入json文件
let XMLHttp = new XMLHttpRequest();
XMLHttp.open('GET', language_url);
XMLHttp.send();
XMLHttp.onreadystatechange = () => {
  if (XMLHttp.readyState === 4 && XMLHttp.status === 200) {
    let lj = JSON.parse(XMLHttp.responseText);
    lang.setLanguageJson(lj);
  }
}

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
