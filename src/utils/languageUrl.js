function chooseLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    let language_url = "";
    let base_url = "./assets/language/index";
    const str = userLang.substr(0, 2);
    const supportedLanguage = ["en", "ar", "cs", "da", "de", "el", "es", "fa", "fi", "fr", "he", "hi", "hu", "id", "is", "it", "ja", "kk", "km", "ko", "ky", "lo", "ml", "mn", "ms", "my", "nb", "ne", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "th", "tr", "uk", "vi", "zh"]
    if (str !== "zh") {
        language_url = supportedLanguage.indexOf(str) > -1 ? str : "en";
        if (language_url !== 'en') {
            language_url = base_url + "-" + str + ".json";
        } else {
            language_url = base_url + ".json";
        }
    } else {
        if (userLang === "zh-CN") {
            language_url = base_url + "-zh-Hans.json";
        } else if (userLang === "zh-TW") {
            language_url = base_url + "-zh-Hant.json";
        } else {
            language_url = base_url + "-zh-Hans.json";
        }
    }
    return language_url;
}

export {
    chooseLanguage
};
