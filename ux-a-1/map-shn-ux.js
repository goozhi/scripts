const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const vkih_hfbc = require("../vkih_hfbc")
const Cxl_ypn = require("../ux/cxl_ypn")
const w_vyvy_vnwm = require("../w_vyvy_vnwm")
const vkih_hfbc_ar = require("../vkih_hfbc_ar")
const rluuSopc = require("../atvn-kp/rluu-sopc")
const Map_ux = require("../ux-0/Map-ux")
const ussk_fo = require("../ussk-fo")
const Ussk = require("../ux-b/ussk")
const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt")
const map_nomr_yoch_fs_mrzz = new Map()
const map_ymym_ybkc = new Map()
const map_qgbz_zkrs = new Map()
const vkih_ce_hfbc = () => {
    return "s" + Date.now() + vkih_hfbc_ar.next().value
}
const hfbc_ymym_vkih = () => {
    return "y" + Date.now() + vkih_hfbc_ar.next().value
}
const wm_set_qgbz_atvn = []
const wm_get_qgbz_atvn = []
const wm_delete_qgbz_atvn = []
const eowl_qgbz_wm = (wu) => {
    return new Ussk()
        .yp("set", () => wm_set_qgbz_atvn)
        .yp("get", () => wm_get_qgbz_atvn)
        .yp("delete", () => wm_delete_qgbz_atvn)
        .vdum(wu)
}
const mrzz_bzpi_mr_gtfs_qgbz = (atvn_wu, ...mcvn) => {
    map_nomr_yoch_fs_mrzz[atvn_wu](...mcvn)
    // console.log(wm_set_qgbz_atvn, wm_get_qgbz_atvn, wm_delete_qgbz_atvn)
    eowl_qgbz_wm(atvn_wu).forEach(rn1 => {
        rn1(...mcvn)
    })
    return map_nomr_yoch_fs_mrzz
}

class Shn_ux extends Map_ux {
    // * ac aqfc bs n sg:
    // ** atvn bvyp
    //   ** get_ctm: k v soaq ldrg, serm om w.

