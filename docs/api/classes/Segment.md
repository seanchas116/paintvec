[paintvec](../README.md) / [Exports](../modules.md) / Segment

# Class: Segment

## Table of contents

### Constructors

- [constructor](Segment.md#constructor)

### Properties

- [p1](Segment.md#p1)
- [p2](Segment.md#p2)

### Accessors

- [angle](Segment.md#angle)
- [length](Segment.md#length)

### Methods

- [equals](Segment.md#equals)
- [toString](Segment.md#tostring)
- [transform](Segment.md#transform)

## Constructors

### constructor

• **new Segment**(`p1`, `p2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vec2`](Vec2.md) |
| `p2` | [`Vec2`](Vec2.md) |

#### Defined in

[index.ts:232](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L232)

## Properties

### p1

• **p1**: [`Vec2`](Vec2.md)

___

### p2

• **p2**: [`Vec2`](Vec2.md)

## Accessors

### angle

• `get` **angle**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:242](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L242)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:238](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L238)

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Segment`](Segment.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:234](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L234)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:253](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L253)

___

### transform

▸ **transform**(`transform`): [`Segment`](Segment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md) |

#### Returns

[`Segment`](Segment.md)

#### Defined in

[index.ts:246](https://github.com/seanchas116/paintvec/blob/febe25d/index.ts#L246)
