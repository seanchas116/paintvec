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
})
