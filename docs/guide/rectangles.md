# Rectangles (Rect)

The `Rect` class represents an axis-aligned rectangle and provides operations for bounding boxes, intersections, unions, and more.

## Creating Rectangles

Rectangles are defined by their position and size vectors:

```typescript
// Using constructor (position, size)
const rect1 = new Rect(new Vec2(10, 20), new Vec2(100, 50))

// Using static factory methods
const rect2 = Rect.fromSize(new Vec2(10, 20), new Vec2(100, 50))  // Same as above
const rect3 = Rect.fromTLBR(10, 20, 110, 70)  // Top-Left-Bottom-Right
const rect4 = Rect.fromLTRB(10, 20, 110, 70)  // Left-Top-Right-Bottom

// From bounding points
const points = [new Vec2(10, 20), new Vec2(50, 40), new Vec2(30, 60)]
const bounds = Rect.from(...points)  // Bounding box of points

// Empty rectangle
const empty = Rect.empty  // Rect at (0,0) with size (0,0)
```

## Properties

Access rectangle properties:

```typescript
const rect = new Rect(new Vec2(10, 20), new Vec2(100, 50))

// Position and size
rect.pos        // Vec2(10, 20)
rect.size       // Vec2(100, 50)
rect.width      // 100
rect.height     // 50

// Corners
rect.topLeft    // Vec2(10, 20)
rect.topRight   // Vec2(110, 20)
rect.bottomLeft // Vec2(10, 70)
rect.bottomRight// Vec2(110, 70)

// Center
rect.center     // Vec2(60, 45)

// Edges
rect.left       // 10
rect.top        // 20
rect.right      // 110
rect.bottom     // 70
```

## Operations

### Translation and Scaling

```typescript
const rect = new Rect(new Vec2(10, 20), new Vec2(100, 50))

// Translate
const moved = rect.translate(new Vec2(5, 10))
// Result: Rect at (15, 30) with size (100, 50)

// Scale from origin
const scaled = rect.scale(new Vec2(2, 2))
// Result: Rect at (20, 40) with size (200, 100)

// Scale from center
const scaledFromCenter = rect.transform(
  Transform.translate(rect.center.neg)
    .merge(Transform.scale(new Vec2(2, 2)))
    .merge(Transform.translate(rect.center))
)
```

### Intersection

Find the overlapping area of two rectangles:

```typescript
const rect1 = new Rect(new Vec2(0, 0), new Vec2(100, 100))
const rect2 = new Rect(new Vec2(50, 50), new Vec2(100, 100))

const intersection = Rect.intersection(rect1, rect2)
// Result: Rect at (50, 50) with size (50, 50)

// Check if rectangles intersect
const intersects = Rect.intersects(rect1, rect2)  // true

// Handle non-intersecting rectangles
const rect3 = new Rect(new Vec2(200, 200), new Vec2(50, 50))
const noIntersection = Rect.intersection(rect1, rect3)
// Result: undefined (no intersection)
```

### Union

Find the bounding box of multiple rectangles:

```typescript
const rect1 = new Rect(new Vec2(0, 0), new Vec2(50, 50))
const rect2 = new Rect(new Vec2(30, 30), new Vec2(50, 50))

const union = Rect.union(rect1, rect2)
// Result: Rect at (0, 0) with size (80, 80)

// Union of multiple rectangles
const rects = [rect1, rect2, rect3]
const totalBounds = rects.reduce((a, b) => Rect.union(a, b))
```

### Containment

Check if a rectangle contains a point or another rectangle:

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(100, 100))

// Check if point is inside
rect.includes(new Vec2(50, 50))   // true
rect.includes(new Vec2(150, 50))  // false

// Check if rectangle contains another rectangle
const small = new Rect(new Vec2(10, 10), new Vec2(20, 20))
const large = new Rect(new Vec2(0, 0), new Vec2(100, 100))

function contains(outer: Rect, inner: Rect): boolean {
  return outer.includes(inner.topLeft) && outer.includes(inner.bottomRight)
}
contains(large, small)  // true
```

## Edge Offsets and Insets

Work with margins and padding:

```typescript
const rect = new Rect(new Vec2(10, 10), new Vec2(100, 100))