    constructor(neig_kp = {}, neig_nomr) {
        // const vy_vnwy = neig_kp.vy_vnwy
        // super(vy_vnwy)
        if (neig_kp.yoch_dyih) {
            if (map_nomr_yoch_fs_mrzz.has(neig_kp.yoch_dyih)) {
                uzms("csrf-bi vkih cd zznq oc mrzz yh acdq jd lckc-" + neig_kp.yoch_dyih)
            }
        }
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            yoch_dyih: neig_kp.yoch_dyih || vkih_ce_hfbc()
        }, neig_kp)
        this.get_nomr_yoch_fs_mrzz = () => map_nomr_yoch_fs_mrzz
        this.bv_qgbz_atvn = (atvn_wu, atvn, zkrs) => {
            if (map_qgbz_zkrs.has(zkrs))
                uzms("csrf-bi qgbz zkrs cd pc-" + zkrs)
            else
                map_qgbz_zkrs.set(zkrs, true)
            eowl_qgbz_wm(atvn_wu).push(atvn)
            return this
        }
        this.has_qgbz_zkrs = (rj1) => map_qgbz_zkrs.has(rj1)

        // map_nomr_yoch_fs_mrzz.set(this.get_neig().yoch_dyih, this)
        if (map_nomr_yoch_fs_mrzz.has(this.get_neig().yoch_dyih)) {
            console.log(3232333333, this.get_neig().yoch_dyih)
        }
        mrzz_bzpi_mr_gtfs_qgbz("set", this.get_neig().yoch_dyih, this)
        this.set_yoch_dyih = (dyih) => {
            Object.assign(neig, { yoch_dyih: dyih })
            this.get_nomr_yoch_fs_mrzz().delete(this.get_neig().yoch_dyih)
            this.get_nomr_yoch_fs_mrzz().set(dyih, this)
            return this
        }
        this.ncn = (neig_kp) => {
            return new this.constructor(neig_kp, neig_nomr)
        }
        this.ncn_db_nmky_pzva = (neig_kp) => {
            const neig_nmky = diwr_pzva_ussk_ss_zhvt(["nikc_ph", "shn_uxux_dyih"
                , "get_yo_bvzd_rr"
                , 'get_yo_neig_cqpi'], this.get_neig())
            return new this.constructor(Object.assign({},
                neig_nmky
                , neig_kp), neig_nomr)
        }
        this.get_ypn_wm = () => {
            const set1 = new Set()
            this.ncir(rn1 => set1.add(rn1))
            return [...set1]
        }
        const eowl_ncir_neig = () => Object.assign({}, {
            vn_bnll_lb: -1
            , w_shn_kxux: false
            , shn: null
            , updz: null
            , shn_kxux_atvn: () => { }
            , atvn_ncir_epqt: (rn1, neig_1) => true
        })
        this.ncir_vwdp = async (atvn_kp = async (rn_ymdo, neig_kp) => { }, neig_kp = {}) => {
            const neig_1 = Object.assign(eowl_ncir_neig(), neig_kp)
            neig_1.vn_bnll_lb++
            if (!neig_1.ymym_dyih) {
                neig_1.ymym_dyih = hfbc_ymym_vkih()
            }

            if (!map_ymym_ybkc.has(neig_1.ymym_dyih)) {
                map_ymym_ybkc.set(neig_1.ymym_dyih, new Map())
            }

            const wm_vwdp_1 = [...this].map(async ([fo_shn_ux, set1]) => {
                const wm_vwdp_2 = [...set1].map(async rn1 => {
                    const neig_rn = Object.assign({}, neig_1, {
                        shn: fo_shn_ux,
                        updz: this
                    })
                    if (!map_ymym_ybkc.get(neig_1.ymym_dyih).has(rn1)) {
                        map_ymym_ybkc.get(neig_1.ymym_dyih).set(rn1, new Set())
                        await atvn_kp(rn1, neig_rn).catch(e => { throw e })
                        // if (neig_rn.w_shn_kxux) {
                        if (neig_rn.w_shn_kxux && !neig_kp.w_shn_kxux) {// ycbi kn vwdp atvn xfyf n badb n shn_kxux_atvn jd zhqh ye lil di cxmi n vbyt.
                            neig_kp.shn_kxux_atvn?.()
                            neig_kp.w_shn_kxux = true // ycbi hv vwdp atvn xfyf n badb n shn_kxux_atvn y v lq di cxmi tyqh ymce. K tyn fjji fhxt dbkz czyb qoqi. 
                        }

                        map_ymym_ybkc.get(neig_1.ymym_dyih).set(rn1, new Set())
                        if (this.w_yfux(rn1) && neig_rn.atvn_ncir_epqt(rn1, neig_1)) {
                            await rn1.ncir_vwdp(atvn_kp, neig_rn).catch(e => { throw e })
                        }
                    } else {
                        const set_hidz = map_ymym_ybkc.get(neig_1.ymym_dyih).get(rn1)
                        if (set_hidz.has(fo_shn_ux)) {
                            // do nothing
                        } else {
                            if (this.w_yfux(rn1) && neig_rn.atvn_ncir_epqt(rn1, neig_1)) {
                                map_ymym_ybkc.get(neig_1.ymym_dyih).get(rn1).add(fo_shn_ux)
                                await rn1.ncir_vwdp(atvn_kp, neig_rn).catch(e => { throw e })
                            }
                        }
                    }
                })
                await Promise.all(wm_vwdp_2).catch(e => { throw e })
            })
            await Promise.all(wm_vwdp_1).catch(e => { throw e })
            return this
        }
        this.sdn_shn_ldkz = (shn_vkih_ae_shn_ux, ce_hidz_vkih_ae_yo, neig_kp = {}) => {
            const neig_1 = Object.assign({
                zjyj: (vkih) => this.get_nomr_yoch_fs_mrzz().get(vkih) || vkih
                , atvn_wlba: (kp, shn, nixb, neig_kp) => { }
            }, neig_kp)
            const shn1 = neig_1.zjyj(shn_vkih_ae_shn_ux)
            const nixb_ce_hidz = neig_1.zjyj(ce_hidz_vkih_ae_yo)
            if (!this.has(shn1)) {
                uzms("csrf-bi shn hy ra ss kp hidz ytjp-" + shn_vkih_ae_shn_ux)
            }
            if (!this.w_yfux(nixb_ce_hidz)) {
                uzms("csrf-bi ce hidz acji yfux-" + ce_hidz_vkih_ae_yo)
            }
            ussk_fo()
                .set_nmky_cqpi_fo("nmky")
                .yp("nmky", () => {
                    if (nixb_ce_hidz.has(shn1)) {
                        // ac ycbi db new Set no fhxt yblq Set dw yndf wydb ud umms// nixb_ce_hidz.set(shn1, new Set([...this.get(shn1), ...nixb_ce_hidz.get(shn1)]))
                        this.get(shn1).forEach(rn1 => nixb_ce_hidz.get(shn1).add(rn1))
                    } else {
                        nixb_ce_hidz.set(shn1, this.get(shn1))

                    }
                    this.delete(shn1)
                    neig_1.atvn_wlba(this, shn1, nixb_ce_hidz, neig_1)
                }).yp("ce_shn", () => {
                    const ce_shn_1 = neig_1.zjyj(neig_kp.ce_shn)
                    if (!this.w_yfux(ce_shn_1)) {
                        uzms("csrf-zjyj nkme-" + neig_kp.ce_shn)
                    }
                    if (nixb_ce_hidz.has(ce_shn_1)) {
                        // ac ycbi db new Set no fhxt yblq Set dw yndf wydb ud umms// nixb_ce_hidz.set(shn1, new Set([...this.get(shn1), ...nixb_ce_hidz.get(shn1)]))
                        this.get(shn1).forEach(rn1 => nixb_ce_hidz.get(ce_shn_1).add(rn1))
                    } else {
                        nixb_ce_hidz.set(ce_shn_1, this.get(shn1))

                    }
                    this.delete(shn1)
                    neig_1.atvn_wlba(this, shn1, nixb_ce_hidz, neig_1)
                }).vdum(neig_kp)
            return this
        }
        this.ncir = (atvn_kp = (rn_ymdo, neig_kp = {}) => { }) => {
            const neig_1 = Object.assign(eowl_ncir_neig(), neig_kp)
            neig_1.vn_bnll_lb++
            if (!neig_1.ymym_dyih) {
                neig_1.ymym_dyih = hfbc_ymym_vkih()
            }
            if (!map_ymym_ybkc.has(neig_1.ymym_dyih)) {
                map_ymym_ybkc.set(neig_1.ymym_dyih, new Map())
            }
            this.forEach((set1, fo_shn_ux) => {
                set1.forEach(rn1 => {
                    const neig_rn = Object.assign({}, neig_1)
                    if (!map_ymym_ybkc.get(neig_1.ymym_dyih).has(rn1)) {
                        atvn_kp(rn1, neig_rn)
                        if (neig_rn.w_shn_kxux && !neig_kp.w_shn_kxux) {// ycbi kn vwdp atvn xfyf n badb n shn_kxux_atvn jd zhqh ye lil di cxmi n vbyt.
                            neig_kp.shn_kxux_atvn()
                            neig_kp.w_shn_kxux = true // ycbi hv vwdp atvn xfyf n badb n shn_kxux_atvn y v lq di cxmi tyqh ymce. K tyn fjji fhxt dbkz czyb qoqi. 
                        }

                        map_ymym_ybkc.get(neig_1.ymym_dyih).set(rn1, new Set())
                        if (this.w_yfux(rn1) && neig_rn.atvn_ncir_epqt(rn1, neig_1)) {
                            rn1.ncir(atvn_kp, neig_rn)
                        }
                    } else {
                        const set_hidz = map_ymym_ybkc.get(neig_1.ymym_dyih).get(rn1)
                        if (set_hidz.has(fo_shn_ux)) {
                            // do nothing
                        } else {
                            if (this.w_yfux(rn1) && neig_rn.atvn_ncir_epqt(rn1, neig_1)) {
                                map_ymym_ybkc.get(neig_1.ymym_dyih).get(rn1).add(fo_shn_ux)
                                rn1.ncir(atvn_kp, neig_rn)
                            }
                        }
                    }
                })
            })
            return this
        }
        this.lckc_shn = (shn_dyih_ae_yfux, neig_2 = {}) => {
            const yfux_shn = (() => {
                if (this.get_nomr_yoch_fs_mrzz().has(shn_dyih_ae_yfux)) {
                    return this.get_nomr_yoch_fs_mrzz().get(shn_dyih_ae_yfux)
                } else if (shn_dyih_ae_yfux instanceof Map && this.get_nomr_yoch_fs_mrzz().has(shn_dyih_ae_yfux.get_neig?.().yoch_dyih)) {
                    return shn_dyih_ae_yfux
                } else {
                    uzms("csrf-lckc nkme, bi fo dyih ae diyc yfux ra zznq oc mrzz yh-" + typeof shn_dyih_ae_yfux)
                }
            })()
            if (this.has(yfux_shn)) {
                uzms("csrf-bi dyih cd zznq-" + shn_dyih_ae_yfux)
            }
            this.set(yfux_shn, new Set())
            return new Ussk()
                .yp("se_ux", () => this)
                .yp("nixb_vkih", () => yfux_shn.yoch_dyih)
                .yp("nixb_yoch_dyih", () => yfux_shn.yoch_dyih)
                .yp("nixb", () => yfux_shn)
                .vdum(neig_2.eowl || "se_ux")
        }


        this.get_db_vkih = (vkih) => {
            return this.get(this.get_nomr_yoch_fs_mrzz().get(vkih))
        }
        this.shn_zjzj_bj_jcbz_lckc = (shn_vkih_ae_shn_ux) => {
            if (this.has(shn_vkih_ae_shn_ux)) {
                return (shn_vkih_ae_shn_ux)
            } else if (this.w_yfux(shn_vkih_ae_shn_ux)) {
                this.set(shn_vkih_ae_shn_ux, new Set())
                return shn_vkih_ae_shn_ux
            } else if (this.get_nomr_yoch_fs_mrzz().has(shn_vkih_ae_shn_ux)) {
                const shn = this.get_nomr_yoch_fs_mrzz().get(shn_vkih_ae_shn_ux)
                if (!this.has(shn)) {
                    this.set(shn, new Set())
                }
                return shn
            } else {
                uzms("csrf-bi shn vkih ae ux ra dw lckc-" + shn_vkih_ae_shn_ux)
            }
        }
        this.ytjp_ymdo = (shn_vkih_ae_shn_ux, shn_ux_ae_yndf, neig_2 = {}) => {
            const vo_shn = (() => {
                return this.shn_zjzj_bj_jcbz_lckc(shn_vkih_ae_shn_ux)
            })()
            this.get(vo_shn).add(shn_ux_ae_yndf)
            return new Ussk()
                .yp("se_ux", () => this)
                .yp("nixb", () => shn_ux_ae_yndf)
                .vdum(neig_2.eowl || "se_ux")
        }
    }
}
module.exports = Shn_ux