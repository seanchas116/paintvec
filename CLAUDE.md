# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

paintvec is a simple JavaScript 2D vector math library that provides essential geometric primitives for 2D graphics applications. The library is designed to be immutable, functional, and type-safe with no external dependencies.

## Commands

### Build
```bash
npm run build
```
Formats code with Prettier and compiles TypeScript to JavaScript.

### Test
```bash
npm test
```
Runs all tests using Vitest.

### Run a single test
```bash
npx vitest run index.test.ts -t "test name pattern"
```

### Documentation
```bash
npm run docs:generate  # Generate API documentation
npm run docs:serve     # Serve documentation locally
```

## Architecture

The entire library is implemented in a single file (`index.ts`) containing five main classes:

1. **Vec2**: 2D vector/point with arithmetic operations, geometric calculations, and transformations
2. **Rect**: Rectangle with position/size management, intersection/union operations, and various construction methods
3. **Transform**: 2D affine and perspective transform using 3x3 matrices, supporting scale/rotate/translate operations
4. **EdgeOffsets**: Edge offset representation for rectangle insets/outsets
5. **Segment**: Line segment with length and angle calculations

### Key Design Principles

- **Immutability**: All operations return new instances rather than modifying existing ones
- **Method Chaining**: Most methods return instances allowing fluent API usage
- **Type Safety**: Full TypeScript support with proper type definitions
- **No Dependencies**: Zero runtime dependencies, only development dependencies

### Testing Approach

Tests are in `index.test.ts` using Vitest. The test suite includes:
- Comprehensive coverage of all public methods
- Floating-point comparison helpers (`almostEqual`) for numerical precision
- Organized test groups using `describe` blocks for each class
- Both instance methods and static factory methods are tested

When adding new functionality:
1. Add corresponding tests in the appropriate `describe` block
2. Use `almostEqual` for floating-point comparisons
3. Test edge cases and error conditions
4. Ensure all public methods have test coverage