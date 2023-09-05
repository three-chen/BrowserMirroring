<script setup>
import router from '@/router'
import { watch } from 'vue';
import { useProgressState } from '@/stores/progressState';
import { useConfirmDialogState } from '@/stores/confirmDialogState';
import ConfirmEndLink from '@/components/ConfirmEndLink.vue';
import ConfirmSoundPermisson from '@/components/ConfirmSoundPermisson.vue';
const progressState = useProgressState();
const confirmDialogState = useConfirmDialogState();

watch(progressState, () => {
    let new_route = `/${progressState.store_progress_state}`;
    router.push(new_route);
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