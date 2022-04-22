/* Helper function to combine to Lists such that the result is a Union of the lists and 
there are no duplicates in the combined result.
*/
'use strict';
let objectEquals = (x, y) => {

    if (x === null || x === undefined || y === null || y === undefined) { 
    	return x === y; 
    }
    
    // Chech if the string or primitive of the string is equal
    if (x === y || x.valueOf() === y.valueOf()) { 
    	return true; 
    }

    // Check if the comparison is between unequal length array
    if (Array.isArray(x) && x.length !== y.length) { 
    	return false; 
    }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    var _iterableOfx = Object.keys(x);
    return Object.keys(y).every((key) => { 
    	return _iterableOfx.indexOf(key) !== -1; }) && 
    	_iterableOfx.every((key) => { 
    		return objectEquals(x[key], y[key]); });
}

let arrayUnique = (arr) => {
    for(let i=0; i < arr.length; ++i) {
        // Iterate from the next element in order to ensure unique comparisons
        for(let j=i+1; j < arr.length; ++j) {
            if (objectEquals(arr[i], arr[j])) {
                // If duplicate found remove it from the array
                arr.splice(j--, 1); 
            }
        }
    }
    return arr;
}

let union = (array1, array2) => {
	return arrayUnique(array1.concat(array2))
}

module.exports = union;
