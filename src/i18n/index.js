import {createI18n} from "vue-i18n";

const numberFormats = {
    lv: {
        currencyFormat: {
            style: "currency",
            currency: "EUR",
            currencyDisplay: "symbol"
        },
    },
    ru: {
        currencyFormat: {
            style: "currency",
            currency: "RUB",
            currencyDisplay: "symbol"
        }

    }
}

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
        aboutUs: {
            firstParagraph: "Uzzināt @.lower:routes.about vairāk",
            secondParagraph: "Mazā kompānija ar lieliem planiem",
            popularItem: "Vispopulārākā prece šajā veikalā ir {itm}, vismaz uz kādu laiku."
        },
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
        aboutUs: {
            firstParagraph: "Узнать @.lower:routes.about больше",
            secondParagraph: "Маленькая компания с большими планами",
            popularItem: "Самый популярный товар в нашем магазине - {itm}, но это не на долго."
        },
    },
}

export default createI18n({
    locale: "lv",
    legacy: false,
    fallbackLocale: "lv",
    globalInjection: true,
    messages,
    numberFormats
});