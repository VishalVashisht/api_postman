const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/details', (req, res) => {
    console.log("User Details", req.query);
    let userDetails = req.query;
    res.send(userDetails);
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// var port = 3000;

// app.post('/sample/put/data', function(req, res) {
//     console.log('receiving data ...');
//     console.log('body is ',req.body);
//     res.send(req.body);
// });

// // start the server
// app.listen(port);
// console.log('Server started! At http://localhost:' + port);