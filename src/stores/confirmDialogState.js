import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfirmDialogState = defineStore('confirmDialogState', () => {
    const store_confirm_endlink_state = ref(false);
    const store_confirm_soundPer_state = ref(false);

    const setConfirmEndlinkState = (newState) => {
        store_confirm_endlink_state.value = newState;
    }

    const setConfirmSoundPerState = (newState) => {
        store_confirm_soundPer_state.value = newState;
    }

    return { store_confirm_endlink_state, store_confirm_soundPer_state, setConfirmEndlinkState, setConfirmSoundPerState }
})
