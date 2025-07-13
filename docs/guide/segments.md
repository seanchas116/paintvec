# Segments

The `Segment` class represents a line segment defined by two points. It provides methods for calculating length, angles, and performing transformations.

## Creating Segments

A segment is defined by its start and end points:

```typescript
// Using constructor
const segment = new Segment(new Vec2(0, 0), new Vec2(100, 100))

// From existing points
const start = new Vec2(10, 20)
const end = new Vec2(50, 80)
const line = new Segment(start, end)

// Degenerate segment (point)
const point = new Segment(start, start)
```

## Properties

Access segment properties:

```typescript
const segment = new Segment(new Vec2(10, 20), new Vec2(50, 80))

// Endpoints
segment.p1  // Vec2(10, 20) - start point
segment.p2  // Vec2(50, 80) - end point

// Computed properties
segment.length  // 72.11... - distance between points
segment.angle   // 0.9827... radians (56.3°) - angle from horizontal
```

## Geometric Operations

### Vector Representation

Convert segment to a direction vector:

```typescript
const segment = new Segment(new Vec2(10, 20), new Vec2(50, 80))

// Get vector from p1 to p2
const vector = segment.p2.sub(segment.p1)  // Vec2(40, 60)

// Get unit direction
const direction = vector.normalize()

// Get perpendicular vector (rotated 90° counter-clockwise)
const perpendicular = new Vec2(-vector.y, vector.x).normalize()
```

### Midpoint and Interpolation

```typescript
const segment = new Segment(new Vec2(0, 0), new Vec2(100, 50))

// Midpoint
const mid = segment.p1.mix(segment.p2, 0.5)  // Vec2(50, 25)

// Any point along the segment (t = 0 to 1)
const quarter = segment.p1.mix(segment.p2, 0.25)  // Vec2(25, 12.5)

// Extrapolation (t < 0 or t > 1)
const extended = segment.p1.mix(segment.p2, 1.5)  // Vec2(150, 75)
```

## Transformations

Apply transforms to segments:

```typescript
const segment = new Segment(new Vec2(0, 0), new Vec2(100, 0))

// Create transform
const transform = Transform.rotate(Math.PI / 4)  // 45° rotation
  .merge(Transform.translate(new Vec2(50, 50)))

// Transform the segment
const transformed = segment.transform(transform)
// Result: Segment from Vec2(50, 50) to Vec2(120.7..., 120.7...)

// The length is preserved for rigid transforms
console.log(segment.length === transformed.length)  // true (for rotation + translation)
```

## Common Patterns

### Distance from Point to Segment

```typescript
function distanceToSegment(point: Vec2, segment: Segment): number {
  const v = segment.p2.sub(segment.p1)
  const w = point.sub(segment.p1)
  
  const c1 = w.dot(v)
  if (c1 <= 0) {
    // Point is before p1
    return point.sub(segment.p1).length
  }
  
  const c2 = v.dot(v)
  if (c1 >= c2) {
    // Point is after p2
    return point.sub(segment.p2).length
  }
  
  // Point projects onto the segment
  const b = c1 / c2
  const projection = segment.p1.add(v.mul(b))
  return point.sub(projection).length
}
```

### Segment Intersection

```typescript
function segmentIntersection(seg1: Segment, seg2: Segment): Vec2 | null {
  const p1 = seg1.p1
  const p2 = seg1.p2
  const p3 = seg2.p1
  const p4 = seg2.p2
  
  const d1 = p2.sub(p1)
  const d2 = p4.sub(p3)
  const d3 = p1.sub(p3)
  
  const cross = d1.cross(d2)
  
  if (Math.abs(cross) < 0.0001) {
    // Segments are parallel
    return null
  }
  
  const t1 = d3.cross(d2) / cross
  const t2 = d3.cross(d1) / cross
  
  if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
    // Segments intersect
    return p1.add(d1.mul(t1))
  }
  
  return null
}
```

### Segment Subdivision

```typescript
// Divide segment into n equal parts
function subdivideSegment(segment: Segment, divisions: number): Vec2[] {
  const points: Vec2[] = []
  
  for (let i = 0; i <= divisions; i++) {
    const t = i / divisions
    points.push(segment.p1.mix(segment.p2, t))
  }
  
  return points
}

// Create polyline from segments
function createPolyline(points: Vec2[]): Segment[] {
  const segments: Segment[] = []
  
  for (let i = 0; i < points.length - 1; i++) {
    segments.push(new Segment(points[i], points[i + 1]))
  }
  
  return segments
}
```

