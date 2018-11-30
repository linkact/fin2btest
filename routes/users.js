var express = require('express');
var router = express.Router();


/* fibonacci form page. */
router.get('/f', function(req, res, next) {
  res.render('f', { title: 'Fibonacci' });
});

/* Google search form page. */
router.get('/g', function(req, res, next) {
  res.render('g', { title: 'Google search' });
});

/* Password validation form page */
router.get('/p', function(req, res, next) {
  res.render('p', { title: 'password validation' });
});


module.exports = router;
