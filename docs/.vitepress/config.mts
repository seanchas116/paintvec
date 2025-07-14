import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "paintvec",
  description: "A simple JavaScript 2D vector math library",
  base: "/paintvec/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/globals" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [{ text: "Getting Started", link: "/guide/getting-started" }],
        },
        {
          text: "Core Concepts",
          items: [
            { text: "Vectors (Vec2)", link: "/guide/vectors" },
            { text: "Rectangles (Rect)", link: "/guide/rectangles" },
            { text: "Transforms", link: "/guide/transforms" },
            { text: "Edge Offsets", link: "/guide/edge-offsets" },
            { text: "Segments", link: "/guide/segments" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "Overview", link: "/api/globals" },
            { text: "Vec2", link: "/api/classes/Vec2" },
            { text: "Rect", link: "/api/classes/Rect" },
            { text: "Transform", link: "/api/classes/Transform" },
            { text: "EdgeOffsets", link: "/api/classes/EdgeOffsets" },
            { text: "Segment", link: "/api/classes/Segment" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/seanchas116/paintvec" },
    ],

    search: { provider: "local" },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ryohei Ikegami",
    },
  },
});
