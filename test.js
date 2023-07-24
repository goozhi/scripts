const commd = require("./commd")

const text1 = `share -a 9
ffff
`
commd(text1).then(result => console.log(result)).catch(err => console.error(err))