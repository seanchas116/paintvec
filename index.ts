/**
 * Vec2 represents a 2D vector, point, or size.
 * 
 * @remarks
 * All operations are immutable and return new Vec2 instances.
 * 
 * @example
 * ```js
 * const a = new Vec2(1, 2)
 * const b = new Vec2(3, 4)
 * a.add(b) //=> Vec2(4, 6)
 * a.sub(b) //=> Vec2(-2, -2)
 * b.length //=> 5
 * ```
 */
export class Vec2 {
  /**
   * Creates a new Vec2 instance.
   * @param x - The x component of this vector
   * @param y - The y component of this vector (defaults to x)
   */
  constructor(
    public x = 0,
    public y = x,
  ) {}

  /**
   * Gets the x component as width.
   * @returns The x component
   */
  get width() {
    return this.x;
  }

  /**
   * Gets the y component as height.
   * @returns The y component
   */
  get height() {
    return this.y;
  }

  /**
   * Checks if this vector equals another vector.
   * @param v - The vector to compare with
   * @returns True if both x and y components are equal
   */
  equals(v: Vec2) {
    return this.x == v.x && this.y == v.y;
  }

  /**
   * Adds a vector or scalar to this vector.
   * @param v - Vector or scalar to add
   * @returns A new Vec2 with the sum
   * @example
   * ```js
   * new Vec2(1, 2).add(new Vec2(3, 4)) // Vec2(4, 6)
   * new Vec2(1, 2).add(5) // Vec2(6, 7)
   * ```
   */
  add(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x + v, this.y + v);
    }
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  /**
   * Subtracts a vector or scalar from this vector.
   * @param v - Vector or scalar to subtract
   * @returns A new Vec2 with the difference
   */
  sub(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x - v, this.y - v);
    }
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  /**
   * Multiplies this vector by a vector or scalar.
   * @param v - Vector or scalar to multiply by
   * @returns A new Vec2 with the product
   */
  mul(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x * v, this.y * v);
    }
    return new Vec2(this.x * v.x, this.y * v.y);
  }

  /**
   * Divides this vector by a vector or scalar.
   * @param v - Vector or scalar to divide by
   * @returns A new Vec2 with the quotient
   */
  div(v: Vec2 | number) {
    if (typeof v === "number") {
      return new Vec2(this.x / v, this.y / v);
    }
    return new Vec2(this.x / v.x, this.y / v.y);
  }

  /**
   * Gets the negation of this vector.
   * @returns A new Vec2 with negated components
   */
  get neg() {
    return new Vec2(-this.x, -this.y);
  }

  /**
   * Gets the length (magnitude) of this vector.
   * @returns The Euclidean length
   */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Gets the squared length of this vector.
   * @returns The squared length (useful for comparison without sqrt)
   */
  get squaredLength() {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Gets the angle of this vector from the positive x-axis.
   * @returns The angle in radians, in the range [-π, π]
   */
  get angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Calculates the dot product with another vector.
   * @param other - The other vector
   * @returns The dot product
   */
  dot(other: Vec2) {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Calculates the 2D cross product with another vector.
   * @param other - The other vector
   * @returns The z-component of the 3D cross product
   */
  cross(other: Vec2) {
    return this.x * other.y - this.y * other.x;
  }

  /**
   * Linearly interpolates between this vector and another.
   * @param other - The target vector
   * @param ratio - The interpolation ratio (0 = this, 1 = other)
   * @returns A new Vec2 with the interpolated value
   */
  mix(other: Vec2, ratio: number) {
    return new Vec2(
      this.x * (1 - ratio) + other.x * ratio,
      this.y * (1 - ratio) + other.y * ratio,
    );
  }

  /**
   * Gets the floor of each component.
   * @returns A new Vec2 with floored components
   */
  get floor() {
    return new Vec2(Math.floor(this.x), Math.floor(this.y));
  }

  /**
   * Gets the ceiling of each component.
   * @returns A new Vec2 with ceiled components
   */
  get ceil() {
    return new Vec2(Math.ceil(this.x), Math.ceil(this.y));
  }

  /**
   * Gets the rounded value of each component.
   * @returns A new Vec2 with rounded components
   */
  get round() {
    return new Vec2(Math.round(this.x), Math.round(this.y));
  }

  /**
   * Gets the absolute value of each component.
   * @returns A new Vec2 with absolute values
   */
  get abs() {
    return new Vec2(Math.abs(this.x), Math.abs(this.y));
  }

  /**
   * Clamps each component within the given range.
   * @param min - The minimum values
   * @param max - The maximum values
   * @returns A new Vec2 with clamped components
   */
  clamp(min: Vec2, max: Vec2) {
    return new Vec2(
      Math.max(min.x, Math.min(this.x, max.x)),
      Math.max(min.y, Math.min(this.y, max.y)),
    );
  }

  /**
   * Transforms this vector by a transformation matrix.
   * @param transform - The transformation to apply
   * @returns A new transformed Vec2
   */
  transform(transform: Transform) {
    const x = transform.m00 * this.x + transform.m10 * this.y + transform.m20;
    const y = transform.m01 * this.x + transform.m11 * this.y + transform.m21;
    const w = transform.m02 * this.x + transform.m12 * this.y + transform.m22;
    return new Vec2(x / w, y / w);
  }

  /**
   * Converts this vector to a tuple array.
   * @returns A tuple of [x, y]
   */
  get members(): [number, number] {
    return [this.x, this.y];
  }

  /**
   * Returns a string representation of this vector.
   * @returns A string in the format "Vec2(x,y)"
   */
  toString() {
    return `Vec2(${this.x},${this.y})`;
  }

  /**
   * Creates a Vec2 from various input formats.
   * @param options - A number (for both components), array, or object with x/y
   * @returns A new Vec2 instance
   * @example
   * ```js
   * Vec2.from(5) // Vec2(5, 5)
   * Vec2.from([3, 4]) // Vec2(3, 4)
   * Vec2.from({ x: 1, y: 2 }) // Vec2(1, 2)
   * ```
   */
  static from(
    options:
      | number
      | number[]
      | {
          x?: number;
          y?: number;
        },
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
   * Returns a vector with the minimum values from each component.
   * @param vs - Vectors to compare
   * @returns A new Vec2 with minimum values
   */
  static min(...vs: Vec2[]) {
    const x = Math.min(...vs.map((v) => v.x));
    const y = Math.min(...vs.map((v) => v.y));
    return new Vec2(x, y);
  }

  /**
   * Returns a vector with the maximum values from each component.
   * @param vs - Vectors to compare
   * @returns A new Vec2 with maximum values
   */
  static max(...vs: Vec2[]) {
    const x = Math.max(...vs.map((v) => v.x));
    const y = Math.max(...vs.map((v) => v.y));
    return new Vec2(x, y);
  }

  /**
   * Zero vector (0, 0).
   */
  static readonly zero = new Vec2(0, 0);

  /**
   * Normalizes this vector to unit length.
   * @returns A new Vec2 with length 1, or zero vector if length is 0
   */
  normalize() {
    const len = this.length;
    if (len === 0) return Vec2.zero;
    return this.div(len);
  }

  /**
   * Rotates this vector by the given angle.
   * @param angle - The rotation angle in radians
   * @returns A new rotated Vec2
   */
  rotate(angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vec2(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }

  /**
   * Returns a vector with the minimum x and y from this and another vector.
   * @param other - The other vector
   * @returns A new Vec2 with minimum components
   */
  min(other: Vec2) {
    return new Vec2(
      Math.min(this.x, other.x),
      Math.min(this.y, other.y)
    );
  }

  /**
   * Returns a vector with the maximum x and y from this and another vector.
   * @param other - The other vector
   * @returns A new Vec2 with maximum components
   */
  max(other: Vec2) {
    return new Vec2(
      Math.max(this.x, other.x),
      Math.max(this.y, other.y)
    );
  }

  /**
   * Converts this vector to an array.
   * @returns An array of [x, y]
   */
  toArray(): [number, number] {
    return [this.x, this.y];
  }
}

/**
 * Segment represents a line segment between two points.
 * 
 * @remarks
 * All operations are immutable and return new Segment instances.
 */
export class Segment {
  /**
   * Creates a new Segment instance.
   * @param p1 - The start point
   * @param p2 - The end point
   */
  constructor(
    public p1: Vec2,
    public p2: Vec2,
  ) {}

  /**
   * Checks if this segment equals another segment.
   * @param other - The segment to compare with
   * @returns True if both endpoints are equal
   */
  equals(other: Segment) {
    return this.p1.equals(other.p1) && this.p2.equals(other.p2);
  }

  /**
   * Gets the length of this segment.
   * @returns The distance between the endpoints
   */
  get length() {
    return this.p2.sub(this.p1).length;
  }

  /**
   * Gets the angle of this segment from the positive x-axis.
   * @returns The angle in radians, in the range [-π, π]
   */
  get angle() {
    return this.p2.sub(this.p1).angle;
  }

  /**
   * Transforms this segment by a transformation matrix.
   * @param transform - The transformation to apply
   * @returns A new transformed Segment
   */
  transform(transform: Transform) {
    return new Segment(
      this.p1.transform(transform),
      this.p2.transform(transform),
    );
  }

  /**
   * Linearly interpolates between this segment and another.
   * @param other - The target segment
   * @param ratio - The interpolation ratio (0 = this, 1 = other)
   * @returns A new Segment with interpolated endpoints
   */
  mix(other: Segment, ratio: number) {
    return new Segment(
      this.p1.mix(other.p1, ratio),
      this.p2.mix(other.p2, ratio),
    );
  }

  /**
   * Returns a string representation of this segment.
   * @returns A string in the format "Segment(p1,p2)"
   */
  toString() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `Segment(${this.p1},${this.p2})`;
  }

  /**
   * Converts this segment to SVG line element properties.
   * @returns An object with x1, y1, x2, y2 properties
   */
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
 * Rect represents an axis-aligned rectangle in 2D space.
 * 
 * @remarks
 * All operations are immutable and return new Rect instances.
 * The rectangle is defined by its top-left corner and size.
 * 
 * @example
 * ```js
 * // 100x200 rectangle at (0, 0)
 * const r1 = new Rect(new Vec2(0, 0), new Vec2(100, 200))
 * // 200x300 rectangle at (50, 50)
 * const r2 = new Rect(new Vec2(50, 50), new Vec2(200, 300))
 * ```
 */
export class Rect {
  /**
   * Creates a new Rect instance.
   * @param topLeft - The top-left position (in top-left origin coordinates)
   * @param size - The size of the rectangle (width, height)
   */
  constructor(
    public topLeft = new Vec2(),
    public size = new Vec2(),
  ) {}

  /**
   * Checks if this rectangle equals another rectangle.
   * @param other - The rectangle to compare with
   * @returns True if position and size are equal
   */
  equals(other: Rect) {
    return this.topLeft.equals(other.topLeft) && this.size.equals(other.size);
  }

  /** Alias for topLeft. */
  get tl() {
    return this.topLeft;
  }

  /**
   * Gets the bottom-right corner position.
   * @returns The bottom-right point
   */
  get bottomRight() {
    return this.topLeft.add(this.size);
  }

  /** Alias for bottomRight. */
  get br() {
    return this.bottomRight;
  }

  /**
   * Gets the top-right corner position.
   * @returns The top-right point
   */
  get topRight() {
    return new Vec2(this.right, this.top);
  }

  /** Alias for topRight. */
  get tr() {
    return this.topRight;
  }

  /**
   * Gets the bottom-left corner position.
   * @returns The bottom-left point
   */
  get bottomLeft() {
    return new Vec2(this.left, this.bottom);
  }

  /** Alias for bottomLeft. */
  get bl() {
    return this.bottomLeft;
  }

  /**
   * Gets the left edge coordinate.
   * @returns The x-coordinate of the left edge
   */
  get left() {
    return this.topLeft.x;
  }

  /** Alias for left. */
  get l() {
    return this.left;
  }

  /**
   * Gets the top edge coordinate.
   * @returns The y-coordinate of the top edge
   */
  get top() {
    return this.topLeft.y;
  }

  /** Alias for top. */
  get t() {
    return this.top;
  }

  /**
   * Gets the right edge coordinate.
   * @returns The x-coordinate of the right edge
   */
  get right() {
    return this.left + this.width;
  }

  /** Alias for right. */
  get r() {
    return this.right;
  }

  /**
   * Gets the bottom edge coordinate.
   * @returns The y-coordinate of the bottom edge
   */
  get bottom() {
    return this.top + this.height;
  }

  /** Alias for bottom. */
  get b() {
    return this.bottom;
  }

  /**
   * Gets the width of this rectangle.
   * @returns The width
   */
  get width() {
    return this.size.x;
  }

  /** Alias for width. */
  get w() {
    return this.width;
  }

  /**
   * Gets the height of this rectangle.
   * @returns The height
   */
  get height() {
    return this.size.y;
  }

  /** Alias for height. */
  get h() {
    return this.height;
  }

  /**
   * Gets the center point of this rectangle.
   * @returns The center point
   */
  get center() {
    return this.topLeft.add(this.size.mul(0.5));
  }

  /**
   * Gets the top edge as a line segment.
   * @returns A segment from top-left to top-right
   */
  get topLine() {
    return new Segment(this.topLeft, this.topRight);
  }

  /**
   * Gets the bottom edge as a line segment.
   * @returns A segment from bottom-left to bottom-right
   */
  get bottomLine() {
    return new Segment(this.bottomLeft, this.bottomRight);
  }

  /**
   * Gets the left edge as a line segment.
   * @returns A segment from top-left to bottom-left
   */
  get leftLine() {
    return new Segment(this.topLeft, this.bottomLeft);
  }

  /**
   * Gets the right edge as a line segment.
   * @returns A segment from top-right to bottom-right
   */
  get rightLine() {
    return new Segment(this.topRight, this.bottomRight);
  }

  /**
   * Gets the start lines for x and y axes.
   * @returns An object with x (left) and y (top) line segments
   */
  get startLines(): {
    x: Segment;
    y: Segment;
  } {
    return {
      x: this.leftLine,
      y: this.topLine,
    };
  }

  /**
   * Gets the end lines for x and y axes.
   * @returns An object with x (right) and y (bottom) line segments
   */
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
   * Calculates the smallest integer rectangle that contains this rectangle.
   * @returns A new Rect with floored top-left and ceiled bottom-right
   */
  toIntBounding() {
    const topLeft = this.topLeft.floor;
    const bottomRight = this.bottomRight.ceil;
    return new Rect(topLeft, bottomRight.sub(topLeft));
  }

  /**
   * Translates this rectangle by an offset.
   * @param offset - The translation vector
   * @returns A new translated Rect
   */
  translate(offset: Vec2) {
    return new Rect(this.topLeft.add(offset), this.size);
  }

  /**
   * Inflates this rectangle by a uniform amount on all sides.
   * @param offset - The amount to expand (positive) or shrink (negative)
   * @returns A new inflated Rect
   */
  inflate(offset: number) {
    const d = new Vec2(offset);
    return new Rect(this.topLeft.sub(d), this.size.add(d.mul(2)));
  }

  /**
   * Insets this rectangle by the given edge offsets.
   * @param offsets - The edge offsets to apply
   * @returns A new inset Rect
   */
  inset(offsets: EdgeOffsets) {
    const topLeft = this.topLeft.add(offsets.topLeft);
    const bottomRight = this.bottomRight.sub(offsets.bottomRight);
    return new Rect(topLeft, bottomRight.sub(topLeft));
  }

  /**
   * Calculates the edge offsets from this rectangle to another.
   * @param other - The target rectangle
   * @returns The EdgeOffsets from this to other
   */
  insetsTo(other: Rect) {
    return new EdgeOffsets(
      other.topLeft.sub(this.topLeft),
      this.bottomRight.sub(other.bottomRight),
    );
  }

  /**
   * Checks if this rectangle contains a point.
   * @param pos - The point to test
   * @returns True if the point is inside or on the rectangle boundary
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
   * Gets the area of this rectangle.
   * @returns The area (width × height)
   */
  get area(): number {
    return this.width * this.height;
  }

  /**
   * Transforms this rectangle by a transformation matrix.
   * @param transform - The transformation to apply
   * @returns The axis-aligned bounding box of the transformed rectangle
   */
  transform(transform: Transform) {
    const topLeft = this.topLeft.transform(transform);
    const topRight = this.topRight.transform(transform);
    const bottomLeft = this.bottomLeft.transform(transform);
    const bottomRight = this.bottomRight.transform(transform);
    return Rect.boundingRect([topLeft, topRight, bottomLeft, bottomRight]);
  }

  /**
   * Returns the union of this rectangle with another.
   * @param other - The other rectangle
   * @returns The smallest rectangle containing both rectangles
   */
  union(other: Rect) {
    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
   * Returns the intersection of this rectangle with another.
   * @param other - The other rectangle
   * @returns The overlapping rectangle, or undefined if no overlap
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

  /**
   * Returns a string representation of this rectangle.
   * @returns A string in the format "Rect(topLeft,bottomRight)"
   */
  toString() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `Rect(${this.topLeft},${this.bottomRight})`;
  }

  /**
   * Converts this rectangle to a DOMRect.
   * @returns A DOMRect with the same position and size
   */
  toDOMRect() {
    return new DOMRect(this.left, this.top, this.width, this.height);
  }

  /**
   * Converts this rectangle to SVG rect element properties.
   * @returns An object with x, y, width, height properties
   */
  toSVGRectProps() {
    return {
      x: this.left,
      y: this.top,
      width: this.width,
      height: this.height,
    };
  }

  /**
   * Gets the four corner points of this rectangle.
   * @returns A tuple of [topLeft, topRight, bottomRight, bottomLeft]
   */
  get vertices(): [Vec2, Vec2, Vec2, Vec2] {
    return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
  }

  /**
   * Calculates the union of multiple rectangles.
   * @param rects - Rectangles to unite
   * @returns The bounding rectangle, or undefined if no rectangles provided
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
   * Calculates the intersection of multiple rectangles.
   * @param rects - Rectangles to intersect
   * @returns The shared region, or undefined if no overlap or no rectangles
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
   * Creates a Rect from various input formats.
   * @param options - An object with rectangle properties
   * @returns A new Rect instance
   * @example
   * ```js
   * Rect.from({ x: 0, y: 0, width: 100, height: 50 })
   * Rect.from({ left: 0, top: 0, right: 100, bottom: 50 })
   * Rect.from({ topLeft: new Vec2(0, 0), size: new Vec2(100, 50) })
   * ```
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
        },
  ) {
    if ("x" in options) {
      return new Rect(
        new Vec2(options.x, options.y),
        new Vec2(options.width, options.height),
      );
    }
    if ("width" in options) {
      return new Rect(
        new Vec2(options.left, options.top),
        new Vec2(options.width, options.height),
      );
    }
    if ("right" in options) {
      return new Rect(
        new Vec2(options.left, options.top),
        new Vec2(options.right - options.left, options.bottom - options.top),
      );
    }
    if ("bottomRight" in options) {
      return new Rect(
        options.topLeft,
        options.bottomRight.sub(options.topLeft),
      );
    }
    return new Rect(options.topLeft, options.size);
  }

  /**
   * Creates a bounding rectangle from a set of points.
   * @param points - The points to bound
   * @returns A rectangle containing all points
   */
  static boundingRect(points: Vec2[]) {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const left = Math.min(...xs);
    const right = Math.max(...xs);
    const top = Math.min(...ys);
    const bottom = Math.max(...ys);
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
   * Empty rectangle at origin.
   */
  static readonly empty = new Rect(new Vec2(0, 0), new Vec2(0, 0));

  /**
   * Creates a rectangle from position and size.
   * @param pos - The top-left position
   * @param size - The size
   * @returns A new Rect
   */
  static fromSize(pos: Vec2, size: Vec2) {
    return new Rect(pos, size);
  }

  /**
   * Creates a rectangle from top-left-bottom-right coordinates.
   * @param top - Top edge
   * @param left - Left edge
   * @param bottom - Bottom edge
   * @param right - Right edge
   * @returns A new Rect
   */
  static fromTLBR(top: number, left: number, bottom: number, right: number) {
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
   * Creates a rectangle from left-top-right-bottom coordinates.
   * @param left - Left edge
   * @param top - Top edge
   * @param right - Right edge
   * @param bottom - Bottom edge
   * @returns A new Rect
   */
  static fromLTRB(left: number, top: number, right: number, bottom: number) {
    return new Rect(new Vec2(left, top), new Vec2(right - left, bottom - top));
  }

  /**
   * Checks if two rectangles intersect.
   * @param a - First rectangle
   * @param b - Second rectangle
   * @returns True if rectangles overlap
   */
  static intersects(a: Rect, b: Rect) {
    return (
      a.left < b.right &&
      a.right > b.left &&
      a.top < b.bottom &&
      a.bottom > b.top
    );
  }
}

/**
 * EdgeOffsets represents insets or outsets from rectangle edges.
 * 
 * @remarks
 * EdgeOffsets are used with Rect.inset() to shrink or expand rectangles.
 * Positive values shrink the rectangle, negative values expand it.
 */
export class EdgeOffsets {
  public topLeft: Vec2;
  public bottomRight: Vec2;

  /**
   * Gets the left offset.
   * @returns The left offset value
   */
  get left() {
    return this.topLeft.x;
  }

  /**
   * Gets the top offset.
   * @returns The top offset value
   */
  get top() {
    return this.topLeft.y;
  }

  /**
   * Gets the right offset.
   * @returns The right offset value
   */
  get right() {
    return this.bottomRight.x;
  }

  /**
   * Gets the bottom offset.
   * @returns The bottom offset value
   */
  get bottom() {
    return this.bottomRight.y;
  }

  /**
   * Gets the negated edge offsets.
   * @returns New EdgeOffsets with negated values
   */
  get neg() {
    return new EdgeOffsets(this.topLeft.neg, this.bottomRight.neg);
  }

  /**
   * Checks if this EdgeOffsets equals another.
   * @param other - The EdgeOffsets to compare with
   * @returns True if all offsets are equal
   */
  equals(other: EdgeOffsets) {
    return (
      this.topLeft.equals(other.topLeft) &&
      this.bottomRight.equals(other.bottomRight)
    );
  }

  /**
   * Returns a string representation of this EdgeOffsets.
   * @returns A string in the format "EdgeOffsets(left,top,right,bottom)"
   */
  toString() {
    return `EdgeOffsets(${this.left},${this.top},${this.right},${this.bottom})`;
  }

  /**
   * Creates EdgeOffsets from various input formats.
   * @param options - A number (uniform), or object with offsets
   * @returns A new EdgeOffsets instance
   * @example
   * ```js
   * EdgeOffsets.from(10) // All sides: 10
   * EdgeOffsets.from({ left: 5, top: 10, right: 15, bottom: 20 })
   * EdgeOffsets.from({ topLeft: new Vec2(5, 10), bottomRight: new Vec2(15, 20) })
   * ```
   */
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
        },
  ) {
    if (typeof options == "number") {
      return new EdgeOffsets(
        new Vec2(options, options),
        new Vec2(options, options),
      );
    }
    if ("left" in options) {
      return new EdgeOffsets(
        new Vec2(options.left, options.top),
        new Vec2(options.right, options.bottom),
      );
    }
    return new EdgeOffsets(options.topLeft, options.bottomRight);
  }

  /**
   * Zero edge offsets.
   */
  static readonly zero = new EdgeOffsets(Vec2.zero, Vec2.zero);

  /**
   * Gets the total horizontal offset (left + right).
   * @returns The sum of left and right offsets
   */
  get horizontal() {
    return this.left + this.right;
  }

  /**
   * Gets the total vertical offset (top + bottom).
   * @returns The sum of top and bottom offsets
   */
  get vertical() {
    return this.top + this.bottom;
  }

  /**
   * Creates EdgeOffsets with CSS-style parameters.
   * @param top - Top offset
   * @param right - Right offset (defaults to top)
   * @param bottom - Bottom offset (defaults to top)
   * @param left - Left offset (defaults to right)
   * @returns A new EdgeOffsets instance
   */
  constructor(top: number, right?: number, bottom?: number, left?: number);
  constructor(topLeft: Vec2, bottomRight: Vec2);
  constructor(
    topOrTopLeft: number | Vec2,
    rightOrBottomRight?: number | Vec2,
    bottom?: number,
    left?: number
  ) {
    if (typeof topOrTopLeft === "number") {
      const top = topOrTopLeft;
      const right = rightOrBottomRight ?? top;
      const bottomValue = bottom ?? top;
      const leftValue = left ?? right;
      this.topLeft = new Vec2(leftValue as number, top);
      this.bottomRight = new Vec2(right as number, bottomValue);
    } else {
      this.topLeft = topOrTopLeft;
      this.bottomRight = rightOrBottomRight as Vec2;
    }
  }

  /**
   * Adds two EdgeOffsets.
   * @param other - The EdgeOffsets to add
   * @returns A new EdgeOffsets with summed values
   */
  add(other: EdgeOffsets) {
    return new EdgeOffsets(
      this.topLeft.add(other.topLeft),
      this.bottomRight.add(other.bottomRight)
    );
  }

  /**
   * Multiplies EdgeOffsets by a scalar.
   * @param scale - The scale factor
   * @returns A new scaled EdgeOffsets
   */
  mul(scale: number) {
    return new EdgeOffsets(
      this.topLeft.mul(scale),
      this.bottomRight.mul(scale)
    );
  }
}

/**
 * Transform represents 2D affine and perspective transformations using a 3x3 matrix.
 * 
 * @remarks
 * All operations are immutable and return new Transform instances.
 * Transforms can be combined using the merge() method.
 * 
 * @example
 * ```js
 * // translate by (100, 200)
 * const translate = Transform.translate(new Vec2(100, 200))
 * 
 * // 2x scale
 * const scale = Transform.scale(new Vec2(2))
 * 
 * // rotate 45 degrees
 * const rotate = Transform.rotate(Math.PI / 4)
 * 
 * // translate then scale then rotate
 * const transform = translate.merge(scale).merge(rotate)
 * ```
 */
export class Transform {
  /**
   * Creates a new Transform instance.
   * 
   * Matrix layout:
   * ```
   * |x'|   | m00 m10 m20 | |x|
   * |y'| = | m01 m11 m21 | |y|
   * |z'|   | m02 m12 m22 | |z|
   * ```
   * 
   * @param m00 - Matrix element at row 0, column 0
   * @param m01 - Matrix element at row 1, column 0
   * @param m02 - Matrix element at row 2, column 0
   * @param m10 - Matrix element at row 0, column 1
   * @param m11 - Matrix element at row 1, column 1
   * @param m12 - Matrix element at row 2, column 1
   * @param m20 - Matrix element at row 0, column 2
   * @param m21 - Matrix element at row 1, column 2
   * @param m22 - Matrix element at row 2, column 2
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
    public m22 = 1,
  ) {}

  /**
   * Checks if this transform equals another transform.
   * @param other - The transform to compare with
   * @returns True if all matrix elements are equal
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
   * Combines this transform with another transform.
   * @param other - The transform to apply after this transform
   * @returns A new Transform representing the combined transformation
   * @remarks The order matters: this.merge(other) means "apply this, then other"
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
   * Inverts this transform.
   * @returns The inverse transform, or undefined if not invertible
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

  /**
   * Checks if this is an affine transform (no perspective).
   * @returns True if the transform has no perspective distortion
   */
  get isAffine() {
    return this.m02 == 0 && this.m12 == 0 && this.m22 == 1;
  }

  /**
   * Checks if this is a translation-only transform.
   * @returns True if only translation is applied
   */
  get isTranslation() {
    return (
      this.isAffine &&
      this.m00 == 1 &&
      this.m01 == 0 &&
      this.m10 == 0 &&
      this.m11 == 1
    );
  }

  /**
   * Gets this transform without translation components.
   * @returns A new Transform with translation removed
   */
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
      1,
    );
  }

  /**
   * Gets the mean scale factor of this transform.
   * @returns The geometric mean of the x and y scale factors
   * @remarks This is the square root of the determinant of the upper 2x2 matrix
   */
  get meanScale() {
    return Math.sqrt(Math.abs(this.m00 * this.m11 - this.m01 * this.m10));
  }

  /**
   * Converts this transform to an array.
   * @returns An array of matrix elements [m00, m01, m02, ..., m22]
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

  /**
   * Returns a string representation of this transform.
   * @returns A string with all matrix values
   */
  toString() {
    return `Transform(${this.members.join(",")})`;
  }

  /**
   * Converts to CSS matrix() string for 2D transforms.
   * @returns A CSS matrix() function string
   */
  toCSSMatrixString() {
    const { m00, m01, m10, m11, m20, m21 } = this;
    return `matrix(${m00},${m01},${m10},${m11},${m20},${m21})`;
  }

  /**
   * Converts to CSS matrix3d() string for perspective transforms.
   * @returns A CSS matrix3d() function string
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

  /**
   * Scales from the current transform.
   * @param scale - The scale factors
   * @returns A new scaled Transform
   */
  scale(scale: Vec2) {
    return this.merge(Transform.scale(scale));
  }

  /**
   * Translates from the current transform.
   * @param offset - The translation offset
   * @returns A new translated Transform
   */
  translate(offset: Vec2) {
    return this.merge(Transform.translate(offset));
  }

  /**
   * Rotates from the current transform.
   * @param angle - The rotation angle in radians
   * @returns A new rotated Transform
   */
  rotate(angle: number) {
    return this.merge(Transform.rotate(angle));
  }

  /**
   * Creates a scaling transform.
   * @param scale - The scale factors for x and y
   * @returns A new scaling Transform
   */
  static scale(scale: Vec2) {
    return new Transform(scale.x, 0, 0, 0, scale.y, 0, 0, 0, 1);
  }

  /**
   * Creates a rotation transform.
   * @param angle - The rotation angle in radians
   * @returns A new rotation Transform
   */
  static rotate(angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Transform(c, s, 0, -s, c, 0, 0, 0, 1);
  }

  /**
   * Creates a translation transform.
   * @param translation - The translation vector
   * @returns A new translation Transform
   */
  static translate(translation: Vec2) {
    return new Transform(1, 0, 0, 0, 1, 0, translation.x, translation.y, 1);
  }

  /**
   * Creates a perspective transform from unit square to a quadrilateral.
   * @param quad - Four corner points of the destination quadrilateral
   * @returns A perspective Transform, or undefined if not possible
   * @remarks The unit square has corners at (0,0), (1,0), (1,1), (0,1)
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

  /**
   * Creates a perspective transform between two quadrilaterals.
   * @param from - Source quadrilateral (four corners)
   * @param to - Destination quadrilateral (four corners)
   * @returns A perspective Transform, or undefined if not possible
   */
  static quadToQuad(
    from: [Vec2, Vec2, Vec2, Vec2],
    to: [Vec2, Vec2, Vec2, Vec2],
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

  /**
   * Creates a transform that maps one rectangle to another.
   * @param from - Source rectangle
   * @param to - Destination rectangle
   * @returns A Transform that maps from to to
   */
  static rectToRect(from: Rect, to: Rect) {
    return Transform.translate(from.topLeft.neg)
      .scale(to.size.div(from.size))
      .translate(to.topLeft);
  }

  /**
   * Combines multiple transforms in sequence.
   * @param transforms - Transforms to merge
   * @returns A single Transform representing all transformations
   */
  static merge(...transforms: Transform[]) {
    return transforms.reduce((a, x) => a.merge(x), new Transform());
  }

  /**
   * Identity transform (no transformation).
   */
  static readonly identity = new Transform();

  /**
   * Checks if this is the identity transform.
   * @returns True if this transform does nothing
   */
  get isIdentity() {
    return (
      this.m00 === 1 && this.m01 === 0 && this.m02 === 0 &&
      this.m10 === 0 && this.m11 === 1 && this.m12 === 0 &&
      this.m20 === 0 && this.m21 === 0 && this.m22 === 1
    );
  }

  /**
   * Transforms a point by this transform.
   * @param point - The point to transform
   * @returns The transformed point
   */
  transformPoint(point: Vec2) {
    return point.transform(this);
  }

  /**
   * Creates a transform using individual matrix values.
   * @param a - Scale x / cosine of rotation
   * @param b - Shear y / sine of rotation
   * @param c - Shear x / negative sine of rotation
   * @param d - Scale y / cosine of rotation
   * @param e - Translation x
   * @param f - Translation y
   * @returns A new Transform
   */
  static fromMatrix(a: number, b: number, c: number, d: number, e: number, f: number) {
    return new Transform(a, b, 0, c, d, 0, e, f, 1);
  }

  /**
   * Gets the matrix values in CSS order.
   * @returns An object with a, b, c, d, e, f properties
   */
  get cssMatrix() {
    return {
      a: this.m00,
      b: this.m01,
      c: this.m10,
      d: this.m11,
      e: this.m20,
      f: this.m21
    };
  }
}
