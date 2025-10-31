const { add } = require('../app');

describe('Addition Function Tests', () => {
  test('returns correct sum for valid numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('throws error for invalid inputs', () => {
    expect(() => add('a', 3)).toThrow('Invalid input');
  });
});
