/**
  Vec2 represents 2D vector, point or size.

  ```js
  const a = new Vec2(1, 2)
  const b = new Vec2(3, 4)
  a.add(b) //=> Vec2(4, 6)
  a.sub(b) //=> Vec2(-2, -2)
  b.length //=> 5
  ...
  ```
*/
export class Vec2 {
  /**
    @param x The x component of this vector.
    @param y The y component of this vector.
  */
  constructor(public x = 0, public y = x) {}

  /**
   * Returns x.
   */
  get width() {
    return this.x;
  }
  /**
   * Returns y.
   */
  get height() {
    return this.y;
  }

  /**
    Checks if the vectors has same values.
  */
  equals(v: Vec2) {
    return this.x == v.x && this.y == v.y;
  }

  /**
    Adds v to this vector.
  */
  add(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x + v, this.y + v);
    }
    return new Vec2(this.x + v.x, this.y + v.y);
  }
  /**
    Subtracts v from this vector.
  */
  sub(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x - v, this.y - v);
    }
    return new Vec2(this.x - v.x, this.y - v.y);
  }
  /**
    Multiplies components of this vector by v.
  */
  mul(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x * v, this.y * v);
    }
    return new Vec2(this.x * v.x, this.y * v.y);
  }
  /**
    Divides components of this vector by v.
  */
  div(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x / v, this.y / v);
    }
    return new Vec2(this.x / v.x, this.y / v.y);
  }

  /**
    Inverts this vector.
  */
  get neg() {
    return new Vec2(-this.x, -this.y);
  }

  /**
    Calculates the length of this vector.
  */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
    Calculates the squared length of this vector.
  */
  get squaredLength() {
    return this.x * this.x + this.y * this.y;
  }

  /**
    Calculates the angle of this vector from positive x-axis in [-PI, PI].
  */
  get angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Returns the dot product of this and other.
   * @param other
   */
  dot(other: Vec2) {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Returns the cross product of this and other.
   * @param other
   */
  cross(other: Vec2) {
    return this.x * other.y - this.y * other.x;
  }

  /**
   * Returns this * (1 - ratio) + other * ratio.
   * @param other
   * @param ratio
   */
  mix(other: Vec2, ratio: number) {
    return new Vec2(
      this.x * (1 - ratio) + other.x * ratio,
      this.y * (1 - ratio) + other.y * ratio
    );
  }

  /**
    Rounds down the components of this vector.
  */
  get floor() {
    return new Vec2(Math.floor(this.x), Math.floor(this.y));
  }
  /**
    Rounds up the components of this vector.
  */
  get ceil() {
    return new Vec2(Math.ceil(this.x), Math.ceil(this.y));
  }
  /**
    Rounds the components of this vector to nearest integer.
  */
  get round() {
    return new Vec2(Math.round(this.x), Math.round(this.y));
  }

  /**
   * Returns absolute values of this vector.
   */
  get abs() {
    return new Vec2(Math.abs(this.x), Math.abs(this.y));
  }

  /**
   * Clamp the components within the min and max values.
   * @param min
   * @param max
   */
  clamp(min: Vec2, max: Vec2) {
    return new Vec2(
      Math.max(min.x, Math.min(this.x, max.x)),
      Math.max(min.y, Math.min(this.y, max.y))
    );
  }

  /**
    Transforms this vector with transform.
  */
  transform(transform: Transform) {
    const x = transform.m00 * this.x + transform.m10 * this.y + transform.m20;
    const y = transform.m01 * this.x + transform.m11 * this.y + transform.m21;
    const w = transform.m02 * this.x + transform.m12 * this.y + transform.m22;
    return new Vec2(x / w, y / w);
  }

  /**
    Gets an array of [x, y].
  */
  get members(): [number, number] {
    return [this.x, this.y];
  }

  toString() {
    return `Vec2(${this.x},${this.y})`;
  }

  /**
   * Constructs Vec2 from vec2-like objects.
   * @param options
   */
  static from(
    options:
      | number
      | number[]
      | {
          x?: number;
          y?: number;
        }
  ) {
    if (typeof options == "number") {
      return new Vec2(options, options);
    } else if (Array.isArray(options)) {
      return new Vec2(options[0] ?? 0, options[1] ?? 0);
    } else {
      return new Vec2(options.x ?? 0, options.y ?? 0);
    }
  }

  /**
   * Returns min value for each component.
   */
  static min(...vs: Vec2[]) {
    const x = Math.min(...vs.map((v) => v.x));
    const y = Math.min(...vs.map((v) => v.y));
    return new Vec2(x, y);
  }

  /**
   * Returns max value for each component.
   */
  static max(...vs: Vec2[]) {
    const x = Math.max(...vs.map((v) => v.x));
    const y = Math.max(...vs.map((v) => v.y));
    return new Vec2(x, y);
  }
}

