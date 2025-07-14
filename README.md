# paintvec

[![npm version](https://badge.fury.io/js/paintvec.svg)](https://badge.fury.io/js/paintvec)
[![Test](https://github.com/seanchas116/paintvec/actions/workflows/test.yml/badge.svg)](https://github.com/seanchas116/paintvec/actions/workflows/test.yml)

A simple, dependency-free JavaScript/TypeScript library for 2D vector math with immutable operations.

## Installation

```bash
npm install paintvec
```

## Features

- **Zero dependencies** - Lightweight and self-contained
- **Immutable API** - All operations return new instances
- **TypeScript support** - Full type definitions included
- **Comprehensive geometry** - Vectors, rectangles, transforms, segments, and edge offsets
- **Chainable methods** - Fluent interface for readable code

## Core Classes

- **`Vec2`** - 2D vectors/points with arithmetic operations
- **`Rect`** - Rectangles with intersection, union, and containment checks
- **`Transform`** - 2D affine and perspective transforms
- **`Segment`** - Line segments with length and angle calculations
- **`EdgeOffsets`** - Edge insets/outsets for rectangle operations

## Documentation

📚 **[Full Documentation](https://seanchas116.github.io/paintvec/)**

- [Getting Started Guide](https://seanchas116.github.io/paintvec/guide/getting-started.html)
- [API Reference](https://seanchas116.github.io/paintvec/api/)

## Quick Examples

```js
import { Vec2, Rect, Transform, Segment, EdgeOffsets } from "paintvec";

// Vec2 - 2D vectors and points
const pos = new Vec2(100, 200);
const velocity = new Vec2(5, -3);
const newPos = pos.add(velocity).mul(2);  // Chainable operations
const distance = pos.distance(newPos);     // Euclidean distance
const normalized = velocity.normalize();   // Unit vector

// Rect - Rectangles with rich operations
const rect1 = new Rect(new Vec2(0, 0), new Vec2(100, 100));
const rect2 = new Rect(new Vec2(50, 50), new Vec2(100, 100));
const intersection = Rect.intersection(rect1, rect2);  // Overlapping area
const union = Rect.union(rect1, rect2);              // Bounding box
const inflated = rect1.inflate(10);                  // Expand by 10 units

// Transform - 2D transformations
const transform = Transform
  .translate(new Vec2(100, 50))
  .scale(new Vec2(2, 2))
  .rotate(Math.PI / 4);

const transformed = pos.transform(transform);  // Apply to vectors
const transformedRect = rect1.transform(transform);  // Apply to rects

// Segment - Line segments
const segment = new Segment(new Vec2(0, 0), new Vec2(100, 100));
const midpoint = segment.center;
const length = segment.length;  // √(100² + 100²) ≈ 141.42

// EdgeOffsets - Insets and outsets
const insets = new EdgeOffsets(10, 20, 10, 20);  // top, right, bottom, left
const insetRect = rect1.inset(insets);
```

## License

MIT
