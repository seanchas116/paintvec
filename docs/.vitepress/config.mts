import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "paintvec",
  description: "A simple JavaScript 2D vector math library",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/" },
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
            { text: "Overview", link: "/api/" },
            { text: "Vec2", link: "/api/vec2" },
            { text: "Rect", link: "/api/rect" },
            { text: "Transform", link: "/api/transform" },
            { text: "EdgeOffsets", link: "/api/edge-offsets" },
            { text: "Segment", link: "/api/segment" },
          ],
        },
        {
          text: "Generated API Docs",
          items: [
            { text: "Overview", link: "/api/generated/" },
            { text: "Vec2 (Full)", link: "/api/generated/classes/Vec2" },
            { text: "Rect (Full)", link: "/api/generated/classes/Rect" },
            {
              text: "Transform (Full)",
              link: "/api/generated/classes/Transform",
            },
            {
              text: "EdgeOffsets (Full)",
              link: "/api/generated/classes/EdgeOffsets",
            },
            { text: "Segment (Full)", link: "/api/generated/classes/Segment" },
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
