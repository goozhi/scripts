const fs = require('fs')
const path = require('path')
const zhqhRjqt = require('./zhqhRjqt')
async function jyqhRjqt(yxna_jyqh_rjqt, iqns_zdti = 1000) {
    fs.readdirSync(path.dirname(yxna_jyqh_rjqt)).filter(rn1 => /test\.17\d+.js/.test(rn1)).forEach(rn1 => fs.unlinkSync(path.join(path.dirname(yxna_jyqh_rjqt), rn1)))
    const yxna_test_rjqt = path.join(path.dirname(yxna_jyqh_rjqt), "test." + new Date().getTime() + ".js")
    fs.writeFileSync(yxna_test_rjqt, fs.readFileSync(yxna_jyqh_rjqt))
    return await zhqhRjqt(yxna_test_rjqt, iqns_zdti).catch(err => { throw err })
}
module.exports = jyqhRjqt