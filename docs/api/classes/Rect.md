# Class: Rect

Rect represents rectangle in 2D space.

```js
// 100*200 rectangle at (0, 0)
const r1 = new Rect(new Vec2(0), new Vec2(100, 200))
// 200*300 rectangle at (50, 50)
const r2 = new Rect(new Vec2(50, 50), new Vec2(200, 300))

...
```

## Constructors

### constructor

**new Rect**(`topLeft?`, `size?`)

Creates a rectangle. It returns empty rectangle when no arguments given.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topLeft` | [`Vec2`](api/classes/Vec2.md) | The top-left position (in top-left origin coordinates) of this rectangle. |
| `size` | [`Vec2`](api/classes/Vec2.md) | The size of this rectangle. |

#### Defined in

[index.ts:276](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L276)

## Properties

### size

 **size**: [`Vec2`](api/classes/Vec2.md)

The size of this rectangle.

#### Defined in

[index.ts:276](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L276)

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

The top-left position (in top-left origin coordinates) of this rectangle.

#### Defined in

[index.ts:276](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L276)

## Accessors

### bottom

`get` **bottom**(): `number`

The bottom coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:327](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L327)

___

### bottomLeft

`get` **bottomLeft**(): [`Vec2`](api/classes/Vec2.md)

The bottom-lect position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:302](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L302)

___

### bottomRight

`get` **bottomRight**(): [`Vec2`](api/classes/Vec2.md)

The bottom-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:288](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L288)

___

### center

`get` **center**(): [`Vec2`](api/classes/Vec2.md)

The center of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:346](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L346)

___

### height

`get` **height**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:339](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L339)

___

### left

`get` **left**(): `number`

The left coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:309](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L309)

___

### right

`get` **right**(): `number`

The right coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:321](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L321)

___

### top

`get` **top**(): `number`

The top coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:315](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L315)

___

### topRight

`get` **topRight**(): [`Vec2`](api/classes/Vec2.md)

The top-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:295](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L295)

___

### vertices

`get` **vertices**(): [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.

#### Returns

[[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

#### Defined in

[index.ts:449](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L449)

___

### width

`get` **width**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:333](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L333)

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

#### Defined in

[index.ts:281](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L281)

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

#### Defined in

[index.ts:389](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L389)

___

### inflate

**inflate**(`offset`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:367](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L367)

___

### inset

**inset**(`offsets`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offsets` | [`EdgeOffsets`](api/classes/EdgeOffsets.md) |

#### Returns

[`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:372](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L372)

___

### insetsTo

**insetsTo**(`other`): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rect`](api/classes/Rect.md) |

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Defined in

[index.ts:378](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L378)

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

#### Defined in

[index.ts:425](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L425)

___

### toDOMRect

**toDOMRect**(): `DOMRect`

#### Returns

`DOMRect`

#### Defined in

[index.ts:442](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L442)

___

### toIntBounding

**toIntBounding**(): [`Rect`](api/classes/Rect.md)

Calculates the smallest integer rectangle which includes this rectangle.

#### Returns

[`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:353](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L353)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:438](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L438)

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

#### Defined in

[index.ts:401](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L401)

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

#### Defined in

[index.ts:363](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L363)

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

#### Defined in

[index.ts:413](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L413)

___

### boundingRect

`Static` **boundingRect**(`points`): [`Rect`](api/classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:546](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L546)

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

#### Defined in

[index.ts:490](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L490)

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

#### Defined in

[index.ts:470](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L470)

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

#### Defined in

[index.ts:456](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L456)
