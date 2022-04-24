let arr = [5,4,3,2,1];

// arr.sort(function (a, b) { // we are passing the call back as function expression
//     return a-b;
// });


// arr.sort((a, b) => { // we are passing the call back as arrow function
//     return a-b;
// });

// arr.sort((a, b) => a-b); // we are passing the call back as a shorter version of arrow function

// // console.log(arr);

arr.forEach(function (val, idx) {
    console.log(val+10);

})


// arr = [100, 10, 1, 2, 5];

// arr.sort(function compare() {
//     // something
//     console.log("skdhbfjdshbfv")
// })

// arr.sort(function compare() {
//     // something
//     console.log("zdbfjksbdfkjbhsfk")
// })

// console.log(arr);


// function fun(n) {
//     // not a call back
//     console.log(n);
//     // somw piece of code

//     return function () {console.log("i was returned"); }
// }

// let fn = fun(10);
// fn();