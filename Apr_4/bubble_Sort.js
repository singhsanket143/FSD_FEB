function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubble_sort(arr) {
    let n = arr.length;
    for(let iter = 0; iter < n-1; iter++) {
        let isSwapped = false;
        for(let j = 0; j < n - iter - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}

let arr = [5, 2, 6, 7, 2, 1, 0, 3];

bubble_sort(arr);

console.log(arr);