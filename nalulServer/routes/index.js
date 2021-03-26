var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', require('./user'))
router.use('/agreement', require('./agreement'))
//router.use('/main', require('./main'))
//router.use('/album', require('./album'))
//router.use('/post', require('./post'))
//router.use('/detail', require('./detail'))

module.exports = router;
