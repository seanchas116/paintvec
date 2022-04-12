[paintvec](api/README.md) / [Exports](api/modules.md) / Segment

# Class: Segment

## Table of contents

### Constructors

- [constructor](api/classes/Segment.md#constructor)

### Properties

- [p1](api/classes/Segment.md#p1)
- [p2](api/classes/Segment.md#p2)

### Accessors

- [angle](api/classes/Segment.md#angle)
- [length](api/classes/Segment.md#length)

### Methods

- [equals](api/classes/Segment.md#equals)
- [toString](api/classes/Segment.md#tostring)
- [transform](api/classes/Segment.md#transform)

## Constructors

### constructor

• **new Segment**(`p1`, `p2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vec2`](api/classes/Vec2.md) |
| `p2` | [`Vec2`](api/classes/Vec2.md) |

#### Defined in

[index.ts:232](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L232)

## Properties

### p1

• **p1**: [`Vec2`](api/classes/Vec2.md)

___

### p2

• **p2**: [`Vec2`](api/classes/Vec2.md)

## Accessors

### angle

• `get` **angle**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:242](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L242)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:238](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L238)

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Segment`](api/classes/Segment.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:234](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L234)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:253](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L253)

___

### transform

▸ **transform**(`transform`): [`Segment`](api/classes/Segment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:246](https://github.com/seanchas116/paintvec/blob/a2da251/index.ts#L246)
