# Rect

Rectangle class with position/size management, intersection/union operations, and various construction methods.

## Constructor

```typescript
new Rect(pos: Vec2, size: Vec2)
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| `pos` | `Vec2` | The position of the rectangle (top-left corner) |
| `size` | `Vec2` | The size of the rectangle (width, height) |

## Properties

### pos
```typescript
pos: Vec2
```
The position of the rectangle (top-left corner).

### size
```typescript
size: Vec2
```
The size of the rectangle.

### width
```typescript
get width(): number
```
The width of the rectangle.

### height
```typescript
get height(): number
```
The height of the rectangle.

### left / top / right / bottom
```typescript
get left(): number
get top(): number
get right(): number
get bottom(): number
```
The edges of the rectangle.

### center
```typescript
get center(): Vec2
```
The center point of the rectangle.

### topLeft / topRight / bottomLeft / bottomRight
```typescript
get topLeft(): Vec2
get topRight(): Vec2
get bottomLeft(): Vec2
get bottomRight(): Vec2
```
The corner points of the rectangle.

## Static Properties

### empty
```typescript
static readonly empty: Rect
```
An empty rectangle at origin with zero size.

## Methods

See the [Rectangles guide](/guide/rectangles) for detailed usage examples.

### includes
```typescript
includes(point: Vec2): boolean
```
Checks if the rectangle contains a point.

### translate
```typescript
translate(offset: Vec2): Rect
```
Translates the rectangle by an offset.

### transform
```typescript
transform(transform: Transform): Rect
```
Transforms the rectangle and returns its axis-aligned bounding box.

### inset
```typescript
inset(offsets: EdgeOffsets): Rect
```
Insets the rectangle by the given edge offsets.

### toDOMRect
```typescript
toDOMRect(): DOMRect
```
Converts to a DOMRect.

### toSVGRectProps
```typescript
toSVGRectProps(): { x: number; y: number; width: number; height: number }
```
Converts to SVG rect element properties.

## Static Methods

### from
```typescript
static from(...points: Vec2[]): Rect
```
Creates a bounding rectangle from points.

### fromSize
```typescript
static fromSize(pos: Vec2, size: Vec2): Rect
```
Creates a rectangle from position and size.

### fromTLBR / fromLTRB
```typescript
static fromTLBR(top: number, left: number, bottom: number, right: number): Rect
static fromLTRB(left: number, top: number, right: number, bottom: number): Rect
```
Creates a rectangle from edge coordinates.

### intersection
```typescript
static intersection(a: Rect, b: Rect): Rect | undefined
```
Returns the intersection of two rectangles.

### union
```typescript
static union(a: Rect, b: Rect): Rect
```
Returns the union (bounding box) of two rectangles.

### intersects
```typescript
static intersects(a: Rect, b: Rect): boolean
```
Checks if two rectangles intersect.