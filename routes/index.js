var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'gdot' })
})

router.get('/logout', function(req, res, next) {
  req.logout() // Removes req.user
  res.locals.user = null // It seems we have to do this too. Weird.
  res.render('index', { title: 'gdot' })
})

module.exports = router;
