var through2 = require('through2')

module.exports = function(columnId) {   
    return new through2.obj(function(row, enc, callback) {
    	var url = 'http://api.zippopotam.us/country/?q' + zipCode
        console.log(url)
        request(url, function(error, response, body) 
        {
            if (!error && response.statusCode == 200) 
            {

                var result = JSON.parse(body)
                if (result.sys) 
                {
                    row[columnId] = result.sys.city
                }
            }
            else
            {
                console.log(error)
            }

            callback(null, row)
        })

    })
}