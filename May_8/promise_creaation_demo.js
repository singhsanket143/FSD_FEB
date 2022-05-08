function fetch(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started fetching from", url);
        // let's mimic the functionality, say it takes 5 sec to fetch the data
        let data = { // assuming this data was fetched
            message: 'completed fetching',
            success: true
        }
        setTimeout(function () {
            // let's create a dummy data
            console.log("Successfully fetched the data");
            if(data.success) {
                // resolve(data);
                resolve(data); // resolve is an indication that promise resolved successfully
            } else {
                reject(data); // reject is an indication that promise did not resolve successfully
            }
        }, 5000);
    });
}

function fetch1(url) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < 10000000000; i++) {
            // holding
        }
        console.log("completed");
        resolve(true);
    });
}


// const response = fetch("www.xyz.com");
// response
// .then(function (data) {
//     // this then also returns a promise
//     console.log("inside the then of promise", data);
//     return 100;
// })
// .then(function (data) {
//     console.log("inside the next then of the promise", data);
//     return "Sanket"
// })
// .then(function (data) {
//     console.log("hey hi", data);
// })
// console.log("hurray");


const response = fetch("www.xyz.com");
response.then(function (data) {
    // this then also returns a promise
    console.log("inside the then of promise", data);
    return 100;
});
response.then(function (data) {
    console.log("inside the next then of the promise", data);
    return "Sanket"
});
response.then(function (data) {
    console.log("hey hi", data);
});
console.log("hurray");

