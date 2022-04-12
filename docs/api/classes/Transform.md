# Class: Transform

Transform represents 2D affine and perspective transform with 3x3 matrix.

```js
// translate by (100, 200)
const translate = Transform.translate(new Vec2(100, 200))

// 2x scale
const scale = Transform.scale(new Vec2(2))

// rotate 45 degrees
const rotate = Transform.rotate(Math.PI / 4)

// translate then scale then rotate
const transform = translate.merge(scale).merge(rotate)
```

## Constructors

### constructor

**new Transform**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`)

Creates a transform. It returns no-op transform when no arguments given.

```
|x'|   | m00 m10 m20 | |x|
|y'| = | m01 m11 m21 | |y|
|z'|   | m02 m12 m22 | |z|
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m00` | `number` | `1` | Column 0 and row 0 component of this transform. |
| `m01` | `number` | `0` | Column 0 and row 1 component of this transform. |
| `m02` | `number` | `0` | Column 0 and row 2 component of this transform. |
| `m10` | `number` | `0` | Column 1 and row 0 component of this transform. |
| `m11` | `number` | `1` | Column 1 and row 1 component of this transform. |
| `m12` | `number` | `0` | Column 1 and row 2 component of this transform. |
| `m20` | `number` | `0` | Column 2 and row 0 component of this transform. |
| `m21` | `number` | `0` | Column 2 and row 1 component of this transform. |
| `m22` | `number` | `1` | Column 2 and row 2 component of this transform. |

#### Defined in

[index.ts:651](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L651)

## Properties

### m00

 **m00**: `number` = `1`

___

### m01

 **m01**: `number` = `0`

___

### m02

 **m02**: `number` = `0`

___

### m10

 **m10**: `number` = `0`

___

### m11

 **m11**: `number` = `1`

___

### m12

 **m12**: `number` = `0`

___

### m20

 **m20**: `number` = `0`

___

### m21

 **m21**: `number` = `0`

___

### m22

 **m22**: `number` = `1`

## Accessors

### isAffine

`get` **isAffine**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.ts:753](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L753)

___

### isTranslation

`get` **isTranslation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.ts:757](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L757)

___

### members

`get` **members**(): `number`[]

Returns the members (m00, m01, 002, ... m22) in an array.

#### Returns

`number`[]

#### Defined in

[index.ts:784](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L784)

___

### withoutTranslation

`get` **withoutTranslation**(): [`Transform`](api/classes/Transform.md)

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:767](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L767)

## Methods

### equals

**equals**(`other`): `boolean`

Checks if the transforms has same values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Transform`](api/classes/Transform.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:666](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L666)

___

### invert

**invert**(): `undefined` \| [`Transform`](api/classes/Transform.md)

Inverts the transform. Returns undefined if this transform is not invertible.

#### Returns

`undefined` \| [`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:720](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L720)

___

### merge

**merge**(`other`): [`Transform`](api/classes/Transform.md)

Merges 2 transforms. The returned transform represents "transform by this transform, then other transform".

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:683](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L683)

___

### rotate

**rotate**(`angle`): [`Transform`](api/classes/Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:834](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L834)

___

### scale

**scale**(`scale`): [`Transform`](api/classes/Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:826](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L826)

___

### toCSSMatrix3DString

**toCSSMatrix3DString**(): `string`

Returns the CSS matrix3d() string.
This supports perspective transform.

#### Returns

`string`

#### Defined in

[index.ts:814](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L814)

___

### toCSSMatrixString

**toCSSMatrixString**(): `string`

Returns the CSS matrix() string.

#### Returns

`string`

#### Defined in

[index.ts:805](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L805)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:798](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L798)

___

### translate

**translate**(`offset`): [`Transform`](api/classes/Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:830](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L830)

___

### merge

`Static` **merge**(...`transforms`): [`Transform`](api/classes/Transform.md)

Merges all transforms.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...transforms` | [`Transform`](api/classes/Transform.md)[] |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:920](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L920)

___

### quadToQuad

`Static` **quadToQuad**(`from`, `to`): `undefined` \| [`Transform`](api/classes/Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)] |
| `to` | [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)] |

#### Returns

`undefined` \| [`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:895](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L895)

___

### rectToRect

`Static` **rectToRect**(`from`, `to`): [`Transform`](api/classes/Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Rect`](api/classes/Rect.md) |
| `to` | [`Rect`](api/classes/Rect.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:911](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L911)

___

### rotate

`Static` **rotate**(`angle`): [`Transform`](api/classes/Transform.md)

Returns the transform that represents rotating by angle (in radians).

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:848](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L848)

___

### scale

`Static` **scale**(`scale`): [`Transform`](api/classes/Transform.md)

Returns the transform that represents scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:841](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L841)

___

### translate

`Static` **translate**(`translation`): [`Transform`](api/classes/Transform.md)

Returns the transform that represents translating.

#### Parameters

| Name | Type |
| :------ | :------ |
| `translation` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:857](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L857)

___

### unitToQuad

`Static` **unitToQuad**(`quad`): `undefined` \| [`Transform`](api/classes/Transform.md)

Returns the perspective transform that transforms the unit square ([(0, 0), (1, 0), (1, 1), (0, 1)]) to the specified quadrangle.
Reference: Projective Mappings for Image Warping

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [[`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md), [`Vec2`](api/classes/Vec2.md)] |

#### Returns

`undefined` \| [`Transform`](api/classes/Transform.md)

#### Defined in

[index.ts:865](https://github.com/seanchas116/paintvec/blob/53b097f/index.ts#L865)
