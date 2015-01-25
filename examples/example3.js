var csv = require('csv'),
  fs = require('fs')
   
var refine = require('../lib')

fs.createReadStream('data/colorado5.csv')
    .pipe(csv.parse())
    .pipe(refine.copy(3,4))
    .pipe(refine.lowercase(9))
    .pipe(refine.search(6))
    .pipe(refine.print())