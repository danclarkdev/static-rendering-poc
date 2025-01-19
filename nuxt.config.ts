// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    runtimeConfig: {
        contentful: {
            cdaToken: '',
            cpaToken: '',
        },
    },
    generate: {
        routes: ['/posts'],
    },
    hooks: {},
});
