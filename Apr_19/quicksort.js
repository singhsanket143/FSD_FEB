function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, lo, hi) {
    let pivot_index = Math.floor(getRandomArbitrary(lo, hi));
    //console.log(pivot_index)
    let pivot_element = arr[pivot_index];
    swap(arr, pivot_index, hi);
    pivot_index = hi; // new pivot index
    let divider = lo-1;
    for(let i = lo; i <= hi-1; i++) {
        if(arr[i] < pivot_element) {
            divider++;
            swap(arr, i, divider);
        }
    }
    swap(arr, divider+1, pivot_index);
    return divider+1;
}

function quick_sort_helper(arr, lo, hi) {
    if(lo >= hi) return;
    let pi = partition(arr, lo, hi);
    quick_sort_helper(arr, lo, pi-1);
    quick_sort_helper(arr, pi+1, hi);
}

function quick_sort(arr) {
    quick_sort_helper(arr, 0, arr.length - 1);
}

let arr = [5,4,3,2,1];
quick_sort(arr);
console.log(arr);