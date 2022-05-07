const express = require('express'); // require the express module which gives us a function 
const morgan = require('morgan')
const app = express(); // this creates a new express application object
const port = 3000; // this is the port on which app server will listen

app.use(morgan('tiny')); // if we want to add a middleware for every req then we use app.use

function isSignedIn(req, res, next) {
    // some piece of code
    console.log("Yes signed in");
    next(); // isAuthorized
}

function isAuthorized(req, res, next) {
    console.log("Checking if authorized");
    next(); // the callback function 
}

app.get('/', (req, res) => {
    // this callback will be executed when we receive any request on /
    console.log('Received a new request on /');
    res.send('Hello world !!!');
});

app.post('/home',isSignedIn, isAuthorized, (req, res) => {
    // this callback will be executed when we receive any request on /home
    console.log('Received a new request on /home');
    res.send('Home page');
});

app.listen(port, () => {
    // this callback function will be executes as soon as our 
    // server starts listening on the port given
    console.log('Server started');
})


// adjust the isSignedIn function in /home such that it gets executed before the 
// req, res callback