import {createI18n} from "vue-i18n";
import messages from "@/i18n/messages";
import numberFormats from "@/i18n/numberFormats";
import datetimeFormats from "@/i18n/datetimeFormats"
import pluralRules from "@/i18n/pluralRules";

function customRule(choice, choicesLength, orgRule) {
    if (choice === 0) {
        return 0
    }

    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1
    if (!teen && endsWithOne) {
        return 1
    }
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
    }

    return choicesLength < 4 ? 2 : 3
}

export default createI18n({
    locale: "lv",
    pluralizationRules: {
        ru: customRule
    },
    legacy: true,
    fallbackLocale: "lv",
    globalInjection: true,
    messages,
    numberFormats,
    datetimeFormats,
    pluralRules
});