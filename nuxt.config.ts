// https://nuxt.com/docs/api/configuration/nuxt-config
import { boolean } from 'boolean';
import type { Config } from './types/global';

let cdnURL = String(process.env.NUXT_UI_FULL_URL || '') || '';
if (!cdnURL.endsWith('/')) {
  cdnURL += '/';
}

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_PUBLIC_PATH || '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale-1, user-scalable=0',
      title:
        'Aider | We connects you with your community to borrow anything and make money lending what you have.',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            'We connects you with your community to borrow anything and make money lending what you have.',
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        {
          hid: 'og-title',
          property: 'og:title',
          content:
            'We connects you with your community to borrow anything and make money lending what you have.',
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    "@": "~/",
  },

  modules: [
    'nuxt-typed-router',
    // 'nuxt-typed-link',
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore']],
      },
    ],
    '@vueuse/nuxt',
    'nuxt-simple-sitemap',
  ],

  routeRules: {    
    // Render these routes on the client (SPA)
    '/**': { ssr: false },    

  },

  nitro: {
    prerender: { 
      crawlLinks: true,
      failOnError: false, 
    }
  },

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      node_env:
        String(process.env.NODE_ENV).toLowerCase() || 'development',
      inStaging: boolean(process.env.NUXT_IN_STAGING) || false,
      uiDomain: process.env.NUXT_UI_DOMAIN,
      uiTopleveldomain: process.env.NUXT_UI_TOPLEVELDOMAIN,
      uiUrl: process.env.NUXT_UI_URL,
      uiFullUrl: process.env.NUXT_UI_FULL_URL,
      publicPath: process.env.NUXT_PUBLIC_PATH,
      apiUrl: process.env.NUXT_API_URL,
      websocketUrl: process.env.NUXT_WEBSOCKET_URL,
      googleWebviewerUrl:
        process.env.NUXT_GOOGLE_WEBVIEWER_URL ||
        'https://docs.google.com/gview?embedded=true&url=',
      googleRecaptchaSiteKey:
        String(process.env.NUXT_GOOGLE_RECAPTCHA_SITE_KEY) ||
        '#########',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '/',
      siteName:
        'Aider | We connects you with your community to borrow anything and make money lending what you have.',
      siteDescription:
        'We connects you with your community to borrow anything and make money lending what you have.',
      siteImage:
        (process.env.NUXT_PUBLIC_PATH || '/') + `favicon.png`,
      language: 'en-GB',
    } as Config,
  },

  compatibilityDate: '2024-11-14'
})