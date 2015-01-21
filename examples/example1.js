var csv = require('csv'),
	fs = require('fs'),
	through2 = require('through2'),
	head = require('../lib/head'),
	replace = require('../lib/replace'),
	lowercase = require('../lib/lowercase')


var isFirst = true


fs.createReadStream('data/colorado.csv')
	.pipe(csv.parse())
	.pipe(head(5))
	.pipe(zipcode(5))
	.pipe(lowercase())
	.pipe(translate(10, 'English', 'Arabic'))
	.pipe(clone(10))
	.pipe(translate(11, 'English', 'Korean'))
	.pipe(replace('me','tom yeh'))



	// .pipe(new through2.obj(function(row, enc, callback){

		
	// 	console.log(row[8])
		
	// 	callback()
	// }))



// csv.parsePipe = function(file){
// 	var all = []

// 	fs.createReadStream(file)
// 		.pipe(through2.obj(function (chunk, enc, cb) {
// 			this.push(chunk.toString('utf-8'))
// 			cb()
// 		}))

// 	.on('data', function (data) {
//     	all.push(data.split(','))
//   	})

//   	.on('end', function () {
//     	console.log(all)
//   	})
// }