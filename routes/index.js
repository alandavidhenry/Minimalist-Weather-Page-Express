var express = require('express');
var router = express.Router();

require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { weather: null, error: null, title: 'Current Weather' });
});

module.exports = router;
