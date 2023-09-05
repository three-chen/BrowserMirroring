<script setup>
import ProgressContainer from '@/components/ProgressContainer.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;

</script>

<template>
    <ProgressContainer>
        <div id="progress_reqPair">
            <div class="progress_tips">
                <img class="tips_img" src="/images/message.png" alt="message">
                <div class="tips_text">配对请求</div>
            </div>
            <div class="progress_des">
                <div>是否允许来自XXX设备的投屏共享？</div>
            </div>

            <div class="btn">
                <div class="refuse">拒绝</div>
                <div class="allow">允许</div>
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
    align-items: center;
}

.tips_img {
    margin: 7px 15px 0 40px;
}

.tips_text {
    display: flex;
    align-items: center;
}

.progress_des {
    font-size: 24px;
    color: #fff;
    margin: 40px 0 0 85px;
}


.btn {
    display: flex;
    justify-content: space-around;
}

.btn .refuse {
    width: 170px;
    height: 54px;
    border-radius: 50px;
    margin: 90px 0 70px 40px;
    text-align: center;
    color: #fff;
    font-size: 25px;
    line-height: 54px;
    cursor: pointer;
    background: #8D8B8B;
}

.btn .allow {
    width: 170px;
    height: 54px;
    border-radius: 50px;
    margin: 90px 40px 70px 0;
    text-align: center;
    color: #fff;
    font-size: 25px;
    line-height: 54px;
    cursor: pointer;
    background: linear-gradient(90deg, #D025A9 3.7%, #515AEE 100%);
}
</style>