export class Segment {
  constructor(public p1: Vec2, public p2: Vec2) {}

  equals(other: Segment) {
    return this.p1.equals(other.p1) && this.p2.equals(other.p2);
  }

  get length() {
    return this.p2.sub(this.p1).length;
  }

  get angle() {
    return this.p2.sub(this.p1).angle;
  }

  transform(transform: Transform) {
    return new Segment(
      this.p1.transform(transform),
      this.p2.transform(transform)
    );
  }

  mix(other: Segment, ratio: number) {
    return new Segment(
      this.p1.mix(other.p1, ratio),
      this.p2.mix(other.p2, ratio)
    );
  }

  toString() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `Segment(${this.p1},${this.p2})`;
  }

  toSVGLineProps() {
    return {
      x1: this.p1.x,
      y1: this.p1.y,
      x2: this.p2.x,
      y2: this.p2.y,
    };
  }
}

/**
  Rect represents rectangle in 2D space.

  ```js
  // 100*200 rectangle at (0, 0)
  const r1 = new Rect(new Vec2(0), new Vec2(100, 200))
  // 200*300 rectangle at (50, 50)
  const r2 = new Rect(new Vec2(50, 50), new Vec2(200, 300))

  ...
  ```
*/
export class Rect {
  /**
    Creates a rectangle. It returns empty rectangle when no arguments given.
    @param topLeft The top-left position (in top-left origin coordinates) of this rectangle.
    @param size The size of this rectangle.
  */
  constructor(public topLeft = new Vec2(), public size = new Vec2()) {}

  /**
    Checks if the rectangles has same values.
  */
  equals(other: Rect) {
    return this.topLeft.equals(other.topLeft) && this.size.equals(other.size);
  }

  get tl() {
    return this.topLeft;
  }

  /**
   * The bottom-right position (in top-left origin coordinates) of this rectangle.
   */
  get bottomRight() {
    return this.topLeft.add(this.size);
  }

  get br() {
    return this.bottomRight;
  }

  /**
    The top-right position (in top-left origin coordinates) of this rectangle.
  */
  get topRight() {
    return new Vec2(this.right, this.top);
  }

  get tr() {
    return this.topRight;
  }

  /**
    The bottom-lect position (in top-left origin coordinates) of this rectangle.
  */
  get bottomLeft() {
    return new Vec2(this.left, this.bottom);
  }

  get bl() {
    return this.bottomLeft;
  }

  /**
    The left coordinate (in top-left origin coordinates) of this rectangle.
  */
  get left() {
    return this.topLeft.x;
  }
  get l() {
    return this.left;
  }

  /**
    The top coordinate (in top-left origin coordinates) of this rectangle.
  */
  get top() {
    return this.topLeft.y;
  }
  get t() {
    return this.top;
  }
  /**
    The right coordinate (in top-left origin coordinates) of this rectangle.
  */
  get right() {
    return this.left + this.width;
  }
  get r() {
    return this.right;
  }
  /**
    The bottom coordinate (in top-left origin coordinates) of this rectangle.
  */
  get bottom() {
    return this.top + this.height;
  }
  get b() {
    return this.bottom;
  }
  /**
    The width of this rectangle.
  */
  get width() {
    return this.size.x;
  }
  get w() {
    return this.width;
  }
  /**
    The width of this rectangle.
  */
  get height() {
    return this.size.y;
  }
  get h() {
    return this.height;
  }

