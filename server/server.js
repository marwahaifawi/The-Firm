const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Serve static files from the public folder
server.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to handle ReactJS routing
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.use(router);

// Start the server
const port = process.env.PORT || 3006;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
