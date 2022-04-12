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

#### Defined in

[index.ts:554](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L554)

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

#### Defined in

[index.ts:565](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L565)

___

### left

`get` **left**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:556](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L556)

___

### neg

`get` **neg**(): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Defined in

[index.ts:569](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L569)

___

### right

`get` **right**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:562](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L562)

___

### top

`get` **top**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:559](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L559)

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EdgeOffsets`](api/classes/EdgeOffsets.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:573](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L573)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:580](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L580)

___

### from

`Static` **from**(`options`): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } \| { `bottomRight`: [`Vec2`](api/classes/Vec2.md) ; `topLeft`: [`Vec2`](api/classes/Vec2.md)  } |

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Defined in

[index.ts:584](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L584)
