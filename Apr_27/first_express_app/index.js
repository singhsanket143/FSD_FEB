const express = require('express'); // require the express module which gives us a function 
const app = express(); // this creates a new express application object

const port = 3000; // this is the port on which app server will listen

app.get('/', (req, res) => {
    // this callback will be executed when we receive any request on /
    console.log('Received a new request on /');
    res.send('Hello world !!!');
});

app.get('/home', (req, res) => {
    // this callback will be executed when we receive any request on /home
    console.log('Received a new request on /home');
    res.send('Home page');
});

app.listen(port, () => {
    // this callback function will be executes as soon as our 
    // server starts listening on the port given
    console.log('Server started');
})
