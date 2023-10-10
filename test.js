const commd = require("./commd")
const fs = require('fs')
const path = require('path')
const outputs = require("./outputs")
const text1 = `exec -p wrvr -w test.txt gb2312
echo hello
`
commd(text1, outputs()).then(result => console.log(result)).catch(err => console.error(err))
