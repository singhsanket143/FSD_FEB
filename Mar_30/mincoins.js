function f(x, coins) {
    // base case
    if(x == 0) {
        return 0;
    }
    let ans = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < coins.length; i++) {
        if(x-coins[i] >= 0) {
            ans = Math.min(ans, f(x-coins[i], coins));
        }
    }

    return 1+ans;
}

console.log(f(5, [1,5,7]));