const wrvrRfrf = require('./KPLU/wrvr/atvn/wrvrRfrf.js')
function rjwc_cqpi(vnwm_vtn_vnwy, neig) {
    return vnwm_vtn_vnwy.map(rn1 => {
        const vnwm_ey_rjwc_znzk = rn1
        if (!vnwm_ey_rjwc_znzk[1].yxna_kp) {
            vnwm_ey_rjwc_znzk[1].yxna_kp = ''
        }
        if (vnwm_ey_rjwc_znzk[1].ji_zkrs_rfrf_wrvr) {
            if (vnwm_ey_rjwc_znzk[1].title)
                vnwm_ey_rjwc_znzk[1].title = rfrf(vnwm_ey_rjwc_znzk[1].title)
        }
        if (neig.ji_rfrf_wrvr || vnwm_ey_rjwc_znzk[1].ji_rfrf_wrvr) {
            const reg_rjqt_wydb = /(?:!|)\[.*\]\(.*?\)/g
            const reg_dyvy_phfd = /(?:\B)```(?:(?!```)[\s\S])*\n\s{0,2}```/g
            const vnwm_rjqt_wydb = vnwm_ey_rjwc_znzk[1].content.match(reg_rjqt_wydb)
            const vnwm_dyvy_phfd = vnwm_ey_rjwc_znzk[1].content.match(reg_dyvy_phfd)
            if (vnwm_ey_rjwc_znzk[1].title)
                vnwm_ey_rjwc_znzk[1].title = rfrf(vnwm_ey_rjwc_znzk[1].title)
            vnwm_ey_rjwc_znzk[1].content_kp = vnwm_ey_rjwc_znzk[1].content
            vnwm_ey_rjwc_znzk[1].content = (() => {
                const bqeo_yhld = (() => {
                    let rj1 = vnwm_ey_rjwc_znzk[1].content
                    if (vnwm_dyvy_phfd) {
                        rj1 = rj1.replace(reg_dyvy_phfd, "ggg_dyvy_phfd")
                    }
                    if (vnwm_rjqt_wydb) {
                        rj1 = rj1.replace(reg_rjqt_wydb, "ggg_rjqt_wydb")
                    }
                    return rj1
                })()
                if (/vkrs_zpyb/.test(vnwm_ey_rjwc_znzk[1].title)) {
                    throw vnwm_ey_rjwc_znzk[1]
                }

                const rj_1 = rfrf(bqeo_yhld)
                if (vnwm_rjqt_wydb || vnwm_dyvy_phfd) {
                    let rj2 = rj_1
                    if (vnwm_rjqt_wydb) {
                        let vn_1 = -1
                        rj2 = rj2.replace(/ggg_rjqt_wydb/g, () => {
                            vn_1++
                            if (/#/.test(vnwm_rjqt_wydb[vn_1])) {
                                return rfrf(vnwm_rjqt_wydb[vn_1]).replace(/-/g, "")
                            }
                            return vnwm_rjqt_wydb[vn_1]
                        })
                    }
                    if (vnwm_dyvy_phfd) {
                        let vn_1 = -1
                        rj2 = rj2.replace(/ggg_dyvy_phfd/g, () => {
                            vn_1++
                            return vnwm_dyvy_phfd[vn_1]
                        })
                    }
                    return rj2
                } else {
                    return rj_1
                }

            })()

        }
        return vnwm_ey_rjwc_znzk
    })
}
module.exports = rjwc_cqpi
function rfrf(rfrf_nixb_bqeo) {
    return wrvrRfrf({
        user_params: {
            _: ['wrvr']
            , lastParams: rfrf_nixb_bqeo
        }
    })
}