//const { server } = require('./server.js');
const express = require('express');

const server = express();

//const port = process.env.PORT || 3300;
const port = 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});