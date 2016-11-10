import assert = require("assert")

import {Vec2, Rect, Transform} from "./"

describe("Vec2", () => {
  describe("width / height", () => {
    it("returns x / y", () => {
      const pos = new Vec2(100, 200)
      assert.equal(pos.width, 100)
      assert.equal(pos.height, 200)
    })
  })
  describe("equals", () => {
    it("compares 2 vectors by value", () => {
      const v1 = new Vec2(100, 200)
      const v2 = new Vec2(100, 200)
      const v3 = new Vec2(100, 300)
      const v4 = new Vec2(200, 300)
      assert(v1.equals(v2))
      assert(!v1.equals(v3))
      assert(!v1.equals(v4))
    })
  })
  describe("add", () => {
    it("adds 2 vectors ", () => {
      const v1 = new Vec2(100, 200)
      const v2 = new Vec2(50, 40)
      const result = v1.add(v2)
      assert.equal(result.x, 150)
      assert.equal(result.y, 240)
    })
  })
  describe("sub", () => {
    it("subtracts 2 vectors ", () => {
      const v1 = new Vec2(100, 200)
      const v2 = new Vec2(50, 40)
      const result = v1.sub(v2)
      assert.equal(result.x, 50)
      assert.equal(result.y, 160)
    })
  })
  describe("mul", () => {
    it("multiplies 2 vectors ", () => {
      const v1 = new Vec2(100, 200)
      const v2 = new Vec2(50, 40)
      const result = v1.mul(v2)
      assert.equal(result.x, 5000)
      assert.equal(result.y, 8000)
    })
  })
  describe("div", () => {
    it("divides 2 vectors ", () => {
      const v1 = new Vec2(100, 200)
      const v2 = new Vec2(50, 40)
      const result = v1.div(v2)
      assert.equal(result.x, 2)
      assert.equal(result.y, 5)
    })
  })
  describe("mulScalar", () => {
    it("multiplies vector by number", () => {
      const v1 = new Vec2(100, 200)
      const result = v1.mulScalar(1.5)
      assert.equal(result.x, 150)
      assert.equal(result.y, 300)
    })
  })
  describe("divScalar", () => {
    it("divides vector by number", () => {
      const v1 = new Vec2(100, 200)
      const result = v1.divScalar(4)
      assert.equal(result.x, 25)
      assert.equal(result.y, 50)
    })
  })
  describe("neg", () => {
    it("inverts vector", () => {
      const v1 = new Vec2(100, 200)
      const result = v1.neg()
      assert.equal(result.x, -100)
      assert.equal(result.y, -200)
    })
  })
  describe("length", () => {
    it("returns length", () => {
      const v1 = new Vec2(300, 400)
      const result = v1.length()
      assert.equal(result, 500)
    })
  })
  describe("squaredLength", () => {
    it("returns squared length", () => {
      const v1 = new Vec2(300, 400)
      const result = v1.squaredLength()
      assert.equal(result, 250000)
    })
  })
  describe("angle", () => {
    it("returns angle from positive x-axis", () => {
      const v1 = new Vec2(0.5, Math.sqrt(3) / 2)
      const result = v1.angle()
      assert.equal(result, Math.PI / 3)
    })
  })
  describe("floor", () => {
    it("returns floor'ed vector", () => {
      const v1 = new Vec2(3.4, -1.7)
      const result = v1.floor()
      assert.equal(result.x, 3)
      assert.equal(result.y, -2)
    })
  })
  describe("ceil", () => {
    it("returns ceil'ed vector", () => {
      const v1 = new Vec2(3.4, -1.7)
      const result = v1.ceil()
      assert.equal(result.x, 4)
      assert.equal(result.y, -1)
    })
  })
  describe("round", () => {
    it("returns rounded vector", () => {
      const v1 = new Vec2(3.4, -1.3)
      const result = v1.round()
      assert.equal(result.x, 3)
      assert.equal(result.y, -1)
    })
  })
  describe("members", () => {
    it("returns members as array", () => {
      const v1 = new Vec2(3.4, -1.3)
      const result = v1.members()
      assert.deepEqual(result, [3.4, -1.3])
    })
  })
  describe("toString", () => {
    it("returns string", () => {
      const v1 = new Vec2(3.4, -1.3)
      const result = v1.toString()
      assert.equal(result, "Vec2(3.4,-1.3)")
    })
  })
})

