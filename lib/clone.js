var through2 = require('through2')

// clone(2)
//
// make a copy of a column and append to the end of the row

// row in: [1,2,3,4,5,6]
// ->
// row out: [1,2,3,4,5,6,3]
//
module.exports = function(column) {
	
	var count = 0

    return new through2.obj(function(row, enc, callback) {
      	this.push(row)
        callback()
    })
}