  /**
   * The center of this rectangle.
   */
  get center() {
    return this.topLeft.add(this.size.mul(0.5));
  }

  get topLine() {
    return new Segment(this.topLeft, this.topRight);
  }

  get bottomLine() {
    return new Segment(this.bottomLeft, this.bottomRight);
  }

  get leftLine() {
    return new Segment(this.topLeft, this.bottomLeft);
  }

  get rightLine() {
    return new Segment(this.topRight, this.bottomRight);
  }

  get startLines(): {
    x: Segment;
    y: Segment;
  } {
    return {
      x: this.leftLine,
      y: this.topLine,
    };
  }

  get endLines(): {
    x: Segment;
    y: Segment;
  } {
    return {
      x: this.rightLine,
      y: this.bottomLine,
    };
  }

  /**
    Calculates the smallest integer rectangle which includes this rectangle.
  */
  toIntBounding() {
    const topLeft = this.topLeft.floor;
    const bottomRight = this.bottomRight.ceil;
    return new Rect(topLeft, bottomRight.sub(topLeft));
  }

  /**
   * Translates this rectangle by offset.
   * @param offset
   */
  translate(offset: Vec2) {
    return new Rect(this.topLeft.add(offset), this.size);
  }

  inflate(offset: number) {
    const d = new Vec2(offset);
    return new Rect(this.topLeft.sub(d), this.size.add(d.mul(2)));
  }

  inset(offsets: EdgeOffsets) {
    const topLeft = this.topLeft.add(offsets.topLeft);
    const bottomRight = this.bottomRight.sub(offsets.bottomRight);
    return new Rect(topLeft, bottomRight.sub(topLeft));
  }

  insetsTo(other: Rect) {
    return new EdgeOffsets(
      other.topLeft.sub(this.topLeft),
      this.bottomRight.sub(other.bottomRight)
    );
  }

  /**
   * Returns if this rectangle include pos.
   * @param pos
   */
  includes(pos: Vec2) {
    return (
      this.left <= pos.x &&
      pos.x <= this.right &&
      this.top <= pos.y &&
      pos.y <= this.bottom
    );
  }

  /**
    Transforms each corners by transform and returns the bounding rectangle.
  */
  transform(transform: Transform) {
    const topLeft = this.topLeft.transform(transform);
    const topRight = this.topRight.transform(transform);
    const bottomLeft = this.bottomLeft.transform(transform);
    const bottomRight = this.bottomRight.transform(transform);
    return Rect.boundingRect([topLeft, topRight, bottomLeft, bottomRight]);
  }

  /**
   * Returns the smallest rectangle which contains both this and other.
   * @param other
   */
  union(other: Rect) {
    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
   * Returns the largest rectangle contained in both this and other.
   * @param other
   */
  intersection(other: Rect) {
    const left = Math.max(this.left, other.left);
    const top = Math.max(this.top, other.top);
    const right = Math.min(this.right, other.right);
    const bottom = Math.min(this.bottom, other.bottom);
    const width = right - left;
    const height = bottom - top;

    if (width > 0 && height > 0) {
      return new Rect(new Vec2(left, top), new Vec2(width, height));
    }
  }

  toString() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `Rect(${this.topLeft},${this.bottomRight})`;
  }

  toDOMRect() {
    return new DOMRect(this.left, this.top, this.width, this.height);
  }

  toSVGRectProps() {
    return {
      x: this.left,
      y: this.top,
      width: this.width,
      height: this.height,
    };
  }

  /**
   * Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.
   */
  get vertices(): [Vec2, Vec2, Vec2, Vec2] {
    return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
  }

