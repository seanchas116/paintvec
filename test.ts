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