describe("Rect", () => {
  describe("equals", () => {
    it("compares 2 rects by value", () => {
      const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
      const r2 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
      assert(r1.equals(r2))
    })
  })
  describe("size", () => {
    it("returns size", () => {
       const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
       const result = r1.size
       assert.equal(result.width, 9)
       assert.equal(result.height, 28)
    })
  })
  describe("topRight", () => {
    it("returns top right", () => {
       const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
       const result = r1.topRight
       assert.equal(result.x, 10)
       assert.equal(result.y, 2)
    })
  })
  describe("bottomLeft", () => {
    it("returns bototm left", () => {
       const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
       const result = r1.bottomLeft
       assert.equal(result.x, 1)
       assert.equal(result.y, 30)
    })
  })
  describe("left, top, right, bottom, width, height", () => {
    it("returns each component", () => {
       const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
       assert.equal(r1.left, 1)
       assert.equal(r1.top, 2)
       assert.equal(r1.right, 10)
       assert.equal(r1.bottom, 30)
       assert.equal(r1.width, 9)
       assert.equal(r1.height, 28)
    })
  })
  describe("center", () => {
    it("returns center", () => {
       const r1 = new Rect(new Vec2(1, 2), new Vec2(10, 30))
       const result = r1.center
       assert.equal(result.x, 5.5)
       assert.equal(result.y, 16)
    })
  })
  describe("intBounding", () => {
    it("returns integer bounding rect", () => {
       const r1 = new Rect(new Vec2(0.9, 1.5), new Vec2(5.6, 4.3))
       const result = r1.intBounding()
       assert.equal(result.left, 0)
       assert.equal(result.top, 1)
       assert.equal(result.right, 6)
       assert.equal(result.bottom, 5)
    })
  })
  describe("translate", () => {
    it("translates rect", () => {
       const r1 = new Rect(new Vec2(0.9, 1.5), new Vec2(5.6, 4.3))
       const result = r1.translate(new Vec2(0.5, 0.3))
       assert.equal(result.left, 1.4)
       assert.equal(result.top, 1.8)
       assert.equal(result.right, 6.1)
       assert.equal(result.bottom, 4.6)
    })
  })
  describe("inflate", () => {
    it("inflates rect", () => {
       const r1 = new Rect(new Vec2(0.9, 1.5), new Vec2(5.6, 4.3))
       const result = r1.inflate(0.5)
       assert.equal(result.left, 0.4)
       assert.equal(result.top, 1)
       assert.equal(result.right, 6.1)
       assert.equal(result.bottom, 4.8)
    })
  })
  describe("includes", () => {
    it("returns if the point is inside the rect", () => {
       const r1 = new Rect(new Vec2(0.9, 1.5), new Vec2(5.6, 4.3))
       const p1 = new Vec2(1, 2)
       const p2 = new Vec2(-1, 2)
       const p3 = new Vec2(3, 5)
       assert(r1.includes(p1))
       assert(!r1.includes(p2))
       assert(!r1.includes(p3))
    })
  })
  describe("union", () => {
    it("returns union rect", () => {
      const r1 = new Rect(new Vec2(10, 20), new Vec2(50, 120))
      const r2 = new Rect(new Vec2(30, 0), new Vec2(100, 60))
      const result = Rect.union(r1, r2)!
      assert.equal(result.left, 10)
      assert.equal(result.top, 0)
      assert.equal(result.right, 100)
      assert.equal(result.bottom, 120)
    })
  })
  describe("intersection", () => {
    it("returns intersection rect", () => {
      const r1 = new Rect(new Vec2(10, 20), new Vec2(50, 120))
      const r2 = new Rect(new Vec2(30, 0), new Vec2(100, 60))
      const result = Rect.intersection(r1, r2)!
      assert.equal(result.left, 30)
      assert.equal(result.top, 20)
      assert.equal(result.right, 50)
      assert.equal(result.bottom, 60)
    })
    it("returns undefined if no intersection exists", () => {
      const r1 = new Rect(new Vec2(10, 20), new Vec2(30, 40))
      const r2 = new Rect(new Vec2(100, 200), new Vec2(300, 400))
      const result = Rect.intersection(r1, r2)
      assert.equal(result, undefined)
    })
  })
})

