// @/stores/languageJson.js
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageJsonStore = defineStore('languageJson', () => {
    const store_language_json = reactive({
        language_json: {}
    });

    const setLanguageJson = (json) => {
        store_language_json.language_json = json;
    }

    return { store_language_json, setLanguageJson }
})
