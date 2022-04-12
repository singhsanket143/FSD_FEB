function merge(a, b) { // old merge function
    let c = [];
    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }

    // maybe array A is pending , the i < a.length will be true
    while(i < a.length) {
        c.push(a[i]);
        i++;
    }
    // may be instead of A, B is pending, then j < b.length will be true
    while(j < b.length) {
        c.push(b[j]);
        j++;
    }
    return c;
}

function merge_new(arr, leftstart, leftend, rightstart, rightend) {
    // todo
    // arr = [4,5,6,1,2,3] 
    // left = [4,5,6], right = [1,2,3]
    // ans = [1,2,3,4,5,6];
    let left = []; // left half
    let right = []; // right half
    for(let i = leftstart; i <= leftend; i++) {
        left.push(arr[i]);
    }
    for(let i = rightstart; i <= rightend; i++) {
        right.push(arr[i]);
    }
    let ans = merge(left, right);
    let k = leftstart;
    for(let i = 0; i < ans.length; i++) {
        arr[k] = ans[i];
        k++;
    }
}

function mergesort(arr, i, j) {
    if(i >= j) return; // single length array already sorted
    let mid = Math.floor((i+j)/2);
    mergesort(arr, i, mid);
    mergesort(arr, mid+1, j);
    merge_new(arr, i, mid, mid+1, j);
}

let arr = [6,5,4,3,2,1, 11];
mergesort(arr, 0, arr.length-1);
console.log(arr)