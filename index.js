"use strict";
var Vec2 = (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vec2.prototype, "width", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "height", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Vec2.prototype.equals = function (v) {
        return this.x == v.x && this.y == v.y;
    };
    Vec2.prototype.add = function (v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    };
    Vec2.prototype.sub = function (v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    };
    Vec2.prototype.mul = function (v) {
        return new Vec2(this.x * v.x, this.y * v.y);
    };
    Vec2.prototype.div = function (v) {
        return new Vec2(this.x / v.x, this.y / v.y);
    };
    Vec2.prototype.mulScalar = function (s) {
        return new Vec2(this.x * s, this.y * s);
    };
    Vec2.prototype.divScalar = function (s) {
        return new Vec2(this.x / s, this.y / s);
    };
    Vec2.prototype.neg = function () {
        return new Vec2(-this.x, -this.y);
    };
    Vec2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2.prototype.squaredLength = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vec2.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vec2.prototype.floor = function () {
        return new Vec2(Math.floor(this.x), Math.floor(this.y));
    };
    Vec2.prototype.ceil = function () {
        return new Vec2(Math.ceil(this.x), Math.ceil(this.y));
    };
    Vec2.prototype.round = function () {
        return new Vec2(Math.round(this.x), Math.round(this.y));
    };
    Vec2.prototype.transform = function (transform) {
        var x = transform.m00 * this.x + transform.m10 * this.y + transform.m20;
        var y = transform.m01 * this.x + transform.m11 * this.y + transform.m21;
        var w = transform.m02 * this.x + transform.m12 * this.y + transform.m22;
        return new Vec2(x / w, y / w);
    };
    Vec2.prototype.members = function () {
        return [this.x, this.y];
    };
    Vec2.prototype.toString = function () {
        return "Vec2(" + this.x + "," + this.y + ")";
    };
    return Vec2;
}());
exports.Vec2 = Vec2;
var Rect = (function () {
    function Rect(topLeft, bottomRight) {
        if (topLeft === void 0) { topLeft = new Vec2(); }
        if (bottomRight === void 0) { bottomRight = topLeft; }
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
    Rect.prototype.equals = function (other) {
        return this.topLeft.equals(other.topLeft) && this.bottomRight.equals(other.bottomRight);
    };
    Object.defineProperty(Rect.prototype, "size", {
        get: function () {
            return this.bottomRight.sub(this.topLeft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "topRight", {
        get: function () {
            return new Vec2(this.right, this.top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottomLeft", {
        get: function () {
            return new Vec2(this.left, this.bottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "left", {
        get: function () {
            return this.topLeft.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "top", {
        get: function () {
            return this.topLeft.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this.bottomRight.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this.bottomRight.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.size.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.size.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "isEmpty", {
        get: function () {
            return this.width <= 0 || this.height <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.intBounding = function () {
        var min = this.topLeft.floor();
        var max = this.topLeft.add(this.size).ceil();
        return new Rect(min, max.sub(min));
    };
    Rect.prototype.transform = function (transform) {
        var points = [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight];
        var mapped = points.map(function (p) { return p.transform(transform); });
        var xs = mapped.map(function (p) { return p.x; });
        var ys = mapped.map(function (p) { return p.y; });
        var left = Math.min.apply(Math, xs);
        var right = Math.max.apply(Math, xs);
        var top = Math.min.apply(Math, ys);
        var bottom = Math.max.apply(Math, ys);
        return new Rect(new Vec2(left, top), new Vec2(left, bottom));
    };
    Rect.prototype.union = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i - 0] = arguments[_i];
        }
        return Rect.union.apply(Rect, [this].concat(others));
    };
    Rect.prototype.intersection = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i - 0] = arguments[_i];
        }
        return Rect.intersection.apply(Rect, [this].concat(others));
    };
    Rect.prototype.toString = function () {
        return "Rect(" + this.topLeft + "," + this.bottomRight + ")";
    };
    Rect.union = function () {
        var rects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rects[_i - 0] = arguments[_i];
        }
        rects = rects.filter(function (r) { return !r.isEmpty; });
        if (rects.length == 0) {
            return new Rect();
        }
        var left = Math.min.apply(Math, rects.map(function (r) { return r.left; }));
        var top = Math.min.apply(Math, rects.map(function (r) { return r.top; }));
        var right = Math.max.apply(Math, rects.map(function (r) { return r.right; }));
        var bottom = Math.max.apply(Math, rects.map(function (r) { return r.bottom; }));
        return new Rect(new Vec2(left, top), new Vec2(right, bottom));
    };
    Rect.intersection = function () {
        var rects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rects[_i - 0] = arguments[_i];
        }
        var isEmpty = rects.some(function (r) { return r.isEmpty; });
        if (isEmpty) {
            return new Rect();
        }
        var left = Math.max.apply(Math, rects.map(function (r) { return r.left; }));
        var top = Math.max.apply(Math, rects.map(function (r) { return r.top; }));
        var right = Math.min.apply(Math, rects.map(function (r) { return r.right; }));
        var bottom = Math.min.apply(Math, rects.map(function (r) { return r.bottom; }));
        return new Rect(new Vec2(left, top), new Vec2(right, bottom));
    };
    return Rect;
}());
exports.Rect = Rect;
var Transform = (function () {
    function Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00 === void 0) { m00 = 1; }
        if (m01 === void 0) { m01 = 0; }
        if (m02 === void 0) { m02 = 0; }
        if (m10 === void 0) { m10 = 0; }
        if (m11 === void 0) { m11 = 1; }
        if (m12 === void 0) { m12 = 0; }
        if (m20 === void 0) { m20 = 0; }
        if (m21 === void 0) { m21 = 0; }
        if (m22 === void 0) { m22 = 1; }
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
    Transform.prototype.equals = function (other) {
        return (this.m00 == other.m00 &&
            this.m01 == other.m01 &&
            this.m02 == other.m02 &&
            this.m10 == other.m10 &&
            this.m11 == other.m11 &&
            this.m12 == other.m12 &&
            this.m20 == other.m20 &&
            this.m21 == other.m21 &&
            this.m22 == other.m22);
    };
    Transform.prototype.merge = function (other) {
        var a00 = other.m00;
        var a01 = other.m01;
        var a02 = other.m02;
        var a10 = other.m10;
        var a11 = other.m11;
        var a12 = other.m12;
        var a20 = other.m20;
        var a21 = other.m21;
        var a22 = other.m22;
        var b00 = this.m00;
        var b01 = this.m01;
        var b02 = this.m02;
        var b10 = this.m10;
        var b11 = this.m11;
        var b12 = this.m12;
        var b20 = this.m20;
        var b21 = this.m21;
        var b22 = this.m22;
        var m00 = b00 * a00 + b01 * a10 + b02 * a20;
        var m01 = b00 * a01 + b01 * a11 + b02 * a21;
        var m02 = b00 * a02 + b01 * a12 + b02 * a22;
        var m10 = b10 * a00 + b11 * a10 + b12 * a20;
        var m11 = b10 * a01 + b11 * a11 + b12 * a21;
        var m12 = b10 * a02 + b11 * a12 + b12 * a22;
        var m20 = b20 * a00 + b21 * a10 + b22 * a20;
        var m21 = b20 * a01 + b21 * a11 + b22 * a21;
        var m22 = b20 * a02 + b21 * a12 + b22 * a22;
        return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    };
    Transform.prototype.invert = function () {
        var a00 = this.m00;
        var a01 = this.m01;
        var a02 = this.m02;
        var a10 = this.m10;
        var a11 = this.m11;
        var a12 = this.m12;
        var a20 = this.m20;
        var a21 = this.m21;
        var a22 = this.m22;
        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20;
        var det = a00 * b01 + a01 * b11 + a02 * b21;
        if (!det) {
            return undefined;
        }
        var detInv = 1.0 / det;
        var m00 = b01 * detInv;
        var m01 = (-a22 * a01 + a02 * a21) * detInv;
        var m02 = (a12 * a01 - a02 * a11) * detInv;
        var m10 = b11 * detInv;
        var m11 = (a22 * a00 - a02 * a20) * detInv;
        var m12 = (-a12 * a00 + a02 * a10) * detInv;
        var m20 = b21 * detInv;
        var m21 = (-a21 * a00 + a01 * a20) * detInv;
        var m22 = (a11 * a00 - a01 * a10) * detInv;
        return new Transform(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    };
    Transform.prototype.members = function () {
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
    };
    Transform.prototype.toString = function () {
        return "Transform(" + this.members().join(",") + ")";
    };
    Transform.scale = function (scale) {
        return new Transform(scale.x, 0, 0, 0, scale.y, 0, 0, 0, 1);
    };
    Transform.rotate = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Transform(c, s, 0, -s, c, 0, 0, 0, 1);
    };
    Transform.translate = function (translation) {
        return new Transform(1, 0, 0, 0, 1, 0, translation.x, translation.y, 1);
    };
    Transform.merge = function () {
        var transforms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transforms[_i - 0] = arguments[_i];
        }
        return transforms.reduce(function (a, x) { return a.merge(x); }, new Transform());
    };
    return Transform;
}());
exports.Transform = Transform;
