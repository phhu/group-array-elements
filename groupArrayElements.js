/**
 * Given an array of length >= 0, and a positive integer N, returns the contents
 * of the array divided into N equally sized arrays (groups).
 *
 * If the array does not divide exactly by N, the last group will contain
 * the remainder, and its size is minimized while respecting the even
 * sizing of the other groups.
 *
 * An empty array is returned if array has zero length, or groupCount is less than one.
 *
 * @func
 * @sig (Number, [a]) -> [[a],[a]]
 * @param {Array} array An array to split into groups.
 * @param {Number} groupCount Integer number of groups to split array into.
 * Numbers will be converted to integers using parseInt().
 * @return {Array} A new array containing input array contents split into
 * groupCount arrays, equally sized, possibly excepting a last remainder group.
 * @example
 *
 *      groupArrayElements([1, 2, 3, 4, 5], 3) // => [ [1,2], [3,4], [5] ]
 *      groupArrayElements([1, 2, 3, 4, 5], 2) // => [ [1,2,3], [4,5] ]
 *      groupArrayElements([1, 2, 3, 4, 5, 6], 3) // => [ [1,2], [3,4], [5,6] ]
 *      groupArrayElements([1, 2, 3, 4, 5, 6], 4) // => [ [1], [2], [3], [4,5,6] ]
 *      groupArrayElements([1, 2, 3, 4, 5], 0) // => []
 *      groupArrayElements([], 2) // => []
 */

// ES5 syntax used for conservative compatibility
/* eslint-disable no-var */

function groupArrayElements (array, groupCount) {
  var length = array == null ? 0 : array.length
  groupCount = parseInt(groupCount)
  if (!length || groupCount < 1 || isNaN(groupCount)) {
    return []
  }
  groupCount = Math.min(length, groupCount)

  // groupSize calculation: use ceiling of quotient if it leaves
  // remainder at least one but less that ceiling of quotient,
  // otherwise floor of quotient. This minimises the size of any
  // necessary last remainder group.
  var q = length / groupCount
  var qCeil = Math.ceil(q)
  var margin = length - (qCeil * (groupCount - 1))
  var groupSize = (margin > 0 && margin < qCeil)
    ? qCeil
    : Math.floor(q)

  // return groupCount slices of groupSize
  var result = new Array(groupCount)
  for (var i = 0; i < groupCount - 1; i++) {
    result[i] = array.slice(i * groupSize, (i + 1) * groupSize)
  }
  // include last group (remainder)
  result[groupCount - 1] = array.slice(i * groupSize)

  return result
}

module.exports = groupArrayElements
