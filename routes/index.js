var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'gdot' })
})

router.get('/logout', function(req, res, next) {
  req.logout() // Removes req.user
  res.locals.user = null // It seems we have to do this too. Weird.
  console.log('======= user still here? ========', req.user)
  res.render('index', { title: 'logged out' })
})

module.exports = router;
