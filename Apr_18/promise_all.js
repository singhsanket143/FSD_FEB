function fetch1(url) { // now it is not a callback based function, it is promise based
    return new Promise((resolve, reject) => {
        console.log("Started fetching");
        setTimeout(function() {
            console.log("Successfully fetched data");
            // data that we fetched is Sanket Singh string
            resolve("Relevel");
        }, 4000);
    })
} 
function fetch2(url) { // now it is not a callback based function, it is promise based
    return new Promise((resolve, reject) => {
        console.log("Started fetching");
        setTimeout(function() {
            console.log("Successfully fetched data");
            // data that we fetched is Sanket Singh string
            resolve("Sanket");
        }, 2000);
    })
} 
function fetch3(url) { // now it is not a callback based function, it is promise based
    return new Promise((resolve, reject) => {
        console.log("Started fetching");
        setTimeout(function() {
            console.log("Successfully fetched data");
            // data that we fetched is Sanket Singh string
            resolve("Students");
        }, 5000);
    })
} 

// async function exec() {
//     let x = await fetch1("www.abc.com");
//     console.log(x);
//     let y = await fetch2("www.abc.com");
//     console.log(y);
//     let z = await fetch3("www.abc.com");
//     console.log(z);
// }

// exec();

Promise.all([fetch1("abc.com"), fetch2("abc.com"), fetch3("abc.com")]).then(function(data) {
    console.log(data); // data is result array
})