const http = require('http'); // We have imported the http module

const listener = function(req, res) {
    /*
        this function will be executed whenever we will receive any
        http request from the client. 
        Details of the http request will be present in the `req` parameter.
        Details of the http response that we will send is going to be set inside `res`
    */
    console.log("A new HTTP Request received");
    // To prepare a response for the client we can use res paraemeter of this function
    res.end('Hello world!! Welcome to the server'); // Ending the request with the following response
}

/*
    In the http object we will be using the createServer function to create the server
    This function takes a callback as argument, this callback will be executed again and again
    whenever we receive any http request
*/
const server = http.createServer(listener);

server.listen(3000); // On my machine my current nodejs server will listen on port 3000. 
// Make sure we enter a number which is of a free port: 3000, 3001, 30002, 8080, 8000 etc 

