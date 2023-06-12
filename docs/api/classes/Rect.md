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

[index.ts:294](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L294)

## Properties

### size

 **size**: [`Vec2`](api/classes/Vec2.md)

The size of this rectangle.

#### Defined in

[index.ts:294](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L294)

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

The top-left position (in top-left origin coordinates) of this rectangle.

#### Defined in

[index.ts:294](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L294)

## Accessors

### b

`get` **b**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:374](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L374)

___

### bl

`get` **bl**(): [`Vec2`](api/classes/Vec2.md)

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:336](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L336)

___

### bottom

`get` **bottom**(): `number`

The bottom coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:371](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L371)

___

### bottomLeft

`get` **bottomLeft**(): [`Vec2`](api/classes/Vec2.md)

The bottom-lect position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:332](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L332)

___

### bottomLine

`get` **bottomLine**(): [`Segment`](api/classes/Segment.md)

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:407](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L407)

___

### bottomRight

`get` **bottomRight**(): [`Vec2`](api/classes/Vec2.md)

The bottom-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:310](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L310)

___

### br

`get` **br**(): [`Vec2`](api/classes/Vec2.md)

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:314](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L314)

___

### center

`get` **center**(): [`Vec2`](api/classes/Vec2.md)

The center of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:399](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L399)

___

### endLines

`get` **endLines**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | [`Segment`](api/classes/Segment.md) |
| `y` | [`Segment`](api/classes/Segment.md) |

#### Defined in

[index.ts:429](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L429)

___

### h

`get` **h**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:392](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L392)

___

### height

`get` **height**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:389](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L389)

___

### l

`get` **l**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:346](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L346)

___

### left

`get` **left**(): `number`

The left coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:343](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L343)

___

### leftLine

`get` **leftLine**(): [`Segment`](api/classes/Segment.md)

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:411](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L411)

___

### r

`get` **r**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:365](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L365)

___

### right

`get` **right**(): `number`

The right coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:362](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L362)

___

### rightLine

`get` **rightLine**(): [`Segment`](api/classes/Segment.md)

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:415](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L415)

___

### startLines

`get` **startLines**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | [`Segment`](api/classes/Segment.md) |
| `y` | [`Segment`](api/classes/Segment.md) |

#### Defined in

[index.ts:419](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L419)

___

### t

`get` **t**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:356](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L356)

___

### tl

`get` **tl**(): [`Vec2`](api/classes/Vec2.md)

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:303](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L303)

___

### top

`get` **top**(): `number`

The top coordinate (in top-left origin coordinates) of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:353](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L353)

___

### topLine

`get` **topLine**(): [`Segment`](api/classes/Segment.md)

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:403](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L403)

___

### topRight

`get` **topRight**(): [`Vec2`](api/classes/Vec2.md)

The top-right position (in top-left origin coordinates) of this rectangle.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:321](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L321)

___

### tr

`get` **tr**(): [`Vec2`](api/classes/Vec2.md)

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:325](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L325)

___

### vertices

`get` **vertices**(): [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.

#### Returns

[[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)]

#### Defined in

[index.ts:548](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L548)

___

### w

`get` **w**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:383](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L383)

___

### width

`get` **width**(): `number`

The width of this rectangle.

#### Returns

`number`

#### Defined in

[index.ts:380](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L380)

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

[index.ts:299](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L299)

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

[index.ts:478](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L478)

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

[index.ts:456](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L456)

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

[index.ts:461](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L461)

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

[index.ts:467](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L467)

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

[index.ts:514](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L514)

___

### toDOMRect

**toDOMRect**(): `DOMRect`

#### Returns

`DOMRect`

#### Defined in

[index.ts:532](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L532)

___

### toIntBounding

**toIntBounding**(): [`Rect`](api/classes/Rect.md)

Calculates the smallest integer rectangle which includes this rectangle.

#### Returns

[`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:442](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L442)

___

### toSVGRectProps

**toSVGRectProps**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[index.ts:536](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L536)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:527](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L527)

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

[index.ts:490](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L490)

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

[index.ts:452](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L452)

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

[index.ts:502](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L502)

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

[index.ts:645](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L645)

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

[index.ts:589](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L589)

___

### intersection

`Static` **intersection**(`...rects`): `undefined` \| [`Rect`](api/classes/Rect.md)

Calculates the rectangle that represents the shared region of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](api/classes/Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:569](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L569)

___

### union

`Static` **union**(`...rects`): `undefined` \| [`Rect`](api/classes/Rect.md)

Calculates the bounding rectangle of given rectangles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...rects` | [`Rect`](api/classes/Rect.md)[] |

#### Returns

`undefined` \| [`Rect`](api/classes/Rect.md)

#### Defined in

[index.ts:555](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L555)
