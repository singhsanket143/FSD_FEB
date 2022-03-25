function friends(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    // let a = friends(n-1); // nth friend goes along
    // let b = friends(n-2); // nth friend makes a pair
    return friends(n-1) + (n-1)*friends(n-2);
}

console.log(friends(4));