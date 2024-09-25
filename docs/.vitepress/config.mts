import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICU4X",
  description: "Solving i18n for client-side and resource-constrained environments",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/overview' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Overview', link: '/overview' },
        ]
      },
      {
        text: 'Version 1.5',
        items: [
          { text: 'Quickstart', link: '/1.5/quickstart' },
          { text: 'Tutorials',
            items: [
              { text: 'Introduction', link: '/1.5/tutorials/introduction' }
            ]
          }
        ]
      },
      {
        text: 'Previous Versions',
        collapsed: false,
        items: [
          {
            text: 'Version 1.2',
            collapsed: true,
            items: [
              { text: 'Quickstart', link: '/1.2/quickstart' },
              { text: 'Tutorials',
                items: [
                  { text: 'Introduction', link: '/1.2/tutorials/introduction' }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
