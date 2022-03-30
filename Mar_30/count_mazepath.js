function f(i, j, n, m) {
    // base case
    if(i == n-1 && j == m-1) {
        // found one possible way
        return 1;
    }
    if(i >= n || j >= m) return 0; // if you go outside the grid, there is no possible way
    return f(i, j+1, n, m) + f(i+1, j, n, m);
}

console.log(f(0, 0, 4, 4));

// i, j is the current cell
// n, m is the grid dimension