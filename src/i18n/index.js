import {createI18n} from "vue-i18n";
import messages from "@/i18n/messages";
import numberFormats from "@/i18n/numberFormats";
import datetimeFormats from "@/i18n/datetimeFormats"

export default createI18n({
    locale: "lv",
    legacy: false,
    fallbackLocale: "lv",
    globalInjection: true,
    messages,
    numberFormats,
    datetimeFormats
});