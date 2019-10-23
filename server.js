const express = require('express');
const server = express();

server.get(`/`, (req, res) => {
  res.send(`Hello World`);
});

server.listen(process.env.PORT || 6969);

module.exports = server;
