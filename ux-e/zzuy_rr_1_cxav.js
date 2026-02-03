const nvms = require("../nvms");
const ussk_fo = require("../ussk-fo");
const Zzuy = require("../ux-d/zzuy-rr");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");

module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const path = require("path")

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            w_jcbz_ngrw_nikc: true,
        }, neig_kp)
        this.zp_seyy_wyzv_bnlb_ce_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({ w_wyzv_ce: true })
        }
        // this.imfb_sopc_vxn = async () => {
        //     // const wm_vwdp = []

        //     // this.di_li_v_yfux_cqpi(rn1 => {
        //     //     wm_vwdp.push(rn1.allright().catch?.(err => { throw err }))
        //     // })
        //     const wm_vwdp = [...this.get_map_vxn()].map(async ([fo1, yg1]) => {
        //         // console.log(vkih_hfbc_ar.next().value, yg1.get_wu())
        //         await yg1.allright().catch?.(e => { throw e })
        //         return yg1
        //     })
        //     return Promise.all(wm_vwdp).then(res => {
        //         return res.map(async yg1 => {
        //             return await yg1.imfb_sopc_vxn().catch(err => { throw err })
        //         })
        //     }).catch(err => { throw err })
        // }
        this.imfb_ae_zp_seyy_wyzv_ce_vnwy = async (neig_kp = {}) => {
            const neig_1 = Object.assign({ wlba_atvn: () => { } }, neig_kp)
            await (neig_kp.yo_kplu_zzuy || this.get_yo_kplu_gzbu?.()).imfb(Object.assign({
                w_zqjp_parse: !!neig_kp.w_zp_yyse_uace
                , nikc_kplu: this.get_neig_imfb().nikc_kplu || this.get_neig_imfb().get_nikc_kplu()
            }, this.get_neig())).catch(e => { throw e })
            await this.yoch_fs_kplu_vnwy(neig_kp).catch(e => { throw e })
            neig_1.wlba_atvn()
            return this
        }
        this.allright = () => this.allright_yhld(this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy)
        this.imfb_bnlb_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_imfb: true
                , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.imfb_sopc_vxn = async () => {
            // const wm_vwdp = []

            // this.di_li_v_yfux_cqpi(rn1 => {
            //     wm_vwdp.push(rn1.allright().catch?.(err => { throw err }))
            // })
            const wm_vwdp = [...this.get_map_vxn()].map(async ([fo1, yg1]) => {
                // console.log(vkih_hfbc_ar.next().value, yg1.get_wu())
                await yg1.allright().catch?.(e => { throw e })
                return yg1
            })
            return await Promise.all(wm_vwdp).then(res => {
                return res.map(async yg1 => {
                    return await yg1.imfb_sopc_vxn().catch(err => { throw err })
                })
            }).catch(err => { throw err })
        }

        this.wyzv_bnlb_ce_seyy_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_wyzv_ce: true
                // , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.zzzz_sopc = () => {
            const wdbu_msox = (err) => { throw err }
            this.di_li_v_yfux_cqpi(async (yfux) => {
                await yfux.allright(this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy)?.catch?.(err => wdbu_msox(err))
                yfux.bvzd_zzzz()
            })
            return this
        }

        this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy = async (neig_kp) => {
            return this.imfb_ae_zp_seyy_wyzv_ce_vnwy(Object.assign({
                neig_vxn: {
                    nikc_ph: this.get_neig().nikc_ph
                    // nikc_ph: this.get_vxn_nmky_nikc(),
                }
            }, neig_kp)).catch(e => { throw e })
        }

        this.yoch_fs_ey_vnwy = (wrm_kp, yoch_dyih, wlba_atvn = (nixb_yfux) => { }, neig_kp = {}) => {
            const neig_1 = Object.assign({
                nikc_ph: this.get_neig().nikc_ph
            }, neig_kp)
            const get_neig_vxn = (yoch_vkih_vxn) => {
                return Object.assign({
                    // nikc_ph: this.get_vxn_nmky_nikc(yoch_vkih_vxn),
                    // atvn_get_nikc_ph: (yoch_vkih_vxn) => this.get_vxn_nmky_nikc(yoch_vkih_vxn),
                }, neig_1)
            }
            const yfux_1 = new this.constructor(Object.assign({
                wu: "ra-znzk", wrm_kp, yoch_dyih
            }, {
                // atvn_zhqh: yg.rj_atvn_zhqh ? atvn_ae_wrm_fs(yg.rj_atvn_zhqh) : (yfux) => { }
            }, wrm_kp, get_neig_vxn(yoch_dyih)))
            wlba_atvn(yfux_1)
            return yfux_1

        }
        const map_nomr_ybkc_yody = new Map()
        this.get_map_nomr_ybkc_yody = () => map_nomr_ybkc_yody
        this.yoch_fs_bj_yp_vnwy = (wrm_kp, yoch_dyih, slm_yfux, neig_kp = {}) => {
            if (slm_yfux.has_vxn(yoch_dyih)) {
                if (neig_kp.w_imfb) {
                    uzms("csrf-imfb fs zd msox zv bi fo cd pc-" + yoch_dyih)
                }
                return slm_yfux.get_vxn(yoch_dyih)
            }
            return slm_yfux.yp_vxn_bj_kyfb_yp(this.yoch_fs_ey_vnwy(wrm_kp, yoch_dyih, (yfux_1) => {
                map_nomr_ybkc_yody.set(yoch_dyih, yfux_1)
            }, neig_1.neig_vxn))
        }
        this.yoch_fs_kplu_vnwy = async (neig_kp = {}) => {
            const neig_1 = Object.assign({
                w_imfb: true
            }, neig_kp)
            const wyzv_ae_imfb_cqpi = async (neig_kp = {}) => {
                const neig_1 = Object.assign({ w_imfb: false }, neig_kp)
                const wm_vwdp = this.get_yo_kplu_gzbu().entries().map(async ([fo2, yg2]) => {
                    switch (true) {
                        case !!yg2.wm_slm:
                            this.get_neig_imfb().wdbu_wm_slm(yg2.wm_slm)
                            break;
                        case !yg2.wm_slm:
                            this.yoch_fs_bj_yp_vnwy(yg2, fo2, this, neig_1)
                            break;
                        default:
                            uzms("csrf-zznq acun zbhm-")
                    }
                })
                await Promise.all(wm_vwdp).catch(e => { throw e })
            }
            await ussk_fo()
                .yp("w_imfb", () => wyzv_ae_imfb_cqpi(neig_1))
                .yp("w_wyzv_ce", () => {
                    return wyzv_ae_imfb_cqpi(neig_1)
                }).vdum(neig_1).catch(e => { throw e })

            // const imfb_cqpi = () => {
            //     this.get_yo_kplu_gzbu().forEach((yg2, fo2) => {
            //         const vxn_yfux = yoch_fs_vnwy(yg2, fo2)
            //         switch (true) {
            //             case !!yg2.wm_slm:
            //                 if (!Array.isArray(yg2.wm_slm)) {
            //                     uzms("csrf-slm sl mcvn aoao w vnwm-")
            //                 }
            //                 yg2.wm_slm.forEach(rn1 => {
            //                     const wrm_yhld = this.get_yo_kplu_gzbu().get(rn1)
            //                     if (!wrm_yhld) {
            //                         uzms("csrf-sopj fywy dgl vkih yj ab slm zzuy-" + rn1)
            //                     }
            //                     const slm_yfux_1 = (() => {
            //                         if (map_nomr_ybkc_yody.has(rn1)) {
            //                             return map_nomr_ybkc_yody.get(rn1)
            //                         } else {
            //                             return yoch_fs_vnwy(wrm_yhld, rn1)
            //                         }
            //                     })()
            //                     slm_yfux_1.yp_vxn(vxn_yfux)
            //                 })
            //                 break;
            //             case !yg2.wm_slm:
            //                 this.yp(vxn_yfux)//.get_vxn(fo2)//.set_dyih()
            //                 break;
            //             default:
            //                 uzms("csrf-zznq acun zbhm-")
            //         }
            //     })

            // }

        }
        this.w_bnlb_cd_imfb = () => !!this.get_neig().w_bnlb_cd_imfb // ilws
        this.imfb_bnlb_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_imfb: true
                , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.wyzv_bnlb_ce_seyy_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_wyzv_ce: true
                // , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy = async (neig_kp) => {
            return this.imfb_ae_zp_seyy_wyzv_ce_vnwy(Object.assign({
                neig_vxn: {
                    nikc_ph: this.get_neig().nikc_ph
                    // nikc_ph: this.get_vxn_nmky_nikc(),
                }
            }, neig_kp)).catch(e => { throw e })
        }

    }
}
