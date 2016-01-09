var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'gdot',
    user: req.user
 })
})

router.get('/logout', function(req, res, next) {
  req.logout() // A Passport function. Removes req.user
  res.redirect('/')
})

module.exports = router;
