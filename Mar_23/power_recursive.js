function power(a, b) {
    if(b == 0) return 1; // base case
    let assume = power(a, b-1); // assumption
    return a*assume;
}

console.log(power(3, 4));