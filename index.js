"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = exports.EdgeOffsets = exports.Rect = exports.Vec2 = void 0;
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
class Vec2 {
    /**
      @param x The x component of this vector.
      @param y The y component of this vector.
    */
    constructor(x = 0, y = x) {
        this.x = x;
        this.y = y;
    }
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
    equals(v) {
        return this.x == v.x && this.y == v.y;
    }
    /**
      Adds v to this vector.
    */
    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    }
    /**
      Subtracts v from this vector.
    */
    sub(v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    }
    /**
      Multiplies components of this vector by v.
    */
    mul(v) {
        return new Vec2(this.x * v.x, this.y * v.y);
    }
    /**
      Divides components of this vector by v.
    */
    div(v) {
        return new Vec2(this.x / v.x, this.y / v.y);
    }
    /**
      Multiplies this vector by scalar s.
    */
    mulScalar(s) {
        return new Vec2(this.x * s, this.y * s);
    }
    /**
      Divides this vector by scalar s.
    */
    divScalar(s) {
        return new Vec2(this.x / s, this.y / s);
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
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /**
     * Returns the cross product of this and other.
     * @param other
     */
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
    /**
     * Returns this * (1 - ratio) + other * ratio.
     * @param other
     * @param ratio
     */
    mix(other, ratio) {
        return new Vec2(this.x * (1 - ratio) + other.x * ratio, this.y * (1 - ratio) + other.y * ratio);
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
      Transforms this vector with transform.
    */
    transform(transform) {
        const x = transform.m00 * this.x + transform.m10 * this.y + transform.m20;
        const y = transform.m01 * this.x + transform.m11 * this.y + transform.m21;
        const w = transform.m02 * this.x + transform.m12 * this.y + transform.m22;
        return new Vec2(x / w, y / w);
    }
    /**
      Gets an array of [x, y].
    */
    get members() {
        return [this.x, this.y];
    }
    toString() {
        return `Vec2(${this.x},${this.y})`;
    }
    /**
     * Constructs Vec2 from vec2-like objects.
     * @param options
     */
    static from(options) {
        var _a, _b, _c, _d;
        if (typeof options == "number") {
            return new Vec2(options, options);
        }
        else if (Array.isArray(options)) {
            return new Vec2((_a = options[0]) !== null && _a !== void 0 ? _a : 0, (_b = options[1]) !== null && _b !== void 0 ? _b : 0);
        }
        else {
            return new Vec2((_c = options.x) !== null && _c !== void 0 ? _c : 0, (_d = options.y) !== null && _d !== void 0 ? _d : 0);
        }
    }
}
exports.Vec2 = Vec2;
/**
  Rect represents rectangle in 2D space.

  ```js
  // 100*200 rectangle at (0, 0)
  const r1 = new Rect(new Vec2(0), new Vec2(100, 200))
  // 100*200 rectangle at (50, 50)
  const r2 = new Rect(new Vec2(50, 50), new Vec2(150, 250))

  const intersect = Rect.intersection(r1, r2) //=> Rect(Vec2(50, 50), Vec2(100, 200))
  const union = Rect.union(r1, r2) //=> Rect(Vec2(0, 0), Vec2(150, 250))

  ...
  ```
*/
class Rect {
    /**
      Creates a rectangle. It returns empty rectangle when no arguments given.
      @param topLeft The top-left position (in top-left origin coordinates) of this rectangle.
      @param bottomRight The bottom-right position (in top-left origin coordinates) of this rectangle.
    */
    constructor(topLeft = new Vec2(), bottomRight = topLeft) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
    /**
      Checks if the rectangles has same values.
    */
    equals(other) {
        return (this.topLeft.equals(other.topLeft) &&
            this.bottomRight.equals(other.bottomRight));
    }
    /**
      The size of this rectangle.
    */
    get size() {
        return this.bottomRight.sub(this.topLeft);
    }
    /**
      The top-right position (in top-left origin coordinates) of this rectangle.
    */
    get topRight() {
        return new Vec2(this.right, this.top);
    }
    /**
      The bottom-lect position (in top-left origin coordinates) of this rectangle.
    */
    get bottomLeft() {
        return new Vec2(this.left, this.bottom);
    }
    /**
      The left coordinate (in top-left origin coordinates) of this rectangle.
    */
    get left() {
        return this.topLeft.x;
    }
    /**
      The top coordinate (in top-left origin coordinates) of this rectangle.
    */
    get top() {
        return this.topLeft.y;
    }
    /**
      The right coordinate (in top-left origin coordinates) of this rectangle.
    */
    get right() {
        return this.bottomRight.x;
    }
    /**
      The bottom coordinate (in top-left origin coordinates) of this rectangle.
    */
    get bottom() {
        return this.bottomRight.y;
    }
    /**
      The width of this rectangle.
    */
    get width() {
        return this.size.x;
    }
    /**
      The width of this rectangle.
    */
    get height() {
        return this.size.y;
    }
    /**
     * The center of this rectangle.
     */
    get center() {
        return this.topLeft.add(this.bottomRight).divScalar(2);
    }
    /**
      Calculates the smallest integer rectangle which includes this rectangle.
    */
    toIntBounding() {
        return new Rect(this.topLeft.floor, this.bottomRight.ceil);
    }
    /**
     * Translates this rectangle by offset.
     * @param offset
     */
    translate(offset) {
        return new Rect(this.topLeft.add(offset), this.bottomRight.add(offset));
    }
    inflate(offset) {
        const d = new Vec2(offset);
        return new Rect(this.topLeft.sub(d), this.bottomRight.add(d));
    }
    inset(offsets) {
        return new Rect(this.topLeft.add(offsets.topLeft), this.bottomRight.sub(offsets.bottomRight));
    }
    insetsTo(other) {
        return new EdgeOffsets(other.topLeft.sub(this.topLeft), this.bottomRight.sub(other.bottomRight));
    }
    /**
     * Returns if this rectangle include pos.
     * @param pos
     */
    includes(pos) {
        return (this.left <= pos.x &&
            pos.x <= this.right &&
            this.top <= pos.y &&
            pos.y <= this.bottom);
    }
    /**
      Transforms each corners by transform and returns the bounding rectangle.
    */
    transform(transform) {
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
    union(other) {
        const left = Math.min(this.left, other.left);
        const top = Math.min(this.top, other.top);
        const right = Math.max(this.right, other.right);
        const bottom = Math.max(this.bottom, other.bottom);
        return new Rect(new Vec2(left, top), new Vec2(right, bottom));
    }
    /**
     * Returns the largest rectangle contained in both this and other.
     * @param other
     */
    intersection(other) {
        const left = Math.max(this.left, other.left);
        const top = Math.max(this.top, other.top);
        const right = Math.min(this.right, other.right);
        const bottom = Math.min(this.bottom, other.bottom);
        if (left < right && top < bottom) {
            return new Rect(new Vec2(left, top), new Vec2(right, bottom));
        }
    }
    toString() {
        return `Rect(${this.topLeft},${this.bottomRight})`;
    }
    toDOMRect() {
        return new DOMRect(this.left, this.top, this.width, this.height);
    }
    /**
     * Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.
     */
    get vertices() {
        return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
    }
    /**
      Calculates the bounding rectangle of given rectangles.
    */
    static union(...rects) {
        if (rects.length == 0) {
            return;
        }
        const left = Math.min(...rects.map((r) => r.left));
        const top = Math.min(...rects.map((r) => r.top));
        const right = Math.max(...rects.map((r) => r.right));
        const bottom = Math.max(...rects.map((r) => r.bottom));
        return new Rect(new Vec2(left, top), new Vec2(right, bottom));
    }
    /**
      Calculates the rectangle that represents the shared region of given rectangles.
    */
    static intersection(...rects) {
        if (rects.length == 0) {
            return;
        }
        const left = Math.max(...rects.map((r) => r.left));
        const top = Math.max(...rects.map((r) => r.top));
        const right = Math.min(...rects.map((r) => r.right));
        const bottom = Math.min(...rects.map((r) => r.bottom));
        if (left < right && top < bottom) {
            return new Rect(new Vec2(left, top), new Vec2(right, bottom));
        }
    }
    /**
     * Creates Rect from rect-like objects.
     * @param options
     */
    static from(options) {
        if ("x" in options) {
            return new Rect(new Vec2(options.x, options.y), new Vec2(options.x + options.width, options.y + options.height));
        }
        if ("width" in options) {
            return new Rect(new Vec2(options.left, options.top), new Vec2(options.left + options.width, options.top + options.height));
        }
        if ("right" in options) {
            return new Rect(new Vec2(options.left, options.top), new Vec2(options.right, options.bottom));
        }
        if ("bottomRight" in options) {
            return new Rect(options.topLeft, options.bottomRight);
        }
        return new Rect(options.topLeft, options.topLeft.add(options.size));
    }
    static boundingRect(points) {
        const xs = points.map((p) => p.x);
        const ys = points.map((p) => p.y);
        const left = Math.min(...xs);
        const right = Math.max(...xs);
        const top = Math.min(...ys);
        const bottom = Math.max(...ys);
        return new Rect(new Vec2(left, top), new Vec2(right, bottom));
    }
}
exports.Rect = Rect;
/**
 * EdgeOffsets represents edge offsets which are applied to rectangles.
 */
class EdgeOffsets {
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
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
    equals(other) {
        return (this.topLeft.equals(other.topLeft) &&
            this.bottomRight.equals(other.bottomRight));
    }
    toString() {
        return `EdgeOffsets(${this.left},${this.top},${this.right},${this.bottom})`;
    }
    static from(options) {
        if (typeof options == "number") {
            return new EdgeOffsets(new Vec2(options, options), new Vec2(options, options));
        }
        if ("left" in options) {
            return new EdgeOffsets(new Vec2(options.left, options.top), new Vec2(options.right, options.bottom));
        }
        return new EdgeOffsets(options.topLeft, options.bottomRight);
    }
}
exports.EdgeOffsets = EdgeOffsets;
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
class Transform {
    /**
      Creates a transform. It returns no-op transform when no arguments given.
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
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        this.m00 = m00;
        this.m01 = m01;
        this.m02 = m02;
        this.m10 = m10;
        this.m11 = m11;
        this.m12 = m12;
        this.m20 = m20;
        this.m21 = m21;
        this.m22 = m22;
    }
    /**
      Checks if the transforms has same values.
    */
    equals(other) {
        return (this.m00 == other.m00 &&
            this.m01 == other.m01 &&
            this.m02 == other.m02 &&
            this.m10 == other.m10 &&
            this.m11 == other.m11 &&
            this.m12 == other.m12 &&
            this.m20 == other.m20 &&
            this.m21 == other.m21 &&
            this.m22 == other.m22);
    }
    /**
      Merges 2 transforms. The returned transform represents "transform by this transform, then other transform".
    */
    merge(other) {
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
        return (this.isAffine &&
            this.m00 == 1 &&
            this.m01 == 0 &&
            this.m10 == 0 &&
            this.m11 == 1);
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
     * Returns the CSS matrix() transform as string
     */
    toCSSMatrixString() {
        const { m00, m01, m10, m11, m20, m21 } = this;
        return `matrix(${m00},${m01},${m10},${m11},${m20},${m21})`;
    }
    scale(scale) {
        return this.merge(Transform.scale(scale));
    }
    translate(offset) {
        return this.merge(Transform.translate(offset));
    }
    rotate(angle) {
        return this.merge(Transform.rotate(angle));
    }
    /**
      Returns the transform that represents scaling.
    */
    static scale(scale) {
        return new Transform(scale.x, 0, 0, 0, scale.y, 0, 0, 0, 1);
    }
    /**
      Returns the transform that represents rotating by angle (in radians).
    */
    static rotate(angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return new Transform(c, s, 0, -s, c, 0, 0, 0, 1);
    }
    /**
      Returns the transform that represents translating.
    */
    static translate(translation) {
        return new Transform(1, 0, 0, 0, 1, 0, translation.x, translation.y, 1);
    }
    /**
     * Returns the perspective transform that transforms the unit square ([(0, 0), (1, 0), (0, 1), (1, 1)]) to the specified quadrangle.
     * Reference: Projective Mappings for Image Warping
     */
    static unitToQuad(quad) {
        const [{ x: x0, y: y0 }, { x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 },] = quad;
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
    static quadToQuad(from, to) {
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
    static rectToRect(from, to) {
        return Transform.translate(from.topLeft.neg)
            .scale(to.size.div(from.size))
            .translate(to.topLeft);
    }
    /**
      Merges all transforms.
    */
    static merge(...transforms) {
        return transforms.reduce((a, x) => a.merge(x), new Transform());
    }
}
exports.Transform = Transform;
