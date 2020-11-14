const fs = require('fs')

module.exports = function(done) {

process.stdin.on('data', (data) => {
const cmd = data.toString().trim();

    if(cmd === 'ls') {  
		fs.readdir('./', 'utf8', (err, files) => {
			if(err) {
				process.stdout.write('Something wen wrong!')
			} else {
				process.stdout.write(files.join('\n'))
				process.stdout.write('\ninput > ')			
}
		})}
})
}
