const Gun = require('./gun');
function foreach(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

// let arr = [1,2,3];

// forEach(arr, function (element) {
//     // console.log("Current element is", element);
//     console.log(element*20);
// })



function fun() {
    let x = 10;
    let y = Gun.gun();
    return x*y;
}

module.exports = {
    fun, foreach
};