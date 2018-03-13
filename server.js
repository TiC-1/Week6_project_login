// const express = require('express');
// const path = require('path');
// const router = require('./src/router.js');
//
// const { parse } = require('cookie');
//
// const port = process.env.PORT || 3000;
//
// // create express app
// const app = express();
//
// // app.use("/", router);
//
// // redirect HOME
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.post('/login', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'posts.html'));
// });
//
// // listen for connections
// app.listen(port, () => {
//   console.log('App running on port 3000');
// });

'use strict';

const http = require('http');

const router = require('./src/router.js');

const server = http.createServer();

const PORT = 3000;

server
.on(
  'listening',
  () =>
    console.log(`Server is listening on port: ${PORT}`)
)
.on('request', router);

server
.listen(PORT);
