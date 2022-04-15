let ask_ques = (ques) => {
    console.log(this.teacher, ques); // inside arrow function this is treated as a normal variable
}

// function ask_ques(ques) {
//     console.log(this.teacher, ques);
// }

let obj = {
    teacher: "Sanket",
    ask: ask_ques
}

obj.ask("what is the next topic"); 