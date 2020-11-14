const request = require('request')

module.exports.curl = function(done, webpage) {
            request(webpage, function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body)
            })
        }