[paintvec](../README.md) / [Exports](../modules.md) / EdgeOffsets

# Class: EdgeOffsets

EdgeOffsets represents edge offsets which are applied to rectangles.

## Table of contents

### Constructors

- [constructor](EdgeOffsets.md#constructor)

### Properties

- [bottomRight](EdgeOffsets.md#bottomright)
- [topLeft](EdgeOffsets.md#topleft)

### Accessors

- [bottom](EdgeOffsets.md#bottom)
- [left](EdgeOffsets.md#left)
- [neg](EdgeOffsets.md#neg)
- [right](EdgeOffsets.md#right)
- [top](EdgeOffsets.md#top)

### Methods

- [equals](EdgeOffsets.md#equals)
- [toString](EdgeOffsets.md#tostring)
- [from](EdgeOffsets.md#from)

## Constructors

### constructor

• **new EdgeOffsets**(`topLeft`, `bottomRight`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Vec2`](Vec2.md) |
| `bottomRight` | [`Vec2`](Vec2.md) |

#### Defined in

[index.ts:554](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L554)

## Properties

### bottomRight

• **bottomRight**: [`Vec2`](Vec2.md)

___

### topLeft

• **topLeft**: [`Vec2`](Vec2.md)

## Accessors

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:565](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L565)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:556](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L556)

___

### neg

• `get` **neg**(): [`EdgeOffsets`](EdgeOffsets.md)

#### Returns

[`EdgeOffsets`](EdgeOffsets.md)

#### Defined in

[index.ts:569](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L569)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:562](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L562)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:559](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L559)

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EdgeOffsets`](EdgeOffsets.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:573](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L573)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:580](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L580)

___

### from

▸ `Static` **from**(`options`): [`EdgeOffsets`](EdgeOffsets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } \| { `bottomRight`: [`Vec2`](Vec2.md) ; `topLeft`: [`Vec2`](Vec2.md)  } |

#### Returns

[`EdgeOffsets`](EdgeOffsets.md)

#### Defined in

[index.ts:584](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L584)
