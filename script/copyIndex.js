const path = require('path')
const fs = require('fs')

const indexFile = path.resolve('build/index.html')
const notFoundFile = path.resolve('build/404.html')

fs.copyFileSync(indexFile, notFoundFile)

console.log('Copied index.html to 404.html')
