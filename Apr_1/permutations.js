function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function perm(arr, idx) {
    // base case
    if(idx == arr.length - 1) {
        console.log(arr);
        return;
    }

    let visited = {}; // key -> char, value -> true
    for(let i = idx; i < arr.length; i++) {
        if(!visited[arr[i]]) { // if the character has not been yet visited for recursion then only visit it
            visited[arr[i]] = true; // mark the character visited
            swap(arr, i, idx); // swap the char with element at idx
            perm(arr, idx+1); // recurse
            swap(arr, i, idx);// swap back again
        }
    }
}

perm(['a', 'b', 'a', 'b'], 0); // aab, aba, baa

