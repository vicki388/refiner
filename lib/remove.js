var through2 = require('through2')

//
// remove([2,5])
// 
// pass a row downstream after removing the selected columns (e.g., 2nd, 5th)
//
module.exports = function(columnIds) {
   
    return new through2.obj(function(row, enc, callback) {

        this.push(row)
        callback()
    })
}