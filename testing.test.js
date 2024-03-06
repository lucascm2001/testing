/* eslint-env jest */

const testing = require('./testing');

test('adds 1 + 2 to equal 3', () => {
  expect(testing.sum(1, 2)).toBe(3);
});

test('capitalize "hey" to "Hey"', () => {
  expect(testing.capitalize('hey')).toBe('Hey');
});

test('reverse "hey" to "yeh"', () => {
  expect(testing.reverseString('hey')).toBe('yeh');
});

test('adds 1 + 2 to make 3', () => {
  expect(testing.calculator.add(1, 2)).toBe(3);
});

test('subtracts 2 from 1 to make -1', () => {
  expect(testing.calculator.subtract(1, 2)).toBe(-1);
});

test('multiplies 10 and 2 to make 20', () => {
  expect(testing.calculator.multiply(10, 2)).toBe(20);
});

test('divides 3 by 9 to make 3', () => {
  expect(testing.calculator.divide(9, 3)).toBe(3);
});

test('cipher on bonk to eron with shift of 3', () => {
  expect(testing.caesarCipher('bonk', 3)).toBe('erqn');
});

test('cipher on zyx to azy with shift of 1', () => {
  expect(testing.caesarCipher('zyx', 1)).toBe('azy');
});

test('cipher on zy.!x to az.!y with shift of 0', () => {
  expect(testing.caesarCipher('zy.!x', 0)).toBe('zy.!x');
});

test('average of 1, 2, 3 is 2', () => {
  expect(testing.analyzeArray([1, 2, 3]).average).toBe(2);
});

test('min of 1, 2, 3 is 1', () => {
  expect(testing.analyzeArray([1, 2, 3]).min).toBe(1);
});

test('max of 1, 2, 3 is 3', () => {
  expect(testing.analyzeArray([1, 2, 3]).max).toBe(3);
});

test('length of 1, 2, 3 is 3', () => {
  expect(testing.analyzeArray([1, 2, 3]).length).toBe(3);
});
