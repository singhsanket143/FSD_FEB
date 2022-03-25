function reduce(n) {
    if(n == 1) return 0;
    if(n == 2) return 1;
    if(n == 3) return 1;

    let x, y, z;

    if(n%3 == 0) {
        x = reduce(n/3);
    } else {
        x = Number.MAX_SAFE_INTEGER;
    }

    if(n%2 == 0) {
        y = reduce(n/2);
    } else {
        y = Number.MAX_SAFE_INTEGER;
    }

    z = reduce(n-1);


    return 1 + Math.min(x, y, z);
}

function f(n) {
    if(n == 1) return 0;
    if(n == 2 || n == 3) return 1;
    let inf = Number.MAX_SAFE_INTEGER;
    return 1 + Math.min((n%3 == 0) ? f(n/3) : inf, (n%2 == 0) ? f(n/2) : inf, f(n-1));
}

console.log(f(10))