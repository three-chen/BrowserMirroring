<script setup>
import ProgressContainer from '@/components/ProgressContainer.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;

</script>

<template>
    <ProgressContainer>
        <div id="progress_Connecting">
            <div class="progress_tips">
                <div>{{ lang.language_json.progress_progress_success_progress_tips }}</div>
            </div>
            <div class="progress_des">
                <div>{{ lang.language_json.progress_progress_success_progress_des }}</div>
            </div>
            <div class="progress_img"><img src="/images/asklink.png" alt="Connected"></div>
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
</style>