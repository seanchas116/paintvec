# Segment

Line segment with length and angle calculations.

## Constructor

```typescript
new Segment(p1: Vec2, p2: Vec2)
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| `p1` | `Vec2` | Start point of the segment |
| `p2` | `Vec2` | End point of the segment |

## Properties

### p1 / p2
```typescript
p1: Vec2
p2: Vec2
```
The start and end points of the segment.

### length
```typescript
get length(): number
```
The length of the segment.

### angle
```typescript
get angle(): number
```
The angle of the segment from the positive x-axis (in radians).

## Methods

See the [Segments guide](/guide/segments) for detailed usage examples.

### transform
```typescript
transform(transform: Transform): Segment
```
Transforms the segment by applying the transform to both endpoints.

## Common Usage

```typescript
// Create a segment
const segment = new Segment(new Vec2(0, 0), new Vec2(100, 100))

// Get properties
console.log(segment.length)  // 141.42...
console.log(segment.angle)   // 0.785... (45 degrees)

// Transform
const rotated = segment.transform(Transform.rotate(Math.PI / 2))
```