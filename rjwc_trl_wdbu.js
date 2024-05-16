const rjwc_cqpi = require("./rjwc_cqpi")

function rjwc_trl_wdbu(vnwm_vtn_jplp = [], neig_kp) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const vnwm_vtn_1 = vnwm_vtn_jplp.map(rn1 => {
        Object.assign(rn1.hquj[1], { yxna_kp: rn1.yxna_kp })
        return rn1.hquj
    })

    return rjwc_cqpi(vnwm_vtn_1, neig)
}
module.exports = rjwc_trl_wdbu