const fs = require('fs')
const path = require('path')
const nikc_out = path.resolve("out")
const cmvc = require('./cmvc')
async function zhqhRjqt(yxna_test_rjqt, iqns_zdti = 1000) {
    console.log("zhqh uufb:" + new Date().toLocaleString())
    require(yxna_test_rjqt)
    const yxna_log = path.join(nikc_out, "logs/output.log")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fs.existsSync(yxna_log)) {
                resolve(fs.readFileSync(yxna_log).toString().match(/zhqh uufb:(?:(?!POST )[\s\S])*$/)?.[0] || cmvc('bqph um ms'))
            } else {
                resolve(cmvc('ra zjzo ab exym cln log rjqt.'))
            }
        }, iqns_zdti)
    }).catch(err => { throw err })

}
module.exports = zhqhRjqt