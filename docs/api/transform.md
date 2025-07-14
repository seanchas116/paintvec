# Transform

2D affine and perspective transform using 3x3 matrices, supporting scale/rotate/translate operations.

## Constructor

```typescript
new Transform(a: number, b: number, c: number, d: number, e: number, f: number)
```

### Parameters

The parameters represent a 3x3 transformation matrix:
```
[a c e]
[b d f]
[0 0 1]
```

| Name | Type | Description |
|------|------|-------------|
| `a` | `number` | Horizontal scaling / cosine of rotation |
| `b` | `number` | Vertical shearing / sine of rotation |
| `c` | `number` | Horizontal shearing / negative sine of rotation |
| `d` | `number` | Vertical scaling / cosine of rotation |
| `e` | `number` | Horizontal translation |
| `f` | `number` | Vertical translation |

## Properties

### Matrix components
```typescript
a: number
b: number
c: number
d: number
e: number
f: number
```

### isIdentity
```typescript
get isIdentity(): boolean
```
Checks if this is an identity transform.

### isTranslation
```typescript
get isTranslation(): boolean
```
Checks if this is a translation-only transform.

### meanScale
```typescript
get meanScale(): number
```
Returns the average scale factor.

## Static Properties

### identity
```typescript
static readonly identity: Transform
```
The identity transform.

## Methods

See the [Transforms guide](/guide/transforms) for detailed usage examples.

### merge
```typescript
merge(other: Transform): Transform
```
Combines this transform with another (matrix multiplication).

### invert
```typescript
invert(): Transform
```
Returns the inverse transform.

### transformPoint
```typescript
transformPoint(point: Vec2): Vec2
```
Transforms a point.

### toArray
```typescript
toArray(): number[]
```
Converts to a 9-element array.

### toCSSMatrixString
```typescript
toCSSMatrixString(): string
```
Converts to CSS matrix() string.

## Static Factory Methods

### translate
```typescript
static translate(offset: Vec2): Transform
```
Creates a translation transform.

### scale
```typescript
static scale(scale: Vec2): Transform
```
Creates a scale transform.

### rotate
```typescript
static rotate(angle: number): Transform
```
Creates a rotation transform.

### quadToQuad
```typescript
static quadToQuad(from: Vec2[], to: Vec2[]): Transform
```
Creates a perspective transform mapping one quad to another.