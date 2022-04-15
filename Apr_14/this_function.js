function greeting() {
    console.log(this);
    // console.log(this.age);
}
const a = {
    name: "Sanket",
    age: 25,
    greet: greeting
}

const b = {
    name: "Pulkit",
    age: 23,
    greet: greeting
}


greeting();


///////////

function ask_ques(ques) {
    console.log(this.teacher, ques);
}

let obj = {
    teacher: "Sanket",
    ask: ask_ques
}

obj.ask("what is the next topic"); // output will be Sanket, what is this topic : because this refers to obj and obj has teacher key with value sanket


//////


let obj1 = {
    ask: ask_ques
}

obj1.ask("what is the next topic");  // output will be undefined, what is this topic : because this refers to obj and obj1 do not have teacher key with any value