<script setup>
import ProgressContainer from '../../components/ProgressContainer.vue';
import { useLanguageJsonStore } from '../../stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;

</script>

<template>
    <ProgressContainer>
        <div id="progress_failed">
            <div class="progress_tips">
                <div style="margin-left:15px">{{ lang.language_json.progress_progress_failed_progress_tips }}
                </div>
            </div>
            <div class="progress_des">
                <div>{{ lang.language_json.progress_progress_failed_progress_des }}</div>
            </div>
            <div class="progress_img"><img src="@/assets/images/breaklink.png" alt="Connection failed"></div>
            <div class="refresh">
                <div class="refresh_btn">{{ lang.language_json.progress_progress_failed_refresh_refresh_btn }}</div>
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

.progress .refresh {
    display: flex;
    justify-content: center;
}

.progress .refresh .refresh_btn {
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