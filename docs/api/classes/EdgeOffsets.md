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

[index.ts:561](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L561)

## Properties

### bottomRight

 **bottomRight**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:561](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L561)

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:561](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L561)

## Accessors

### bottom

`get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:572](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L572)

___

### left

`get` **left**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:563](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L563)

___

### neg

`get` **neg**(): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Defined in

[index.ts:576](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L576)

___

### right

`get` **right**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:569](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L569)

___

### top

`get` **top**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:566](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L566)

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

[index.ts:580](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L580)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:587](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L587)

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

[index.ts:591](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L591)
