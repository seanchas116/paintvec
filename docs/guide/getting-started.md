# Getting Started

## Overview

paintvec is a simple JavaScript 2D vector math library designed for graphics applications. It provides essential geometric primitives and operations with a focus on immutability and ease of use.

## Installation

Install paintvec using your preferred package manager:

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

## Basic Usage

### Importing

paintvec exports five main classes:

```typescript
import { Vec2, Rect, Transform, EdgeOffsets, Segment } from 'paintvec'
```

### Creating Vectors

The `Vec2` class represents a 2D point or vector:

```typescript
// Create a vector at (100, 200)
const pos = new Vec2(100, 200)

// Create from an array
const pos2 = Vec2.from([50, 100])

// Zero vector
const zero = Vec2.zero
```

### Vector Operations

All operations return new instances (immutable):

```typescript
const a = new Vec2(10, 20)
const b = new Vec2(30, 40)

// Basic arithmetic
const sum = a.add(b)        // Vec2(40, 60)
const diff = a.sub(b)       // Vec2(-20, -20)
const scaled = a.mul(2)     // Vec2(20, 40)
const divided = a.div(2)    // Vec2(5, 10)

// Geometric operations
const length = a.length     // 22.36...
const normalized = a.normalize()
const angle = a.angle       // angle in radians
```

### Working with Rectangles

The `Rect` class represents an axis-aligned rectangle:

```typescript
// Create a 100x200 rectangle at origin
const rect1 = new Rect(new Vec2(0), new Vec2(100, 200))

// Create from position and size
const rect2 = Rect.fromSize(new Vec2(50, 50), new Vec2(100, 200))

// Get properties
const center = rect1.center     // Vec2(50, 100)
const topLeft = rect1.topLeft   // Vec2(0, 0)
const size = rect1.size         // Vec2(100, 200)

// Operations
const intersection = Rect.intersection(rect1, rect2)
const union = Rect.union(rect1, rect2)
const contains = rect1.includes(new Vec2(50, 50)) // true
```

### Applying Transforms

The `Transform` class handles 2D affine transformations:

```typescript
// Create transforms
const translate = Transform.translate(new Vec2(100, 200))
const scale = Transform.scale(new Vec2(2, 2))
const rotate = Transform.rotate(Math.PI / 4) // 45 degrees

// Combine transforms (order matters!)
const combined = translate.merge(scale).merge(rotate)

// Apply to vectors and rectangles
const transformedPoint = pos.transform(combined)
const transformedRect = rect1.transform(combined)

// Get the inverse transform
const inverse = combined.invert()
```

## TypeScript Support

paintvec is written in TypeScript and provides full type definitions:

```typescript
import { Vec2, Rect, Transform } from 'paintvec'

// All types are automatically inferred
function calculateCenter(rect: Rect): Vec2 {
  return rect.center
}

// Generic math functions work with Vec2
function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
  return a.add(b.sub(a).mul(t))
}
```

## Next Steps

- Learn about [Vectors](/guide/vectors) in detail
- Explore [Rectangle operations](/guide/rectangles)
- Master [2D Transforms](/guide/transforms)
- Check the [API Reference](/api/) for complete documentation