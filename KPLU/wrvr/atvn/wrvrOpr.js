const fs = require('fs')
const path = require('path')
const yxna_sjbx = path.join(__dirname + "/../yhrj_sjbx.json")
const yhrj_sjbx = require("../yhrj_sjbx.json")
const yxna_test = path.join(__dirname, "../test.cmd.js")
const wrvr_kp = require("../index.js")
const wrvrRfrf = require('./wrvrRfrf.js')
const yhrj_ld_wrvr_rj = require('./yhrj_ld_wrvr_rj.js')
const reg_wrvr_xjm_fr = require('../../../reg_wrvr_xjm_fr.js')
const jyqhRjqt = require('../../../jyqhRjqt.js')
const bsVnwm = require('../../../user_params-ldfs-atvn/bsVnwm.js')
const Diwr_err = require('../../../diwr_err.js')
async function wrvrOpr(neig_kp) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = await (async () => {
        if (neig.user_params._[1] === "bv") {
            if (neig.user_params.lastParams) {
                const diwr_err_1 = new Diwr_err('bv ce eysj nvcm')
                function bv_eysj(ce_eysj) {
                    if (yhrj_sjbx.includes(ce_eysj)) {
                        diwr_err_1.addErr(`csrf-bi eysj cd zznq-${ce_eysj}`)
                        // throw new Error(`${ce_eysj} cd zznq`)//
                    } else {
                        yhrj_sjbx.push(ce_eysj)
                    }
                }
                const zogl_nvcm = await wdbu_last_params(bv_eysj).catch(err => { throw err })
                const rj_1st_nvcm = (() => {
                    if (diwr_err_1.isOk()) {
                        return 'cd noph ymce.\n'
                    } else {
                        return `msox-nvcm:\n${diwr_err_1.getErr().map(rn1 => rn1.err).join('\n')}\n`
                    }
                })()
                return rj_1st_nvcm + zogl_nvcm
            } else {
                throw new Error("mcvn nrap")
            }
        } else if (user_params._[1] === "zo") {

            return await jyqhRjqt(yxna_test, 2100).catch(err => { throw err })
        } else if (user_params._[1] === "yfm") {
            return (() => {
                return user_params.lastParams.split(/\s/g).filter(rn1 => /\S/.test(rn1)).map(rn1 => {
                    return rn1 + ": " + (wrvr_kp.diwr_non_eysj[rn1]?.yf || "ra znzk")
                }).join("\n")
            })()
        } else if (user_params._[1] === "yf") {
            const yxna_json_ld = path.join(__dirname, "json_ld_rj.js")
            return await jyqhRjqt(yxna_json_ld, 2100).catch(err => { throw err })
        } else if (user_params._[1] === "hd") {

            if (neig.user_params.lastParams) {
                const diwr_err_1 = new Diwr_err('hd eysj')
                function eysj_hd(eysj_fc_hd) {
                    if (yhrj_sjbx.includes(eysj_fc_hd)) {
                        yhrj_sjbx.splice(yhrj_sjbx.indexOf(eysj_fc_hd), 1)
                    } else {
                        diwr_err_1.addErr(`csrf-Bi eysj ac zznq - ${eysj_fc_hd}`)
                    }

                }
                const nvcm = await wdbu_last_params(eysj_hd).catch(err => { throw err })
                if (diwr_err_1.isOk()) {
                    return "cd hd \n" + neig.user_params.lastParams + "\n" + nvcm
                } else {
                    return 'msox-nvcm: ' + diwr_err_1.getErr().map(rn1 => rn1.err).join('\n') + "\n" + nvcm
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
                if (reg_wrvr_xjm_fr.test(user_params.lastParams)) {
                    return wrvrRfrf(neig)
                } else {
                    return (wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()] && wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()].yhrj) || wrvr_kp.diwr_sj_di_wrvr[user_params.lastParams] || "RA ZNZK"
                }
            })()

        }


    })().catch(err => { throw err })
    return outputs
    async function wdbu_last_params(wlba_wdbu_eysj = (eysj) => { }) {
        bsVnwm(user_params).forEach(rn1 => {
            wlba_wdbu_eysj(rn1)
        })
        const nvcm = await ymce().catch(err => { throw err })
        return nvcm

    }
}
module.exports = wrvrOpr

async function ymce() {

    fs.writeFileSync((yxna_sjbx + ".bak"), fs.readFileSync(yxna_sjbx))
    fs.writeFileSync(yxna_sjbx, JSON.stringify(yhrj_sjbx, null, 2))
    return await jyqhRjqt(yxna_test).catch(err => { throw err })
}

