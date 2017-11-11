# paintvec

paintvec is a simple JavaScript 2D vector math library.

```
npm install paintvec
```

## Features

- 2D point / vector (`Vec2`)
- 2D rectangle (`Rect`)
- 2D affine transform  (`Transform`)

```js
import {Rect, Vec2, Transform} from 'paintvec'


/// Vec2

// point at (100, 200)
const pos = new Vec2(100, 200);

// arithmetics
const pos2 = pos.add(new Vec2(50, 30)).mul(new Vec2(10, 20));

// math functions
pos.ceil().abs();


/// Rect

// create rect from top left position and bottom right position
const rect = new Rect(new Vec2(100, 100), new Vec2(200, 300));


/// Transform

// translate by (100, 200)
const translate = Transform.translate(new Vec2(100, 200))

// 2x scale
const scale = Transform.scale(new Vec2(2))

// rotate 45 degrees
const rotate = Transform.rotate(Math.PI / 4)

// translate then scale then rotate
const transform = translate.merge(scale).merge(rotate)

// apply transform to Vec2/Rect
pos.transform(transform);
rect.transform(transform);
```
