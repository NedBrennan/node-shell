const request = require('request')

module.exports = function() {
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const inputArray = cmd.split(' ')
    const input = inputArray[0]
    const address = inputArray[1] // ./ls.js

    const curlFunc = function(command, webpage) {
        if(command === 'curl') {
            request(webpage, function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body)
                process.stdout.write('\ninput > ')
            })
        }
    }

    curlFunc(input, address)
})}