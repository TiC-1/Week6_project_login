const express = require('express');

// create express app
const app = express();

// listen for connections
app.listen(3000, () => {
  console.log('App running on port 3000');
});
