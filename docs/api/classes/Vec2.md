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

[index.ts:18](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L18)

## Properties

### x

 **x**: `number` = `0`

The x component of this vector.

#### Defined in

[index.ts:18](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L18)

___

### y

 **y**: `number` = `x`

The y component of this vector.

#### Defined in

[index.ts:18](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L18)

## Accessors

### abs

`get` **abs**(): [`Vec2`](api/classes/Vec2.md)

Returns absolute values of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:153](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L153)

___

### angle

`get` **angle**(): `number`

Calculates the angle of this vector from positive x-axis in [-PI, PI].

#### Returns

`number`

#### Defined in

[index.ts:99](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L99)

___

### ceil

`get` **ceil**(): [`Vec2`](api/classes/Vec2.md)

Rounds up the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:140](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L140)

___

### floor

`get` **floor**(): [`Vec2`](api/classes/Vec2.md)

Rounds down the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:134](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L134)

___

### height

`get` **height**(): `number`

Returns y.

#### Returns

`number`

#### Defined in

[index.ts:29](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L29)

___

### length

`get` **length**(): `number`

Calculates the length of this vector.

#### Returns

`number`

#### Defined in

[index.ts:86](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L86)

___

### members

`get` **members**(): [`number`, `number`]

Gets an array of [x, y].

#### Returns

[`number`, `number`]

#### Defined in

[index.ts:182](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L182)

___

### neg

`get` **neg**(): [`Vec2`](api/classes/Vec2.md)

Inverts this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:79](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L79)

___

### round

`get` **round**(): [`Vec2`](api/classes/Vec2.md)

Rounds the components of this vector to nearest integer.

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:146](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L146)

___

### squaredLength

`get` **squaredLength**(): `number`

Calculates the squared length of this vector.

#### Returns

`number`

#### Defined in

[index.ts:92](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L92)

___

### width

`get` **width**(): `number`

Returns x.

#### Returns

`number`

#### Defined in

[index.ts:23](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L23)

## Methods

### add

**add**(`v`): [`Vec2`](api/classes/Vec2.md)

Adds v to this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:43](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L43)

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

[index.ts:162](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L162)

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

[index.ts:115](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L115)

___

### div

**div**(`v`): [`Vec2`](api/classes/Vec2.md)

Divides components of this vector by v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:61](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L61)

___

### divScalar

**divScalar**(`s`): [`Vec2`](api/classes/Vec2.md)

Divides this vector by scalar s.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:73](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L73)

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

[index.ts:107](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L107)

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

[index.ts:36](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L36)

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

[index.ts:124](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L124)

___

### mul

**mul**(`v`): [`Vec2`](api/classes/Vec2.md)

Multiplies components of this vector by v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:55](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L55)

___

### mulScalar

**mulScalar**(`s`): [`Vec2`](api/classes/Vec2.md)

Multiplies this vector by scalar s.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:67](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L67)

___

### sub

**sub**(`v`): [`Vec2`](api/classes/Vec2.md)

Subtracts v from this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vec2`](api/classes/Vec2.md) |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:49](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L49)

___

### toString

**toString**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:186](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L186)

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

[index.ts:172](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L172)

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

[index.ts:194](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L194)

___

### max

`Static` **max**(...`vs`): [`Vec2`](api/classes/Vec2.md)

Returns max value for each component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...vs` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:224](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L224)

___

### min

`Static` **min**(...`vs`): [`Vec2`](api/classes/Vec2.md)

Returns min value for each component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...vs` | [`Vec2`](api/classes/Vec2.md)[] |

#### Returns

[`Vec2`](api/classes/Vec2.md)

#### Defined in

[index.ts:215](https://github.com/seanchas116/paintvec/blob/5d662e3/index.ts#L215)
