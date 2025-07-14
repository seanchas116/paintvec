# Vec2

Vec2 represents a 2D vector, point or size.

::: info Complete API Documentation
This page provides a curated reference with examples. For the complete auto-generated API documentation, see [Vec2 Full API](/api/generated/classes/Vec2).
:::

## Example

```typescript
const a = new Vec2(1, 2)
const b = new Vec2(3, 4)
a.add(b) //=> Vec2(4, 6)
a.sub(b) //=> Vec2(-2, -2)
b.length //=> 5
```

## Constructor

```typescript
new Vec2(x?: number, y?: number)
```

### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | `number` | `0` | The x component of this vector |
| `y` | `number` | `x` | The y component of this vector |

## Properties

### x

```typescript
x: number
```

The x component of this vector.

### y

```typescript
y: number
```

The y component of this vector.

## Static Properties

### zero

```typescript
static readonly zero: Vec2
```

Vec2 with both components as 0.

## Methods

### Arithmetic Operations

#### add

```typescript
add(other: Vec2): Vec2
```

Returns the sum of this vector and another vector.

#### sub

```typescript
sub(other: Vec2): Vec2
```

Returns the difference between this vector and another vector.

#### mul

```typescript
mul(other: Vec2 | number): Vec2
```

Returns the product of this vector and a scalar or vector.

#### div

```typescript
div(other: Vec2 | number): Vec2
```

Returns the quotient of this vector and a scalar or vector.

#### neg

```typescript
get neg(): Vec2
```

Returns the negation of this vector.

### Geometric Operations

#### length

```typescript
get length(): number
```

Calculates the length of this vector.

#### angle

```typescript
get angle(): number
```

Calculates the angle of this vector from positive x-axis in [-PI, PI].

#### normalize

```typescript
normalize(): Vec2
```

Returns the normalized vector.

#### dot

```typescript
dot(other: Vec2): number
```

Calculates the dot product of this vector and another vector.

#### cross

```typescript
cross(other: Vec2): number
```

Calculates the cross product of this vector and another vector (2D cross product returns a scalar).

### Math Functions

#### abs

```typescript
get abs(): Vec2
```

Returns absolute values of this vector.

#### floor

```typescript
get floor(): Vec2
```

Rounds down the components of this vector.

#### ceil

```typescript
get ceil(): Vec2
```

Rounds up the components of this vector.

#### round

```typescript
get round(): Vec2
```

Rounds the components of this vector to nearest integers.

#### clamp

```typescript
clamp(min: Vec2, max: Vec2): Vec2
```

Clamps the components of this vector within the specified range.

#### min

```typescript
min(other: Vec2): Vec2
```

Returns a vector with the minimum x and y values from this and another vector.

#### max

```typescript
max(other: Vec2): Vec2
```

Returns a vector with the maximum x and y values from this and another vector.

#### mix

```typescript
mix(other: Vec2, ratio: number): Vec2
```

Linearly interpolates between this vector and another vector.

### Transformation

#### transform

```typescript
transform(transform: Transform): Vec2
```

Transforms this vector by the given transform matrix.

#### rotate

```typescript
rotate(angle: number): Vec2
```

Rotates this vector by the given angle in radians.

### Utility Methods

#### equals

```typescript
equals(other: Vec2): boolean
```

Checks if this vector is equal to another vector.

#### toString

```typescript
toString(): string
```

Returns a string representation of this vector.

#### toArray

```typescript
toArray(): [number, number]
```

Converts this vector to an array.

## Static Methods

### from

```typescript
static from(point: { x: number; y: number } | [number, number]): Vec2
```

Creates a Vec2 from an object with x/y properties or a tuple array.

### min

```typescript
static min(...points: Vec2[]): Vec2
```

Returns a vector with the minimum x and y values from multiple vectors.

### max

```typescript
static max(...points: Vec2[]): Vec2
```

Returns a vector with the maximum x and y values from multiple vectors.