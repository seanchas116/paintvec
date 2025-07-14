---
layout: home

hero:
  name: "paintvec"
  text: "Simple 2D Vector Math for JavaScript"
  tagline: A lightweight, immutable library for 2D geometry operations with TypeScript support
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/globals

features:
  - icon: 🚀
    title: Lightweight & Fast
    details: Zero dependencies with a minimal footprint. All operations are optimized for performance.
  - icon: 🔒
    title: Immutable Design
    details: All operations return new instances, making your code predictable and easy to debug.
  - icon: 📐
    title: Complete 2D Toolkit
    details: Vectors, rectangles, transforms, segments, and edge offsets - everything you need for 2D graphics.
  - icon: 🎯
    title: TypeScript First
    details: Written in TypeScript with complete type definitions for excellent IDE support.
---

## Quick Example

```typescript
import { Vec2, Rect, Transform } from 'paintvec'

// Create vectors
const pos = new Vec2(100, 200)
const pos2 = pos.add(new Vec2(50, 30)).mul(new Vec2(10, 20))

// Work with rectangles  
const rect = new Rect(new Vec2(0), new Vec2(100, 200))
const rect2 = new Rect(new Vec2(50, 50), new Vec2(100, 200))
const intersection = Rect.intersection(rect, rect2)

// Apply transforms
const transform = Transform.translate(new Vec2(100, 200))
  .merge(Transform.scale(new Vec2(2)))
  .merge(Transform.rotate(Math.PI / 4))

const transformed = pos.transform(transform)
```

## Installation

::: code-group

```sh [npm]
npm install paintvec
```

```sh [yarn]
yarn add paintvec
```

```sh [pnpm]
pnpm add paintvec
```

:::