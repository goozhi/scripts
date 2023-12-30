const fs = require('fs')
const path = require('path')
const yxna_neig = path.join(__dirname, '\u0063\u006f\u006e\u0066\u0069\u0067\u005f\u006c\u006f\u0063\u0061\u006c\u0065\u002e\u006a\u0073')
async function exymOpr(neig_kp) {
    const neig = Object.assign({}, neig_kp)
    if (neig.initNeig) {
        if (fs.existsSync(yxna_neig)) {
            return `init failed, it already been create.`
        } else {
            fs.writeFileSync(yxna_neig, `module.exports=['p']`)
            return `init successfully.`
        }
    } else if (neig.getNeig) {
        return fs.readFileSync(yxna_neig).toString()
    } else if (neig.setNeig) {
        if (neig.content) {
            fs.writeFileSync(yxna_neig, neig.content)
            return `set successfully.${yxna_neig}`
        } else {
            throw new Error(`You must give me the params to set the config.`)
        }
    } else {
        throw new Error(`You must give me the correct params.`)
    }
}
module.exports = exymOpr