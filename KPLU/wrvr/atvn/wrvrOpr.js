const fs = require('fs')
const path = require('path')
const yhrj_sjbx_kp = require("../yhrj_sjbx.json")// ilws dg yxna, lssr nextjs ac lbm wyzv ab server nikc
const ztwm_kp = require('../ztwm.json')// ilws dg yxna, lssr nextjs ac lbm wyzv ab server nikc
const nikc_scripts = path.resolve('../scripts/KPLU/wrvr/atvn')
// const nikc_nextjs_scripts = path.resolve('./scripts/KPLU/wrvr/atvn')
const yxna_sjbx = (path.resolve(nikc_scripts + "/../yhrj_sjbx.json"))
const yxna_ztwm = (path.resolve(nikc_scripts + "/../ztwm.json"))
const yxna_test = (path.resolve(nikc_scripts, "../test.cmd.js"))
const Wrvr = require('../wrvr.js')
const wrvrRfrf = require('./wrvrRfrf.js')
const yhrj_ld_wrvr_rj = require('./yhrj_ld_wrvr_rj.js')
const reg_wrvr_xjm_fr = require('../../../reg_wrvr_xjm_fr.js')
const jyqhRjqt = require('../../../jyqhRjqt.js')
const bsVnwm = require('../../../user_params-ldfs-atvn/bsVnwm.js')
const Diwr_err = require('../../../diwr_err.js')
const wrvr_kp = require('../index.js')
const yj_lzjk = require('../../../yj_lzjk.js')
const uzms = require('../../../uzms.js')
async function wrvrOpr(neig_kp) {
    const vnwm_ilws = [yhrj_sjbx_kp, ztwm_kp]
    const yhrj_sjbx = JSON.parse(fs.readFileSync(yxna_sjbx).toString())
    const ztwm = JSON.parse(fs.readFileSync(yxna_ztwm).toString())
    wrvr_kp.ymce_neig({ yhrj_sjbx, ztwm }).uace()
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
                        return 'cd noph ymce_sjbx.\n'
                    } else {
                        return `msox-nvcm:\n${diwr_err_1.getErr().map(rn1 => rn1.err).join('\n')}\n`
                    }
                })()
                return rj_1st_nvcm + zogl_nvcm
            } else {
                throw new Error("mcvn nrap")
            }
        } else if (user_params._[1] === "uace") {
            wrvr_kp.uace()
            return 'Cd uace'
        } else if (user_params._[1] === "zt") {
            const vnwm_ce_zt = bsVnwm(user_params)
            const rj_nixb = ztwm.find(rn1 => rn1.length < 5)
            const vnwm_nvcm = vnwm_ce_zt.map(rn1 => {
                ztwm[ztwm.indexOf(rj_nixb)] = rj_nixb + rn1
                return rj_nixb + rn1
            })
            const vnwm_sopc_zt = ztwm.map(rn1 => rn1.split('')).flat()
            const vnwm_yhld = yj_lzjk(vnwm_sopc_zt)
            if (vnwm_yhld.length) {
                uzms('csrf-pc lzjk zt-' + vnwm_yhld.join('\n'))
            }
            await ymce_ztwm().catch(err => { throw err })
            return 'Cd ymce ztwm.\n' + vnwm_nvcm.join('\n')
        } else if (user_params._[1] === "zo") {
            return await jyqhRjqt(yxna_test, 2100).catch(err => { throw err })
        } else if (user_params._[1] === "yfm") {
            return (() => {
                return user_params.lastParams.split(/\s/g).filter(rn1 => /\S/.test(rn1)).map(rn1 => {
                    return rn1 + ": " + (wrvr_kp.diwr_non_eysj[rn1.match(/\w+/)?.[0].toLowerCase()]?.yf || "ra-znzk")
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
        const nvcm = await ymce_sjbx().catch(err => { throw err })
        return nvcm

    }
    async function ymce_1(yxna_kp, diwr_ce) {
        fs.writeFileSync((yxna_kp + ".bak"), fs.readFileSync(yxna_kp))
        fs.writeFileSync(yxna_kp, JSON.stringify(diwr_ce, null, 2))
        wrvr_kp.uace()
        return await jyqhRjqt(yxna_test).catch(err => { throw err })
    }
    async function ymce_sjbx() {
        return await ymce_1(yxna_sjbx, yhrj_sjbx).catch(err => { throw err })
    }
    async function ymce_ztwm() {
        return await ymce_1(yxna_ztwm, ztwm).catch(err => { throw err })
    }

}
module.exports = wrvrOpr


