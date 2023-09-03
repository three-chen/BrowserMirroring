<script setup>
import { watch } from 'vue';
import { useProgressState } from '../stores/progressState';
const progressState = useProgressState().store_progress_state;

watch(progressState, () => {
    console.log(useProgressState().store_progress_state);
    this.$router.push(`/${progressState.value}`);
});
</script>

<template>
    <div id="container">
        <router-view />
    </div>
</template>

<style scoped></style>