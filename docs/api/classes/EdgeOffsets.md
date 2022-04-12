# Class: EdgeOffsets

EdgeOffsets represents edge offsets which are applied to rectangles.

## Constructors

### constructor

**new EdgeOffsets**(`topLeft`, `bottomRight`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Vec2`](api/classes/Vec2.md) |
| `bottomRight` | [`Vec2`](api/classes/Vec2.md) |

## Properties

### bottomRight

 **bottomRight**: [`Vec2`](api/classes/Vec2.md)

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

## Accessors

### bottom

`get` **bottom**(): `number`

#### Returns

`number`

___

### left

`get` **left**(): `number`

#### Returns

`number`

___

### neg

`get` **neg**(): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

___

### right

`get` **right**(): `number`

#### Returns

`number`

___

### top

`get` **top**(): `number`

#### Returns

`number`

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EdgeOffsets`](api/classes/EdgeOffsets.md) |

#### Returns

`boolean`

___

### toString

**toString**(): `string`

#### Returns

`string`

___

### from

`Static` **from**(`options`): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } \| { `bottomRight`: [`Vec2`](api/classes/Vec2.md) ; `topLeft`: [`Vec2`](api/classes/Vec2.md)  } |

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)
