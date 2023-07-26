const commd = require("./commd")
const fs = require('fs')
const path = require('path')
const text1 = `sql -b
aid
`
commd(text1).then(result => console.log(result)).catch(err => console.error(err))
