var express = require('express');
var router = express.Router();

var clock = require('../lib/clock.js');
var fibonacci = require('../lib/fibonacci.js');

/* GET users listing. */
router.get('/now', function(req, res, next) {
  res.send({ now : clock.now() });
});


/* GET users listing. */
router.post('/fibonacci', function(req, res, next) {
  var num = req.body.num;
  res.send({ result : fibonacci.fibo(num) });
});

module.exports = router;
