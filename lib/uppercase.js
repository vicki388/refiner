var through2 = require('through2')

module.exports = function() {

    return new through2.obj(function(row, enc, callback) {
    	var i = 0
    	row.forEach(function(item){
    		row[i] = item.toUpperCase()
    		i += 1
		})
        this.push(row)
        callback()
    })
}