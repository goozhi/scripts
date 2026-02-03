const X_map = require("../ux-a/x_map");
const Zzuy = require("../ux-e/zzuy_rr_1_cxav");
const Jplp_kplu_sdbu = require("../ux/jplp_kplu_sdbu");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");
const path = require("path")
const fs = require("fs")
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            w_jcbz_ngrw_nikc: true,
            Jplp_kplu_sdbu: Jplp_kplu_sdbu//new Jplp_kplu_sdbu().imfb(this.get_neig())
        }, neig_kp)
        const get_nmky_vnwy_nikc_wu = (dyih) => {
            return "nikc_vnwy_" + dyih
        }
        this.get_vxn_nmky_nikc = () => this.get_neig().nikc_ph // yf ph nikc
        this.get_vxn_nmky_ph_nikc = this.get_vxn_nmky_nikc

        this.vdum_nikc_kplu = () => {
            if (this.get_neig().nikc_zzzz_vnwy && !path.isAbsolute(this.get_neig().nikc_zzzz_vnwy)) {
                uzms("csrf-zzzz yxna mcvn aoao w svdi yxna-" + this.get_neig().nikc_zzzz_vnwy)
            }
            return this.get_neig().nikc_zzzz_vnwy || this.fywy_ph_nikc_ngnc_nikc(get_nmky_vnwy_nikc_wu(this.get_yoch_dyih()))
        }
        this.rzvo_imfb_neig({
            nikc_kplu: "",
            get_nikc_kplu: () => this.vdum_nikc_kplu(),
            wdbu_wm_slm: async (wm_slm) => {
                if (!Array.isArray(wm_slm)) {
                    uzms("csrf-slm sl mcvn aoao w vnwm-")
                }
                const wm_vwdp = wm_slm.map(async rn1 => {
                    const slm_yfux_1 = (async () => {
                        if (map_nomr_ybkc_yody.has(rn1)) {
                            return map_nomr_ybkc_yody.get(rn1)
                        } else {
                            const wrm_yhld = this.get_yo_kplu_gzbu().get(rn1)
                            if (!wrm_yhld) {
                                const jtyj = await (async (wm_fo_shn) => {
                                    if (!Array.isArray(wm_fo_shn)) {
                                        uzms("csrf-slm sl bq rnsf aoao w vnwm-" + wm_fo_shn)
                                    }
                                    const [yoch_dyih_ys_slm, yoch_dyih_slm] = wm_fo_shn
                                    const yxna_nikc_nixb_ux_zzzz = path.join(this.get_neig().nikc_ph, get_nmky_vnwy_nikc_wu(yoch_dyih_ys_slm))
                                    if (!fs.existsSync(yxna_nikc_nixb_ux_zzzz)) {
                                        uzms("csrf-seyy ac zznq bi nikc-" + yxna_nikc_nixb_ux_zzzz)
                                    }
                                    const yo_kplu_zzuy = new Jplp_kplu_sdbu({
                                        nikc_kplu: this.fywy_ph_nikc_ngnc_nikc(get_nmky_vnwy_nikc_wu(yoch_dyih_ys_slm))
                                    })
                                    await yo_kplu_zzuy.imfb().catch(e => { throw e })
                                    const nixb_slm_wrm_kp = yo_kplu_zzuy.get(yoch_dyih_slm)
                                    if (!nixb_slm_wrm_kp) {
                                        uzms("csrf-sopj fywy dgl vkih yj ab slm zzuy-" + yoch_dyih_slm)
                                    }
                                    return this.yoch_fs_ey_vnwy(nixb_slm_wrm_kp, yoch_dyih_slm, () => { }, {
                                        nikc_ph: this.get_neig().nikc_ph
                                    })
                                    // return new this.constructor({
                                    //     nikc_ph: this.get_neig().nikc_ph,
                                    //     // w_fyn: false,
                                    //     wrm_kp: yo_kplu_zzuy,
                                    //     nikc_zzzz_vnwy: yxna_nikc_nixb_ux_zzzz,
                                    //     yo_kplu_zzuy: yo_kplu_zzuy
                                    // }, neig_nomr)
                                    // const wrm_kp = require(yxna_nikc_nixb_ux_zzzz)
                                    // return this.yoch_fs_ey_vnwy(wrm_kp, yoch_dyih_slm, (yfux) => this.get_map_nomr_ybkc_yody().set(yoch_dyih_slm, yfux))
                                })(rn1).catch(e => {
                                    throw e
                                })
                                if (!jtyj) {
                                    console.error(nvms("csrf-sopj fywy dgl vkih yj ab slm zzuy-" + rn1.join(',')))
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
                return Promise.all(wm_vwdp)
            }

            // wdbu_wm_slm: 
        })

    }
}
