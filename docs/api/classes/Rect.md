[paintvec](../README.md) / [Exports](../modules.md) / Rect

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

## Table of contents

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [bottomRight](Rect.md#bottomright)
- [topLeft](Rect.md#topleft)

### Accessors

- [bottom](Rect.md#bottom)
- [bottomLeft](Rect.md#bottomleft)
- [center](Rect.md#center)
- [height](Rect.md#height)
- [left](Rect.md#left)
- [right](Rect.md#right)
- [size](Rect.md#size)
- [top](Rect.md#top)
- [topRight](Rect.md#topright)
- [vertices](Rect.md#vertices)
- [width](Rect.md#width)

### Methods

- [equals](Rect.md#equals)
- [includes](Rect.md#includes)
- [inflate](Rect.md#inflate)
- [inset](Rect.md#inset)
- [insetsTo](Rect.md#insetsto)
- [intersection](Rect.md#intersection)
- [toDOMRect](Rect.md#todomrect)
- [toIntBounding](Rect.md#tointbounding)
- [toString](Rect.md#tostring)
- [transform](Rect.md#transform)
- [translate](Rect.md#translate)
- [union](Rect.md#union)
- [boundingRect](Rect.md#boundingrect)
- [from](Rect.md#from)
- [intersection](Rect.md#intersection-1)
- [union](Rect.md#union-1)

## Constructors

### constructor

• **new Rect**(`topLeft?`, `bottomRight?`)

Creates a rectangle. It returns empty rectangle when no arguments given.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `topLeft` | [`Vec2`](Vec2.md) | `undefined` | The top-left position (in top-left origin coordinates) of this rectangle. |
| `bottomRight` | [`Vec2`](Vec2.md) | `topLeft` | The bottom-right position (in top-left origin coordinates) of this rectangle. |

#### Defined in

[index.ts:279](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L279)

## Properties

### bottomRight

• **bottomRight**: [`Vec2`](Vec2.md) = `topLeft`

___

### topLeft

• **topLeft**: [`Vec2`](Vec2.md)

## Accessors

### bottom

• `get` **bottom**(): `number`

The bottom coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:330](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L330)

___

### bottomLeft

• `get` **bottomLeft**(): [`Vec2`](Vec2.md)

The bottom-lect position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[index.ts:306](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L306)

___

### center

• `get` **center**(): [`Vec2`](Vec2.md)

The center of this rectangle.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[index.ts:349](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L349)

___

### height

• `get` **height**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:342](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L342)

___

### left

• `get` **left**(): `number`

The left coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:312](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L312)

___

### right

• `get` **right**(): `number`

The right coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:324](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L324)

___

### size

• `get` **size**(): [`Vec2`](Vec2.md)

The size of this rectangle.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[index.ts:294](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L294)

___

### top

• `get` **top**(): `number`

The top coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:318](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L318)

___

### topRight

• `get` **topRight**(): [`Vec2`](Vec2.md)

The top-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[index.ts:300](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L300)

___

### vertices

• `get` **vertices**(): [[`Vec2`](Vec2.md), [`Vec2`](Vec2.md), [`Vec2`](Vec2.md), [`Vec2`](Vec2.md)]

Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.

#### Returns

[[`Vec2`](Vec2.md), [`Vec2`](Vec2.md), [`Vec2`](Vec2.md), [`Vec2`](Vec2.md)]

#### Defined in

[index.ts:448](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L448)

___

### width

• `get` **width**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:336](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L336)

## Methods

### equals

▸ **equals**(`other`): `boolean`

Checks if the rectangles has same values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](Rect.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:284](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L284)

___

### includes

▸ **includes**(`pos`): `boolean`

Returns if this rectangle include pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vec2`](Vec2.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:391](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L391)

___

### inflate

▸ **inflate**(`offset`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:368](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L368)

___

### inset

▸ **inset**(`offsets`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offsets` | [`EdgeOffsets`](EdgeOffsets.md) |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:373](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L373)

___

### insetsTo

▸ **insetsTo**(`other`): [`EdgeOffsets`](EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](Rect.md) |

#### Returns

[`EdgeOffsets`](EdgeOffsets.md)

#### Defined in

[index.ts:380](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L380)

___

### intersection

▸ **intersection**(`other`): `undefined` \| [`Rect`](Rect.md)

Returns the largest rectangle contained in both this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](Rect.md) |

#### Returns

`undefined` \| [`Rect`](Rect.md)

#### Defined in

[index.ts:427](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L427)

___

### toDOMRect

▸ **toDOMRect**(): `DOMRect`

#### Returns

`DOMRect`

#### Defined in

[index.ts:441](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L441)

___

### toIntBounding

▸ **toIntBounding**(): [`Rect`](Rect.md)

Calculates the smallest integer rectangle which includes this rectangle.

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:356](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L356)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:437](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L437)

___

### transform

▸ **transform**(`transform`): [`Rect`](Rect.md)

Transforms each corners by transform and returns the bounding rectangle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md) |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:403](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L403)

___

### translate

▸ **translate**(`offset`): [`Rect`](Rect.md)

Translates this rectangle by offset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`Vec2`](Vec2.md) |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:364](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L364)

___

### union

▸ **union**(`other`): [`Rect`](Rect.md)

Returns the smallest rectangle which contains both this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](Rect.md) |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:415](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L415)

___

### boundingRect

▸ `Static` **boundingRect**(`points`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Vec2`](Vec2.md)[] |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:539](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L539)

___

### from

▸ `Static` **from**(`options`): [`Rect`](Rect.md)

Creates Rect from rect-like objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `height`: `number` ; `width`: `number` ; `x`: `number` ; `y`: `number`  } \| { `height`: `number` ; `left`: `number` ; `top`: `number` ; `width`: `number`  } \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } \| { `bottomRight`: [`Vec2`](Vec2.md) ; `topLeft`: [`Vec2`](Vec2.md)  } \| { `size`: [`Vec2`](Vec2.md) ; `topLeft`: [`Vec2`](Vec2.md)  } |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:486](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L486)

___

### intersection

▸ `Static` **intersection**(...`rects`): `undefined` \| [`Rect`](Rect.md)

Calculates the rectangle that represents the shared region of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](Rect.md)

#### Defined in

[index.ts:469](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L469)

___

### union

▸ `Static` **union**(...`rects`): `undefined` \| [`Rect`](Rect.md)

Calculates the bounding rectangle of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](Rect.md)

#### Defined in

[index.ts:455](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L455)
