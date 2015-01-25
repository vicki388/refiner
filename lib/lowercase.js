var through2 = require('through2')

module.exports = function(n) {

    var count = 0

    return new through2.obj(function(row, enc, callback) {
    	row = row.toString()
    	row = row.toLowerCase()
        this.push(row)
        callback()
    })
}