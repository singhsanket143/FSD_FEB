function fetch(url) { // now it is not a callback based function, it is promise based
    return new Promise((resolve, reject) => {
        console.log("Started fetching");
        setTimeout(function() {
            console.log("Successfully fetched data");
            // data that we fetched is Sanket Singh string
            let success = false;
            if(success)
                resolve("Sanket");
            else
                reject("Error");
        }, 1000);
    })
} // returns "Sanket Singh"

/////
function display(data) {
    console.log("this is my data", data);
    return data;
}

function greet(data) {
    console.log("welcome to the new data", data);
    return 77
}


let fd = fetch("https://www.abc.com");
console.log(fd)
// fd.then(display);
// fd.then(greet);
fd
.then(display)
.then(greet)
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    console.log(err);
    return err;
});
// console.log(fd.then(display));
// for(let i = 0; i < 10000000000; i++) {}
// console.log("end")
