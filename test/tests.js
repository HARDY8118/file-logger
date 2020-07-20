const chai = require('chai')
const assert = require('chai').assert
chai.use(require('chai-fs'))
const log = require('../file-log')
const path = require('path')
const fs = require('fs')

describe('import', () => {
    it('log function', () => {
        assert.isFunction(log)
    })
})

describe('calling with filename and data', () => {
    log('test.log', 'test')
    it('calling directory', () => {
        assert.isFile(path.join(__dirname, '..', 'test.log'))
        assert.notIsEmptyFile(path.join(__dirname, '..', 'test.log'))
    })
    it('file contents', () => {
        assert.fileContentMatch(path.join(__dirname, '..', 'test.log'), /test/)
    })
    it('test file deleted', () => {
        fs.unlink(path.join(__dirname, '..', 'test.log'), err => {
            if (err) {
                throw err
            }
        })
    })
    log('logs/test.log', 'test')
    it('inside logs folder', () => {
        assert.isFile(path.join(__dirname, '..', 'logs', 'test.log'))
    })
    it('file contents', () => {
        assert.fileContentMatch(path.join(__dirname, '..', 'logs', 'test.log'), /test/)
    })
    it('test file deleted', () => {
        fs.unlinkSync(path.join(__dirname, '..', 'logs', 'test.log'))
    })
})
describe('calling with data without filename', () => {
    log('test')
    it('directory created', () => {
        assert.isDirectory(path.join(__dirname, '..', 'logs'))
        assert.notIsEmptyDirectory(path.join(__dirname, '..', 'logs'))
    })
    it('file created', () => {
        assert.isNotEmpty(path.join(__dirname, 'logs'))
    })
})
