function saying(word) {
    
    let ask_ques = (ques) => {
        console.log(this.teacher, ques); // inside arrow function this is treated as a normal variable
    }

    ask_ques(word);
}


// function ask_ques(ques) {
//     console.log(this.teacher, ques);
// }

let obj = {
    teacher: "Sanket",
    say: saying
}

obj.say("what is the next topic"); 