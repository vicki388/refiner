var through2 = require('through2')

//
// take the value in the column as a search string of fuel type
// search data of city of chicago
// replace the string by the url of the first result
//

module.exports = function(columnId) {   
    return new through2.obj(function(row, enc, callback) {
		var url = 'https://data.cityofchicago.org/resource/alternative-fuel-locations.json?fuel_type_code=' + fuel_type
    	console.log(url)
    	 request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {

                var result = JSON.parse(body)
                if (result.sys) {
                    row[columnId] = result.sys.fuel_type
                }
            }
            else{
                console.log(error)
            }

            callback(null, row)

        }
        
    })
}