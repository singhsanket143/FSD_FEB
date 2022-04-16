function printhello() {
    console.log("hello");
}
function printhola() {
    for(let i = 0; i < 10000000000; i++) {}
    console.log("hola");
}

function blockforfewsec() {
    for(let i = 0; i < 1000000000; i++) {}
    console.log("ending blocker");
}

setTimeout(printhola, 10);
blockforfewsec(); // 5sec
setTimeout(printhello, 5);
console.log("me first");
blockforfewsec();


/// runtime -> 10ms -> printhola
// <1sec -> [printhola] event queue
// for 5 more sec thread is blocked due to native js code
// runtime -> 5ms ->printhello
// [printhola, printhello] event queue
// 5 more sec bloakcge
//
