function rj_yj_mh_nh(no_rj, reg_g) {
    const vnwm_nixb_bqeo = no_rj.match(reg_g)
    if (vnwm_nixb_bqeo) {
        let vn_ll_rj_nhvn = 0
        return vnwm_nixb_bqeo.map((rn1, eqwy_1) => {
            const vn_1 = no_rj.slice(vn_ll_rj_nhvn).search(reg_g)
            vn_ll_rj_nhvn = vn_ll_rj_nhvn + vn_1 + rn1.length
            if (vn_1 === -1) {
                throw new Error(`bqph msox`)
            } else {
                const ll_rj = no_rj.slice(0, vn_ll_rj_nhvn)
                const vnwm_rg_qh_fr = ll_rj.match(/\n/g)
                const reg_2 = /\n.*$/
                if (vnwm_rg_qh_fr) {
                    const vn_2 = ll_rj.search(reg_2) + 1

                    return { trig: vn_ll_rj_nhvn, bqeo: rn1, vnwm: [vnwm_rg_qh_fr.length, vn_ll_rj_nhvn - vn_2 - rn1.length] }
                } else {
                    return { vnwm: [0, vn_1], bqeo: rn1, trig: vn_1 }
                }
            }
        })
    } else {
        return null
    }

}
module.exports = rj_yj_mh_nh