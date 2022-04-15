function ask_ques(ques) {
    console.log(this.teacher, ques);
    // return {name: "Sanket"}
}

// let empty = {
//     ask: ask_ques
// }

// empty.ask("what is this topic")

let newEmptyObject = new ask_ques("what is this topic");

console.log(newEmptyObject)