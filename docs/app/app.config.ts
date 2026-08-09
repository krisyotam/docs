export default defineAppConfig({
  search: {
    fts: true,
  },
  header: {
    title: 'Docs',
    logo: {
      light: '/logo/logo-dark.svg',
      dark: '/logo/logo-light.svg',
      alt: 'Docs',
      wordmark: {
        light: '/logo/wordmark-dark.svg',
        dark: '/logo/wordmark-light.svg',
      },
      favicon: '/favicon.svg',
    },
  },
  socials: {
    x: 'https://x.com/krisyotam',
  },
  github: {
    url: 'https://github.com/krisyotam/docs',
    rootDir: 'docs',
  },
  // AI chat assistant fully off (no floating input, no Explain with AI)
  assistant: {
    floatingInput: false,
    explainWithAi: false,
  },
  toc: {
    bottom: {
      links: [
        {
          icon: 'i-lucide-globe',
          label: 'krisyotam.com',
          to: 'https://krisyotam.com',
          target: '_blank',
        },
        {
          icon: 'i-lucide-github',
          label: 'GitHub',
          to: 'https://github.com/krisyotam/docs',
          target: '_blank',
        },
      ],
    },
  },
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'zinc',
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})
