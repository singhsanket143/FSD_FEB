class Product {
    #discount;
    constructor(n, p) {
        this.name = n;
        this.price = p;
        this.#discount = 0;
        // return {name: "Sanket"}
    }

    display () {
        console.log("Name of the product", this.name);
        console.log("Price of the product", this.price);
        console.log("Discount applicable", this.#discount);
    }

    // setter
    set setDiscount(x) {
        if(x < 0 || x >= 100) {
            console.log("Invalid discount value");
            return;
        }
        this.#discount = x;
    }

    get discountValue() {
        return this.#discount;
    }
}

let iphone = new Product("Iphone 11", 100000);

console.log(iphone);

// iphone.setDiscount = 9;
// iphone.display();
// console.log(iphone.discountValue);

// console.log(typeof iphone); // object
// console.log(typeof Product); // function 
// console.log(iphone.discount)
// iphone.discount = 10;
// console.log(iphone.discount)
// // console.log(iphone.#discount)
