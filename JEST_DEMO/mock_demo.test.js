const {foreach, fun} = require('./mock_demo');
const Gun = require('./gun');

const mockedCallback = jest.fn((element) => {
    // console.log("element given to the mocked function is ", element);
    return element * 20;
});


test('testing foreach', () => {
    foreach([10, 20, 30, 40], mockedCallback);

    expect(mockedCallback.mock.calls.length).toBe(4); // using this we will be able to check how many times mocked callback was called
    expect(mockedCallback.mock.results[0].value).toBe(200);
    expect(mockedCallback.mock.results[1].value).toBe(400);
})

test('testing fun', () => {
     // automocking
     console.log(Gun);
    const spy = jest.spyOn(Gun, 'gun').mockImplementation(() => {
        return 33;
    })
    let ans = fun();
    expect(spy).toHaveBeenCalled();
    expect(ans).toBe(330);
})
