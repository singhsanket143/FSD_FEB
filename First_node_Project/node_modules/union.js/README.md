Helper function to combine to Lists such that the result is a Union of the lists and 
there are no duplicates in the combined result.

## Specification:
- Preserves Order Of Elements
- Uses recommended ES6 features

## Parameters:
- Two Lists(JS Arrays)
- The arrays can contain any kind of primitive JavaScript value and plain objects ({}) or arrays([]). The objects may contain nested objects/arrays. The arrays, recursively, may contain any primitive or plain objects values.
- The array will not contain any function, or objects containing functions.

## Return Value:
The return value is a new list containing the union of both the lists.

## How To Use:

1. Install the module by typing `npm i union.js` in the node terminal

2. Import the module by writing `const union = require('union.js')`

3. Call the `union` function on two valid Array inputs

## Example

```

const union = require('union.js')

union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]

union(['a'], ['b']);
// => ['a', 'b']

union([1], ['1', 1]);
//=> [1, '1']

union([{ a: { b: 10 } }], [{ a: { b: 20 } }]);
//=> [{a: { b: 10 }}, {a: { b: 20 }}]

union([{ a: { b: 10 } }], [{ a: { b: 10 } }]);
//=> [{a: { b: 10 }}]

union([{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2], [{b: 10, c: {z: {t: 5, _t: 5}, f: [ 4]}}, '2']);
//=> [{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2, "2"]

```