export declare class Vec2 {
    readonly x: number;
    readonly y: number;
    constructor(x?: number, y?: number);
    readonly width: number;
    readonly height: number;
    equals(v: Vec2): boolean;
    add(v: Vec2): Vec2;
    sub(v: Vec2): Vec2;
    mul(v: Vec2): Vec2;
    div(v: Vec2): Vec2;
    mulScalar(s: number): Vec2;
    divScalar(s: number): Vec2;
    neg(): Vec2;
    length(): number;
    squaredLength(): number;
    angle(): number;
    floor(): Vec2;
    ceil(): Vec2;
    round(): Vec2;
    transform(transform: Transform): Vec2;
    members(): number[];
    toString(): string;
}
export declare class Rect {
    readonly topLeft: Vec2;
    readonly bottomRight: Vec2;
    constructor(topLeft?: Vec2, bottomRight?: Vec2);
    equals(other: Rect): boolean;
    readonly size: Vec2;
    readonly topRight: Vec2;
    readonly bottomLeft: Vec2;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly width: number;
    readonly height: number;
    readonly isEmpty: boolean;
    intBounding(): Rect;
    transform(transform: Transform): Rect;
    union(...others: Rect[]): Rect;
    intersection(...others: Rect[]): Rect;
    toString(): string;
    static union(...rects: Rect[]): Rect;
    static intersection(...rects: Rect[]): Rect;
}
export declare class Transform {
    readonly m00: number;
    readonly m01: number;
    readonly m02: number;
    readonly m10: number;
    readonly m11: number;
    readonly m12: number;
    readonly m20: number;
    readonly m21: number;
    readonly m22: number;
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    equals(other: Transform): boolean;
    merge(other: Transform): Transform;
    invert(): Transform | undefined;
    members(): number[];
    toString(): string;
    static scale(scale: Vec2): Transform;
    static rotate(angle: number): Transform;
    static translate(translation: Vec2): Transform;
    static merge(...transforms: Transform[]): Transform;
}
