const add = require('./add');

test('주어진 배열의 합을 계산합니다.', () => {
  expect(add([1, 2, 3, 4, 5])).toBe(15);
});