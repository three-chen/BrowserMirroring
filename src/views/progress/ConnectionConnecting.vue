<script setup>
import ProgressContainer from '@/components/ProgressContainer.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;

</script>

<template>
    <ProgressContainer>
        <div id="progress_Connecting">
            <div class="progress_tips">
                <div>发送端：XXX设备</div>
                <div>接收端：XXX设备</div>
            </div>
            <div class="progress_des">
                <div>正在建立连接，请保持手机屏幕开启避免锁屏造成连接中断</div>
            </div>
            <div class="progress_img"><img src="/images/connecting.png" alt="Connecting"></div>
        </div>
    </ProgressContainer>
</template>

<style scoped>
.progress_tips {
    margin: 30px 50px 0 50px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.progress_des {
    font-size: 24px;
    color: #fff;
    margin: 40px 50px 0 50px;
}

.progress_img {
    display: flex;
    justify-content: center;
    margin-top: 75px;
    margin-bottom: 70px;
}

.progress_img img {
    width: 60px;
    margin-right: 50px;
}
</style>