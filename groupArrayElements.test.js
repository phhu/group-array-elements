const groupArrayElements = require('./groupArrayElements')

/* global test, expect */
test('It should split arrays exactly where possible', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([[1, 2], [3, 4], [5, 6]])
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([[1, 2, 3], [4, 5, 6]])
  expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([[1, 2, 3, 4], [5, 6, 7, 8]])
})

test('It should handle remainders correctly', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toStrictEqual([[1, 2], [3, 4], [5]])
  expect(groupArrayElements([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2, 3], [4, 5]])
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], 4)).toStrictEqual([[1], [2], [3], [4, 5, 6]])
  expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]])
})

test('It should handle excess groupSize correctly', () => {
  expect(groupArrayElements([1, 2, 3], 4)).toStrictEqual([[1], [2], [3]])
  expect(groupArrayElements([1], 4e8)).toStrictEqual([[1]])
})

test('It should empty and zero values correctly, returning an empty array', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5], 0)).toStrictEqual([])
  expect(groupArrayElements([1, 2, 3, 4, 5], -2)).toStrictEqual([])
  expect(groupArrayElements([], 2)).toStrictEqual([])
  expect(groupArrayElements([], 0)).toStrictEqual([])
})

test('It should cope with unexpected inputs, returning an empty array', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5], 'garbage')).toStrictEqual([])
  expect(groupArrayElements({}, -2)).toStrictEqual([])
  expect(groupArrayElements(null, 2)).toStrictEqual([])
  expect(groupArrayElements(null, () => {})).toStrictEqual([])
  expect(groupArrayElements()).toStrictEqual([])
})
