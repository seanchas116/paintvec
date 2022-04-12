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

## Properties

### x

 **x**: `number` = `0`

___

### y

 **y**: `number` = `x`

## Accessors

### abs

`get` **abs**(): [`Vec2`](api/classes/Vec2.md)

Returns absolute values of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### angle

`get` **angle**(): `number`

Calculates the angle of this vector from positive x-axis in [-PI, PI].

#### Returns

`number`

___

### ceil

`get` **ceil**(): [`Vec2`](api/classes/Vec2.md)

Rounds up the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### floor

`get` **floor**(): [`Vec2`](api/classes/Vec2.md)

Rounds down the components of this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### height

`get` **height**(): `number`

Returns y.

#### Returns

`number`

___

### length

`get` **length**(): `number`

Calculates the length of this vector.

#### Returns

`number`

___

### members

`get` **members**(): [`number`, `number`]

Gets an array of [x, y].

#### Returns

[`number`, `number`]

___

### neg

`get` **neg**(): [`Vec2`](api/classes/Vec2.md)

Inverts this vector.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### round

`get` **round**(): [`Vec2`](api/classes/Vec2.md)

Rounds the components of this vector to nearest integer.

#### Returns

[`Vec2`](api/classes/Vec2.md)

___

### squaredLength

`get` **squaredLength**(): `number`

Calculates the squared length of this vector.

#### Returns

`number`

___

### width

`get` **width**(): `number`

Returns x.

#### Returns

`number`

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

___

### toString

**toString**(): `string`

#### Returns

`string`

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
