/**
 * This is a route handled to handle all the routes for this project.
 * {Typically index.js is the common file name with routes}
 */
const express = require('express');
const app = express(); // create an express app
const PORT = process.env.PORT || 5000; // this is for heroku to pass this env var dynamically else use 5000

app.get('/', (req, res) => {
  res.send({hi : 'there'});
});

app.listen(PORT);
