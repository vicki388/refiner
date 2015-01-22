var csv = require('csv'),
    fs = require('fs')
   
var sunrise = require('../lib/sunrise'),
	skipfirst = require('../lib/skipfirst'),
	print = require('../lib/print')

fs.createReadStream('data/colorado5.csv')
    .pipe(csv.parse())
    .pipe(skipfirst())
    .pipe(sunrise(9))
    .pipe(print(9))
