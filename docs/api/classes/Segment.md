# Class: Segment

## Constructors

### constructor

**new Segment**(`p1`, `p2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vec2`](api/classes/Vec2.md) |
| `p2` | [`Vec2`](api/classes/Vec2.md) |

#### Defined in

[index.ts:233](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L233)

## Properties

### p1

 **p1**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:233](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L233)

___

### p2

 **p2**: [`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:233](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L233)

## Accessors

### angle

`get` **angle**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:243](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L243)

___

### length

`get` **length**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:239](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L239)

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Segment`](api/classes/Segment.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:235](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L235)

___

### mix

**mix**(`other`, `ratio`): [`Segment`](api/classes/Segment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Segment`](api/classes/Segment.md) |
| `ratio` | `number` |

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:254](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L254)

___

### toSVGLineProps

**toSVGLineProps**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `x2` | `number` |
| `y1` | `number` |
| `y2` | `number` |

#### Defined in

[index.ts:266](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L266)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:261](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L261)

___

### transform

**transform**(`transform`): [`Segment`](api/classes/Segment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Segment`](api/classes/Segment.md)

#### Defined in

[index.ts:247](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L247)