  /**
    Calculates the bounding rectangle of given rectangles.
  */
  static union(...rects: Rect[]) {
    if (rects.length == 0) {
      return;
    }
    const left = Math.min(...rects.map((r) => r.left));
    const top = Math.min(...rects.map((r) => r.top));
    const right = Math.max(...rects.map((r) => r.right));
    const bottom = Math.max(...rects.map((r) => r.bottom));
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
    Calculates the rectangle that represents the shared region of given rectangles.
  */
  static intersection(...rects: Rect[]) {
    if (rects.length == 0) {
      return;
    }
    const left = Math.max(...rects.map((r) => r.left));
    const top = Math.max(...rects.map((r) => r.top));
    const right = Math.min(...rects.map((r) => r.right));
    const bottom = Math.min(...rects.map((r) => r.bottom));
    const width = right - left;
    const height = bottom - top;

    if (width > 0 && height > 0) {
      return new Rect(new Vec2(left, top), new Vec2(width, height));
    }
  }

  /**
   * Creates Rect from rect-like objects.
   * @param options
   */
  static from(
    options:
      | {
          x: number;
          y: number;
          width: number;
          height: number;
        }
      | {
          left: number;
          top: number;
          width: number;
          height: number;
        }
      | {
          left: number;
          top: number;
          right: number;
          bottom: number;
        }
      | {
          topLeft: Vec2;
          bottomRight: Vec2;
        }
      | {
          topLeft: Vec2;
          size: Vec2;
        }
  ) {
    if ("x" in options) {
      return new Rect(
        new Vec2(options.x, options.y),
        new Vec2(options.width, options.height)
      );
    }
    if ("width" in options) {
      return new Rect(
        new Vec2(options.left, options.top),
        new Vec2(options.width, options.height)
      );
    }
    if ("right" in options) {
      return new Rect(
        new Vec2(options.left, options.top),
        new Vec2(options.right - options.left, options.bottom - options.top)
      );
    }
    if ("bottomRight" in options) {
      return new Rect(
        options.topLeft,
        options.bottomRight.sub(options.topLeft)
      );
    }
    return new Rect(options.topLeft, options.size);
  }

  static boundingRect(points: Vec2[]) {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const left = Math.min(...xs);
    const right = Math.max(...xs);
    const top = Math.min(...ys);
    const bottom = Math.max(...ys);
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }
}

/**
 * EdgeOffsets represents edge offsets which are applied to rectangles.
 */
export class EdgeOffsets {
  constructor(public topLeft: Vec2, public bottomRight: Vec2) {}

  get left() {
    return this.topLeft.x;
  }
  get top() {
    return this.topLeft.y;
  }
  get right() {
    return this.bottomRight.x;
  }
  get bottom() {
    return this.bottomRight.y;
  }

  get neg() {
    return new EdgeOffsets(this.topLeft.neg, this.bottomRight.neg);
  }

  equals(other: EdgeOffsets) {
    return (
      this.topLeft.equals(other.topLeft) &&
      this.bottomRight.equals(other.bottomRight)
    );
  }

  toString() {
    return `EdgeOffsets(${this.left},${this.top},${this.right},${this.bottom})`;
  }

