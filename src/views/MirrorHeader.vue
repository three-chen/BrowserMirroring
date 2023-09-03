<script setup>
import { useLanguageJsonStore } from '../stores/languageJson';
const lang = useLanguageJsonStore().store_language_json;
</script>

<template>
    <div class="header">
        <div class="header_container">
            <div class="header_icon"><img src="@/assets/images/LOGO.png" alt=""></div>
            <div class="header_des">
                <p>{{ lang.language_json.header_header_des_p1 }}</p>
                <p style="margin:0 20px">{{ lang.language_json.header_header_des_p2 }}</p>
                <p>{{ lang.language_json.header_header_des_p3 }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 80px;
    width: 100%;
    display: flex;
    background-color: #040108;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
}

.header_container {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.header_des {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-left: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.header_icon img {
    width: 48px;
    height: 48px;
}
</style>