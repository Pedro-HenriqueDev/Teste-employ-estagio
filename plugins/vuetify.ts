import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

const dark = {
    dark: true,
    colors: {
        primary: "#1EA358",
        surface: "#EEF7FF",
        dark: "#F5F5F5",
        background: "#212121",
    },
};
const light = {
    dark: false,
    colors: {
        primary: "#1EA358",
        surface: "#EEF7FF",
        dark: "#212121",
        background: "#F5F5F5",
    },
};

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: { dark, light },
        },
    });
    app.vueApp.use(vuetify);
});
