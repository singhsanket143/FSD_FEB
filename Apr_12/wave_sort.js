function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function wave_sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(i%2 == 0) {
            if(arr[i] < arr[i+1]) {
                swap(arr, i, i+1);
            }
        } else {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
            }
        }
    }
}
let a = [9,7,8,5,21,6,2,4];
wave_sort(a)
console.log(a);