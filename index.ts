
export
class Vec2 {
  constructor(public readonly x = 0, public readonly y = x) {
  }

  get width() {
    return this.x
  }
  get height() {
    return this.y
  }

  equals(a: Vec2) {
    return this.x == a.x && this.y == a.y
  }

  add(a: Vec2) {
    return new Vec2(this.x + a.x, this.y + a.y)
  }
  sub(a: Vec2) {
    return new Vec2(this.x - a.x, this.y - a.y)
  }
  mul(a: Vec2) {
    return new Vec2(this.x * a.x, this.y * a.y)
  }
  div(a: Vec2) {
    return new Vec2(this.x / a.x, this.y / a.y)
  }
  mulScalar(a: number) {
    return new Vec2(this.x * a, this.y * a)
  }
  divScalar(a: number) {
    return new Vec2(this.x / a, this.y / a)
  }
  neg() {
    return  new Vec2(-this.x, -this.y)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  squaredLength() {
    return this.x * this.x + this.y * this.y
  }

  angle() {
    return Math.atan2(this.y, this.x)
  }

  floor() {
    return new Vec2(Math.floor(this.x), Math.floor(this.y))
  }
  ceil() {
    return new Vec2(Math.ceil(this.x), Math.ceil(this.y))
  }
  round() {
    return new Vec2(Math.round(this.x), Math.round(this.y))
  }

  transform(transform: Transform) {
    const x = transform.m00 * this.x + transform.m10 * this.y + transform.m20
    const y = transform.m01 * this.x + transform.m11 * this.y + transform.m21
    const w = transform.m02 * this.x + transform.m12 * this.y + transform.m22
    return new Vec2(x / w, y / w)
  }

  members() {
    return [this.x, this.y]
  }

  toString() {
    return `Vec2(${this.x},${this.y})`
  }
}

export
class Rect {
  constructor(public readonly topLeft: Vec2, public readonly bottomRight: Vec2) {
  }

  equals(other: Rect) {
    return this.topLeft.equals(other.topLeft) && this.bottomRight.equals(other.bottomRight)
  }

  get size() {
    return this.bottomRight.sub(this.topLeft)
  }
  get topRight() {
    return new Vec2(this.right, this.top)
  }
  get bottomLeft() {
    return new Vec2(this.left, this.bottom)
  }

  get left() {
    return this.topLeft.x
  }
  get top() {
    return this.topLeft.y
  }
  get right() {
    return this.bottomRight.x
  }
  get bottom() {
    return this.bottomRight.y
  }
  get width() {
    return this.size.x
  }
  get height() {
    return this.size.y
  }

  get isEmpty() {
    return this.width <= 0 || this.height <= 0
  }

  intBounding() {
    const min = this.topLeft.floor()
    const max = this.topLeft.add(this.size).ceil()
    return new Rect(min, max.sub(min))
  }

  transform(transform: Transform) {
    const points = [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight]
    const mapped = points.map(p => p.transform(transform))
    const xs = mapped.map(p => p.x)
    const ys = mapped.map(p => p.y)
    const left = Math.min(...xs)
    const right = Math.max(...xs)
    const top = Math.min(...ys)
    const bottom = Math.max(...ys)
    return new Rect(new Vec2(left, top), new Vec2(left, bottom))
  }

  toString() {
    return `Rect(${this.topLeft},${this.bottomRight})`
  }

  static union(...rects: Rect[]) {
    rects = rects.filter(r => !r.isEmpty)
    if (rects.length == 0) {
      return new Rect(new Vec2(), new Vec2())
    }
    const left = Math.min(...rects.map(r => r.left))
    const top = Math.min(...rects.map(r => r.top))
    const right = Math.max(...rects.map(r => r.right))
    const bottom = Math.max(...rects.map(r => r.bottom))
    return new Rect(new Vec2(left, top), new Vec2(right, bottom))
  }

