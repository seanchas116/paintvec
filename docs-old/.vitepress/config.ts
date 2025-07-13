import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'paintvec',
  description: 'A simple JavaScript 2D vector math library',
  
  base: '/paintvec/',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/paintvec/logo.svg' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Playground', link: '/playground' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Vectors (Vec2)', link: '/guide/vectors' },
            { text: 'Rectangles (Rect)', link: '/guide/rectangles' },
            { text: 'Transforms', link: '/guide/transforms' },
            { text: 'Edge Offsets', link: '/guide/edge-offsets' },
            { text: 'Segments', link: '/guide/segments' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Usage', link: '/guide/examples/basic' },
            { text: 'Advanced Transforms', link: '/guide/examples/transforms' },
            { text: 'Interactive Demos', link: '/guide/examples/demos' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Vec2', link: '/api/vec2' },
            { text: 'Rect', link: '/api/rect' },
            { text: 'Transform', link: '/api/transform' },
            { text: 'EdgeOffsets', link: '/api/edge-offsets' },
            { text: 'Segment', link: '/api/segment' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/seanchas116/paintvec' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ryohei Ikegami'
    }
  }
})