var through2 = require('through2')

//
// take the value in the column as a search string
// search google
// replace the string by the url of the first result
//

module.exports = function(columnId) {   
    return new through2.obj(function(row, enc, callback) {
        this.push(row)
        callback()
    })
}