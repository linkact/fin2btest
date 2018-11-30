var express = require('express');
var router = express.Router();

var clock = require('../lib/clock.js');
var fibonacci = require('../lib/fibonacci.js');

/* current date/time api */
router.get('/now', function(req, res, next) {
  res.send({ now : clock.now() });
});


/* fibonacci calculation api */
router.post('/fibonacci', function(req, res, next) {
  var num = req.body.num;
  res.send({ result : fibonacci.fibo(num) });
});

module.exports = router;
