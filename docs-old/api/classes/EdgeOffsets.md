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

[index.ts:660](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L660)

## Properties

### bottomRight

 **bottomRight**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:660](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L660)

___

### topLeft

 **topLeft**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:660](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L660)

## Accessors

### bottom

`get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:671](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L671)

___

### left

`get` **left**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:662](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L662)

___

### neg

`get` **neg**(): [`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Returns

[`EdgeOffsets`](api/classes/EdgeOffsets.md)

#### Defined in

[index.ts:675](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L675)

___

### right

`get` **right**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:668](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L668)

___

### top

`get` **top**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:665](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L665)

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

[index.ts:679](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L679)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:686](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L686)

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

[index.ts:690](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L690)
