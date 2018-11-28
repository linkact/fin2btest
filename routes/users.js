var express = require('express');
var router = express.Router();


/* GET g page. */
router.get('/f', function(req, res, next) {
  res.render('f', { title: 'Fibonacci' });
});

/* GET g page. */
router.get('/g', function(req, res, next) {
  res.render('g', { title: 'Google search' });
});

/* GET p page. */
router.get('/p', function(req, res, next) {
  res.render('p', { title: 'password validation' });
});


module.exports = router;
