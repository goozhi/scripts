const commd = require("./commd")

const text1 = `share -a ff
nod
`
commd(text1).then(result => console.log(result)).catch(err => console.error(err))