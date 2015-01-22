var csv = require('csv'),
	fs = require('fs')

var print = require('../lib/print')

fs.createReadStream('data/colorado.csv')
	.pipe(csv.parse())
	.pipe(print())
