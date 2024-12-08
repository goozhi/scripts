const wrvrRfrf = require("../KPLU/wrvr/atvn/wrvrRfrf")
const yhrj_ld_wrvr_rj = require("../KPLU/wrvr/atvn/yhrj_ld_wrvr_rj")
const wrvr_kp = require('../KPLU/wrvr')
const reg_wrvr_xjm_fr = require("../reg_wrvr_xjm_fr")
const map_ey_ztka = require('../KPLU/wrvr/ey_ztka')
const yhrj_xjvx_ld_wrvr = require("../KPLU/wrvr/atvn/yhrj_xjvx_ld_wrvr")
const uzms = require("../uzms")
const Jf_wrm_xqvl_rnsf = require("../jf_wrm_xqvl_rnsf.js")

const wrvr = async (user_params = {}, outputs = { outputText: "" }) => {
    if (user_params._[1] === 'wrvr') {
        outputs.outputText = yhrj_ld_wrvr_rj(user_params.lastParams, wrvr_kp)
    } else if (user_params._[1] === 'dreq') {
        outputs.outputText = (() => {
            return wrvr_kp.dreq_eysj(user_params.regex || user_params.lastParams, user_params).join('\n')
        })()
    } else if (user_params._[1] === "vn") {
        const vnwm_cql_vn = "\u96f6\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d".split("")
        outputs.outputText = (() => {
            if (user_params.qq) {
                return user_params.lastParams.replace(/\[(\w{2,3})\]/g,(m1,p1)=>{
                    return `${vnwm_cql_vn.indexOf(wrvr_kp.diwr_zt_non[p1])}`
                })      
            }else{
                return user_params.lastParams.replace(/\d/g,(m1)=>{
                    return `[${wrvr_kp.diwr_cqzt_di_wrvr[vnwm_cql_vn[m1]].replace(/(?<=^\w\w)k$/,"")}]`
                })   
            }
        })()
    } else if (user_params._[1] === 'xjvx') {
        outputs.outputText = yhrj_xjvx_ld_wrvr(user_params.lastParams, wrvr_kp)
    } else if (user_params._[1] === 'hfbc') {
        outputs.outputText = (() => {
            const jf_wrm_xqvl_rnsf_1 = new Jf_wrm_xqvl_rnsf(Object.keys(wrvr_kp.diwr_sj_di_wrvr))
            return jf_wrm_xqvl_rnsf_1.add(user_params._[2] || 1).get_sopc_rnsf().join('\n')
        })()
    } else if (user_params._[1]) {
        Object.assign(outputs, await outputs.ask({
            wrvrOpr: {
                user_params,
                outputs
            }
        })
            .catch(err => {
                throw err
            }))
    } else {
        outputs.outputText = (() => {
            if (user_params.ztwm || reg_wrvr_xjm_fr.test(user_params.lastParams)) {
                return wrvrRfrf({ user_params })
            } else {
                if (map_ey_ztka.has(user_params.lastParams)) {
                    user_params.lastParams = map_ey_ztka.get(user_params.lastParams)
                } else if (user_params.lastParams.toLowerCase() === 'constructor') {
                    return user_params.lastParams
                }
                return (wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()] && wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()].yhrj) || wrvr_kp.diwr_sj_di_wrvr[user_params.lastParams] || "RA ZNZK"
            }
        })()

    }

}
module.exports = wrvr