var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/poems', function(req, res, next) {
    res.render('poems', { title: 'Express' });
});

router.get('/math', function(req, res, next) {
    res.render('math', { title: 'Express' });
});

module.exports = router;
