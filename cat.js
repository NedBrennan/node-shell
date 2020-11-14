const { fstat } = require("fs");

// accepts two arguments
const fs = require('fs')

module.exports.cat = function(done, file) {
            fs.readFile(file, (err, data) => {
                if (err) throw err;
                else done(data.toString())
              })
        }