  static intersection(...rects: Rect[]) {
    const isEmpty = rects.some(r => r.isEmpty)
    if (isEmpty) {
      return new Rect(new Vec2(), new Vec2())
    }
    const left = Math.max(...rects.map(r => r.left))
    const top = Math.max(...rects.map(r => r.top))
    const right = Math.min(...rects.map(r => r.right))
    const bottom = Math.min(...rects.map(r => r.bottom))
    return new Rect(new Vec2(left, top), new Vec2(right, bottom))
  }
}

export
class Transform {
  // [m00 m10 m20]
  // [m01 m11 m21]
  // [m02 m12 m22]
  constructor(
    public readonly m00 = 1, public readonly m01 = 0, public readonly m02 = 0,
    public readonly m10 = 0, public readonly m11 = 1, public readonly m12 = 0,
    public readonly m20 = 0, public readonly m21 = 0, public readonly m22 = 1,
  ) {
  }

  equals(other: Transform) {
    return (
      this.m00 == other.m00 &&
      this.m01 == other.m01 &&
      this.m02 == other.m02 &&
      this.m10 == other.m10 &&
      this.m11 == other.m11 &&
      this.m12 == other.m12 &&
      this.m20 == other.m20 &&
      this.m21 == other.m21 &&
      this.m22 == other.m22
    )
  }

  merge(other: Transform) {
    const a00 = other.m00
    const a01 = other.m01
    const a02 = other.m02
    const a10 = other.m10
    const a11 = other.m11
    const a12 = other.m12
    const a20 = other.m20
    const a21 = other.m21
    const a22 = other.m22

    const b00 = this.m00
    const b01 = this.m01
    const b02 = this.m02
    const b10 = this.m10
    const b11 = this.m11
    const b12 = this.m12
    const b20 = this.m20
    const b21 = this.m21
    const b22 = this.m22

    const m00 = b00 * a00 + b01 * a10 + b02 * a20
    const m01 = b00 * a01 + b01 * a11 + b02 * a21
    const m02 = b00 * a02 + b01 * a12 + b02 * a22
    const m10 = b10 * a00 + b11 * a10 + b12 * a20
    const m11 = b10 * a01 + b11 * a11 + b12 * a21
    const m12 = b10 * a02 + b11 * a12 + b12 * a22
    const m20 = b20 * a00 + b21 * a10 + b22 * a20
    const m21 = b20 * a01 + b21 * a11 + b22 * a21
    const m22 = b20 * a02 + b21 * a12 + b22 * a22

    return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22)
  }

  invert() {
    const a00 = this.m00
    const a01 = this.m01
    const a02 = this.m02
    const a10 = this.m10
    const a11 = this.m11
    const a12 = this.m12
    const a20 = this.m20
    const a21 = this.m21
    const a22 = this.m22
    const b01 = a22 * a11 - a12 * a21
    const b11 = -a22 * a10 + a12 * a20
    const b21 = a21 * a10 - a11 * a20
    const det = a00 * b01 + a01 * b11 + a02 * b21

    if (!det) {
      return undefined
    }

    const detInv = 1.0 / det;
    const m00 = b01 * detInv
    const m01 = (-a22 * a01 + a02 * a21) * detInv
    const m02 = (a12 * a01 - a02 * a11) * detInv
    const m10 = b11 * detInv
    const m11 = (a22 * a00 - a02 * a20) * detInv
    const m12 = (-a12 * a00 + a02 * a10) * detInv
    const m20 = b21 * detInv
    const m21 = (-a21 * a00 + a01 * a20) * detInv
    const m22 = (a11 * a00 - a01 * a10) * detInv

    return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22)
  }

  members() {
    return [
      this.m00,
      this.m01,
      this.m02,
      this.m10,
      this.m11,
      this.m12,
      this.m20,
      this.m21,
      this.m22,
    ]
  }

  toString() {
    return `Transform(${this.members().join(",")})`
  }

  static scale(scale: Vec2) {
    return new Transform(
      scale.x, 0, 0,
      0, scale.y, 0,
      0, 0, 1
    )
  }

  static rotate(rotation: number) {
    const c = Math.cos(rotation)
    const s = Math.sin(rotation)
    return new Transform(
      c, s, 0,
      -s, c, 0,
      0, 0, 1
    )
  }

  static translate(translation: Vec2) {
    return new Transform(
      1, 0, 0,
      0, 1, 0,
      translation.x, translation.y, 1
    )
  }
}
