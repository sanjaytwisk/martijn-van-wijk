// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Libre Baskerville': [400, 700],
        },
      },
    ],
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      title: 'Bouw- en Timmerbedrijf van Wijk',
      meta: [
        {
          name: 'description',
          content: `Mijn naam is Martijn en sinds 2021 heb ik een onderhoud en
        timmerbedrijf. Van kleine kluswerkzaamheden, timmerwerkzaamheden tot
        grote onderhoud- en renovatiewerkzaamheden. Ik kan u met (bijna) alles
        helpen. Al vier jaar heb ik vele klanten met tevredenheid geholpen. Ik
        ben gestart met timmerklussen, maar inmiddels heb ik mijn repertoire de
        afgelopen jaren enorm uitgebreid.`,
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '32x32',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/x-icon',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
  },
});