  static from(
    options:
      | number
      | {
          left: number;
          top: number;
          right: number;
          bottom: number;
        }
      | {
          topLeft: Vec2;
          bottomRight: Vec2;
        }
  ) {
    if (typeof options == "number") {
      return new EdgeOffsets(
        new Vec2(options, options),
        new Vec2(options, options)
      );
    }
    if ("left" in options) {
      return new EdgeOffsets(
        new Vec2(options.left, options.top),
        new Vec2(options.right, options.bottom)
      );
    }
    return new EdgeOffsets(options.topLeft, options.bottomRight);
  }
}

/**
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
*/
export class Transform {
  /**
    Creates a transform. It returns no-op transform when no arguments given.

    ```
    |x'|   | m00 m10 m20 | |x|
    |y'| = | m01 m11 m21 | |y|
    |z'|   | m02 m12 m22 | |z|
    ```

    @param m00 Column 0 and row 0 component of this transform.
    @param m01 Column 0 and row 1 component of this transform.
    @param m02 Column 0 and row 2 component of this transform.
    @param m10 Column 1 and row 0 component of this transform.
    @param m11 Column 1 and row 1 component of this transform.
    @param m12 Column 1 and row 2 component of this transform.
    @param m20 Column 2 and row 0 component of this transform.
    @param m21 Column 2 and row 1 component of this transform.
    @param m22 Column 2 and row 2 component of this transform.
  */
  constructor(
    public m00 = 1,
    public m01 = 0,
    public m02 = 0,
    public m10 = 0,
    public m11 = 1,
    public m12 = 0,
    public m20 = 0,
    public m21 = 0,
    public m22 = 1
  ) {}

