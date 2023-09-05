<script setup>
import ProgressContainer from '@/components/ProgressContainer.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
import { ref } from 'vue';
const lang = useLanguageJsonStore().store_language_json;

const notTesla = ref(true);
if (location.host === "7.7.7.7:8000") {
    notTesla.value = false;
}

function toQrcode() {
    location.href = 'https://1001tvs.cn/b';
}
</script>

<template>
    <ProgressContainer>
        <div id="progress_close">
            <div class="progress_tips">
                <div style="margin-left:15px">{{ lang.language_json.progress_progress_close_progress_tips }}
                </div>
            </div>
            <div class="progress_des">
                <div>{{ lang.language_json.progress_progress_close_progress_des }}</div>
            </div>
            <div class="progress_img"><img src="/images/endlink.png" style="margin: 0;" alt="MIrroring END"></div>
            <div v-if="notTesla" class="refresh">
                <div class="refresh_btn" @click="toQrcode">{{ lang.language_json.progress_progress_close_refresh_refresh_btn
                }}</div>
            </div>
        </div>
    </ProgressContainer>
</template>

<style scoped>
.progress_tips {
    margin-top: 30px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.progress_des {
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin-top: 40px;
}

.progress_img {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 50px;
}

.progress_img img {
    width: 160px;
    margin-right: 50px;
}

.refresh {
    display: flex;
    justify-content: center;
}

.refresh .refresh_btn {
    width: 202px;
    height: 64px;
    border-radius: 50px;
    position: absolute;
    margin-top: 25px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 64px;
    cursor: pointer;
    background: linear-gradient(90deg, #D025A9 3.7%, #515AEE 100%);
}
</style>