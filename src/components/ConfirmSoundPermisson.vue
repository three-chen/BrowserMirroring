<script setup>
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { useLanguageJsonStore } from '@/stores/languageJson';
import { usePannelState } from '@/stores/pannelState';
import { useVideoState } from '@/stores/videoState';
import { useConfirmDialogState } from '@/stores/confirmDialogState';
const lang = useLanguageJsonStore().store_language_json;
const videoState = useVideoState();
const pannelState = usePannelState();
const confirmDialogState = useConfirmDialogState();


function cancel() {
    // hide soundPermisson dialog
    confirmDialogState.setConfirmSoundPerState(false);

    videoState.setVideoState("opensound", false);
    videoState.setVideoState("volume", 0);
    videoState.setVideoState("muted", true);
}

function yes() {
    // hide soundPermisson dialog
    confirmDialogState.setConfirmSoundPerState(false);

    sessionStorage.setItem('soundPermission', 'true');

    pannelState.setPannelState("soundState", {
        isDisable: false,
        soundTooltip: lang.language_json.videos_Sidebar_sound_open_tooltip,
        soundImageUrl: "/images/open_sound.png",
    })

    videoState.setVideoState("opensound", true);
    videoState.setVideoState("volume", 1);
    videoState.setVideoState("muted", false);
}
</script>

<template>
    <ConfirmDialog>
        <template #header>
            <div class="dialog__title">{{ lang.language_json.soundPermission_dialog__title }}</div>
        </template>
        <template #body>
            <div class="dialog-body__content">{{ lang.language_json.soundPermission_dialog_body__content }}</div>
        </template>
        <template #footer>
            <span>
                <button class="cancelbtn dialog_btn" @click="cancel">
                    <span>{{ lang.language_json.soundPermission_cancelbtn }}</span>
                </button>
                <button class="yesbtn dialog_btn" @click="yes">
                    <span>{{ lang.language_json.soundPermission_yesbtn }}</span>
                </button>
            </span>
        </template>
    </ConfirmDialog>
</template>

<style scoped>
.dialog__title {
    font-size: 18px;
    color: #2d2f33;
    line-height: 26px;
    font-weight: 700;
    text-shadow: none;
}

.dialog_btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
}

.cancelbtn {
    border-radius: 2px;
    padding: 8px 22px;
    background: #F7FAF9;
    border: 1px solid #DFE0DF;
    color: #666;
}

.yesbtn {
    border-radius: 2px;
    padding: 8px 22px;
    background: #41CE67;
    border: 1px solid #41CE67;
    color: #fff;
}
</style>