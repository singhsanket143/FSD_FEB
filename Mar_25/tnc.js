function f1(n) {
    for(let i = 0; i <= n; i++) {
        if(n % 7 == 0) break;
        console.log(i);
    }
}

// O(n) , Ω(1) , Θ(n)

function f2(n) {
    for(let i = 0; i <= n; i+=2) {
        console.log(i);
    }
}

// O(n) Ω(n) , Θ(n)

function f3(n) {
    for(let i = 1; i <= n; i *= 2) {
        console.log(i);
    }
}

// O(logn)  Ω(logn) , Θ(logn)

function f4(n) {
    for(let i = 1; i*i <= n; i++) {
        console.log(i)
    }
}

// O(rootn)