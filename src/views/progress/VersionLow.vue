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
}
</style>