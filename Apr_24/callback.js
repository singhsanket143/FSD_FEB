function fun(n, fn) {
    // n -> n is a number
    // fn -> fn is a function
    
    // some piece of code 
    console.log(n);
    // some more piece of code

    fn(); // is a callback function
}

fun(10, function () {
    console.log("i am the callback")
});

fun(10, function () {
    console.log("i am the callback 1")
});


