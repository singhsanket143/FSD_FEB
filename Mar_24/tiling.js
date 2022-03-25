function tile(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    return tile(n-1) + tile(n-2);
}