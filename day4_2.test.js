var max = require('./day4_2');

test('가장 큰 숫자를 반환해야한다', function() {
  expect(max(1, 5, 4)).toBe(5);
  expect(max(4, 2, 7)).toBe(7);
  expect(max([1, 5, 8, 3, 4])).toBe(8);
  expect(max([4, 2, 2, 4, 1])).toBe(4);
  expect(max([-5, -2])).toBe(-2);
});