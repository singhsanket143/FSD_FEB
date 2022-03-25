function fib(n) {
    // base case
    if(n == 0) return 0;
    if(n == 1) return 1;
    // assumption
    let a = fib(n-1);
    let b = fib(n-2);
    // self work
    return a+b;
}

console.log(fib(7))