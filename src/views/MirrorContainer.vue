<script setup>
import { watch } from 'vue';
import { useProgressState } from '@/stores/progressState';
import { useConfirmDialogState } from '@/stores/confirmDialogState';
import ConfirmEndLink from '../components/ConfirmEndLink.vue';
import ConfirmSoundPermisson from '../components/ConfirmSoundPermisson.vue';
const progressState = useProgressState().store_progress_state;
const confirmDialogState = useConfirmDialogState();

watch(progressState.value, () => {
    console.log(useProgressState().store_progress_state);
    this.$router.push(`/${progressState.value}`);
});
</script>

<template>
    <div id="container">
        <router-view />
        <ConfirmEndLink v-show="confirmDialogState.store_confirm_endlink_state" />
        <ConfirmSoundPermisson v-show="confirmDialogState.store_confirm_soundPer_state" />
    </div>
</template>

<style scoped>
#container {
    height: 100%;
}
</style>