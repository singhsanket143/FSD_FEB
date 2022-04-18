function fetch1(url, cb1) {
    console.log("Started fetching")
    setTimeout(function() {
        console.log("fetched");
        cb1("sanket singh")
    }, 8000)
}
function display(data, cb2) {
    console.log("this is my data", data);
    cb2(data);
}

function greet(data) {
    console.log("welcome to the new data", data);
}

fetch1("http://www.abc.com", function(response) {
    display(response, function(result) {
        greet(result);
    })
})