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
export declare class Vec2 {
    x: number;
    y: number;
    /**
      @param x The x component of this vector.
      @param y The y component of this vector.
    */
    constructor(x?: number, y?: number);
    /**
     * Returns x.
     */
    get width(): number;
    /**
     * Returns y.
     */
    get height(): number;
    /**
      Checks if the vectors has same values.
    */
    equals(v: Vec2): boolean;
    /**
      Adds v to this vector.
    */
    add(v: Vec2 | number): Vec2;
    /**
      Subtracts v from this vector.
    */
    sub(v: Vec2 | number): Vec2;
    /**
      Multiplies components of this vector by v.
    */
    mul(v: Vec2 | number): Vec2;
    /**
      Divides components of this vector by v.
    */
    div(v: Vec2 | number): Vec2;
    /**
      Inverts this vector.
    */
    get neg(): Vec2;
    /**
      Calculates the length of this vector.
    */
    get length(): number;
    /**
      Calculates the squared length of this vector.
    */
    get squaredLength(): number;
    /**
      Calculates the angle of this vector from positive x-axis in [-PI, PI].
    */
    get angle(): number;
    /**
     * Returns the dot product of this and other.
     * @param other
     */
    dot(other: Vec2): number;
    /**
     * Returns the cross product of this and other.
     * @param other
     */
    cross(other: Vec2): number;
    /**
     * Returns this * (1 - ratio) + other * ratio.
     * @param other
     * @param ratio
     */
    mix(other: Vec2, ratio: number): Vec2;
    /**
      Rounds down the components of this vector.
    */
    get floor(): Vec2;
    /**
      Rounds up the components of this vector.
    */
    get ceil(): Vec2;
    /**
      Rounds the components of this vector to nearest integer.
    */
    get round(): Vec2;
    /**
     * Returns absolute values of this vector.
     */
    get abs(): Vec2;
    /**
     * Clamp the components within the min and max values.
     * @param min
     * @param max
     */
    clamp(min: Vec2, max: Vec2): Vec2;
    /**
      Transforms this vector with transform.
    */
    transform(transform: Transform): Vec2;
    /**
      Gets an array of [x, y].
    */
    get members(): [number, number];
    toString(): string;
    /**
     * Constructs Vec2 from vec2-like objects.
     * @param options
     */
    static from(options: number | number[] | {
        x?: number;
        y?: number;
    }): Vec2;
    /**
     * Returns min value for each component.
     */
    static min(...vs: Vec2[]): Vec2;
    /**
     * Returns max value for each component.
     */
    static max(...vs: Vec2[]): Vec2;
}
export declare class Segment {
    p1: Vec2;
    p2: Vec2;
    constructor(p1: Vec2, p2: Vec2);
    equals(other: Segment): boolean;
    get length(): number;
    get angle(): number;
    transform(transform: Transform): Segment;
    mix(other: Segment, ratio: number): Segment;
    toString(): string;
    toSVGLineProps(): {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
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
export declare class Rect {
    topLeft: Vec2;
    size: Vec2;
    /**
      Creates a rectangle. It returns empty rectangle when no arguments given.
      @param topLeft The top-left position (in top-left origin coordinates) of this rectangle.
      @param size The size of this rectangle.
    */
    constructor(topLeft?: Vec2, size?: Vec2);
    /**
      Checks if the rectangles has same values.
    */
    equals(other: Rect): boolean;
    get tl(): Vec2;
    /**
     * The bottom-right position (in top-left origin coordinates) of this rectangle.
     */
    get bottomRight(): Vec2;
    get br(): Vec2;
    /**
      The top-right position (in top-left origin coordinates) of this rectangle.
    */
    get topRight(): Vec2;
    get tr(): Vec2;
    /**
      The bottom-lect position (in top-left origin coordinates) of this rectangle.
    */
    get bottomLeft(): Vec2;
    get bl(): Vec2;
    /**
      The left coordinate (in top-left origin coordinates) of this rectangle.
    */
    get left(): number;
    get l(): number;
    /**
      The top coordinate (in top-left origin coordinates) of this rectangle.
    */
    get top(): number;
    get t(): number;
    /**
      The right coordinate (in top-left origin coordinates) of this rectangle.
    */
    get right(): number;
    get r(): number;
    /**
      The bottom coordinate (in top-left origin coordinates) of this rectangle.
    */
    get bottom(): number;
    get b(): number;
    /**
      The width of this rectangle.
    */
    get width(): number;
    get w(): number;
    /**
      The width of this rectangle.
    */
    get height(): number;
    get h(): number;
    /**
     * The center of this rectangle.
     */
    get center(): Vec2;
    get topLine(): Segment;
    get bottomLine(): Segment;
    get leftLine(): Segment;
    get rightLine(): Segment;
    get startLines(): {
        x: Segment;
        y: Segment;
    };
    get endLines(): {
        x: Segment;
        y: Segment;
    };
    /**
      Calculates the smallest integer rectangle which includes this rectangle.
    */
    toIntBounding(): Rect;
    /**
     * Translates this rectangle by offset.
     * @param offset
     */
    translate(offset: Vec2): Rect;
    inflate(offset: number): Rect;
    inset(offsets: EdgeOffsets): Rect;
    insetsTo(other: Rect): EdgeOffsets;
    /**
     * Returns if this rectangle include pos.
     * @param pos
     */
    includes(pos: Vec2): boolean;
    /**
      Transforms each corners by transform and returns the bounding rectangle.
    */
    transform(transform: Transform): Rect;
    /**
     * Returns the smallest rectangle which contains both this and other.
     * @param other
     */
    union(other: Rect): Rect;
    /**
     * Returns the largest rectangle contained in both this and other.
     * @param other
     */
    intersection(other: Rect): Rect | undefined;
    toString(): string;
    toDOMRect(): DOMRect;
    toSVGRectProps(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * Returns array of `[topLeft, topRight, bottomRight, bottomLeft]`.
     */
    get vertices(): [Vec2, Vec2, Vec2, Vec2];
    /**
      Calculates the bounding rectangle of given rectangles.
    */
    static union(...rects: Rect[]): Rect | undefined;
    /**
      Calculates the rectangle that represents the shared region of given rectangles.
    */
    static intersection(...rects: Rect[]): Rect | undefined;
    /**
     * Creates Rect from rect-like objects.
     * @param options
     */
    static from(options: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | {
        left: number;
        top: number;
        width: number;
        height: number;
    } | {
        left: number;
        top: number;
        right: number;
        bottom: number;
    } | {
        topLeft: Vec2;
        bottomRight: Vec2;
    } | {
        topLeft: Vec2;
        size: Vec2;
    }): Rect;
    static boundingRect(points: Vec2[]): Rect;
}
/**
 * EdgeOffsets represents edge offsets which are applied to rectangles.
 */
export declare class EdgeOffsets {
    topLeft: Vec2;
    bottomRight: Vec2;
    constructor(topLeft: Vec2, bottomRight: Vec2);
    get left(): number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get neg(): EdgeOffsets;
    equals(other: EdgeOffsets): boolean;
    toString(): string;
    static from(options: number | {
        left: number;
        top: number;
        right: number;
        bottom: number;
    } | {
        topLeft: Vec2;
        bottomRight: Vec2;
    }): EdgeOffsets;
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
export declare class Transform {
    m00: number;
    m01: number;
    m02: number;
    m10: number;
    m11: number;
    m12: number;
    m20: number;
    m21: number;
    m22: number;
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
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    /**
      Checks if the transforms has same values.
    */
    equals(other: Transform): boolean;
    /**
      Merges 2 transforms. The returned transform represents "transform by this transform, then other transform".
    */
    merge(other: Transform): Transform;
    /**
      Inverts the transform. Returns undefined if this transform is not invertible.
    */
    invert(): Transform | undefined;
    get isAffine(): boolean;
    get isTranslation(): boolean;
    get withoutTranslation(): Transform;
    /**
      Returns the members (m00, m01, 002, ... m22) in an array.
    */
    get members(): number[];
    toString(): string;
    /**
     * Returns the CSS matrix() string.
     */
    toCSSMatrixString(): string;
    /**
     * Returns the CSS matrix3d() string.
     * This supports perspective transform.
     */
    toCSSMatrix3DString(): string;
    scale(scale: Vec2): Transform;
    translate(offset: Vec2): Transform;
    rotate(angle: number): Transform;
    /**
      Returns the transform that represents scaling.
    */
    static scale(scale: Vec2): Transform;
    /**
      Returns the transform that represents rotating by angle (in radians).
    */
    static rotate(angle: number): Transform;
    /**
      Returns the transform that represents translating.
    */
    static translate(translation: Vec2): Transform;
    /**
     * Returns the perspective transform that transforms the unit square ([(0, 0), (1, 0), (1, 1), (0, 1)]) to the specified quadrangle.
     * Reference: Projective Mappings for Image Warping
     */
    static unitToQuad(quad: [Vec2, Vec2, Vec2, Vec2]): Transform | undefined;
    static quadToQuad(from: [Vec2, Vec2, Vec2, Vec2], to: [Vec2, Vec2, Vec2, Vec2]): Transform | undefined;
    static rectToRect(from: Rect, to: Rect): Transform;
    /**
      Merges all transforms.
    */
    static merge(...transforms: Transform[]): Transform;
}
