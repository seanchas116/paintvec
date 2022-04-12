# Class: Rect

Rect represents rectangle in 2D space.

```js
// 100*200 rectangle at (0, 0)
const r1 = new Rect(new Vec2(0), new Vec2(100, 200))
// 100*200 rectangle at (50, 50)
const r2 = new Rect(new Vec2(50, 50), new Vec2(150, 250))

const intersect = Rect.intersection(r1, r2) //=> Rect(Vec2(50, 50), Vec2(100, 200))
const union = Rect.union(r1, r2) //=> Rect(Vec2(0, 0), Vec2(150, 250))

...
```

## Constructors

### constructor

**new Rect**(`topLeft?`, `bottomRight?`)

Creates a rectangle. It returns empty rectangle when no arguments given.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `topLeft` | [`Vec2`](api/classes/Vec2.md) | `undefined` | The top-left position (in top-left origin coordinates) of this rectangle. |
| `bottomRight` | [`Vec2`](api/classes/Vec2.md) | `topLeft` | The bottom-right position (in top-left origin coordinates) of this rectangle. |

## Properties

### bottomRight

 **bottomRight**: [`Vec2`](api/classes/Vec2.md) = `topLeft`

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

## Accessors

### bottom

`get` **bottom**(): `number`

The bottom coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

___

### bottomLeft

`get` **bottomLeft**(): [`Vec2`](api/classes/Vec2.md)

The bottom-lect position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### center

`get` **center**(): [`Vec2`](api/classes/Vec2.md)

The center of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### height

`get` **height**(): `number`

The width of this rectangle.

#### Returns

`number`

___

### left

`get` **left**(): `number`

The left coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

___

### right

`get` **right**(): `number`

The right coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

___

### size

`get` **size**(): [`Vec2`](api/classes/Vec2.md)

The size of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### top

`get` **top**(): `number`

The top coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

___

### topRight

`get` **topRight**(): [`Vec2`](api/classes/Vec2.md)

The top-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### vertices

`get` **vertices**(): [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.

#### Returns

[[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

___

### width

`get` **width**(): `number`

The width of this rectangle.

#### Returns

`number`

## Methods

### equals

**equals**(`other`): `boolean`

Checks if the rectangles has same values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](api/classes/Rect.md) |

#### Returns

`boolean`

___

### includes

**includes**(`pos`): `boolean`

Returns if this rectangle include pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

`boolean`

___

### inflate

**inflate**(`offset`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### inset

**inset**(`offsets`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offsets` | [`EdgeOffsets`](api/classes/EdgeOffsets.md) |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### insetsTo

**insetsTo**(`other`): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](api/classes/Rect.md) |

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

___

### intersection

**intersection**(`other`): `undefined` \| [`Rect`](api/classes/Rect.md)

Returns the largest rectangle contained in both this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](api/classes/Rect.md) |

#### Returns

`undefined` \| [`Rect`](api/classes/Rect.md)

___

### toDOMRect

**toDOMRect**(): `DOMRect`

#### Returns

`DOMRect`

___

### toIntBounding

**toIntBounding**(): [`Rect`](api/classes/Rect.md)

Calculates the smallest integer rectangle which includes this rectangle.

#### Returns

[`Rect`](api/classes/Rect.md)

___

### toString

**toString**(): `string`

#### Returns

`string`

___

### transform

**transform**(`transform`): [`Rect`](api/classes/Rect.md)

Transforms each corners by transform and returns the bounding rectangle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### translate

**translate**(`offset`): [`Rect`](api/classes/Rect.md)

Translates this rectangle by offset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### union

**union**(`other`): [`Rect`](api/classes/Rect.md)

Returns the smallest rectangle which contains both this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](api/classes/Rect.md) |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### boundingRect

`Static` **boundingRect**(`points`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### from

`Static` **from**(`options`): [`Rect`](api/classes/Rect.md)

Creates Rect from rect-like objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `height`: `number` ; `width`: `number` ; `x`: `number` ; `y`: `number`  } \| { `height`: `number` ; `left`: `number` ; `top`: `number` ; `width`: `number`  } \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } \| { `bottomRight`: [`Vec2`](api/classes/Vec2.md) ; `topLeft`: [`Vec2`](api/classes/Vec2.md)  } \| { `size`: [`Vec2`](api/classes/Vec2.md) ; `topLeft`: [`Vec2`](api/classes/Vec2.md)  } |

#### Returns

[`Rect`](api/classes/Rect.md)

___

### intersection

`Static` **intersection**(...`rects`): `undefined` \| [`Rect`](api/classes/Rect.md)

Calculates the rectangle that represents the shared region of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](api/classes/Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](api/classes/Rect.md)

___

### union

`Static` **union**(...`rects`): `undefined` \| [`Rect`](api/classes/Rect.md)

Calculates the bounding rectangle of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](api/classes/Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](api/classes/Rect.md)
