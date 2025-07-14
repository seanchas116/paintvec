# Edge Offsets

The `EdgeOffsets` class represents insets or outsets from the edges of a rectangle, similar to CSS padding or margins. It's useful for defining spacing around rectangular areas.

## Creating Edge Offsets

Edge offsets define distances from top, right, bottom, and left edges:

```typescript
// All sides equal
const uniform = new EdgeOffsets(10)
// top: 10, right: 10, bottom: 10, left: 10

// Vertical and horizontal
const symmetric = new EdgeOffsets(10, 20)
// top: 10, right: 20, bottom: 10, left: 20

// All sides different
const custom = new EdgeOffsets(5, 10, 15, 20)
// top: 5, right: 10, bottom: 15, left: 20

// Zero offsets
const zero = EdgeOffsets.zero
// All sides: 0
```

## Properties

Access individual edge values:

```typescript
const offsets = new EdgeOffsets(5, 10, 15, 20)

offsets.top     // 5
offsets.right   // 10
offsets.bottom  // 15
offsets.left    // 20

// Computed properties
offsets.horizontal  // 30 (left + right)
offsets.vertical    // 20 (top + bottom)
```

## Operations

### Negation

Flip the sign of all offsets:

```typescript
const insets = new EdgeOffsets(10, 20, 30, 40)
const outsets = insets.neg
// Result: EdgeOffsets(-10, -20, -30, -40)

// Useful for converting insets to outsets
const expanded = rect.inset(insets.neg)  // Expands instead of shrinking
```

### Arithmetic

Add or scale edge offsets:

```typescript
const a = new EdgeOffsets(10, 20, 30, 40)
const b = new EdgeOffsets(5, 5, 5, 5)

// Addition
const sum = a.add(b)
// Result: EdgeOffsets(15, 25, 35, 45)

// Scaling
const scaled = a.mul(2)
// Result: EdgeOffsets(20, 40, 60, 80)

// Fractional scaling for responsive layouts
const half = a.mul(0.5)
// Result: EdgeOffsets(5, 10, 15, 20)
```

## Using with Rectangles

The primary use of EdgeOffsets is with the `Rect.inset()` method:

```typescript
const rect = new Rect(new Vec2(0, 0), new Vec2(200, 100))

// Uniform inset
const padded = rect.inset(new EdgeOffsets(10))
// Result: Rect at (10, 10) with size (180, 80)

// Different insets per side
const custom = rect.inset(new EdgeOffsets(5, 10, 15, 20))
// Result: Rect at (20, 5) with size (170, 80)
// Left offset: 20, Top offset: 5
// Width: 200 - 20 - 10 = 170
// Height: 100 - 5 - 15 = 80

// Outset (expand) using negative values
const expanded = rect.inset(new EdgeOffsets(-10))
// Result: Rect at (-10, -10) with size (220, 120)
```

## Common Patterns

### CSS-Style Margins and Padding

```typescript
interface BoxModel {
  content: Rect
  padding: EdgeOffsets
  border: EdgeOffsets
  margin: EdgeOffsets
}

function getContentBox(box: BoxModel): Rect {
  return box.content
}

function getPaddingBox(box: BoxModel): Rect {
  return box.content.inset(box.padding.neg)
}

function getBorderBox(box: BoxModel): Rect {
  return getPaddingBox(box).inset(box.border.neg)
}

function getMarginBox(box: BoxModel): Rect {
  return getBorderBox(box).inset(box.margin.neg)
}
```

### Safe Area Insets

```typescript
// Handle safe areas in mobile apps
interface SafeArea {
  screen: Rect
  insets: EdgeOffsets
}

function getSafeRect(safeArea: SafeArea): Rect {
  return safeArea.screen.inset(safeArea.insets)
}

// Example: iPhone with notch
const iphoneSafeArea: SafeArea = {
  screen: new Rect(Vec2.zero, new Vec2(375, 812)),
  insets: new EdgeOffsets(44, 0, 34, 0)  // top: status bar, bottom: home indicator
}

const safeContent = getSafeRect(iphoneSafeArea)
// Result: Rect at (0, 44) with size (375, 734)
```

### Responsive Scaling

