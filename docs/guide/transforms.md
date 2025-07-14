# Transforms

The `Transform` class represents 2D affine and perspective transformations using 3x3 matrices. It provides a powerful way to translate, rotate, scale, and skew vectors and rectangles.

## Understanding Transforms

A transform in paintvec is represented by a 3x3 matrix that can encode:
- Translation (moving)
- Rotation
- Scaling
- Skewing
- Perspective (quad-to-quad mapping)

## Creating Transforms

### Basic Transforms

```typescript
// Identity transform (no change)
const identity = Transform.identity

// Translation
const translate = Transform.translate(new Vec2(100, 50))

// Rotation (angle in radians)
const rotate = Transform.rotate(Math.PI / 4)  // 45 degrees

// Scaling
const scale = Transform.scale(new Vec2(2, 2))      // Uniform scale
const scaleXY = Transform.scale(new Vec2(2, 0.5))  // Non-uniform scale

// From matrix values
const matrix = new Transform(1, 0, 0, 1, 100, 50)  // Translation matrix
```

### Combining Transforms

Transforms are combined using the `merge` method. **Order matters!**

```typescript
// Translate, then rotate, then scale
const combined = Transform.translate(new Vec2(100, 50))
  .merge(Transform.rotate(Math.PI / 4))
  .merge(Transform.scale(new Vec2(2, 2)))

// Different order = different result
const differentOrder = Transform.scale(new Vec2(2, 2))
  .merge(Transform.rotate(Math.PI / 4))
  .merge(Transform.translate(new Vec2(100, 50)))
```

## Applying Transforms

### To Vectors

```typescript
const point = new Vec2(10, 0)
const transform = Transform.rotate(Math.PI / 2)  // 90 degrees

const rotated = point.transform(transform)
// Result: Vec2(0, 10)

// Transform multiple points
const points = [new Vec2(0, 0), new Vec2(10, 0), new Vec2(10, 10)]
const transformed = points.map(p => p.transform(transform))
```

### To Rectangles

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(100, 50))
const transform = Transform.rotate(Math.PI / 4)

// Get axis-aligned bounding box of transformed rectangle
const boundingBox = rect.transform(transform)

// Note: This returns the bounding box, not the rotated rectangle itself
// For the actual rotated corners, transform each corner individually
```

## Advanced Transforms

### Rotation Around a Point

```typescript
function rotateAround(point: Vec2, center: Vec2, angle: number): Vec2 {
  const transform = Transform.translate(center.neg)
    .merge(Transform.rotate(angle))
    .merge(Transform.translate(center))
  
  return point.transform(transform)
}

// Rotate point (100, 0) by 90° around (50, 50)
const rotated = rotateAround(new Vec2(100, 0), new Vec2(50, 50), Math.PI / 2)
```

### Scale from a Point

```typescript
function scaleFrom(point: Vec2, center: Vec2, scale: Vec2): Vec2 {
  const transform = Transform.translate(center.neg)
    .merge(Transform.scale(scale))
    .merge(Transform.translate(center))
  
  return point.transform(transform)
}
```

### Skewing

```typescript
// Create a skew transform manually
function skewX(angle: number): Transform {
  return new Transform(1, 0, Math.tan(angle), 1, 0, 0)
}

function skewY(angle: number): Transform {
  return new Transform(1, Math.tan(angle), 0, 1, 0, 0)
}

const skewed = point.transform(skewX(Math.PI / 6))
```

## Perspective Transforms

Create perspective transforms using quad-to-quad mapping:

```typescript
// Define source quad (rectangle)
const src = [
  new Vec2(0, 0),
  new Vec2(100, 0),
  new Vec2(100, 100),
  new Vec2(0, 100)
]

// Define destination quad (perspective distortion)
const dst = [
  new Vec2(10, 10),
  new Vec2(90, 20),
  new Vec2(100, 100),
  new Vec2(0, 90)
]

// Create perspective transform
const perspective = Transform.quadToQuad(src, dst)

