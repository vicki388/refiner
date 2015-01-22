var through2 = require('through2')
//
// copy the content of column 'src' and insert right before column 'dest'
// in otehr words, the copy will become the new column 'dest'
//
// copy(2,4)
//
// before: [0,1,2,3,4,5,6]
//
// after:  [0,1,2,3,2,4,5,6,3]
//
module.exports = function(src, dest) {

    return new through2.obj(function(row, enc, callback) {
      	this.push(row)
        callback()
    })
}