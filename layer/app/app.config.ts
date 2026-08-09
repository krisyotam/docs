export default defineAppConfig({
  docus: {
    locale: 'en',
    colorMode: '',
  },
  search: {
    fts: false,
  },
  ui: {
    colors: {
      // Monochrome SpaceX-style accent (no green/emerald)
      primary: 'neutral',
      neutral: 'zinc',
    },
    commandPalette: {
      slots: {
        item: 'items-center',
        input: '[&_.iconify]:size-4 [&_.iconify]:mx-0.5',
      },
      variants: {
        size: {
          md: {
            itemLeadingIcon: 'size-4 mx-0.5',
          },
        },
      },
    },
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mx-0.5',
        linkTrailing: 'hidden',
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5',
      },
    },
  },
})
