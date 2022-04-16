function fun(fn, m) {
    for(let i = 0; i < m; i++) {}
    fn();
}

fun(function() {console.log("greet")}, 10000000000);