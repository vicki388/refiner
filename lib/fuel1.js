var through2 = require('through2'),
    request = require('request')

//
// take the value in the column as a city's name to lookup
// the sunrise time using the open weather API
//

module.exports = function(columnId) {

    return new through2.obj(function(row, enc, callback) {

        var fuel_type = row[columnId]

        var url = 'https://data.cityofchicago.org/resource/alternative-fuel-locations.json?fuel_type_code=' + fuel_type
        console.log(url)
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {            

                var result = JSON.parse(body)
                var resultslc = result[0]
                console.log(resultslc)
                if (resultslc.location) {
                    //console.log(result.sys.sunrise)
                    row[columnId] = resultslc.location.latitude
                }
            }else{
                console.log(error)
            }

            // this is equivalent to push(chunk); call()
            callback(null, row)
        })

    })
}