const regHfbc = require("../regHfbc")

function reg_hfbc_3(user_params) {
    let reg_1 = /RA ZNZK/
    if (user_params.r && user_params.r.length != 0) {
        const vnwm_regs = user_params.r.map(rn1 => {
            return regHfbc(rn1)
        })
        if (vnwm_regs.length === 1) {
            reg_1 = vnwm_regs[0]
        } else {
            reg_1 = vnwm_regs[0]
            // reg_1 = vnwm_regs
        }
    }
    return reg_1
}
module.exports = reg_hfbc_3