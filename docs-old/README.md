# paintvec

[![npm version](https://badge.fury.io/js/paintvec.svg)](https://badge.fury.io/js/paintvec)
[![CircleCI](https://circleci.com/gh/seanchas116/paintvec.svg?style=svg)](https://circleci.com/gh/seanchas116/paintvec)

paintvec is a simple JavaScript 2D vector math library.

```
npm install paintvec
```

## Features

- 2D point / vector (`Vec2`)
- 2D rectangle (`Rect`)
- 2D affine transform (`Transform`)

[Documentation](https://seanchas116.github.io/paintvec/)

```js
import { Rect, Vec2, Transform } from "paintvec";

/// Vec2

// point at (100, 200)
const pos = new Vec2(100, 200);

// arithmetics
const pos2 = pos.add(new Vec2(50, 30)).mul(new Vec2(10, 20));

// math functions
pos.ceil().abs();

/// Rect

// 100*200 rectangle at (0, 0)
const rect = new Rect(new Vec2(0), new Vec2(100, 200));
// 100*200 rectangle at (50, 50)
const rect2 = new Rect(new Vec2(50, 50), new Vec2(150, 250));

// get intersection
const intersect = Rect.intersection(rect, rect2); //=> Rect(Vec2(50, 50), Vec2(100, 200))

// get union
const union = Rect.union(rect, rect2); //=> Rect(Vec2(0, 0), Vec2(150, 250))

/// Transform

// translate by (100, 200)
const translate = Transform.translate(new Vec2(100, 200));

// 2x scale
const scale = Transform.scale(new Vec2(2));

// rotate 45 degrees
const rotate = Transform.rotate(Math.PI / 4);

// translate then scale then rotate
const transform = translate.merge(scale).merge(rotate);

// apply transform to Vec2/Rect
pos.transform(transform);
rect.transform(transform);
```
