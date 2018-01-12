var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/reg', function (req, res) {
	res.render('reg');
})

router.get('/hujinbei', function (req, res) {

	res.render('index');
})

module.exports = router;