  /**
    Checks if the transforms has same values.
  */
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
    );
  }

  /**
    Merges 2 transforms. The returned transform represents "transform by this transform, then other transform".
  */
  merge(other: Transform) {
    const a00 = other.m00;
    const a01 = other.m01;
    const a02 = other.m02;
    const a10 = other.m10;
    const a11 = other.m11;
    const a12 = other.m12;
    const a20 = other.m20;
    const a21 = other.m21;
    const a22 = other.m22;

    const b00 = this.m00;
    const b01 = this.m01;
    const b02 = this.m02;
    const b10 = this.m10;
    const b11 = this.m11;
    const b12 = this.m12;
    const b20 = this.m20;
    const b21 = this.m21;
    const b22 = this.m22;

    const m00 = b00 * a00 + b01 * a10 + b02 * a20;
    const m01 = b00 * a01 + b01 * a11 + b02 * a21;
    const m02 = b00 * a02 + b01 * a12 + b02 * a22;
    const m10 = b10 * a00 + b11 * a10 + b12 * a20;
    const m11 = b10 * a01 + b11 * a11 + b12 * a21;
    const m12 = b10 * a02 + b11 * a12 + b12 * a22;
    const m20 = b20 * a00 + b21 * a10 + b22 * a20;
    const m21 = b20 * a01 + b21 * a11 + b22 * a21;
    const m22 = b20 * a02 + b21 * a12 + b22 * a22;

    return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  /**
    Inverts the transform. Returns undefined if this transform is not invertible.
  */
  invert() {
    const a00 = this.m00;
    const a01 = this.m01;
    const a02 = this.m02;
    const a10 = this.m10;
    const a11 = this.m11;
    const a12 = this.m12;
    const a20 = this.m20;
    const a21 = this.m21;
    const a22 = this.m22;
    const b01 = a22 * a11 - a12 * a21;
    const b11 = -a22 * a10 + a12 * a20;
    const b21 = a21 * a10 - a11 * a20;
    const det = a00 * b01 + a01 * b11 + a02 * b21;

    if (Math.abs(det) < 1e-4) {
      return;
    }

    const detInv = 1.0 / det;
    const m00 = b01 * detInv;
    const m01 = (-a22 * a01 + a02 * a21) * detInv;
    const m02 = (a12 * a01 - a02 * a11) * detInv;
    const m10 = b11 * detInv;
    const m11 = (a22 * a00 - a02 * a20) * detInv;
    const m12 = (-a12 * a00 + a02 * a10) * detInv;
    const m20 = b21 * detInv;
    const m21 = (-a21 * a00 + a01 * a20) * detInv;
    const m22 = (a11 * a00 - a01 * a10) * detInv;

    return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  get isAffine() {
    return this.m02 == 0 && this.m12 == 0 && this.m22 == 1;
  }

  get isTranslation() {
    return (
      this.isAffine &&
      this.m00 == 1 &&
      this.m01 == 0 &&
      this.m10 == 0 &&
      this.m11 == 1
    );
  }

  get withoutTranslation() {
    return new Transform(
      this.m00,
      this.m01,
      this.m02,
      this.m10,
      this.m11,
      this.m12,
      0,
      0,
      1
    );
  }

  /**
    Returns the members (m00, m01, 002, ... m22) in an array.
  */
  get members() {
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
    ];
  }

  toString() {
    return `Transform(${this.members.join(",")})`;
  }

  /**
   * Returns the CSS matrix() string.
   */
  toCSSMatrixString() {
    const { m00, m01, m10, m11, m20, m21 } = this;
    return `matrix(${m00},${m01},${m10},${m11},${m20},${m21})`;
  }

  /**
   * Returns the CSS matrix3d() string.
   * This supports perspective transform.
   */
  toCSSMatrix3DString() {
    const { m00, m01, m02, m10, m11, m12, m20, m21, m22 } = this;
    // prettier-ignore
    const members = [
      m00, m01, 0, m02,
      m10, m11, 0, m12,
      0, 0, 1, 0,
      m20, m21, 0, m22,
    ];
    return `matrix3d(${members.join(",")})`;
  }

  scale(scale: Vec2) {
    return this.merge(Transform.scale(scale));
  }

  translate(offset: Vec2) {
    return this.merge(Transform.translate(offset));
  }

  rotate(angle: number) {
    return this.merge(Transform.rotate(angle));
  }

  /**
    Returns the transform that represents scaling.
  */
  static scale(scale: Vec2) {
    return new Transform(scale.x, 0, 0, 0, scale.y, 0, 0, 0, 1);
  }

  /**
    Returns the transform that represents rotating by angle (in radians).
  */
  static rotate(angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Transform(c, s, 0, -s, c, 0, 0, 0, 1);
  }

  /**
    Returns the transform that represents translating.
  */
  static translate(translation: Vec2) {
    return new Transform(1, 0, 0, 0, 1, 0, translation.x, translation.y, 1);
  }

  /**
   * Returns the perspective transform that transforms the unit square ([(0, 0), (1, 0), (1, 1), (0, 1)]) to the specified quadrangle.
   * Reference: Projective Mappings for Image Warping
   */
  static unitToQuad(quad: [Vec2, Vec2, Vec2, Vec2]) {
    const [
      { x: x0, y: y0 },
      { x: x1, y: y1 },
      { x: x2, y: y2 },
      { x: x3, y: y3 },
    ] = quad;

    const dx1 = x1 - x2;
    const dx2 = x3 - x2;
    const sx = x0 - x1 + x2 - x3;
    const dy1 = y1 - y2;
    const dy2 = y3 - y2;
    const sy = y0 - y1 + y2 - y3;

    const det = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(det) < 1e-4) {
      return;
    }
    const g = (sx * dy2 - sy * dx2) / det;
    const h = (dx1 * sy - dy1 * sx) / det;
    const a = x1 - x0 + g * x1;
    const b = x3 - x0 + h * x3;
    const c = x0;
    const d = y1 - y0 + g * y1;
    const e = y3 - y0 + h * y3;
    const f = y0;
    return new Transform(a, d, g, b, e, h, c, f, 1);
  }

  static quadToQuad(
    from: [Vec2, Vec2, Vec2, Vec2],
    to: [Vec2, Vec2, Vec2, Vec2]
  ) {
    const unitToFrom = this.unitToQuad(from);
    const unitToTo = this.unitToQuad(to);
    if (!unitToFrom || !unitToTo) {
      return;
    }
    const fromToUnit = unitToFrom.invert();
    if (!fromToUnit) {
      return;
    }
    return fromToUnit.merge(unitToTo);
  }

  static rectToRect(from: Rect, to: Rect) {
    return Transform.translate(from.topLeft.neg)
      .scale(to.size.div(from.size))
      .translate(to.topLeft);
  }

  /**
    Merges all transforms.
  */
  static merge(...transforms: Transform[]) {
    return transforms.reduce((a, x) => a.merge(x), new Transform());
  }
}
