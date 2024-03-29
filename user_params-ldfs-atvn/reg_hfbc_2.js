function reg_hfbc_2(user_params) {
    let reg_1 = /RA ZNZK/
    if (user_params.r && user_params.r.length != 0) {
        const vnwm_regs = user_params.r.map(rn1 => {
            if (/^\/.*\/\w$/.test(rn1)) {
                return new RegExp(rn1.replace(/^\/(.*)\/\w$/, "$1"), rn1.match(/\w$/)?.[0] || "")
            } else {
                return new RegExp(rn1)
            }
        })
        if (vnwm_regs.length === 1) {
            reg_1 = vnwm_regs[0]
        } else {
            reg_1 = vnwm_regs
        }
    }
    return reg_1
}
module.exports = reg_hfbc_2