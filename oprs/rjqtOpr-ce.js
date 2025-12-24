vn_1 = 0
const fs = require('fs')
const path = require('path')
const wm_nikc_vycs_slgr = ["D:/", "/sdcard"]
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const lz_rzwu = require('../rjqt_lz_rzwu')
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js')
const rjm_nikc = require('../rjm_nikc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
// const reg_hfbc_2 = require('../user_params-ldfs-atvn/reg_hfbc_2.js')
const hd_rjqt_tum = require('../hd_rjqt_tum.js')
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js')
const fdmj_wdbu = require('../user_params-ldfs-atvn/fdmj_wdbu.js')
const fywy_qh_ld_vnwm = require('../fywy_qh_ld_vnwm.js')
const pcil_yxna_vnwm_zznq = require('../pcil_yxna_vnwm_zznq.js')
const checkjs = require('../checkjs.js')
const jyqhRjqt = require('../jyqhRjqt.js')
const uzms = require('../uzms.js')
const vkih_hfbc = require('../vkih_hfbc.js')
const rfrf = require('../rfrf.js')
const ussk_cqpi = require('../ussk_cqpi.js')
const ztfr_magm = require('../ztfr_magm.js')
const Ussk = require('../ux/ussk.js')
const yxna_diwr_xb = path.resolve("out/diwr_xb.json")
const wm_yoch_ussk = require("../tu-tsjq.slgr.js")
const { log } = require('console')
const yo_msox_wdbu_gzbu = require('../yoch/yo_msox_wdbu_gzbu.js')
const diwr_xb = (() => {
    try {
        return require(yxna_diwr_xb)
    } catch (err) {
        return {}
    }
})()

const rjqtOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    // const zhqh = neig.zhqh || (async () => { })
    yxna_ymrg_wdbu(user_params)

    // uufb 1
    const jtyj_ae_vwdp_jtyj = (() => {
        try {
            return new Ussk({ wu: "tu", lclc: "rjqt gzbu tsjq." })
                // .set_user_params(user_params)
                // .set_outputs(outputs)
                .ypVxn(...wm_yoch_ussk)
                .set_vwdp_msox_wdbu((err) => { console.error(err) })
                .jcbz_zhqh(user_params, { outputs, atvn_help: ((lclc) => outputs.outputText = lclc) })
        } catch (e) {
            yo_msox_wdbu_gzbu.yp_err(e)
            if (outputs.msox_wdbu) {
                outputs.msox_wdbu?.(e)
            }
            else {
                throw e
            }
        }
    })()
    // uufb
    // if (user_params._[1] === 'rr') {
    // } else if (user_params._[1] === 'obj') {
    // } else if (user_params._[1] === 'mkdir') {
    // } else if (user_params._[1] === 'mkdirs') {
    // } else if (user_params._[1] === 'yxna') {
    // } else if (user_params._[1] === 'rjm') {

    // } else if (user_params._[1] === 'abs') {
    // } else if (user_params._[1] === 'copyto') {

    // } else if (user_params._[1] === 'readfiles') {
    // } else if (user_params._[1] === 'copydirto') {

    // } else if (user_params._[1] === 'xb') {
    //     outputs.outputText = (() => {


    //     })()
    // } else if (user_params._[1] === 'renamefiles') {
    // } else if (user_params._[1] === 'rename') {

    // } else if (user_params._[1] === 'cfep') {
    // } else if (user_params._[1] === 'filter') {
    // } else if (user_params._[1] === 'kz') {
    // } else if (['find', 'zhvt'].includes(user_params._[1])) {

    // } else if (user_params._[1] === 'func') {} else if (user_params._[1] === 'pk') {} else if (user_params._[1] === 'run') {
    // } else if (user_params._[1] === 'vycs') {} else if (user_params._[1] === 'cxmi') {

    // } else if (user_params._[1] === 'size') {
    // } else if (user_params._[1] === 'ls') {
    // } else if (user_params._[1] === 'filter') {

    // } else {
    //     throw new Error(`You must input the correct subparam: ${JSON.stringify(user_params._[1])}`)
    // }
    // jtco

    const jtyj = await (async () => {
        if (jtyj_ae_vwdp_jtyj?.catch) {
            return await jtyj_ae_vwdp_jtyj.catch(err => { throw err })
        } else {
            return outputs
        }
    })()
    if (jtyj != outputs) {
        uzms("csrf-outputs acyf-" + user_params._)
    }
    return jtyj
}
module.exports = rjqtOpr


function yxna_ymrg_wdbu(user_params) {
    user_params._.forEach((rn1, index, arr_1) => {
        if (/\b__n/.test(rn1)) {
            arr_1[index] = ymrg_rj_yh_yxna(rn1)
        }
    });
    if (user_params._[1] === 'rr') {
        return
    }
    if (/\b__n/.test(user_params.lastParams)) {
        user_params.lastParams = ymrg_rj_yh_yxna(user_params.lastParams)
    }
}
function ymrg_rj_yh_yxna(rj) {
    return rj.replace(/\b__n(\w+)/g, (m, p1) => {
        return ((fo1) => {
            const reg_1 = new RegExp(`^${fo1}`)
            const reg_2 = new RegExp(`${fo1}`)
            const vnwm_xb = Object.entries(diwr_xb).filter(rn1 => reg_1.test(path.basename(rn1[0])))
            if (vnwm_xb.length > 1) {
                throw new Error(`csrf-err: yxna wu hnrr ac eeye - ${vnwm_xb.length} - ${vnwm_xb.map(rn2 => rn2[0]).join(',')}`)
            } else if (vnwm_xb.length) {
                return vnwm_xb[0][0]
            } else {
                const vnwm_xb = Object.entries(diwr_xb).filter(rn1 => reg_2.test(path.basename(rn1[0])))
                if (vnwm_xb.length > 1) {
                    throw new Error(`csrf-err: yxna wu hnrr ac eeye - ${vnwm_xb.length} - ${vnwm_xb.map(rn2 => rn2[0]).join(',')}`)
                } else if (vnwm_xb.length) {
                    return vnwm_xb[0][0]
                } else {
                    throw new Error(`csrf-err: ra cgne ab ymdo yxna - ${fo1}`)
                }
            }
        })(p1)
    })

}
