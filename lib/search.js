var through2 = require('through2')

//
// take the value in the column as a search string
// search google
// replace the string by the url of the first result
//

module.exports = function(columnId) {   
    return new through2.obj(function(row, enc, callback) {
    	var url = 'https://www.googleapis.com/customsearch/v1?parameters=' + searchWord
    	console.log(url)
    	 request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {

                var result = JSON.parse(body)
                if (result.sys) {
                    row[columnId] = result.sys.word
                }
            }
            else{
                console.log(error)
            }

            callback(null, row)

        }
        
    })
}