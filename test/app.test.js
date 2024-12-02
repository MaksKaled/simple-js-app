const { add, multiply } = require('../src/app');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('multiply 5 * 3 to equal 15', () => {
    expect(multiply(5, 3)).toBe(15);
});
