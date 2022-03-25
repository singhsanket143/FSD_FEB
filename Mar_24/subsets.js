function subset(arr, res, i) {
    if(i == arr.length) {
        console.log(res);
        return;
    }
    subset(arr, res + " " + arr[i], i+1);
    subset(arr, res, i+1);
}

subset([5,6,7,8], "", 0);