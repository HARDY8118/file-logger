# file-logger
Simple node.js package to generate log files.

---
## Usage
Require the package as

`const log = require('file-log')`

then use as

`log('logs/filename.log', 'log message')`

or

`log('log message')`


- Include file extensions when using filename
- Use log message as string only
- If no name for file is passed the file will be saved as current timestamp and inside a folder logs
- Create directory for log file if using with filename
---

## Test
Use `npm run test` to run tests.

---

## Dependencies

The package does not have any external dependencies.
Internal depenencies
- fs
- path

 For testing however you will need

- mocha
- chai
- chai-fs
