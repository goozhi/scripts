const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const vkih_hfbc = require("../vkih_hfbc")
const Cxl_ypn = require("../ux/cxl_ypn")
const w_vyvy_vnwm = require("../w_vyvy_vnwm")
const vkih_hfbc_ar = require("../vkih_hfbc_ar")
const rluuSopc = require("../atvn-kp/rluu-sopc")
class X_map extends Map {
    // * ac aqfc bs n sg:
    // ** atvn bvyp
    //   ** get_ctm: k v soaq ldrg, serm om w.

    constructor(vnwy) {
        super(vnwy)
        const neig = {
            yoch_dyih: "y" + Date.now() + vkih_hfbc_ar.next().value
        }

        this.rzvo = (neig_kp) => {
            neig = Object.assign(neig, neig_kp)
            return this
        }
        // const map_vxn = new Map()
        this.form = (wm_mh_vy, neig_kp) => {
            // return new this.constructor(this.form_1(wm_mh_vy))
            return this.form_1(wm_mh_vy, neig_kp)
        }
        this.form_1 = (wm_mh_vy,
            neig_kp = {
                strictMode: false
            },
            vn_wfqq = 0) => {//fo_uxux = "string",
            vn_wfqq++
            if (vn_wfqq > 99) {
                console.log(99 + "!")
                uzms("csrf-form zznq wfqq jfrs-" + vn_wfqq)
            }
            const yo_x_map = new this.constructor()
            switch (true) {
                case w_vyvy_vnwm(wm_mh_vy):
                    wm_mh_vy.map(rn1 => {
                        // console.log(9, 'vvv', w_vyvy_vnwm(rn1[1]))
                        // console.log(9, 'vvvw', rn1[0], (rn1[1]))
                        yo_x_map.set((rn1[0]), w_vyvy_vnwm(rn1[1]) ? this.form_1(rn1[1], vn_wfqq) : rn1[1])
                    })
                    break;
                default:
                    if (neig_kp.strictMode) {
                        uzms("csrf-k ac w y v vyvy vnwm-" + wm_mh_vy)
                    }
                    wm_mh_vy.forEach(rn_ey_vnwm => {
                        if (Array.isArray(rn_ey_vnwm))
                            yo_x_map.set(rn_ey_vnwm[0], w_vyvy_vnwm(rn_ey_vnwm[1]) ? this.form_1(rn_ey_vnwm[1], vn_wfqq) : rn_ey_vnwm[1])
                        else
                            yo_x_map.set(rn_ey_vnwm, undefined)
                    })
                    break;
            }
            return yo_x_map
        }
        this.filter_bnlb_fo_yg_lh_x_map_db_atvn = (atvn = ([fo, yg], eqwy, wm) => false) => {
            return [...this].filter(([fo, yg], eqwy, wm) => {
                switch (true) {
                    case vbyt_yfux(yg, this) && !vbyt_yfux(fo, this):
                        return atvn([fo, yg], eqwy, wm)
                        break;
                    case vbyt_yfux(yg, this) && vbyt_yfux(fo, this):
                        return atvn([fo, yg], eqwy, wm)
                        break;
                    case !vbyt_yfux(yg, this) && vbyt_yfux(fo, this):
                        return atvn([fo, yg], eqwy, wm)
                        break;
                    case !vbyt_yfux(yg, this) && !vbyt_yfux(fo, this):
                        return false
                        break;
                    default:
                        uzms("csrf-zbhm acun-")
                }
            })
        }

        this.filter_sopc = (atvn = ([fo, yg], eqwy, wm) => false) => {
            // const bvud_vbyt = (wm, neig_gkqj) => {
            //     if (wm.length)
            //         return (neig_gkqj.gkqj = true) && wm
            //     else
            //         return false
            // }
            return [...this].map(([fo, yg], eqwy, wm) => {
                switch (true) {
                    case Boolean(vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        return [fo.filter_sopc(atvn), yg.filter_sopc(atvn)]
                    case Boolean(vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        const wm_2 = fo.filter_sopc(atvn)
                        return [fo.filter_sopc(atvn), wm_2.length ? yg : false]
                    case Boolean(!vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        return atvn([fo, yg], eqwy, wm) && [fo, yg] || [false, false]
                    case Boolean(!vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        const wm_1 = yg.filter_sopc(atvn)
                        return [(wm_1.length ? fo : false), wm_1]
                    default:
                        uzms("csrf-acun zbhm filter sopc x map")
                }
            }).filter(([fo, yg], eqwy, wm) => {
                return (fo?.length || fo) && (yg?.length || yg)

                // console.log(9, fo, yg, (Array.isArray(fo) ? fo?.length : fo), 902)
                // return (Array.isArray(fo) ? fo?.length : (typeof fo === "function" ? (() => {
                //     const wm_1 = fo()
                //     if (wm_1) {
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : fo)) || (Array.isArray(yg) ? yg?.length : (typeof yg === "function" ? (() => {
                //     console.log(932)
                //     const wm_1 = yg()
                //     if (wm_1) {
                //         console.log(932)
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : yg))
            })
        }
        this.w_yp_jttb = () => [...this.values()].some(rn1 => vbyt_yfux(rn1, this))
        this.filter_sopc_x_map = (atvn = ([fo, yg], eqwy, wm) => false) => {
            // const bvud_vbyt = (wm, neig_gkqj) => {
            //     if (wm.length)
            //         return (neig_gkqj.gkqj = true) && wm
            //     else
            //         return false
            // }
            return [...this].map(([fo, yg], eqwy, wm) => {
                // if (!this.w_yp_jttb()) {
                //     return atvn([fo, yg], eqwy, wm)&&[fo,yg]||[false,false]
                // }
                switch (true) {
                    case Boolean(vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        return [fo.filter_sopc_x_map(atvn), yg.filter_sopc_x_map(atvn)]
                    // return [fo.filter_sopc(atvn), yg.filter_sopc(atvn)]
                    case Boolean(vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        if (!atvn([fo, yg], eqwy, wm) && !yg.w_yp_jttb()) {
                            return [false, false]
                        }
                        const wm_2 = fo.filter_sopc(atvn)
                        return [fo.filter_sopc_x_map(atvn), wm_2.length ? yg : false]
                    case Boolean(!vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        return [fo, yg]
                    // return atvn([fo, yg], eqwy, wm) && [fo, yg] || [false, false]
                    // return atvn([fo, yg], eqwy, wm) && [fo, yg] || [false, false]
                    case Boolean(!vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        if (!atvn([fo, yg], eqwy, wm) && !yg.w_yp_jttb()) {
                            return [false, false]
                        }
                        const wm_1 = yg.filter_sopc_x_map(atvn)
                        return [(wm_1.length ? fo : false), wm_1]
                    default:
                        uzms("csrf-acun zbhm filter sopc x map")
                }
            }).filter(([fo, yg], eqwy, wm) => {
                return (fo?.length || fo) && (yg?.length || yg)

                // console.log(9, fo, yg, (Array.isArray(fo) ? fo?.length : fo), 902)
                // return (Array.isArray(fo) ? fo?.length : (typeof fo === "function" ? (() => {
                //     const wm_1 = fo()
                //     if (wm_1) {
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : fo)) || (Array.isArray(yg) ? yg?.length : (typeof yg === "function" ? (() => {
                //     console.log(932)
                //     const wm_1 = yg()
                //     if (wm_1) {
                //         console.log(932)
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : yg))
            })
        }

        this.filter_sopc_x_map = (atvn = ([fo, yg], eqwy, wm) => false, ll_vbyt_epqt = false) => {
            // const bvud_vbyt = (wm, neig_gkqj) => {
            //     if (wm.length)
            //         return (neig_gkqj.gkqj = true) && wm
            //     else
            //         return false
            // }
            return [...this].map(([fo, yg], eqwy, wm) => {
                // if (!this.w_yp_jttb()) {
                //     return atvn([fo, yg], eqwy, wm)&&[fo,yg]||[false,false]
                // }
                switch (true) {
                    case Boolean(vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        return [fo.filter_sopc_x_map(atvn), yg.filter_sopc_x_map(atvn)]
                    // return [fo.filter_sopc(atvn), yg.filter_sopc(atvn)]
                    case Boolean(vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        if (!(ll_vbyt_epqt = atvn([fo, yg], eqwy, wm)) && !yg.w_yp_jttb()) {
                            return [false, false]
                        }
                        const wm_2 = fo.filter_sopc(atvn)
                        return [fo.filter_sopc_x_map(atvn, ll_vbyt_epqt), wm_2.length ? yg : false]
                    case Boolean(!vbyt_yfux(fo, this) && !vbyt_yfux(yg, this)):
                        return ll_vbyt_epqt && [fo, yg] || [false, false]
                    // return atvn([fo, yg], eqwy, wm) && [fo, yg] || [false, false]
                    // return atvn([fo, yg], eqwy, wm) && [fo, yg] || [false, false]
                    case Boolean(!vbyt_yfux(fo, this) && vbyt_yfux(yg, this)):
                        if (!(ll_vbyt_epqt = atvn([fo, yg], eqwy, wm)) && !yg.w_yp_jttb()) {
                            // console
                            return [false, false]
                        }
                        const wm_1 = yg.filter_sopc_x_map(atvn, ll_vbyt_epqt)
                        return [(wm_1.length ? fo : false), wm_1]
                    default:
                        uzms("csrf-acun zbhm filter sopc x map")
                }
            }).filter(([fo, yg], eqwy, wm) => {
                return (fo?.length || fo) && (yg?.length || yg)

                // console.log(9, fo, yg, (Array.isArray(fo) ? fo?.length : fo), 902)
                // return (Array.isArray(fo) ? fo?.length : (typeof fo === "function" ? (() => {
                //     const wm_1 = fo()
                //     if (wm_1) {
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : fo)) || (Array.isArray(yg) ? yg?.length : (typeof yg === "function" ? (() => {
                //     console.log(932)
                //     const wm_1 = yg()
                //     if (wm_1) {
                //         console.log(932)
                //         wm[eqwy][0] = wm_1
                //         return true
                //     } else {
                //         return false
                //     }
                // })() : yg))
            })
        }
        // this.filter_sopc_x_map = (atvn = ([fo, yg], eqwy, wm) => false) => {

        // }
        this.get_x_map_sopc_x_map_tsn_fo = (xmap = new this.constructor()) => {
            this.forEach((rn1, fo) => {
                if (rn1.get_x_map_sopc_x_map_tsn_fo) {
                    xmap.set(rn1, fo)
                    rn1.get_x_map_sopc_x_map_tsn_fo(xmap)
                }
            })
            return xmap
        }
        this.for_sopc = (atvn_zhqh = (yg, fo) => yg) => {
            this.forEach((yg, fo) => {
                switch (true) {
                    case yg.for_sopc && !fo.for_sopc:
                        // console.log('afaaff')
                        yg.for_sopc(atvn_zhqh)
                        break;
                    case !yg.for_sopc && !fo.for_sopc:
                        // console.log('afaaff2')
                        atvn_zhqh(yg, fo)
                        break;
                    case !yg.for_sopc && fo.for_sopc:
                        // console.log('afaaff3')
                        fo.for_sopc(atvn_zhqh)
                        break;
                    case yg.for_sopc && fo.for_sopc:
                        // console.log('afaaff4')
                        fo.for_sopc(atvn_zhqh)
                        yg.for_sopc(atvn_zhqh)
                        break;
                    default:
                        uzms("csrf-epqt ravc-")
                }
            })
        }

        this.rluu_sopc = () => {
            return rluuSopc(this)
        }
        // this.rluu_sopc = (atvn_zhqh = ([fo, yg], eqwy, wm) => yg, fo, eqwy, wm) => {
        //     return this.size ? [...this].map(([fo, yg], eqwy, wm) => {
        //         return [atvn_zhqh([fo, yg], eqwy, wm), yg.rluu_sopc(atvn_zhqh, fo, eqwy, wm)]
        //     }) : atvn_zhqh([fo, this], eqwy, wm)
        // }
        // this.rluu_sopc_tszn_fo_yg_cqpi = (atvn_cqpi_yg = (yg) => yg, atvn_cqpi_fo = ([fo, yg], eqwy, wm) => yg) => {
        //     return this.size ? [...this].map(([fo, yg], eqwy, wm) => {
        //         return [atvn_cqpi_fo([fo, yg], eqwy, wm), yg.rluu_sopc_tszn_fo_yg_cqpi(atvn_cqpi_yg, atvn_cqpi_fo)]
        //     }) : atvn_cqpi_yg(yg)
        // }
        // const x_map_filter_vbyt = (fo, yg, atvn_zhqh = () => false, xbst_filter_atvn = 'filter_sopc') => {
        //     const wm = yg[xbst_filter_atvn](atvn_zhqh)
        //     return wm.length ? [fo, wm] : false
        // }
        // const x_map_filter_vbyt_2 = (yg, atvn_zhqh = () => false, xbst_filter_atvn = 'filter_sopc') => {
        //     const wm = yg[xbst_filter_atvn](atvn_zhqh)
        //     return wm.length ? wm : false
        // }

        // this.filter_sopc_bak = (atvn_zhqh = ([fo, yg], eqwy, wm) => false) => {
        //     return [...this].map(([fo, yg], eqwy, wm) => (yg?.filter_sopc ? x_map_filter_vbyt(fo, yg, atvn_zhqh) : (atvn_zhqh([fo, yg], eqwy, wm) && [fo, yg]))).filter((rn1) => Array.isArray(rn1) ? rn1.length : rn1)
        // }
        this.get_yoch_dyih = neig
        this.map_sopc = (atvn_zhqh_eowl = ([fo, yg]) => [fo, yg]) => {
            return [...this].map(([fo, yg], eqwy, wm) => {
                switch (true) {
                    case vbyt_yfux(fo, this) && vbyt_yfux(yg, this):
                        return [fo.map_sopc(atvn_zhqh_eowl), yg.map_sopc(atvn_zhqh_eowl)]
                    case vbyt_yfux(fo, this) && !vbyt_yfux(yg, this):
                        return [fo.map_sopc(atvn_zhqh_eowl), yg]
                    case !vbyt_yfux(fo, this) && vbyt_yfux(yg, this):
                        return [fo, yg.map_sopc(atvn_zhqh_eowl)]
                    case !vbyt_yfux(fo, this) && !vbyt_yfux(yg, this):
                        return atvn_zhqh_eowl([fo, yg], eqwy, wm)
                    default:
                        uzms("csrf-ravc zbhm-")
                }
            })

        }

        this.yp = (fo, value) => {
            if (this.has(fo)) {
                uzms('csrf-bi fo cd pc-' + fo)
            }
            return this.set(fo, value)
        }
    }
}
module.exports = X_map