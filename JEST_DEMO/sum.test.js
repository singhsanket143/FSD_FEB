const sum = require('./sum');

test('add 1 + 3 to get 4', () => {
    // inside the call back function we write the tests
    expect(sum(1, 3)).toBe(4);
});

test('add 0 + 4 to get 4 and 10 + 2 to get 12', () => {
    expect(sum(0, 4)).toBe(4);
    expect(sum(10, 2)).toBe(12);
});