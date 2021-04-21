import {createI18n} from "vue-i18n";

const messages = {
    lv: {
        routes: {
            items: "Preces",
            about: "Par mums",
        },
        cart: {
            cart: "Grozs",
            subtotal: "Kopā",
            clearButton: "Izņemt preci"
        },
        popularItem: "Vispopulārākā prece šajā veikalā ir {itm}, vismaz uz kādu laiku."
    },
    ru: {
        routes: {
            items: "Продукты",
            about: "О нас"
        },
        cart: {
            cart: "Корзина",
            subtotal: "Итого",
            clearButton: "Удалить товар"
        },
        popularItem: "Самый популярный товар в нашем магазине - {itm}, но это не на долго."
    },
}

export default createI18n({
    locale: "lv",
    legacy: false,
    fallbackLocale: "lv",
    globalInjection: true,
    messages
});