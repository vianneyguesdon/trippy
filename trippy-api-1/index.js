require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/home', (req, res) => {
  res.json({
    success: true,
    cities : [{
      name: 'Paris',
      slug: 'paris',
      source: '/img/paris.png'
    }, {
      name: 'Rome',
      slug: 'rome',
      source: '/img/rome.png'
    }, {
      name: 'Nice',
      slug: 'nice',
      source: '/img/nice.png'
    }, {
      name: 'New York',
      slug: 'new-york',
      source: '/img/new-york.png'
    }, {
      name: 'Londres',
      slug: 'london',
      source: '/img/london.png'
    }]
  })
});

app.listen(port, () => {
  console.log('Server started on port', port);
});