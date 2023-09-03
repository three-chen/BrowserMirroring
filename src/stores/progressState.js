import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProgressState = defineStore('progressState', () => {
    const store_progress_state = ref("successful")

    const setProgressState = (newState) => {
        store_progress_state.value = newState;
    }

    return { store_progress_state, setProgressState }
})
