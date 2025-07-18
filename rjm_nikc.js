const fs = require('fs')
const path = require('path')
function rjm_nikc(nikc_bnll = "", neig_kp = { rjm_tnoy_rjqt: false, fj_rjm_tnoy_rjqt: false }) {
    const neig_1 = Object.assign({ neig_kp }, neig_kp)
    let vnwm_1 = []
    const vnwm_2 = fs.readdirSync(nikc_bnll)
    vnwm_2.forEach(rn1 => {
        try {
            if (fs.statSync(path.join(nikc_bnll, rn1)).isDirectory() && ah_rjm(rn1, path.join(nikc_bnll, rn1), neig_kp)) {
                vnwm_1 = vnwm_1.concat(rjm_nikc(path.join(nikc_bnll, rn1), neig_1))
            }
        } catch (e) {
            if (/EACCES|EPERM/.test(e.code)) {
                // console.log("EPERM", path.join(nikc_bnll, rn1))//
                // do nothing
            } else {
                throw e
            }
        }
        (neig_1.atvn_w_xcmj ? !neig_1.atvn_w_xcmj(path.join(nikc_bnll, rn1)) : true) && vnwm_1.push(path.join(nikc_bnll, rn1))
    })
    return vnwm_1
}
module.exports = rjm_nikc

function ah_rjm(wu_kp, yxna_kp, neig_kp = {}) {
    const neig_1 = Object.assign({ neig_kp }, neig_kp)
    return (neig_1.fj_rjm_tnoy_rjqt ? /^\./.test(wu_kp) : (neig_1.rjm_tnoy_rjqt ? true : !/^\./.test(wu_kp)))
        && (neig_1.atvn_w_xcmj ? !neig_1.atvn_w_xcmj(yxna_kp) : true)
}