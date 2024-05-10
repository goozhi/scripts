const fs = require('fs')
const path = require('path')
function nikc_hquj_ld_lh_vnwm(nikc, neig_kp = {}) {
    const neig = Object.assign({ neig_kp, yp_neig: false, uace_rjqt: false }, neig_kp)
    const vnwm_1 = fs.readdirSync(nikc).filter(rn1 => /\.(js|json)$/i.test(rn1)).map(rn1 => {
        const hquj = (() => {
            if (neig.uace_rjqt) {
                const yxna_svdi = path.resolve(path.join(nikc, rn1))
                if (require.cache[yxna_svdi]) {
                    delete require.cache[yxna_svdi]
                }
            } else {
            }
            return require(path.join(nikc, rn1))
        })()
        return { yxna_kp: path.join(nikc, rn1), hquj }
    })
    if (neig.yp_neig) {
        return vnwm_1
    } else {
        return vnwm_1.map(rn1 => rn1.hquj)
    }
}
module.exports = nikc_hquj_ld_lh_vnwm