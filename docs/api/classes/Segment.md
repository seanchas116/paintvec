# Class: Segment

## Constructors

### constructor

**new Segment**(`p1`, `p2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vec2`](api/classes/Vec2.md) |
| `p2` | [`Vec2`](api/classes/Vec2.md) |

## Properties

### p1

 **p1**: [`Vec2`](api/classes/Vec2.md)

___

### p2

 **p2**: [`Vec2`](api/classes/Vec2.md)

## Accessors

### angle

`get` **angle**(): `number`

#### Returns

`number`

___

### length

`get` **length**(): `number`

#### Returns

`number`

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Segment`](api/classes/Segment.md) |

#### Returns

`boolean`

___

### toString

**toString**(): `string`

#### Returns

`string`

___

### transform

**transform**(`transform`): [`Segment`](api/classes/Segment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Segment`](api/classes/Segment.md)
