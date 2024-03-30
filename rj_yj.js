function rj_yj(no_rj, reg_ae_string) {
    const vn_1 = no_rj.search(reg_ae_string)
    if (vn_1 === -1) {
        return null
    } else {
        const ll_rj = no_rj.slice(0, vn_1)
        const vnwm_rg_qh_fr = ll_rj.match(/\n/g)
        const reg_2 = /\n.*$/
        if (vnwm_rg_qh_fr) {
            const vn_2 = ll_rj.search(reg_2) + 1
            return { trig: vn_1, vnwm: [vnwm_rg_qh_fr.length, vn_1 - vn_2] }
        } else {
            return { vnwm: [0, vn_1], trig: vn_1 }
        }
    }
}
module.exports = rj_yj