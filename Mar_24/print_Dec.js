function print_dec(n) {
    // base case
    if(n == 1) {
        console.log(1);
        return;
    }
    console.log(n);
    print_dec(n-1);
}

print_dec(5)