let arr = [9,12,33,41,5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("using foreach");

arr.forEach(function (value, index) {
    console.log(value, index)
})