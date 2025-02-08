var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:foo/squared', function(req, res, next) {
  res.json({foo: req.params.foo * req.params.foo});
});

module.exports = router;
