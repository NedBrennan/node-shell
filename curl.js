const request = require('request')

module.exports = function() {
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    inputArray = cmd.split(' ')
    input = inputArray[0]
    address = inputArray[1] // ./ls.js

    const curl = function(command, webpage) {
        if(command === 'curl') {
            request(webpage, function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode);
                process.stdout.write('body:', body);
        })
        process.stdout.write('\ninput > ')
    }
}

curl(input, address)
})
}