const commd = require("./commd")
const fs = require('fs')
const path = require('path')
const outputs = require("./outputs")
const text1 = `test -f ./src/uni/1-input.txt -e gb2312
111
111
`
commd(text1, outputs()).then(result => console.log(result)).catch(err => console.error(err))