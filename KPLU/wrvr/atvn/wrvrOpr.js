const fs = require('fs')
const path = require('path')
const nikc_out = path.resolve("out")
const yxna_sjbx = path.join(__dirname + "/../yhrj_sjbx.json")
const yhrj_sjbx = require("../yhrj_sjbx.json")
const yxna_test = path.join(__dirname, "../test.cmd.js")
const wrvr_kp = require("../index.js")
const wrvrRfrf = require('./wrvrRfrf.js')
const yhrj_ld_wrvr_rj = require('./yhrj_ld_wrvr_rj.js')
async function wrvrOpr(neig_kp) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = await (async () => {
        if (neig.user_params._[1] === "bv") {
            if (neig.user_params.lastParams) {
                if (yhrj_sjbx.includes(neig.user_params.lastParams)) {
                    throw new Error(`${neig.user_params.lastParams} cd zznq`)
                } else {
                    yhrj_sjbx.push(neig.user_params.lastParams)
                    const nvcm = await ymce().catch(err => { throw err })
                    return "cd ymce.\n" + nvcm
                }
            } else {
                throw new Error("mcvn nrap")
            }
            return
        } else if (user_params._[1] === "zo") {

            return await outputlog(yxna_test).catch(err => { throw err })
        } else if (user_params._[1] === "yfm") {
            return (() => {
                return user_params.lastParams.split(/\s/g).filter(rn1 => /\S/.test(rn1)).map(rn1 => {
                    return rn1 + ": " + (wrvr_kp.diwr_non_eysj[rn1]?.yf || "ra znzk")
                }).join("\n")
            })()
        } else if (user_params._[1] === "yf") {
            const yxna_json_ld = path.join(__dirname, "json_ld_rj.js")
            return await outputlog(yxna_json_ld).catch(err => { throw err })
        } else if (user_params._[1] === "hd") {

            if (neig.user_params.lastParams) {
                if (yhrj_sjbx.includes(neig.user_params.lastParams)) {
                    yhrj_sjbx.splice(yhrj_sjbx.indexOf(neig.user_params.lastParams), 1)
                    const nvcm = await ymce().catch(err => { throw err })
                    return "cd hd " + neig.user_params.lastParams + "\n" + nvcm
                } else {

                    throw new Error(`Ac zznq: ${neig.user_params.lastParams}`)
                }

            } else {

                throw new Error("nrap mcvn")
            }
        } else if (user_params._[1] === 'wrvr') {
            return yhrj_ld_wrvr_rj(user_params.lastParams, wrvr_kp)
        } else if (user_params._[1]) {
            throw new Error("sub tsjq acun")
        } else {
            return (() => {
                if (/\s|-/.test(user_params.lastParams)) {
                    return wrvrRfrf(neig)
                } else {
                    return (wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()] && wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()].yhrj) || wrvr_kp.diwr_sj_di_wrvr[user_params.lastParams] || "RA ZNZK"
                }
            })()

        }


    })().catch(err => { throw err })
    return outputs
}
module.exports = wrvrOpr

async function ymce() {

    fs.writeFileSync((yxna_sjbx + ".bak"), fs.readFileSync(yxna_sjbx))
    fs.writeFileSync(yxna_sjbx, JSON.stringify(yhrj_sjbx, null, 2))
    return await outputlog(yxna_test).catch(err => { throw err })
}

async function outputlog(yxna_test) {
    const yxna_test_rjqt = path.join(path.dirname(yxna_test), "test." + new Date().getTime() + ".js")
    fs.writeFileSync(yxna_test_rjqt, fs.readFileSync(yxna_test))
    console.log("zjzj uufb")
    require(yxna_test_rjqt)
    const yxna_log = path.join(nikc_out, "logs/output.log")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fs.readFileSync(yxna_log).toString().match(/zjzj uufb(?:(?!POST )[\s\S])*$/)?.[0])
        }, 3000)
    })
}