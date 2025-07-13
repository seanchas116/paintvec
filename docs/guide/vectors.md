# Vectors (Vec2)

The `Vec2` class is the foundation of paintvec, representing a 2D vector, point, or size. It provides a comprehensive set of operations for 2D vector mathematics.

## Creating Vectors

There are several ways to create a `Vec2` instance:

```typescript
// Using constructor
const v1 = new Vec2(10, 20)
const v2 = new Vec2(5)      // y defaults to x value: Vec2(5, 5)
const v3 = new Vec2()       // defaults to Vec2(0, 0)

// From array or object
const v4 = Vec2.from([10, 20])
const v5 = Vec2.from({ x: 10, y: 20 })

// Predefined constants
const zero = Vec2.zero      // Vec2(0, 0)
```

## Basic Operations

All operations are immutable and return new `Vec2` instances:

### Arithmetic

```typescript
const a = new Vec2(10, 20)
const b = new Vec2(3, 4)

// Addition and subtraction
const sum = a.add(b)        // Vec2(13, 24)
const diff = a.sub(b)       // Vec2(7, 16)

// Multiplication and division
const scaled = a.mul(2)     // Vec2(20, 40)
const product = a.mul(b)    // Vec2(30, 80)
const divided = a.div(2)    // Vec2(5, 10)
const quotient = a.div(b)   // Vec2(3.33..., 5)

// Negation
const neg = a.neg           // Vec2(-10, -20)
```

### Math Functions

```typescript
const v = new Vec2(-5.7, 8.3)

// Rounding
const floor = v.floor       // Vec2(-6, 8)
const ceil = v.ceil         // Vec2(-5, 9)
const round = v.round       // Vec2(-6, 8)

// Absolute value
const abs = v.abs           // Vec2(5.7, 8.3)

// Min/max operations
const clamped = v.clamp(Vec2.zero, new Vec2(10, 10))  // Vec2(0, 8.3)
const minVec = v.min(new Vec2(0, 0))                  // Vec2(-5.7, 0)
const maxVec = v.max(new Vec2(0, 0))                  // Vec2(0, 8.3)
```

## Geometric Operations

### Length and Normalization

```typescript
const v = new Vec2(3, 4)

// Length (magnitude)
const len = v.length        // 5

// Normalization (unit vector)
const unit = v.normalize()  // Vec2(0.6, 0.8)

// Check if normalized
const isUnit = unit.length  // 1
```

### Angles

```typescript
const v = new Vec2(1, 1)

// Angle from positive x-axis (in radians, range: -π to π)
const angle = v.angle       // π/4 (45 degrees)

// Rotation
const rotated = v.rotate(Math.PI / 2)  // Vec2(-1, 1)
```

### Dot and Cross Products

```typescript
const a = new Vec2(3, 4)
const b = new Vec2(2, 1)

// Dot product (scalar)
const dot = a.dot(b)        // 10

// Cross product (2D returns scalar)
const cross = a.cross(b)    // -5
```

## Interpolation

Linear interpolation between vectors:

```typescript
const start = new Vec2(0, 0)
const end = new Vec2(100, 50)

// Interpolate 30% of the way
const mid = start.mix(end, 0.3)  // Vec2(30, 15)

// Common easing pattern
function ease(t: number): number {
  return t * t * (3 - 2 * t)  // smoothstep
}
const smooth = start.mix(end, ease(0.3))
```

## Transformations

Apply 2D transformations to vectors:

```typescript
const v = new Vec2(10, 0)

// Using Transform class
const transform = Transform.rotate(Math.PI / 4)
const transformed = v.transform(transform)  // Vec2(7.07..., 7.07...)

// Direct rotation
const rotated = v.rotate(Math.PI / 4)      // Same result
```

## Utility Methods

### Comparison

```typescript
const a = new Vec2(10, 20)
const b = new Vec2(10, 20)
const c = new Vec2(10.0001, 20)

// Exact equality
a.equals(b)  // true
a.equals(c)  // false

// Approximate equality (custom implementation)
function almostEquals(a: Vec2, b: Vec2, epsilon = 0.001): boolean {
  return a.sub(b).length < epsilon
}
almostEquals(a, c)  // true
```

### Conversion

```typescript
const v = new Vec2(10, 20)

// To array
const arr = v.toArray()     // [10, 20]

// To string
const str = v.toString()    // "Vec2(10, 20)"

// Destructuring
const [x, y] = v.toArray()
```

## Common Patterns

### Direction Vectors

```typescript
// Common directions
const right = new Vec2(1, 0)
const up = new Vec2(0, -1)    // Note: y-axis often points down in graphics
const down = new Vec2(0, 1)
const left = new Vec2(-1, 0)

// Diagonal directions
const topRight = new Vec2(1, -1).normalize()
```

### Distance Calculations

```typescript
function distance(a: Vec2, b: Vec2): number {
  return a.sub(b).length
}

function manhattanDistance(a: Vec2, b: Vec2): number {
  const diff = a.sub(b).abs
  return diff.x + diff.y
}
```

### Vector Projection

```typescript
// Project vector a onto vector b
function project(a: Vec2, b: Vec2): Vec2 {
  const bNorm = b.normalize()
  return bNorm.mul(a.dot(bNorm))
}
```

## Performance Tips

1. **Reuse common vectors**: Use `Vec2.zero` instead of creating `new Vec2(0, 0)`
2. **Chain operations**: `v.add(a).mul(2).normalize()` is efficient
3. **Avoid unnecessary normalizations**: Check if you really need unit vectors
4. **Use appropriate operations**: `v.mul(2)` is clearer than `v.add(v)`

## Next Steps

- Learn about [Rectangles](/guide/rectangles) which use Vec2 for position and size
- Explore [Transforms](/guide/transforms) for more complex vector transformations
- See the [Vec2 API Reference](/api/vec2) for complete method documentation