// Inset by equal amount on all sides
const inset1 = rect.inset(new EdgeOffsets(10))
// Result: Rect at (20, 20) with size (80, 80)

// Inset with different values
const inset2 = rect.inset(new EdgeOffsets(5, 10, 15, 20))
// top: 5, right: 10, bottom: 15, left: 20

// Outset (negative inset)
const outset = rect.inset(new EdgeOffsets(-10))
// Result: Rect at (0, 0) with size (120, 120)
```

## Transformations

Apply 2D transforms to rectangles:

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(100, 50))

// Create a transform
const transform = Transform.translate(new Vec2(50, 50))
  .merge(Transform.rotate(Math.PI / 4))
  .merge(Transform.scale(new Vec2(2, 2)))

// Transform the rectangle (returns axis-aligned bounding box)
const transformed = rect.transform(transform)

// For exact transformed corners, transform each point
const corners = [
  rect.topLeft.transform(transform),
  rect.topRight.transform(transform),
  rect.bottomLeft.transform(transform),
  rect.bottomRight.transform(transform)
]
```

## Conversion Methods

Convert rectangles to different formats:

```typescript
const rect = new Rect(new Vec2(10, 20), new Vec2(100, 50))

// To DOM DOMRect
const domRect = rect.toDOMRect()
// Returns: { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }

// To SVG attributes
const svgProps = rect.toSVGRectProps()
// Returns: { x: 10, y: 20, width: 100, height: 50 }

// Usage in React/JSX
<rect {...rect.toSVGRectProps()} fill="blue" />
```

## Common Patterns

### Aspect Ratio Preservation

```typescript
function fitRect(rect: Rect, container: Rect): Rect {
  const scale = Math.min(
    container.width / rect.width,
    container.height / rect.height
  )
  const newSize = rect.size.mul(scale)
  const offset = container.size.sub(newSize).div(2)
  return new Rect(container.pos.add(offset), newSize)
}
```

### Grid Layout

```typescript
function createGrid(
  columns: number,
  rows: number,
  cellSize: Vec2,
  spacing: Vec2 = Vec2.zero
): Rect[] {
  const rects: Rect[] = []
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const pos = new Vec2(
        col * (cellSize.x + spacing.x),
        row * (cellSize.y + spacing.y)
      )
      rects.push(new Rect(pos, cellSize))
    }
  }
  
  return rects
}
```

### Hit Testing

```typescript
function hitTest(rects: Rect[], point: Vec2): Rect | undefined {
  // Find topmost rectangle containing the point
  for (let i = rects.length - 1; i >= 0; i--) {
    if (rects[i].includes(point)) {
      return rects[i]
    }
  }
  return undefined
}
```

### Rectangle Clipping

```typescript
function clipRect(rect: Rect, bounds: Rect): Rect | undefined {
  return Rect.intersection(rect, bounds)
}

// Ensure rectangle stays within bounds
function constrainRect(rect: Rect, bounds: Rect): Rect {
  const clipped = Rect.intersection(rect, bounds)
  if (clipped) return clipped
  
  // If no intersection, move rect inside bounds
  const pos = new Vec2(
    Math.max(bounds.left, Math.min(rect.left, bounds.right - rect.width)),
    Math.max(bounds.top, Math.min(rect.top, bounds.bottom - rect.height))
  )
  return new Rect(pos, rect.size)
}
```

## Performance Tips

1. **Cache calculations**: Properties like `center` are calculated on demand
2. **Use appropriate methods**: `Rect.intersects()` is faster than checking if `Rect.intersection()` returns undefined
3. **Batch operations**: When working with many rectangles, consider spatial indexing
4. **Reuse empty rectangle**: Use `Rect.empty` instead of creating new empty rectangles

## Next Steps

- Learn about [Transforms](/guide/transforms) for rotating and scaling rectangles
- Explore [Edge Offsets](/guide/edge-offsets) for working with margins and padding
- See the [Rect API Reference](/api/rect) for complete method documentation