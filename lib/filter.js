var through2 = require('through2')

// pass rows matching the given pattern downstrem
//
module.exports = function(pattern) {
   
    return new through2.obj(function(row, enc, callback) {

        this.push(row)
        callback()
    })
}