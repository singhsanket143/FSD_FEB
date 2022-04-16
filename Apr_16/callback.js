function fun(x, fn) { // x-> number, fn->function
    // some piece of code
    x = x*10;
    console.log(x);
    // some piece of code
    fn();
}



fun(10, function() {console.log("greet")});