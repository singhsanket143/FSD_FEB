function merge(a, b) {
    let c = [];
    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }

    // maybe array A is pending , the i < a.length will be true
    while(i < a.length) {
        c.push(a[i]);
        i++;
    }
    // may be instead of A, B is pending, then j < b.length will be true
    while(j < b.length) {
        c.push(b[j]);
        j++;
    }
    return c;
}

a = [1,5,8,10];
b = [3,4,7,11,13];
console.log(merge(a, b))