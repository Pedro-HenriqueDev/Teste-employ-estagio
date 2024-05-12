import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    nitro: {
        preset: "cloudflare-pages",
    },
    devtools: { enabled: true },
    build: {
        transpile: ["vuetify"],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        //...
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
});