// Apply to points
const transformed = point.transform(perspective)
```

## Matrix Operations

### Accessing Matrix Values

```typescript
const transform = Transform.translate(new Vec2(100, 50))

// Access individual matrix elements
const { a, b, c, d, e, f } = transform
// For translation: a=1, b=0, c=0, d=1, e=100, f=50

// Get as array
const matrix = transform.toArray()
// Returns: [a, b, c, d, e, f, 0, 0, 1]
```

### Inverse Transforms

```typescript
const transform = Transform.translate(new Vec2(100, 50))
  .merge(Transform.scale(new Vec2(2, 2)))

// Get inverse transform
const inverse = transform.invert()

// Applying transform then inverse returns to original
const point = new Vec2(10, 20)
const there = point.transform(transform)
const backAgain = there.transform(inverse)
// backAgain equals point (within floating point precision)
```

### Transform Properties

```typescript
const transform = Transform.scale(new Vec2(2, 3))
  .merge(Transform.rotate(Math.PI / 4))

// Check if transform is identity
transform.isIdentity  // false
Transform.identity.isIdentity  // true

// Check if transform is translate-only
Transform.translate(new Vec2(10, 20)).isTranslation  // true

// Get mean scale factor
const meanScale = transform.meanScale  // Average of x and y scale
```

## CSS Integration

Convert transforms to CSS matrix strings:

```typescript
const transform = Transform.translate(new Vec2(100, 50))
  .merge(Transform.rotate(Math.PI / 4))
  .merge(Transform.scale(new Vec2(1.5, 1.5)))

// For CSS transform property
const cssMatrix = transform.toCSSMatrixString()
// Returns: "matrix(1.06, 1.06, -1.06, 1.06, 100, 50)"

// Usage in styles
element.style.transform = cssMatrix
```

## Common Patterns

### Animation Interpolation

```typescript
function interpolateTransform(a: Transform, b: Transform, t: number): Transform {
  // Simple linear interpolation of matrix values
  // Note: This doesn't properly interpolate rotation
  return new Transform(
    a.a + (b.a - a.a) * t,
    a.b + (b.b - a.b) * t,
    a.c + (b.c - a.c) * t,
    a.d + (b.d - a.d) * t,
    a.e + (b.e - a.e) * t,
    a.f + (b.f - a.f) * t
  )
}
```

### Transform Chains

```typescript
class TransformChain {
  private transforms: Transform[] = []
  
  add(transform: Transform): this {
    this.transforms.push(transform)
    return this
  }
  
  apply(point: Vec2): Vec2 {
    return this.transforms.reduce(
      (p, t) => p.transform(t),
      point
    )
  }
  
  get combined(): Transform {
    return this.transforms.reduce(
      (acc, t) => acc.merge(t),
      Transform.identity
    )
  }
}

// Usage
const chain = new TransformChain()
  .add(Transform.translate(new Vec2(100, 0)))
  .add(Transform.rotate(Math.PI / 4))
  .add(Transform.scale(new Vec2(2, 2)))

const result = chain.apply(point)
```

### Local to World Coordinates

```typescript
class TransformNode {
  localTransform = Transform.identity
  parent?: TransformNode
  
  get worldTransform(): Transform {
    if (!this.parent) return this.localTransform
    return this.parent.worldTransform.merge(this.localTransform)
  }
  
  localToWorld(point: Vec2): Vec2 {
    return point.transform(this.worldTransform)
  }
  
  worldToLocal(point: Vec2): Vec2 {
    return point.transform(this.worldTransform.invert())
  }
}
```

## Performance Tips

1. **Combine transforms once**: Merge transforms before applying to many points
2. **Cache inverse transforms**: Computing inverse is expensive
3. **Use specialized methods**: `Transform.translate()` is clearer than matrix construction
4. **Avoid repeated merging**: Store combined transforms when possible

## Next Steps

- Explore [Edge Offsets](/guide/edge-offsets) for rectangle insets with transforms
- Learn about [Segments](/guide/segments) and how they transform
- See the [Transform API Reference](/api/transform) for complete method documentation