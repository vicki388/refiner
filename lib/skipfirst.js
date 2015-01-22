var through2 = require('through2')

module.exports = function(srcPattern, destPattern) {

    var isFirst = true
    return new through2.obj(function(row, enc, callback) {

        if (isFirst) {
            callback()
            isFirst = false
        } else {
            callback(null, row)
        }

    })
}