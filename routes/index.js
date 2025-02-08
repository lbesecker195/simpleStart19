var express = require('express');
var router = express.Router();


function intDivision(x, y) {
	return Math.floor(x/y);
}

function isPalindrom(x) {
	console.log('[START] isPalandrom()')
	var num;
	if(typeof x == String) {
		num = x;
	} else {
		num = x.toString();
	}

	console.log(`typeof num: ${typeof num}`)
	console.log(`x: ${x}`)
	if (num.length > 1) {
		console.log(`num[0]: ${num[0]}`)
		console.log(`num[-1]: ${num[num.length - 1]}`)

		if (num[0] == num[num.length - 1]) {
			console.log("(num[0] == num[-1])");

			console.log(`num.length: ${num.length}`)
			var newX = num.substring(1, num.length - 1);
			console.log('newX: ' + newX)

			return isPalindrom(newX)
		} else {
			return false;
		}
	} else {
		return true
	}

	console.log('[END] isPalandrom()')
}


/* GET home page. */
router.get('/:foo', function(req, res, next) {
	var palindroms = []
	for (i = 100; i < 1000; i++ ) {
		for (j = 100; j < 1000; j++) {
			let num = i*j;
			if (isPalindrom(num)) {
				palindroms = palindroms + num;
			}
		}
	}

	console.log("palindroms:")
	console.log(palindroms)

	var maxPalindrom = Math.max(...palindroms);

	console.log("maxPalindrom:")
	console.log(maxPalindrom)
  res.json({foo: maxPalindrom});
});

module.exports = router;
