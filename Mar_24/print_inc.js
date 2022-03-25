function print_inc(n) {
    // base case
    if(n == 1) {
        console.log(1);
        return;
    }
    print_inc(n-1);
    console.log(n);
}

print_inc(5)