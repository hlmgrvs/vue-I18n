import {createI18n} from "vue-i18n";
import messages from "@/i18n/messages";
import numberFormats from "@/i18n/numberFormats";
import datetimeFormats from "@/i18n/datetimeFormats"
import pluralRules from "@/i18n/pluralRules";

const DEFAULT_LOCALE = 'lv'

const extractLanguage = locale => {
    return locale.split("-")[0];
};

function getDefaultLocale() {
    const availableLocales = Reflect.ownKeys(
        messages
    );
    const navigatorLocale = navigator.language;

    if (
        availableLocales.includes(navigatorLocale)
    ) {
        return navigatorLocale;
    }

    const navigatorLang = extractLanguage(
        navigatorLocale
    );

    if (navigatorLocale.split("-").length > 1) {
        if (
            availableLocales.includes(navigatorLang)
        ) {
            return navigatorLang;
        }
    }

    const fallback = availableLocales.find(
        locale =>
            extractLanguage(locale) === navigatorLang
    );

    return fallback ? fallback : DEFAULT_LOCALE;
}
export default createI18n({
    locale: getDefaultLocale(),
    legacy: false,
    fallbackLocale: "lv",
    globalInjection: true,
    messages,
    numberFormats,
    datetimeFormats,
    pluralRules
});