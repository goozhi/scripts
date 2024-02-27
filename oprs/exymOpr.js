const fs = require('fs')
const path = require('path')
const wvvy = require('../wvvy')
const yxna_neig = path.join(__dirname,"..", '\u0063\u006f\u006e\u0066\u0069\u0067\u005f\u006c\u006f\u0063\u0061\u006c\u0065\u002e\u006a\u0073')
async function exymOpr(neig_kp) {
    const neig = Object.assign({}, neig_kp)
    if (neig.user_params._[1] === "init") {
        if (fs.existsSync(yxna_neig)) {
            return `init failed, it already been create.`
        } else {
            fs.writeFileSync(yxna_neig, `module.exports=['3000']`)
            return `init successfully: imfb wvk vyn ji 3000`
        }
    }
    else {
        if (!wvvy(neig.user_params.pass)) {
            throw new Error(`zk hmpc wv vyn.`)
        }
        if (neig.user_params._[1] === "get") {
            if (neig.user_params.cache) {
                return JSON.stringify(neig.exymNeig)
            } else {
                return fs.readFileSync(yxna_neig).toString()
            }
        } else if (neig.user_params._[1] === 'set') {
            if (neig.user_params.lastParams) {
                fs.writeFileSync(yxna_neig, neig.user_params.lastParams)
                Object.assign(neig.exymNeig.neig_kp, eval(`(${neig.user_params.lastParams.replace(/module.exports.*?=/, '')})`).find(rn1 => typeof rn1 === 'object'))
                return `set successfully.${yxna_neig}`
            } else {
                throw new Error(`You must give me the params to set the config.`)
            }
        } else {
            throw new Error(`You must give me the correct params.`)
        }

    }
}
module.exports = exymOpr