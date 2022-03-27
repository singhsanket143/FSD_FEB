function isSorted(arr, idx) {
    if(idx == arr.length - 1) {
        return true;
    }
    let assume = isSorted(arr, idx+1);
    return assume && (arr[idx] <= arr[idx+1]);
}

console.log(isSorted([1,12,3,4,5], 0));