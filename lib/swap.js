var through2 = require('through2')

module.exports = function(srcColumnId, destColumnId) {
   
    return new through2.obj(function(row, enc, callback) {
    	var savesrcColumnIdValue
    	savesrcColumnIdValue = row[srcColumnId]
    	row[srcColumnId] = row[destColumnId]
    	row[destColumnId] = savesrcColumnIdValue
        this.push(row)
        callback()
    })
}