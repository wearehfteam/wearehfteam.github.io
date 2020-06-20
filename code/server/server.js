const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes'); //importing route
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
