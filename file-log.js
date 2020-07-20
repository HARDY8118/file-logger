const fs = require('fs')
const path = require('path')

function Log(f, d) {
    if (typeof d != 'undefined') {
        fs.appendFile(path.join(__dirname, f), (new Date().toISOString()) + "\n" + d.toString() + "\n\n", err => {
            if (err) {
                if (err.code == 'ENOENT') {
                    throw (new Error('Make sure the log directory exists'))
                }
                else {
                    throw err
                }
            }
        })
    }
    else {
        if (typeof f == 'string') {
            if (!fs.existsSync(path.join(__dirname, 'logs'))) {
                fs.mkdirSync(path.join(__dirname, 'logs'))
            }
            fs.appendFile(path.join(__dirname, 'logs', (this.filename || (new Date().toISOString()) + ".log")), (new Date().toISOString()) + "\n" + f.toString() + "\n\n", err => {
                if (err) {
                    throw err
                }
            })
        }
        else {
            throw (new TypeError('Invalid log message. Expected string'))
        }
    }
}


module.exports = Log