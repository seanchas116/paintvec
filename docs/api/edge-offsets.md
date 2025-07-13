# EdgeOffsets

Edge offset representation for rectangle insets/outsets.

## Constructor

```typescript
new EdgeOffsets(top: number, right?: number, bottom?: number, left?: number)
```

### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `top` | `number` | - | Top offset |
| `right` | `number` | `top` | Right offset |
| `bottom` | `number` | `top` | Bottom offset |
| `left` | `number` | `right` | Left offset |

## Properties

### top / right / bottom / left
```typescript
top: number
right: number
bottom: number
left: number
```
The individual edge offset values.

### horizontal
```typescript
get horizontal(): number
```
Sum of left and right offsets.

### vertical
```typescript
get vertical(): number
```
Sum of top and bottom offsets.

## Static Properties

### zero
```typescript
static readonly zero: EdgeOffsets
```
EdgeOffsets with all values as 0.

## Methods

See the [Edge Offsets guide](/guide/edge-offsets) for detailed usage examples.

### neg
```typescript
get neg(): EdgeOffsets
```
Returns negated edge offsets.

### add
```typescript
add(other: EdgeOffsets): EdgeOffsets
```
Adds two edge offsets.

### mul
```typescript
mul(scale: number): EdgeOffsets
```
Scales the edge offsets.

## Usage with Rect

The primary use is with `Rect.inset()`:

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(100, 100))
const inset = rect.inset(new EdgeOffsets(10))
// Result: Rect at (10, 10) with size (80, 80)
```