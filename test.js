const commd = require("./commd")
const fs = require('fs')
const path = require('path')
const text1 = `sql -d 6498fbddde4576db84c59573
aid
`
commd(text1).then(result => console.log(result)).catch(err => console.error(err))
