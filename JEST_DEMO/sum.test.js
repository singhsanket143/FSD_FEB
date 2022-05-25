const {sum, fun} = require('./sum');

test('add 1 + 3 to get 4', () => {
    // inside the call back function we write the tests
    expect(sum(1, 3)).toBe(4);
});

test('add 0 + 4 to get 4 and 10 + 2 to get 12', () => {
    expect(sum(0, 4)).toBe(4);
    expect(sum(10, 2)).toBe(12);
});

test('the fun array has mango', () => {
    expect(fun()).toContain('mango');
});


test('check for zeroes', () => {
    const z = 0;
    expect(z).toBe(0);
    expect(z).not.toBeNull();
    expect(z).toBeFalsy();
})

test('more tests', () => {
    const val = sum (2, 3);
    expect(val).toBeGreaterThan(2);
    expect(val).toBeLessThan(10);
    expect(val).toBeLessThanOrEqual(5);
})