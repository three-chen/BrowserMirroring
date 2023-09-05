<script setup>
import ProgressContainer from '@/components/ProgressContainer.vue';
import { useLanguageJsonStore } from '@/stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;

function upgrade() {

}

</script>

<template>
    <ProgressContainer>
        <div id="progress_versionLow">
            <div class="progress_des">
                <div>{{ lang.language_json.progress_version_low_des }}</div>
            </div>
            <div class="versionLow">
                <div class="versionLow_btn" @click="upgrade">{{
                    lang.language_json.progress_version_low_btn }}</div>
            </div>
        </div>
    </ProgressContainer>
</template>

<style scoped>
.progress_des {
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin-top: 40px;
    padding: 0 50px;
}

.versionLow {
    display: flex;
    justify-content: center;
}

.versionLow .versionLow_btn {
    width: 202px;
    height: 64px;
    border-radius: 50px;
    margin: 90px 0 70px 0;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 64px;
    cursor: pointer;
    background: linear-gradient(90deg, #D025A9 3.7%, #515AEE 100%);
}
</style>