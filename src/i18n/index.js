import {createI18n} from "vue-i18n";

const messages = {
    lv: {
        routes: {
            items: "Produkti",
            about: "Par mums"
        }
    },
    ru: {
        routes: {
            items: "Продукты",
            about: "О нас"
        }
    },
}

export default createI18n({
    locale: "lv",
    legacy: false,
    messages
});