var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/activity', function(req, res, next) {

  res.render('activity', { title: 'Express' });

});

module.exports = router;
