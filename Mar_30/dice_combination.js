function f(n) {
    // base case
    if(n == 0) {
        return 1;
    }

    let ans = 0;
    /*
        ans = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5) + f(n-6)
    */
    for(let k = 1; k <= 6; k++) {
        if(n - k >= 0) {
            ans += f(n-k);
        }
    }
    return ans;
}

console.log(f(6));