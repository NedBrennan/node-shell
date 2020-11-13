const { fstat } = require("fs");

// accepts two arguments
const fs = require('fs')

module.exports = function() {
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // 'cat ls.js'
    inputArray = cmd.split(' ') // ['cat', 'ls.js']
    cat = inputArray[0]
    file = './' + inputArray[1] // ./ls.js
    
    readFile = function(cat, file) {
        if(cat === 'cat') {
            fs.readFile(file, (err, data) => {
                if (err) throw err;
                process.stdout.write(data.toString())
                process.stdout.write('\nprompt > ');
              })
        }
    }

    readFile(cat, file)
})}