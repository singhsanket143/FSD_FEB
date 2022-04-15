function product() {
    // console.log(this.teacher, ques);
    // return {name: "Sanket"}
    this.name = 'Default';
    this.price = 0;
}

// let empty = {
//     ask: ask_ques
// }

// empty.ask("what is this topic")

let object = new product(); // 1. {} , 2. , 3. this = {name: "Deafult", price: 0}, 4. return this

console.log(object)

// this = {}