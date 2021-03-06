const {fun} = require('./async');

test('expect the fun function to return done', async () => {
    const response = await fun();
    expect(response).toBe("done");
})

test('testing with .then', () => {
    fun().then((data) => {
        expect(data).toBe("done");
    })
});

test('one more way', () => {
    return expect(fun()).resolves.toBe("done"); // resolve/rejects
})