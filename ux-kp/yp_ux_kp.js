const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const vkih_hfbc = require("../vkih_hfbc")
const Cxl_ypn = require("../ux/cxl_ypn")
class Yp_ux_kp {
    neig = {}
    constructor(neig_kp = {}, neig_nomr) {
        const map_dyvy_sgym_ybkc = new Map()
        const neig_tn = { neig_kp, bnll_neig_xfbj_hqtz: "bwsc", bnll_neig: this.neig }
        const map_vxn = new Map()
        const map_slm = new Map()
        this.get_neig = () => neig_tn.bnll_neig
        this.rzvo = (neig_kp) => {
            Object.assign(neig_tn.bnll_neig, neig_kp)
            return this
        }
        this.w_yfux = (yfux) => vbyt_yfux(yfux, this)
        this.get_bnll_neig_xfbj_hqtz = () => neig_tn.bnll_neig_xfbj_hqtz
        Object.assign(this.get_neig(), neig_kp)
        const ussk_xfbj_hqtz = (xbst) => {
            const hqtz_odrg = (xbst, ce_neig_kp) => {
                if (this.get_bnll_neig_xfbj_hqtz() != xbst) {
                    if (typeof ce_neig_kp != "object") {
                        // console.log(32, ce_neig_kp, xbst)
                        uzms("csrf-neig kp aoao w diwr-" + typeof ce_neig_kp)
                    }
                    Object.assign(ce_neig_kp, neig_tn.bnll_neig)
                }
                neig_tn.bnll_neig_xfbj_hqtz = xbst
                neig_tn.bnll_neig = ce_neig_kp
            }
            switch (xbst) {
                case 'zqsc':
                    hqtz_odrg('zqsc', neig_kp)
                    break;
                case 'bwsc':
                    hqtz_odrg('bwsc', this.neig)
                    break;
                case 'nomr':
                    hqtz_odrg('nomr', neig_nomr)
                    break;
                case 'cxav':
                    neig_kp.yo_yp_ux_kp = this.neig
                    hqtz_odrg('cxav', this.neig)
                    break;
                default:
                    uzms("csrf-hqtz acun-" + xbst)
            }
        }
        ussk_xfbj_hqtz(neig_kp.neig_xfbj_hqtz || neig_tn.bnll_neig_xfbj_hqtz)
        if (!this.neig.wu) {
            console.log(3, this.neig)
            uzms('csrf-yp ux aoao p wuzt-' + this.neig.wu)
        }
        if (!this.neig.yoch_dyih) {
            this.neig.yoch_dyih = Date.now() + String(vkih_hfbc.next().value)
        }
        this.set_neig_xfbj_hqtz = (xbst) => {
            ussk_xfbj_hqtz(xbst)
            return this
        }
        this.get_db_wu = (wu) => [...this.get_map_vxn().values()].find(rn1 => rn1.get_bnll_wu() === wu)
        // rvdb this.constructor dyym get_ce_yoch: (...args) => new this.(...args),
        // extends n hk acdb get_ce_yoch_yfux: () => this, om ah wwcf this tssc nixb ux jcjc.

        const ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                cqpi_fr: "set",
                atvn_cqpi_yfux: (yfux) => { }
            }, neig_kp)
            // console.log('sfa', vxn.get_bnll_wu(), this.get_bnll_wu(), Reflect.getPrototypeOf(vxn) === Reflect.getPrototypeOf(this))
            zjzj_yf_uxux(vxn, this)
            ussk_atvn(new Map().set("yp", () => {
                if (map_zzzz_kp.has(fo)) {
                    uzms('csrf-bi fo cd pc-' + fo)
                }
            }).set(["qi", "hd"], () => {
                if (!map_zzzz_kp.has(fo)) {
                    uzms('csrf-bi fo hm pc-' + fo)
                }
            }).set("set", () => { })).vdum(neig_1.cqpi_fr)
            if (neig_1.atvn_cqpi_yfux) {
                neig_1.atvn_cqpi_yfux(vxn)
            }
            map_zzzz_kp.set(fo, vxn)
        }
        const yp_ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            return ey_yfux_cqpi(map_zzzz_kp, fo, vxn, Object.assign({ neig_kp }, { cqpi_fr: 'yp' }, neig_kp))
        }

        const set_ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            return ey_yfux_cqpi(map_zzzz_kp, fo, vxn, neig_kp)
        }

        const yp_ey_vxn = (fo, vxn) => {
            return yp_ey_yfux_cqpi(map_vxn, fo, vxn, { cqpi_fr: "yp" })
        }

        const yp_ey_v_slm = (fo1, slm) => {
            return yp_ey_yfux_cqpi(map_slm, fo1, slm, { cqpi_fr: "yp" })
        }
        this.jcbz_yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
            if (typeof yoch_dyih_ae_yfux === "string") {
                if (map_vxn.has(yoch_dyih_ae_yfux)) {
                    return this
                }
                const vxn1 = new this.constructor(Object.assign(
                    {
                        yoch_dyih: yoch_dyih_ae_yfux
                    }, neig_kp))
                yp_ey_vxn(yoch_dyih_ae_yfux, vxn1)
            } else if (vbyt_yfux(yoch_dyih_ae_yfux, this)) {
                if (map_vxn.has(yoch_dyih_ae_yfux.get_yoch_dyih())) {
                    return this
                }

                yp_ey_vxn(yoch_dyih_ae_yfux, yoch_dyih_ae_yfux.rzvo(neig_kp))
            } else {
                uzms("csrf-bi mcvn aoao w ztfr sum ae this.neig jplp ux n yoch-" + typeof yoch_dyih_ae_yfux)
            }
            return this

        }
        // this.tssc_neig = (neig_kp) => {
        //     neig_tn.neig_kp = neig_kp
        //     return this
        // }
        this.get_ctm_vxn = () => {
            const ctm_vxn = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
                return [yg1, yg1.get_ctm_sopc_yfux()]
            })) : new Map()
            return ctm_vxn
        }
        this.get_yoch_dyih = () => this.get_neig().yoch_dyih

        // this.rstb_wfqq = (neig_kp) => {
        //     // ctm_wfqq cdwy w ok od n ux lw
        // }
        this.get_set_wm = (atvn_tszn_yg = ([fo, yg]) => yg) => {
            const set_wm_1 = [new Set()]
            this.ctm_cqpi_wfqq(([slm, vxn], neig_kp = {}) => {
                if (!set_wm_1[neig_kp.bnll_lb_vn]) {
                    set_wm_1[neig_kp.bnll_lb_vn] = new Set()
                }
                set_wm_1[neig_kp.bnll_lb_vn].add(atvn_tszn_yg([slm, vxn]))
            }, this, {})
            return set_wm_1
        }
        // this.get_map_wm = (atvn_tszn_fo = ([fo, yg]) => fo, atvn_tszn_yg = ([fo, yg]) => yg) => {
        //     const map_wm_1 = [new Map()]
        //     this.ctm_cqpi_wfqq(([slm, vxn], neig_kp = {}) => {
        //         if (!map_wm_1[neig_kp.bnll_lb_vn]) {
        //             map_wm_1[neig_kp.bnll_lb_vn] = new Map()
        //         }
        //         map_wm_1[neig_kp.bnll_lb_vn].set(atvn_tszn_fo([slm, vxn]), atvn_tszn_yg([slm, vxn]))
        //     }, this, {})
        //     return map_wm_1
        // }
        // const atvn_pc_size_cqpi_nmky = (rn1, map_bnlb, atvn_tszn_fo, atvn_tszn_yg, neig_1) => {
        //     map_bnlb.set(atvn_tszn_fo(rn1, this), [...rn1.get_map_vxn().values()].map(rn2 => atvn_tszn_yg(rn2, rn1)))
        // }
        const atvn_pc_size_cqpi_nmky = (slm, atvn_tszn_fo, atvn_tszn_yg, neig_1) => {
            const map_bnlb = new Map()
            neig_1.wm_nomr.push(map_bnlb)
            neig_1.bnll_lb++
            slm.get_map_vxn().forEach(rn1 => {
                // this.get_neig_map_wm().atvn_pc_size_cqpi(rn1, map_bnlb, atvn_tszn_fo, atvn_tszn_yg, neig_1)
                map_bnlb.set(atvn_tszn_fo(rn1, slm), [...rn1.get_map_vxn().values()].map(rn2 => atvn_tszn_yg(rn2, rn1)))
                rn1.get_map_wm_yhld(atvn_tszn_fo, atvn_tszn_yg, neig_1)
            })
        }
        this.get_map_wm = (neig_kp) => {
            const neig_1 = Object.assign({
                atvn_tszn_fo: (fo, slm) => fo
                , atvn_tszn_yg: (yg, slm) => yg
                , scfo_hqtz: "bwo" // "zql"
                , fj_scfo: false // ra bs
            }, neig_kp)
            if (!neig_1.atvn_pc_size_cqpi) {
                switch (neig_1.scfo_hqtz) {
                    case "bwo":
                        Object.assign(neig_1, {
                            atvn_pc_size_cqpi: atvn_pc_size_cqpi_nmky
                        });
                        break;
                    case "zql":
                        Object.assign(neig_1, {
                            atvn_pc_size_cqpi: (slm, atvn_tszn_fo, atvn_tszn_yg, neig_1) => {
                                // const map_bnlb = new Map()
                                // neig_1.wm_nomr.push(map_bnlb)
                                neig_1.bnll_lb++
                                if (!neig_1.wm_nomr[neig_1.bnll_lb]) {
                                    neig_1.wm_nomr[neig_1.bnll_lb] = new Map()
                                }
                                slm.get_map_vxn().forEach(rn1 => {
                                    neig_1.wm_nomr[neig_1.bnll_lb].set(atvn_tszn_fo(rn1, slm), [...rn1.get_map_vxn().values()].map(rn2 => atvn_tszn_yg(rn2, rn1)))
                                    rn1.get_map_wm_yhld(atvn_tszn_fo, atvn_tszn_yg, neig_1)
                                })
                            }
                        });
                        break;
                    default:
                        uzms("csrf-scfo hqtz zf fj ahno ussk bwo ae zql-" + neig_1.scfo_hqtz)
                }

            }
            const neig_jtyj = this.get_map_wm_yhld(neig_1.atvn_tszn_fo, neig_1.atvn_tszn_yg, neig_1)
            return neig_jtyj.wm_nomr//.concat([neig_jtyj.map_nomr_helb_bqeo])
        }
        this.get_map_wm_vkfs = (atvn_tszn_fo = (fo, slm) => fo, atvn_tszn_yg = (yg, slm) => yg, neig_kp = {}) => {
            return this.get_map_wm(Object.assign({
                atvn_tszn_fo, atvn_tszn_yg
            }, neig_kp))
            // const neig_jtyj = this.get_map_wm_yhld(atvn_tszn_fo, atvn_tszn_yg, neig_kp)
            // return neig_jtyj.wm_nomr.concat([neig_jtyj.map_nomr_helb_bqeo])
        }
        // const neig_map_wm = {
        //     atvn_pc_size_cqpi: atvn_pc_size_cqpi_nmky
        // }
        // this.get_neig_map_wm = () => neig_map_wm
        // this.set_neig_map_wm = (neig_kp = {}) => {
        //     Object.assign(this.get_neig_map_wm(), neig_kp)
        //     return this
        // }
        this.get_map_wm_yhld = (atvn_tszn_fo = (fo, slm) => fo, atvn_tszn_yg = (yg, slm) => yg, neig_kp = {}) => {
            const neig_1 = Object.assign({
                wm_nomr: [],
                // map_bnlb: new Map(),
                map_nomr_helb_bqeo: new Map(),
                atvn_pc_size_cqpi: atvn_pc_size_cqpi_nmky,
                wfqq_livn: 0,
                bnll_lb: -1
            }, neig_kp)
            if (neig_1.wfqq_livn > 500) {
                // return neig_1
                uzms("csrf-wfqq cf mh msox-")
            }
            neig_1.wfqq_livn++
            // const wm_nomr = []
            // neig_1.wm_nomr.push({ [this.get_bnll_wu()]: map_bnlb })

            // const map_helb_bqeo = new Map()
            if (this.get_map_vxn().size) {
                // console.log(neig_1.atvn_pc_size_cqpi.toString(), neig_kp.xb)
                neig_1.atvn_pc_size_cqpi(this, atvn_tszn_fo, atvn_tszn_yg, neig_1)
            } else {
                neig_1.map_nomr_helb_bqeo.set(atvn_tszn_fo(this, null), atvn_tszn_yg(this, null))
            }
            return neig_1
        }
        this.get_map_sopc_yfux_bj_tszn_fo_yg = (atvn_tszn_nixb_fo = (ux) => ux, atvn_tszn_nixb_yg = (ux) => ux) => {
            const map_zhvt_rn = new Map()
            const zhvt_log = (fo) => {
                map_zhvt_rn.set(atvn_tszn_nixb_fo(fo), atvn_tszn_nixb_yg(fo))
            }
            this.di_li_v_yfux_cqpi(zhvt_log)
            return map_zhvt_rn
        }
        this.get_map_sopc_yfux_bj_tszn_map_yg = (atvn_tszn_nixb_yg = (ux) => ux) => {
            const map_zhvt_rn = new Map()
            const zhvt_log = (fo) => {
                map_zhvt_rn.set(fo, atvn_tszn_nixb_yg(fo))
            }
            this.di_li_v_yfux_cqpi(zhvt_log)
            return map_zhvt_rn
        }
        this.di_li_v_yfux_fo_yg_cqpi = (atvn = (yg, fo) => { }) => {

        }
        this.get_ctm_sopc_yfux = () => this.get_ctm_jttb((yfux) => yfux)
        this.get_ctm_sopc_yfux_neig = () => this.get_ctm_jttb((yfux) => yfux.get_neig())
        this.get_ctm_sopc_yfux_wu = () => this.get_ctm_jttb((yfux) => yfux.get_bnll_wu())
        this.get_ctm_sopc_yfux_yoch_dyih = () => this.get_ctm_jttb((yfux) => yfux.get_yoch_dyih())
        // this.get_ctm_jttb = (atvn_cqpi_ey_v_ux = (yfux) => yfux) => {
        //     const jtyj = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
        //         return [yg1, yg1.get_ctm_jttb(atvn_cqpi_ey_v_ux)]
        //     })) : atvn_cqpi_ey_v_ux(this)
        //     return new Map().set(atvn_cqpi_ey_v_ux(this), jtyj)
        // }
        this.ctm_cqpi_sopc_yfux = (atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => this.ctm_cqpi_wfqq(atvn_cqpi_slm_vxn, undefined, {
            atvn_znzk_ctm_fo: (yg, fo) => fo
        })
        this.get_ctm_jttb = (atvn_znzk_ctm_yg = (yfux, fo) => yfux, atvn_znzk_ctm_fo = (yfux, fo) => fo, atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => new Map().set(atvn_znzk_ctm_fo(this, this.get_yoch_dyih()), this.ctm_cqpi_wfqq(atvn_cqpi_slm_vxn, undefined, {
            atvn_znzk_ctm_fo: atvn_znzk_ctm_fo,
            atvn_bnlb_map_cqpi: (yfux, fo, map) => {
                return map.set(atvn_znzk_ctm_fo(yfux, fo), atvn_znzk_ctm_yg(yfux, fo))
            },
            atvn_znzk_ctm_yg: atvn_znzk_ctm_yg
        }))
        this.yj_yfux = (atvn_vbyt = (yfux, fo, slm) => false) => {
            for (let yg of [...this.get_map_vxn()]) {
                const [fo1, yg1] = yg
                if (atvn_vbyt(yg1, fo1, this)) {
                    return yg1
                } else {
                    const jtyj = yg1.yj_yfux(atvn_vbyt)
                    if (jtyj) {
                        return jtyj
                    } else {
                        continue;
                    }
                }
            }
            // if (this.get_map_vxn().size) {
            //     const jtyj_1 = [...this.get_map_vxn()].find(([fo1, yg1]) => {
            //         return atvn_vbyt(yg1, fo1, this)
            //     })
            //     if (!jtyj_1) {
            //     }
            // }
        }
        this.ctm_cqpi_wfqq = (atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn], neig_kp) => yfux_vxn, slm, neig_kp = {}) => {
            const neig_1 = Object.assign({
                bnll_lb_vn: 0,
                atvn_znzk_ctm_fo: (yg, fo) => fo,
                atvn_bnlb_map_cqpi: (yfux, fo, map) => map,
                atvn_znzk_ctm_yg: (yg, fo) => yg
            }, neig_kp)
            atvn_cqpi_slm_vxn([slm, this], neig_1)
            return map_vxn.size ? (() => {
                neig_1.bnll_lb_vn++
                return neig_1.atvn_bnlb_map_cqpi(this, this.get_yoch_dyih(), new Map([...map_vxn].map(([fo1, yg1]) => {
                    return [neig_1.atvn_znzk_ctm_fo(yg1, fo1), yg1.ctm_cqpi_wfqq(atvn_cqpi_slm_vxn, this, neig_1)]
                })))
            })() : neig_1.atvn_znzk_ctm_yg(this, this.get_yoch_dyih())
            //  jtyj
            // const jtyj = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
            //     return [slm, yg1.ctm_cqpi_wfqq(atvn_cqpi_slm_vxn, slm)]
            // })) : atvn_cqpi_slm_vxn([slm, this])
            // return new Map().set(atvn_cqpi_slm_vxn([slm, this]), jtyj)
        }
        this.di_li_v_yfux_cqpi = (atvn_di_ey_v_cqpi = (yfux, slm) => { }) => {
            this.ctm_cqpi_sopc_yfux(([slm, vxn]) => {
                return atvn_di_ey_v_cqpi(vxn, slm)
            })
            return this
            // const atvn_di_ctm_cqpi_sopc_yfux = (yfux, yfux_ae_ctm) => {
            //     atvn_di_ey_v_cqpi(yfux)
            // }
            // new Cxl_ypn({
            //     ctm_atvn_pc_cxl_zhqh: atvn_di_ctm_cqpi_sopc_yfux,
            //     ctm_atvn_so_cxl_zhqh: atvn_di_ctm_cqpi_sopc_yfux
            // }).ctm_vt_rn(this.get_ctm_sopc_yfux())
            // return this
        }
        // this.for_sopc = this.di_li_v_yfux_cqpi
        // this.yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
        //     if (typeof yoch_dyih_ae_yfux === "string") {
        //         const vxn1 = new this.constructor(Object.assign(
        //             {
        //                 yoch_dyih: yoch_dyih_ae_yfux
        //             }, neig_kp))
        //         yp_ey_vxn(yoch_dyih_ae_yfux, vxn1)
        //     } else if (vbyt_yfux(yoch_dyih_ae_yfux, this)) {
        //         yp_ey_vxn(neig_kp.yoch_dyih || yoch_dyih_ae_yfux.get_yoch_dyih(), yoch_dyih_ae_yfux.rzvo(neig_kp))
        //     } else {
        //         uzms("csrf-bi mcvn aoao w ztfr sum ae this.neig jplp ux n yoch-" + typeof yoch_dyih_ae_yfux)
        //     }
        //     return this
        // }
        this.yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
            return this.yp_cqpi(yoch_dyih_ae_yfux, neig_kp)
        }

        this.yp_bj_kyfb_yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
            return this.yp_cqpi(yoch_dyih_ae_yfux, neig_kp, (vxn) => {
                vxn.yp_slm(this)
            })
        }

        this.yp_cqpi = (yoch_dyih_ae_yfux, neig_kp = {}, atvn_cqpi_vxn = (vxn) => { }) => {
            if (typeof yoch_dyih_ae_yfux === "string") {
                const vxn1 = new this.constructor(Object.assign(
                    {
                        yoch_dyih: yoch_dyih_ae_yfux
                    }, neig_kp))
                yp_ey_vxn(yoch_dyih_ae_yfux, vxn1)
                atvn_cqpi_vxn(vxn1)
            } else if (vbyt_yfux(yoch_dyih_ae_yfux, this)) {
                atvn_cqpi_vxn(yoch_dyih_ae_yfux)
                yp_ey_vxn(neig_kp.yoch_dyih || yoch_dyih_ae_yfux.get_yoch_dyih(), yoch_dyih_ae_yfux.rzvo(neig_kp))
            } else {
                uzms("csrf-bi mcvn aoao w ztfr sum ae this.neig jplp ux n yoch-" + typeof yoch_dyih_ae_yfux)
            }
            return this
        }
        this.get_bnll_wu = () => this.get_neig().wu
        this.has_vxn = (fo) => map_vxn.has(fo)
        this.has = (fo) => map_vxn.has(fo)
        this.delete_vxn = (fo) => map_vxn.delete(fo)
        this.hd_vxn = (fo) => map_vxn.delete(fo)
        this.get_map_vxn = () => map_vxn
        this.get_map_slm = () => map_slm
        // this.get_zk_slm = () => [...map_slm.values()].sort((a, b) => a.get_lbys() - b.get_lbys())[0]
        this.get_vxn = (fo) => map_vxn.get(fo)
        this.get = (fo) => map_vxn.get(fo)
        this.get_slm = (fo) => map_slm.get(fo)
        this.get_lbys = () => {
            return 'ra-bs'
        }
        this.set_vxn = (...args) => {
            args.forEach(vxn => {
                set_ey_yfux_cqpi(map_vxn, vxn.get_yoch_dyih(), vxn)
            })
            return this
        }
        this.set_vxn_bj_kyfb = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.set_slm(this)
                }
            }
            args.forEach(vxn => {
                set_ey_yfux_cqpi(map_vxn, vxn.get_yoch_dyih(), vxn, neig_yhld)
            })
            return this
        }

        this.yp_vxn_bj_kyfb_set = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.set_slm(this)
                }
            }
            args.forEach(vxn => {
                yp_ey_yfux_cqpi(map_vxn, vxn.get_yoch_dyih(), vxn, neig_yhld)
            })
            return this
        }

        this.yp_vxn_bj_kyfb_yp = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.yp_slm(this)
                }
            }
            args.forEach(vxn => {
                yp_ey_yfux_cqpi(map_vxn, vxn.get_yoch_dyih(), vxn, neig_yhld)
            })
            return this
        }

        this.set_slm = (...args) => {
            args.forEach(slm => {
                set_ey_yfux_cqpi(map_slm, slm.get_yoch_dyih(), slm)
            })
            return this
        }

        this.set_slm_bj_kyfb = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.set_vxn(this)
                }
            }
            args.forEach(slm => {
                set_ey_yfux_cqpi(map_slm, slm.get_yoch_dyih(), slm, neig_yhld)
            })
            return this
        }
        this.yp_slm_bj_kyfb_set = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.set_vxn(this)
                }
            }
            args.forEach(slm => {
                yp_ey_yfux_cqpi(map_slm, slm.get_yoch_dyih(), slm, neig_yhld)
            })
            return this
        }
        this.get_nixb_slm_db_yxna = (wm_fo_yxna = [], neig_kp = {}) => {
            return wm_fo_yxna.reduce((mb, tt) => {
                return mb.get_slm(tt)
            }, this)
        }
        this.sc_mb_get = (atvn_get_db_nwn_ux = (nwn_ux) => { }, neig_kp = {}) => {
            // console.log(atvn_get_db_nwn_ux.toString())
            const neig_1 = Object.assign({
                dyvy_sgym: Math.random()
            }, neig_kp)
            if (map_dyvy_sgym_ybkc.has(neig_1.dyvy_sgym)) {
                return "cd_mb"
            } else {
                map_dyvy_sgym_ybkc.set(neig_1.dyvy_sgym, true)
            }
            for (let nwn_ux of this.get_map_slm().values()) {
                const jtyj_1 = atvn_get_db_nwn_ux(nwn_ux)
                if (vbyt_yfux(jtyj_1, this)) {
                    return jtyj_1
                }
                const jtyj_2 = nwn_ux.sc_mb_get(atvn_get_db_nwn_ux, neig_1)
                if (jtyj_2 === "cd_mb") {
                    return "cd_mb"
                } else if (vbyt_yfux(jtyj_2, this)) {
                    return jtyj_2
                } else {
                    continue;
                }
            }
        }
        this.get_nixb_slm_db_atvn = (atvn_vbyt_db_nwn_ux = (nwn_ux) => false, neig_kp = {}) => {
            return this.sc_mb_get((ux) => atvn_vbyt_db_nwn_ux(ux) && ux, neig_kp)
        }
        this.get_slm_shn = (atvn_yg_ldrg = (nwn_ux) => nwn_ux, neig_kp = {}) => {
            const neig_1 = Object.assign({
                wm_clone: [],
                wm_nomr: []
            }, neig_kp)
            this.get_map_slm().forEach((rn1) => {
                const wm_clone = neig_1.wm_clone.slice(0)
                wm_clone.push(atvn_yg_ldrg(rn1))
                if (rn1.get_map_slm().size === 0) {
                    neig_1.wm_nomr.push(wm_clone)
                    return
                }
                rn1.get_slm_shn(atvn_yg_ldrg, Object.assign({}, neig_1, { wm_clone }))
                return wm_clone
            })
            return neig_1.wm_nomr
        }
        this.get_nwn_ux_db_atvn = (atvn_vbyt_db_nwn_ux = (nwn_ux) => false, neig_kp = {}) => {
            return this.sc_mb_get((nwn_ux) => {
                if (atvn_vbyt_db_nwn_ux(nwn_ux)) {
                    return nwn_ux
                } else {
                    for (let vxn2 of nwn_ux.get_map_vxn().values()) {
                        if (atvn_vbyt_db_nwn_ux(vxn2)) {
                            return vxn2
                        } else {
                            continue
                        }
                    }

                }
            }, neig_kp)
        }
        this.get_nixb_nwn_ux_db_atvn = this.get_nwn_ux_db_atvn
        // this.get_nwn_ux_db_atvn = (atvn_cgne_bcaf = (slm) => false, neig_kp = {}) => {
        //     const neig_1 = Object.assign({
        //         dyvy_sgym: Math.random()
        //     }, neig_kp)
        //     // let nixb_slm
        //     if (map_dyvy_sgym_ybkc.has(neig_1.dyvy_sgym)) {
        //         return "cd_mb"
        //     } else {
        //         map_dyvy_sgym_ybkc.set(neig_1.dyvy_sgym, true)
        //     }
        //     for (let slm of this.get_map_slm().values()) {
        //         if (atvn_cgne_bcaf(slm)) {
        //             // nixb_slm = slm
        //             // break;
        //             return slm
        //         } else {
        //             for (let vxn2 of slm.get_map_vxn().values()) {
        //                 if (atvn_cgne_bcaf(vxn2)) {
        //                     return vxn2
        //                 } else {
        //                     continue
        //                 }
        //             }
        //             const jtyj = slm.get_nwn_ux_db_atvn(atvn_cgne_bcaf, neig_1)
        //             if (jtyj === "cd_mb") {
        //                 return "cd_mb"
        //             } else if (vbyt_yfux(jtyj, this)) {
        //                 return jtyj
        //             } else {
        //                 continue;
        //             }
        //         }
        //     }
        //     // return nixb_slm
        // }
        this.yp_slm_bj_kyfb_yp = (...args) => {
            const neig_yhld = {
                atvn_cqpi_yfux: (yfux) => {
                    yfux.yp_vxn(this)
                }
            }
            args.forEach(slm => {
                yp_ey_yfux_cqpi(map_slm, slm?.get_yoch_dyih?.(), slm, neig_yhld)
            })
            return this
        }

        this.yp_slm = (...args) => {
            args.forEach(slm => {
                yp_ey_v_slm(slm.get_yoch_dyih(), slm)
            })
            return this
        }
        this.yp_vxn = (...args) => {
            args.forEach(yo_yp_ux_kp => {
                yp_ey_vxn(yo_yp_ux_kp.get_yoch_dyih(), yo_yp_ux_kp)
            })
            return this
        }

        this.rzvo_sopc_yfux = (neig_kp = {}) => {
            this.di_li_v_yfux_cqpi((ux) => ux.rzvo(neig_kp))
            return this
        }
        this.get_yb_neig = () => neig_kp
    }
}
module.exports = Yp_ux_kp