# Class: Vec2

Vec2 represents 2D vector, point or size.

```js
const a = new Vec2(1, 2)
const b = new Vec2(3, 4)
a.add(b) //=> Vec2(4, 6)
a.sub(b) //=> Vec2(-2, -2)
b.length //=> 5
...
```

## Constructors

### constructor

**new Vec2**(`x?`, `y?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x component of this vector. |
| `y` | `number` | `x` | The y component of this vector. |

#### Defined in

[index.ts:18](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L18)

## Properties

### x

 **x**: `number` = `0`

The x component of this vector.

#### Defined in

[index.ts:18](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L18)

___

### y

 **y**: `number` = `x`

The y component of this vector.

#### Defined in

[index.ts:18](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L18)

## Accessors

### abs

`get` **abs**(): [`Vec2`](api/classes/Vec2.md)

Returns absolute values of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:154](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L154)

___

### angle

`get` **angle**(): `number`

Calculates the angle of this vector from positive x-axis in [-PI, PI].

#### Returns

`number`

#### Defined in

[index.ts:100](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L100)

___

### ceil

`get` **ceil**(): [`Vec2`](api/classes/Vec2.md)

Rounds up the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:141](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L141)

___

### floor

`get` **floor**(): [`Vec2`](api/classes/Vec2.md)

Rounds down the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:135](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L135)

___

### height

`get` **height**(): `number`

Returns y.

#### Returns

`number`

#### Defined in

[index.ts:29](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L29)

___

### length

`get` **length**(): `number`

Calculates the length of this vector.

#### Returns

`number`

#### Defined in

[index.ts:87](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L87)

___

### members

`get` **members**(): [`number`, `number`]

Gets an array of [x, y].

#### Returns

[`number`, `number`]

#### Defined in

[index.ts:183](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L183)

___

### neg

`get` **neg**(): [`Vec2`](api/classes/Vec2.md)

Inverts this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:80](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L80)

___

### round

`get` **round**(): [`Vec2`](api/classes/Vec2.md)

Rounds the components of this vector to nearest integer.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:147](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L147)

___

### squaredLength

`get` **squaredLength**(): `number`

Calculates the squared length of this vector.

#### Returns

`number`

#### Defined in

[index.ts:93](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L93)

___

### width

`get` **width**(): `number`

Returns x.

#### Returns

`number`

#### Defined in

[index.ts:23](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L23)

## Methods

### add

**add**(`v`): [`Vec2`](api/classes/Vec2.md)

Adds v to this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:43](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L43)

___

### clamp

**clamp**(`min`, `max`): [`Vec2`](api/classes/Vec2.md)

Clamp the components within the min and max values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Vec2`](api/classes/Vec2.md) |
| `max` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:163](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L163)

___

### cross

**cross**(`other`): `number`

Returns the cross product of this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

`number`

#### Defined in

[index.ts:116](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L116)

___

### div

**div**(`v`): [`Vec2`](api/classes/Vec2.md)

Divides components of this vector by v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:70](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L70)

___

### dot

**dot**(`other`): `number`

Returns the dot product of this and other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

`number`

#### Defined in

[index.ts:108](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L108)

___

### equals

**equals**(`v`): `boolean`

Checks if the vectors has same values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:36](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L36)

___

### mix

**mix**(`other`, `ratio`): [`Vec2`](api/classes/Vec2.md)

Returns this * (1 - ratio) + other * ratio.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vec2`](api/classes/Vec2.md) |
| `ratio` | `number` |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:125](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L125)

___

### mul

**mul**(`v`): [`Vec2`](api/classes/Vec2.md)

Multiplies components of this vector by v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:61](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L61)

___

### sub

**sub**(`v`): [`Vec2`](api/classes/Vec2.md)

Subtracts v from this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:52](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L52)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:187](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L187)

___

### transform

**transform**(`transform`): [`Vec2`](api/classes/Vec2.md)

Transforms this vector with transform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](api/classes/Transform.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:173](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L173)

___

### from

`Static` **from**(`options`): [`Vec2`](api/classes/Vec2.md)

Constructs Vec2 from vec2-like objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `number` \| `number`[] \| { `x?`: `number` ; `y?`: `number`  } |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:195](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L195)

___

### max

`Static` **max**(`...vs`): [`Vec2`](api/classes/Vec2.md)

Returns max value for each component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...vs` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:225](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L225)

___

### min

`Static` **min**(`...vs`): [`Vec2`](api/classes/Vec2.md)

Returns min value for each component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...vs` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:216](https://github.com/seanchas116/paintvec/blob/8211046/index.ts#L216)
