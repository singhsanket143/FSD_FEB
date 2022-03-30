function f(i, j, n, m, result) {
    // base case
    if(i == n-1 && j == m-1) {
        // found one possible way
        console.log(result);
        return 1;
    }
    if(i >= n || j >= m) return 0; // if you go outside the grid, there is no possible way
    return f(i, j+1, n, m, result + " R ") + f(i+1, j, n, m, result + " D ");
}

console.log(f(0, 0, 3, 3, ""));

// i, j is the current cell
// n, m is the grid dimension