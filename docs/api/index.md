# API Reference

## Overview

paintvec provides five main classes for 2D geometry operations.

::: tip Generated Documentation
This section provides a curated API reference with examples and usage patterns. For complete auto-generated documentation with all methods and properties, see the [Generated API Docs](#generated-api-docs) section in the sidebar.
:::

## Classes

### [Vec2](/api/vec2)
2D vector/point class with arithmetic operations, geometric calculations, and transformations.

```typescript
const v = new Vec2(10, 20)
const normalized = v.normalize()
```

### [Rect](/api/rect)
Rectangle class with position/size management, intersection/union operations, and various construction methods.

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(100, 100))
const center = rect.center
```

### [Transform](/api/transform)
2D affine and perspective transform using 3x3 matrices, supporting scale/rotate/translate operations.

```typescript
const transform = Transform.rotate(Math.PI / 4)
const point = new Vec2(10, 0).transform(transform)
```

### [EdgeOffsets](/api/edge-offsets)
Edge offset representation for rectangle insets/outsets.

```typescript
const offsets = new EdgeOffsets(10, 20, 30, 40)
const inset = rect.inset(offsets)
```

### [Segment](/api/segment)
Line segment with length and angle calculations.

```typescript
const segment = new Segment(new Vec2(0, 0), new Vec2(10, 10))
const length = segment.length
```

## Import

All classes can be imported from the main module:

```typescript
import { Vec2, Rect, Transform, EdgeOffsets, Segment } from 'paintvec'
```

## Design Principles

- **Immutable**: All operations return new instances
- **Functional**: Methods don't modify state
- **Type-safe**: Full TypeScript support
- **Minimal**: No external dependencies
- **Versatile**: Supports both affine and perspective transforms