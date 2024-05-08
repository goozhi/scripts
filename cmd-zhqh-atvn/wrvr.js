const wrvrRfrf = require("../KPLU/wrvr/atvn/wrvrRfrf")
const yhrj_ld_wrvr_rj = require("../KPLU/wrvr/atvn/yhrj_ld_wrvr_rj")
const wrvr_kp = require('../KPLU/wrvr')
const reg_wrvr_xjm_fr = require("../reg_wrvr_xjm_fr")
const wrvr = async (user_params = {}, outputs = { outputText: "" }) => {
    if (user_params._[1] === 'wrvr') {
        outputs.outputText = yhrj_ld_wrvr_rj(user_params.lastParams, wrvr_kp)
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
            if (reg_wrvr_xjm_fr.test(user_params.lastParams)) {
                return wrvrRfrf({ user_params })
            } else {
                return (wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()] && wrvr_kp.diwr_non_eysj[user_params.lastParams.toLowerCase()].yhrj) || wrvr_kp.diwr_sj_di_wrvr[user_params.lastParams] || "RA ZNZK"
            }
        })()

    }

}
module.exports = wrvr