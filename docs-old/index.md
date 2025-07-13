---
layout: home

hero:
  name: paintvec
  text: Simple 2D Vector Math for JavaScript
  tagline: A lightweight, immutable library for 2D geometry operations with TypeScript support
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: Try Playground
      link: /playground

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
const a = new Vec2(10, 20)
const b = new Vec2(30, 40)
const c = a.add(b) // Vec2(40, 60)

// Work with rectangles
const rect = new Rect(0, 0, 100, 100)
const center = rect.center // Vec2(50, 50)

// Apply transforms
const transform = Transform.rotate(Math.PI / 4)
const rotated = transform.transformPoint(new Vec2(10, 0))
```

## Installation

```bash
npm install paintvec
```

## Why paintvec?

- **Simple API**: Intuitive methods that work like you expect
- **Battle-tested**: Used in production graphics applications
- **Well-documented**: Comprehensive docs with interactive examples
- **Modern JavaScript**: ES modules with tree-shaking support