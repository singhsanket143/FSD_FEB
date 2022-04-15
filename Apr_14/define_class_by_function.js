function product(n, p) {
    this.name = n;
    this.price = p;
}


let p1 = new product("Iphone 11", 100000);
let p2 = new product("redmi note", 11000);

console.log(p1, p2);
console.log(p1.name)