# Description

```js
function groupArrayElements(array, groupCount){/*...*/}
groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

A Javascript function which, given an array of length >= 0, and a positive integer N, returns the contents of the array divided into N equally sized arrays (groups).

If the array does not divide exactly by N, the last group will contain
the remainder, and its size is minimized while respecting the even
sizing of the other groups.

An empty array is returned if array has zero length, or groupCount is less than one.

# Examples

```js
const groupArrayElements = require('./groupArrayElements')

groupArrayElements([1, 2, 3, 4, 5], 3) // => [ [1,2], [3,4], [5] ]
groupArrayElements([1, 2, 3, 4, 5], 2) // => [ [1,2,3], [4,5] ]
groupArrayElements([1, 2, 3, 4, 5, 6], 3) // => [ [1,2], [3,4], [5,6] ]
groupArrayElements([1, 2, 3, 4, 5, 6], 4) // => [ [1], [2], [3], [4,5,6] ]
groupArrayElements([1, 2, 3, 4, 5], 0) // => []
groupArrayElements([], 2) // => []
``` 

# Testing

Jest is used.  

`yarn test` / `npm run test` / `npx jest`

# Tidying

Standard JS is used (https://standardjs.com/)

`yarn tidy [--fix]`  or `npm run tidy [--fix]`

The main function code is written in ES5 style for backward compatibility.