console.log("Start")
setTimeout(function () {
    console.log("done")
}, 20);
for(let i = 0; i < 10000000000; i++) {}
console.log("wooooo")
setTimeout(function () {
    console.log("done1")
}, 10);
for(let i = 0; i < 10000000000; i++) {}
console.log("End")