function fact(n) { // this function should calculate n!
    // Base case
    if(n == 1) return 1;
    let assume = fact(n-1); // that fact of n-1 is correct
    return n*assume;; // self work
}

// function fact1(n) { // this function should calculate n!
//     // Base case
//     if(n == 1) return 1;
//     return n*fact1(n-1);
// }

console.log(fact(4))