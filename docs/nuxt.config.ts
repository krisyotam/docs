export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  site: {
    name: 'Docs',
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  compatibilityDate: '2025-07-18',
  vite: {
    build: {
      sourcemap: false,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  llms: {
    domain: 'https://krisyotam.com',
    title: 'Docs',
    description: 'Documentation template for Kris Yotam projects.',
    full: {
      title: 'Docs',
      description: 'Documentation template for Kris Yotam projects.',
    },
  },
  mcp: {
    name: 'Docs documentation',
    browserRedirect: '/en/ai/mcp',
  },
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'krisyotam',
      repo: 'docs',
      rootDir: 'docs',
    },
  },
})
