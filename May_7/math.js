// this file will act as a module which contain math function

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}


const mul = (a, b) => {
    return a * b;
}

module.exports = {
    Addition: add,
    Subtraction: sub,
    Multiplication: mul
}