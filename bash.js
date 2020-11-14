const { ls } = require('./ls')
const { pwd } = require('./pwd')
const { cat } = require('./cat')
const { curl } = require('./curl')


function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim().split(' ');

    if(cmd.length === 1) {
        if(cmd[0] === 'pwd') {
            pwd(done)
        } else if(cmd[0] === 'ls') {
            ls(done)
        } else if(cmd[0] === 'date') {
            date(done)
        } else {
            done('You typed: ' + cmd)
        }
    } else if (cmd[0] === 'cat') {
        cat(done, cmd[1]);
    } else if (cmd[0] === 'curl') {
        curl(done, cmd[1]);
    } else if (cmd[0] === 'echo') {
        cat(cmd.slice(1).join(' '));
    }
})