### Ray Casting

```typescript
interface Ray {
  origin: Vec2
  direction: Vec2  // Should be normalized
}

function raySegmentIntersection(ray: Ray, segment: Segment): Vec2 | null {
  const segVec = segment.p2.sub(segment.p1)
  const cross = ray.direction.cross(segVec)
  
  if (Math.abs(cross) < 0.0001) {
    // Ray and segment are parallel
    return null
  }
  
  const diff = segment.p1.sub(ray.origin)
  const t1 = diff.cross(segVec) / cross
  const t2 = diff.cross(ray.direction) / cross
  
  if (t1 >= 0 && t2 >= 0 && t2 <= 1) {
    // Ray intersects segment
    return ray.origin.add(ray.direction.mul(t1))
  }
  
  return null
}
```

### Path Operations

```typescript
// Calculate total path length
function pathLength(segments: Segment[]): number {
  return segments.reduce((sum, seg) => sum + seg.length, 0)
}

// Find point at distance along path
function pointAtPathDistance(segments: Segment[], distance: number): Vec2 | null {
  let accumulated = 0
  
  for (const segment of segments) {
    const segLength = segment.length
    
    if (accumulated + segLength >= distance) {
      const t = (distance - accumulated) / segLength
      return segment.p1.mix(segment.p2, t)
    }
    
    accumulated += segLength
  }
  
  return null  // Distance exceeds path length
}
```

### Segment Bounds

```typescript
// Get bounding box of segments
function getSegmentBounds(segments: Segment[]): Rect {
  if (segments.length === 0) return Rect.empty
  
  const points = segments.flatMap(seg => [seg.p1, seg.p2])
  return Rect.from(...points)
}

// Check if point is near any segment
function isNearPath(
  point: Vec2,
  segments: Segment[],
  threshold: number
): boolean {
  return segments.some(seg => distanceToSegment(point, seg) <= threshold)
}
```

## Drawing Segments

### With Canvas API

```typescript
function drawSegment(
  ctx: CanvasRenderingContext2D,
  segment: Segment,
  style?: {
    strokeStyle?: string
    lineWidth?: number
    lineCap?: CanvasLineCap
  }
) {
  if (style) {
    Object.assign(ctx, style)
  }
  
  ctx.beginPath()
  ctx.moveTo(segment.p1.x, segment.p1.y)
  ctx.lineTo(segment.p2.x, segment.p2.y)
  ctx.stroke()
}

// Draw with arrowhead
function drawArrow(
  ctx: CanvasRenderingContext2D,
  segment: Segment,
  arrowSize: number = 10
) {
  // Draw the line
  drawSegment(ctx, segment)
  
  // Calculate arrowhead
  const angle = segment.angle
  const tip = segment.p2
  
  const arrowPt1 = tip.add(Vec2.from([
    -arrowSize * Math.cos(angle - Math.PI / 6),
    -arrowSize * Math.sin(angle - Math.PI / 6)
  ]))
  
  const arrowPt2 = tip.add(Vec2.from([
    -arrowSize * Math.cos(angle + Math.PI / 6),
    -arrowSize * Math.sin(angle + Math.PI / 6)
  ]))
  
  // Draw arrowhead
  ctx.beginPath()
  ctx.moveTo(tip.x, tip.y)
  ctx.lineTo(arrowPt1.x, arrowPt1.y)
  ctx.moveTo(tip.x, tip.y)
  ctx.lineTo(arrowPt2.x, arrowPt2.y)
  ctx.stroke()
}
```

### With SVG

```typescript
function segmentToSVGPath(segment: Segment): string {
  return `M ${segment.p1.x} ${segment.p1.y} L ${segment.p2.x} ${segment.p2.y}`
}

function polylineToSVGPath(segments: Segment[]): string {
  if (segments.length === 0) return ''
  
  let path = `M ${segments[0].p1.x} ${segments[0].p1.y}`
  
  for (const segment of segments) {
    path += ` L ${segment.p2.x} ${segment.p2.y}`
  }
  
  return path
}
```

## Performance Tips

1. **Cache computed properties**: Store length and angle if used repeatedly
2. **Use squared distances**: Avoid square root when comparing distances
3. **Early exits**: Check bounding boxes before expensive intersection tests
4. **Batch operations**: Process multiple segments together when possible

## Next Steps

- Review [Vectors](/guide/vectors) for point operations
- Explore [Transforms](/guide/transforms) for segment transformations
- See the [Segment API Reference](/api/segment) for complete method documentation