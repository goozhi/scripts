const X_map = require("../ux-a/x_map");
const Zzuy = require("../ux-e/zzuy_rr_1_cxav.js");
const Jplp_kplu_sdbu = require("../ux/jplp_kplu_sdbu");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");

module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const path = require("path")

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            w_jcbz_ngrw_nikc: true,
        }, neig_kp)
        this.get_vxn_nmky_nikc = (yoch_vkih_vxn) => path.join(this.get_neig().nikc_ph, "nikc_" + yoch_vkih_vxn)
        this.get_vxn_nmky_ph_nikc = this.get_vxn_nmky_nikc
        this.vdum_nikc_kplu = () => {
            return this.get_neig().nikc_zzzz_vnwy || this.fywy_ph_nikc_ngnc_nikc("nikc_zzzz_vnwy")
        }
        // this.allright = ()=>{
        //     return this.allright_yhld(this.imfbssss)
        // }
        this.rzvo_imfb_neig({
            nikc_kplu: this.vdum_nikc_kplu(),
            wdbu_wm_slm: (wm_slm) => {
                if (!Array.isArray(wm_slm)) {
                    uzms("csrf-slm sl mcvn aoao w vnwm-")
                }
                wm_slm.forEach(rn1 => {
                    const slm_yfux_1 = (() => {
                        if (map_nomr_ybkc_yody.has(rn1)) {
                            return map_nomr_ybkc_yody.get(rn1)
                        } else {
                            const wrm_yhld = this.get_yo_kplu_gzbu().get(rn1)
                            if (!wrm_yhld) {
                                const jtyj = ((yoch_dyih_slm) => {
                                    const vbyt_1 = (yfux) => {
                                        return yfux.get_yoch_dyih() === yoch_dyih_slm
                                    }
                                    const wm_slm_shn = this.get_slm_shn()
                                    if (wm_slm_shn.length) {
                                        return wm_slm_shn[wm_slm_shn.length - 1].find(rn2 => {
                                            return rn2.yj_yfux(vbyt_1)
                                        })
                                    } else {
                                        return this.yj_yfux(vbyt_1)
                                    }

                                    // const slm1 = (() => {
                                    // sc mb nwvt nixb slm
                                    // })()
                                    // if (slm1?.yp) {
                                    //     return slm1
                                    //     // yoch_fs_bj_yp_vnwy(yg2, fo2, slm1, neig_1)
                                    // } else {
                                    //     return undefined
                                    //     // console.log(vkih_hfbc_ar.next().value, 82, this.get_wu())
                                    //     // uzms("csrf-sopj fywy dgl vkih yj ab slm zzuy-" + yoch_dyih_slm)
                                    // }
                                }
                                )(rn1)
                                if (!jtyj) {
                                    console.error(nvms("csrf-sopj fywy dgl vkih yj ab slm zzuy-" + rn1))
                                } else {
                                    return jtyj
                                }
                            } else {
                                return this.yoch_fs_ey_vnwy(wrm_yhld, rn1, (yfux_1) => {
                                    map_nomr_ybkc_yody.set(rn1, yfux_1)
                                }, neig_1)
                            }


                        }

                    })()
                    if (slm_yfux_1)
                        this.yoch_fs_bj_yp_vnwy(yg2, fo2, slm_yfux_1, neig_1)
                })

            }

        })

    }
}