```typescript
// Scale edge offsets based on screen size
function scaleOffsets(
  offsets: EdgeOffsets,
  baseSize: Vec2,
  currentSize: Vec2
): EdgeOffsets {
  const scaleX = currentSize.x / baseSize.x
  const scaleY = currentSize.y / baseSize.y
  
  return new EdgeOffsets(
    offsets.top * scaleY,
    offsets.right * scaleX,
    offsets.bottom * scaleY,
    offsets.left * scaleX
  )
}

// Design at 1920x1080, scale to actual screen size
const designOffsets = new EdgeOffsets(20, 30, 20, 30)
const designSize = new Vec2(1920, 1080)
const screenSize = new Vec2(1280, 720)

const scaledOffsets = scaleOffsets(designOffsets, designSize, screenSize)
```

### Layout Helpers

```typescript
// Create a grid with gutters
function createGridWithGutters(
  container: Rect,
  columns: number,
  rows: number,
  gutters: EdgeOffsets
): Rect[] {
  // Apply outer margins
  const content = container.inset(gutters)
  
  const cellWidth = (content.width - gutters.horizontal * (columns - 1)) / columns
  const cellHeight = (content.height - gutters.vertical * (rows - 1)) / rows
  
  const cells: Rect[] = []
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = content.left + col * (cellWidth + gutters.horizontal)
      const y = content.top + row * (cellHeight + gutters.vertical)
      cells.push(new Rect(new Vec2(x, y), new Vec2(cellWidth, cellHeight)))
    }
  }
  
  return cells
}
```

### Compound Insets

```typescript
// Apply multiple levels of insets
function applyCompoundInsets(
  rect: Rect,
  ...insets: EdgeOffsets[]
): Rect {
  return insets.reduce((r, i) => r.inset(i), rect)
}

// Example: Apply padding, then border, then margin
const container = new Rect(Vec2.zero, new Vec2(400, 300))
const padding = new EdgeOffsets(20)
const border = new EdgeOffsets(2)
const margin = new EdgeOffsets(10)

const finalRect = applyCompoundInsets(container, margin, border, padding)
```

## Conversion

### To/From Arrays

```typescript
const offsets = new EdgeOffsets(5, 10, 15, 20)

// To array (CSS order: top, right, bottom, left)
const array = [offsets.top, offsets.right, offsets.bottom, offsets.left]

// From CSS-style values
function fromCSSValues(...values: number[]): EdgeOffsets {
  switch (values.length) {
    case 1: return new EdgeOffsets(values[0])
    case 2: return new EdgeOffsets(values[0], values[1])
    case 3: return new EdgeOffsets(values[0], values[1], values[2], values[1])
    case 4: return new EdgeOffsets(values[0], values[1], values[2], values[3])
    default: throw new Error('Invalid number of values')
  }
}

const cssLike = fromCSSValues(10, 20, 30, 40)
```

## Use Cases

### UI Layout

```typescript
// Button with padding
interface Button {
  bounds: Rect
  padding: EdgeOffsets
  text: string
}

function getTextRect(button: Button): Rect {
  return button.bounds.inset(button.padding)
}
```

### Collision Detection with Margins

```typescript
// Add buffer zone around collision detection
function collidesWith(
  rect1: Rect,
  rect2: Rect,
  buffer: EdgeOffsets = EdgeOffsets.zero
): boolean {
  const expanded1 = rect1.inset(buffer.neg)
  return Rect.intersects(expanded1, rect2)
}
```

### Drawing Borders

```typescript
function drawBorder(
  ctx: CanvasRenderingContext2D,
  rect: Rect,
  borderWidth: EdgeOffsets
) {
  const outer = rect
  const inner = rect.inset(borderWidth)
  
  // Draw each border side if it has width
  if (borderWidth.top > 0) {
    ctx.fillRect(outer.left, outer.top, outer.width, borderWidth.top)
  }
  if (borderWidth.right > 0) {
    ctx.fillRect(inner.right, outer.top, borderWidth.right, outer.height)
  }
  if (borderWidth.bottom > 0) {
    ctx.fillRect(outer.left, inner.bottom, outer.width, borderWidth.bottom)
  }
  if (borderWidth.left > 0) {
    ctx.fillRect(outer.left, outer.top, borderWidth.left, outer.height)
  }
}
```

## Next Steps

- Learn about [Segments](/guide/segments) for line geometry
- Review [Rectangles](/guide/rectangles) to see EdgeOffsets in action
- See the [EdgeOffsets API Reference](/api/edge-offsets) for complete documentation