describe("Transform", () => {
  describe("equals", () => {
    it("compares 2 transforms", () => {
      const t1 = Transform.translate(new Vec2(10)).merge(Transform.rotate(Math.PI / 2))
      const t2 = Transform.translate(new Vec2(10)).merge(Transform.rotate(Math.PI / 2))
      assert(t1.equals(t2))
    })
  })
  describe("invert", () => {
    it("inverts transform", () => {
      const t1 = Transform.translate(new Vec2(10)).merge(Transform.rotate(Math.PI / 2))
      const t2 = Transform.rotate(-Math.PI/2).merge(Transform.translate(new Vec2(-10)))
      assert(t1.invert()!.equals(t2))
    })
  })
  describe("isAffine", () => {
    it("returns if affine", () => {
      const t1 = new Transform(1, 1, 1, 1, 1, 1, 1, 1, 1)
      const t2 = Transform.rotate(-Math.PI/2).merge(Transform.translate(new Vec2(-10)))
      assert(!t1.isAffine())
      assert(t2.isAffine())
    })
  })
  describe("isTranslation", () => {
    it("returns if translation", () => {
      const t1 = Transform.translate(new Vec2(100, 200))
      const t2 = Transform.rotate(-Math.PI/2).merge(Transform.translate(new Vec2(-10)))
      assert(t1.isTranslation())
      assert(!t2.isTranslation())
    })
  })
  describe("scale", () => {
    it("returns scale transform", () => {
      const v1 = new Vec2(100, 200)
      const t1 = Transform.scale(new Vec2(0.5, 1.5))
      const result = v1.transform(t1)
      assert.equal(result.x, 50)
      assert.equal(result.y, 300)
    })
  })
  describe("rotate", () => {
    it("returns rotation transform", () => {
      const v1 = new Vec2(100, 200)
      const t1 = Transform.rotate(Math.PI / 2)
      const result = v1.transform(t1)
      assert(almostEqual(result.x, -200))
      assert(almostEqual(result.y, 100))
    })
  })
  describe("translate", () => {
    it("returns translation transform", () => {
      const v1 = new Vec2(100, 200)
      const t1 = Transform.translate(new Vec2(300, 500))
      const result = v1.transform(t1)
      assert.equal(result.x, 400)
      assert.equal(result.y, 700)
    })
  })
  describe("unitToQuad", () => {
    it("returns transform to quad", () => {
      const v1 = new Vec2(1, 0)
      const v2 = new Vec2(1, 1)
      const t1 = Transform.unitToQuad([new Vec2(0), new Vec2(100, 0), new Vec2(0, 200), new Vec2(200, 300)])!
      const r1 = v1.transform(t1)
      const r2 = v2.transform(t1)
      assert(almostEqual(r1.x, 100))
      assert(almostEqual(r1.y, 0))
      assert(almostEqual(r2.x, 200))
      assert(almostEqual(r2.y, 300))
    })
  })
  describe("merge", () => {
    it("merges transforms", () => {
      const v1 = new Vec2(100, 200)
      const t1 = Transform.translate(new Vec2(10, 5)).merge(Transform.rotate(Math.PI / 2))
      const result = v1.transform(t1)
      assert(almostEqual(result.x, -205))
      assert(almostEqual(result.y, 110))
    })
  })
})

function almostEqual(x: number, y: number) {
  return Math.abs(x - y) < 1e-5
}