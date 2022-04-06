function insertion_sort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i-1;
        let x = arr[i];
        while(j >= 0 && arr[j] > x) {
            arr[j+1] = arr[j]; // shift
            j--;
        }
        arr[j+1] = x;
    }
}

let arr = [5, 2, 6, 7, 2, 1, 0, 3];

insertion_sort(arr);

console.log(arr);

// time complexity, stability, space complexity