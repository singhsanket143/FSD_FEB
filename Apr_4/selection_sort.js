function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function find_minimum(arr, start) { // start denotes the index of the starting of unsorted region
    let candidate_min = start;
    for(let i = start + 1; i < arr.length; i++) {
        if(arr[i] < arr[candidate_min]) {
            candidate_min = i;
        }
    }
    return candidate_min; // this variable contains the index of the minimum element of the unsorted range
}

function selection_sort(arr) {
    // sorts the array in inc order by using selection sort algo
    for(let start = 0; start < arr.length; start++) {
        let minimum_element_index = find_minimum(arr, start);
        if(start != minimum_element_index)
            swap(arr, start, minimum_element_index); 
    }
}

let arr = [5, 2, 6, 7, 2, 1, 0, 3];

selection_sort(arr);

console.log(arr);