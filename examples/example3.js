var csv = require('csv'),
  fs = require('fs')
   
var refine = require('../lib')

fs.createReadStream('../data/colorado5.csv')
    .pipe(csv.parse())
    //.pipe(refine.translate(9,'en', 'it'))
    .pipe(refine.fuel(7))
    //.pipe(refine.skipfirst())
    //.pipe(refine.sunrise(9))
    //.pipe(refine.swap(1,2))
    //.pipe(refine.tail(3))
    .pipe(refine.print())