// Create web server application
// 1. Create a web server
// 2. Handle root get request
// 3. Handle post request
// 4. Handle get request for comments
// 5. Handle get request for comments/:id

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 2. Handle root get request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Handle post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/comments', (req, res) => {
    console.log('post request received');
    console.log(req.body);
    res.send('post request received');
});

// 4. Handle get request for comments
app.get('/comments', (req, res) => {
    console.log('get request received');
    res.send('get request received');
});

// 5. Handle get request for comments/:id
app.get('/comments/:id', (req, res) => {
    console.log('get request received');
    res.send('get request received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});