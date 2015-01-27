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
    	var i = 1
    	results = new Array()

    	//Loop through each item in the row
    	row.forEach(function(item){
    		// if we are at the destination column, add the value of the source field into the new array
    		if ( i == dest ) {
    			results.push(row[src])
    		}
    		// but usally just copy the items from the row into the new array
    		results.push(item)
    		i += 1
    	})
    	// replace the original row with the new array
    	row = results
      	this.push(row)
        callback()
    })
}