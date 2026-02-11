const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const vkih_hfbc = require("../vkih_hfbc")
const X_map = require("../ux-a/x_map")
const Yp_ux = require("../ux-0/Yp-ux")
const Vnwy_wwdb = require("../ux-0/vnwy-wwdb")
class Yp_ux_a extends Yp_ux {
    constructor(neig_kp = {}, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            vbyt_yfux_hqtz: "yfux" // "kp" "yfux"
        }, neig_kp)
        const map_dyvy_sgym_ybkc = new Map()
        const x_map_zzl_non_map_kl = new X_map()
        if (!this.get_yo_zzzz_kp_zzl_non_vnwy_wwdw().size)
            this.set_yo_zzzz_kp_zzl_non_map_kl(x_map_zzl_non_map_kl)
        // const yo_vnwy_wwdb_zv_se_ux = new Vnwy_wwdb().set_yo_vnwy_kp(this)
        this.set_vbyt_yfux_hqtz = (rj_xbst) => {
            this.get_neig().vbyt_yfux_hqtz = rj_xbst
            return this
        }
        this.w_yfux = (yfux) => {
            switch (this.get_neig().vbyt_yfux_hqtz) {
                case "kp":
                    return this.instanceof_kp(yfux)
                case "yfux":
                    return vbyt_yfux(yfux, this)
                default:
                    uzms("csrf-vbyt yfux hqtz xbst acun-" + this.get_neig().vbyt_yfux_hqtz)
            }

        }
        Object.assign(this.get_neig(), neig_kp)
        if (!this.neig.wu) {
            uzms('csrf-yp ux aoao p wuzt-' + this.neig.wu)
        }
        if (!this.neig.yoch_dyih) {
            this.neig.yoch_dyih = Date.now() + String(vkih_hfbc.next().value)
        }
        this.get_x_map_zzl_non_map_kl = () => x_map_zzl_non_map_kl
        // this.get_map_kl = (fo_map_kl) => {
        //     if (!x_map_zzl_non_map_kl.has(fo_map_kl)) {
        //         uzms("csrf-bi fo ac zznq oc ymdo map kl yh-" + fo_map_kl)
        //     }
        //     return x_map_zzl_non_map_kl.get(fo_map_kl)
        // }
        this.get_db_wu_0 = (fo_map_kl, wu) => [...this.get_map_kl(fo_map_kl).values()].find(rn1 => rn1.get_bnll_wu() === wu)
        // rvdb this.constructor dyym get_ce_yoch: (...args) => new this.(...args),
        // extends n hk acdb get_ce_yoch_yfux: () => this, om ah wwcf this tssc nixb ux jcjc.

        // const ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
        //     if (!(map_zzzz_kp instanceof Map)) {
        //         console.log(map_zzzz_kp)
        //         uzms("csrf-yoch uxux ac grpj-" + map_zzzz_kp)
        //     }
        //     const neig_1 = Object.assign({ neig_kp }, {
        //         cqpi_fr: "set",
        //         atvn_cqpi_yfux: (yfux) => { }
        //     }, neig_kp)
        //     // console.log('sfa', vxn.get_bnll_wu(), this.get_bnll_wu(), Reflect.getPrototypeOf(vxn) === Reflect.getPrototypeOf(this))
        //     zjzj_yf_uxux(vxn, this)
        //     ussk_atvn(new Map().set("yp", () => {
        //         if (map_zzzz_kp.has(fo)) {
        //             uzms('csrf-bi fo cd pc-' + fo)
        //         }
        //     }).set(["qi", "hd"], () => {
        //         if (!map_zzzz_kp.has(fo)) {
        //             uzms('csrf-bi fo hm pc-' + fo)
        //         }
        //     }).set("set", () => { })).vdum(neig_1.cqpi_fr)
        //     if (neig_1.atvn_cqpi_yfux) {
        //         neig_1.atvn_cqpi_yfux(vxn)
        //     }
        //     map_zzzz_kp.set(fo, vxn)
        // }
        const yp_ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            new Vnwy_wwdb().set_yo_vnwy_kp(map_zzzz_kp).aoao_ac_zznq_fo_pkft_yf_yg(fo, vxn)
            if (!map_zzzz_kp.has(fo)) {
                return map_zzzz_kp.set(fo, vxn)
            }
        }

        const set_ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            return map_zzzz_kp.set(fo, vxn)
            // return ey_yfux_cqpi(map_zzzz_kp, fo, vxn, neig_kp)
        }

        const yp_ey_yfux = (fo_map_kl, fo, vxn) => {
            return yp_ey_yfux_cqpi(this.get_map_kl(fo_map_kl), fo, vxn)
        }

        this.jcbz_yp_0 = (fo_map_kl, yoch_dyih_ae_yfux, neig_kp = {}) => {
            if (typeof yoch_dyih_ae_yfux === "string") {
                if (this.get_map_kl(fo_map_kl).has(yoch_dyih_ae_yfux)) {
                    return this
                }
                const vxn1 = new this.constructor(Object.assign(
                    {
                        yoch_dyih: yoch_dyih_ae_yfux
                    }, neig_kp), neig_nomr)
                yp_ey_yfux(fo_map_kl, yoch_dyih_ae_yfux, vxn1)
            } else if (this.w_yfux(yoch_dyih_ae_yfux, this)) {
                if (this.get_map_kl(fo_map_kl).has(yoch_dyih_ae_yfux.get_yoch_dyih())) {
                    return this
                }

                yp_ey_yfux(fo_map_kl, yoch_dyih_ae_yfux, yoch_dyih_ae_yfux.rzvo(neig_kp))
            } else {
                uzms("csrf-bi mcvn aoao w ztfr sum ae this.neig jplp ux n yoch-" + typeof yoch_dyih_ae_yfux)
            }
            return this

        }
        this.get_yoch_dyih = () => this.get_neig().yoch_dyih
        this.get_set_wm_0 = (fo_map_kl, atvn_tszn_yg = ([fo, yg]) => yg) => {
            const set_wm_1 = [new Set()]
            this.ctm_cqpi_wfqq_0(fo_map_kl, ([slm, vxn], neig_kp = {}) => {
                if (!set_wm_1[neig_kp.bnll_lb_vn]) {
                    set_wm_1[neig_kp.bnll_lb_vn] = new Set()
                }
                set_wm_1[neig_kp.bnll_lb_vn].add(atvn_tszn_yg([slm, vxn]))
            }, this, {})
            return set_wm_1
        }
        this.get_map_wm_0 = (fo_map_kl, neig_kp) => {
            const neig_1 = Object.assign({
                atvn_tszn_fo: (fo, slm) => fo
                , atvn_tszn_yg: (yg, slm) => yg
                , scfo_hqtz: "bwo" // "zql"
                , fj_scfo: false // ra bs
                , fo_map_kl: fo_map_kl
            }, neig_kp)
            if (!neig_1.atvn_pc_size_cqpi) {
                switch (neig_1.scfo_hqtz) {
                    case "bwo":
                        Object.assign(neig_1, {});
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
                                slm.get_map_kl(neig_1.fo_map_kl).forEach(rn1 => {
                                    neig_1.wm_nomr[neig_1.bnll_lb].set(atvn_tszn_fo(rn1, slm), [...rn1.get_map_kl(neig_1.fo_map_kl).values()].map(rn2 => atvn_tszn_yg(rn2, rn1)))
                                    rn1.get_map_wm_yhld_0(atvn_tszn_fo, atvn_tszn_yg, neig_1)
                                })
                            }
                        });
                        break;
                    default:
                        uzms("csrf-scfo hqtz zf fj ahno ussk bwo ae zql-" + neig_1.scfo_hqtz)
                }

            }
            const neig_jtyj = this.get_map_wm_yhld_0(neig_1.atvn_tszn_fo, neig_1.atvn_tszn_yg, neig_1)
            return neig_jtyj.wm_nomr//.concat([neig_jtyj.map_nomr_helb_bqeo])
        }
        this.get_map_wm_vkfs_0 = (fo_map_kl, atvn_tszn_fo = (fo, slm) => fo, atvn_tszn_yg = (yg, slm) => yg, neig_kp = {}) => {
            return this.get_map_wm_0(fo_map_kl, Object.assign({
                atvn_tszn_fo, atvn_tszn_yg
            }, neig_kp))
        }
        const get_map_wm_zv_atvn_pc_size_cqpi_nmky = (slm, atvn_tszn_fo, atvn_tszn_yg, neig_1) => {
            const map_bnlb = new Map()
            neig_1.wm_nomr.push(map_bnlb)
            neig_1.bnll_lb++
            slm.get_map_kl(neig_1.fo_map_kl).forEach(rn1 => {
                // this.get_neig_map_wm().atvn_pc_size_cqpi(rn1, map_bnlb, atvn_tszn_fo, atvn_tszn_yg, neig_1)
                map_bnlb.set(atvn_tszn_fo(rn1, slm), [...rn1.get_map_kl(neig_1.fo_map_kl).values()].map(rn2 => atvn_tszn_yg(rn2, rn1)))
                rn1.get_map_wm_yhld_0(atvn_tszn_fo, atvn_tszn_yg, neig_1)
            })
        }

        this.get_map_wm_yhld_0 = (atvn_tszn_fo = (fo, slm) => fo, atvn_tszn_yg = (yg, slm) => yg, neig_kp = {}) => {
            const neig_1 = Object.assign({
                wm_nomr: [],
                map_nomr_helb_bqeo: new Map(),
                atvn_pc_size_cqpi: get_map_wm_zv_atvn_pc_size_cqpi_nmky,
                wfqq_livn: 0,
                fo_map_kl: "",
                bnll_lb: -1
            }, neig_kp)
            if (neig_1.wfqq_livn > 500) {
                uzms("csrf-wfqq cf mh msox-")
            }
            neig_1.wfqq_livn++
            if (this.get_map_kl(neig_1.fo_map_kl).size) {
                neig_1.atvn_pc_size_cqpi(this, atvn_tszn_fo, atvn_tszn_yg, neig_1)
            } else {
                neig_1.map_nomr_helb_bqeo.set(atvn_tszn_fo(this, null), atvn_tszn_yg(this, null))
            }
            return neig_1
        }
        this.get_map_sopc_yfux_bj_tszn_fo_yg_0 = (fo_map_kl, atvn_tszn_nixb_fo = (ux) => ux, atvn_tszn_nixb_yg = (ux) => ux) => {
            const map_zhvt_rn = new Map()
            const zhvt_log = (fo) => {
                map_zhvt_rn.set(atvn_tszn_nixb_fo(fo), atvn_tszn_nixb_yg(fo))
            }
            this.di_li_v_yfux_cqpi_0(fo_map_kl, zhvt_log)
            return map_zhvt_rn
        }
        this.get_map_sopc_yfux_bj_tszn_map_yg_0 = (fo_map_kl, atvn_tszn_nixb_yg = (ux) => ux) => {
            const map_zhvt_rn = new Map()
            const zhvt_log = (fo) => {
                map_zhvt_rn.set(fo, atvn_tszn_nixb_yg(fo))
            }
            this.di_li_v_yfux_cqpi_0(fo_map_kl, zhvt_log)
            return map_zhvt_rn
        }

        this.get_ctm_sopc_yfux_0 = (fo_map_kl) => this.get_ctm_jttb_0(fo_map_kl, (yfux) => yfux)
        this.get_ctm_sopc_yfux_neig_0 = (fo_map_kl) => this.get_ctm_jttb_0(fo_map_kl, (yfux) => yfux.get_neig())
        this.get_ctm_sopc_yfux_wu_0 = (fo_map_kl) => this.get_ctm_jttb_0(fo_map_kl, (yfux) => yfux.get_bnll_wu())
        this.get_ctm_sopc_yfux_yoch_dyih_0 = (fo_map_kl) => this.get_ctm_jttb_0(fo_map_kl, (yfux) => yfux.get_yoch_dyih())
        this.ctm_cqpi_sopc_yfux_0 = (fo_map_kl, atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => this.ctm_cqpi_wfqq_0(fo_map_kl, atvn_cqpi_slm_vxn, undefined, {
            atvn_znzk_ctm_fo: (yg, fo) => fo
        })
        this.get_ctm_jttb_0 = (fo_map_kl, atvn_znzk_ctm_yg = (yfux, fo) => yfux, atvn_znzk_ctm_fo = (yfux, fo) => fo, atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => new Map().set(atvn_znzk_ctm_fo(this, this.get_yoch_dyih()), this.ctm_cqpi_wfqq_0(fo_map_kl, atvn_cqpi_slm_vxn, undefined, {
            atvn_znzk_ctm_fo: atvn_znzk_ctm_fo,
            atvn_bnlb_map_cqpi: (yfux, fo, map) => {
                return map.set(atvn_znzk_ctm_fo(yfux, fo), atvn_znzk_ctm_yg(yfux, fo))
            },
            atvn_znzk_ctm_yg: atvn_znzk_ctm_yg
        }))
        this.yj_yfux_0 = (fo_map_kl, atvn_vbyt = (yfux, fo, ybdz_ux) => false, neig_kp = {}) => {
            const neig_1 = Object.assign({
                bnll_lb: -1,
                dyvy_sgym: Math.random(),
                lb_awub: 9999
            }, neig_kp)
            neig_1.bnll_lb++
            if (neig_1.bnll_lb > neig_1.lb_awub) {
                return;
            }
            if (map_dyvy_sgym_ybkc.has(neig_1.dyvy_sgym)) {
                return;// "cd_nq_yj_yfux"
            } else {
                map_dyvy_sgym_ybkc.set(neig_1.dyvy_sgym, true)
            }

            for (let yg of [...this.get_map_kl(fo_map_kl)]) {
                const [fo1, yg1] = yg
                if (atvn_vbyt(yg1, fo1, this)) {
                    return yg1
                } else {
                    const jtyj = yg1.yj_yfux_0(fo_map_kl, atvn_vbyt, neig_1)
                    if (jtyj) {
                        return jtyj
                    } else {
                        continue;
                    }
                }
            }
        }
        this.ctm_cqpi_wfqq_0 = (fo_map_kl, atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn], neig_kp) => yfux_vxn, slm, neig_kp = {}) => {
            const neig_1 = Object.assign({
                bnll_lb_vn: 0,
                atvn_znzk_ctm_fo: (yg, fo) => fo,
                atvn_bnlb_map_cqpi: (yfux, fo, map) => map,
                atvn_znzk_ctm_yg: (yg, fo) => yg
            }, neig_kp)
            atvn_cqpi_slm_vxn([slm, this], neig_1)
            return this.get_map_kl(fo_map_kl).size ? (() => {
                neig_1.bnll_lb_vn++
                return neig_1.atvn_bnlb_map_cqpi(this, this.get_yoch_dyih(), new Map([...this.get_map_kl(fo_map_kl)].map(([fo1, yg1]) => {
                    return [neig_1.atvn_znzk_ctm_fo(yg1, fo1), yg1.ctm_cqpi_wfqq_0(fo_map_kl, atvn_cqpi_slm_vxn, this, neig_1)]
                })))
            })() : neig_1.atvn_znzk_ctm_yg(this, this.get_yoch_dyih())
        }
        this.di_li_v_yfux_cqpi_0 = (fo_map_kl, atvn_di_ey_v_cqpi = (yfux, slm) => { }) => {
            this.ctm_cqpi_sopc_yfux_0(fo_map_kl, ([slm, vxn]) => {
                return atvn_di_ey_v_cqpi(vxn, slm)
            })
            return this
        }
        this.yp_0 = (fo_map_kl, yoch_dyih_ae_yfux, neig_kp = {}) => {
            return this.yp_cqpi_0(fo_map_kl, yoch_dyih_ae_yfux, neig_kp)
        }

        this.yp_bj_kyfb_yp_0 = (fo_map_kl_1, fo_map_kl_2, yoch_dyih_ae_yfux, neig_kp = {}) => {
            return this.yp_cqpi_0(fo_map_kl_1, yoch_dyih_ae_yfux, neig_kp, (vxn) => {
                vxn.yp_yfux(fo_map_kl_2, this)
            })
        }

        this.yp_cqpi_0 = (fo_map_kl, yoch_dyih_ae_yfux, neig_kp = {}, atvn_cqpi_vxn = (vxn) => { }) => {
            if (typeof yoch_dyih_ae_yfux === "string") {
                const vxn1 = new this.constructor(Object.assign(
                    {
                        yoch_dyih: yoch_dyih_ae_yfux
                    }, neig_kp), neig_nomr)
                yp_ey_yfux(fo_map_kl, yoch_dyih_ae_yfux, vxn1)
                atvn_cqpi_vxn(vxn1)
            } else if (this.w_yfux(yoch_dyih_ae_yfux, this)) {
                if (this === yoch_dyih_ae_yfux) {
                    uzms("csrf-acoa yp jcjc-")
                }
                yp_ey_yfux(fo_map_kl, neig_kp.yoch_dyih || yoch_dyih_ae_yfux.get_yoch_dyih(), yoch_dyih_ae_yfux.rzvo(neig_kp))
                atvn_cqpi_vxn(yoch_dyih_ae_yfux)
            } else {
                console.log(yoch_dyih_ae_yfux)
                uzms("csrf-bi mcvn aoao w ztfr sum ae yfux ae yf kp n yoch-" + typeof yoch_dyih_ae_yfux)
            }
            return this
        }
        this.get_bnll_wu = () => this.get_neig().wu
        this.has_0 = (fo_map_kl, fo) => this.get_map_kl(fo_map_kl).has(fo)
        this.delete_0 = (fo_map_kl, fo) => this.get_map_kl(fo_map_kl).delete(fo)
        this.hd_0 = (fo_map_kl, fo) => new Vnwy_wwdb().set_yo_vnwy_kp(this.get_map_kl(fo_map_kl)).aoao_zznq_fo(fo).wlba('delete', fo)
        this.get_0 = (fo_map_kl, fo, neig_kp = {}) => {
            const map_1 = this.get_map_kl(fo_map_kl)
            if (neig_kp.aoao_zznq && !map_1.has(fo)) {
                uzms("csrf-bi fo ac zznq-" + fo)
            }
            return map_1.get(fo)
        }
        this.set_yfux = (fo_map_kl, ...args) => {
            args.forEach(vxn => {
                set_ey_yfux_cqpi(this.get_map_kl(fo_map_kl), vxn.get_yoch_dyih(), vxn)
            })
            return this
        }

        this.set_yfux_bj_kyfb_set = (fo_map_kl, fo_map_kl_2, ...args) => {
            // const neig_yhld = {
            //     atvn_cqpi_yfux: (yfux) => {
            //         yfux.set_yfux(fo_map_kl_2, this)
            //     }
            // }
            args.forEach(vxn => {
                set_ey_yfux_cqpi(this.get_map_kl(fo_map_kl), vxn.get_yoch_dyih(), vxn)
                vxn.set_yfux(fo_map_kl_2, this)
            })
            return this
        }

        this.yp_yfux_bj_kyfb_set = (fo_map_kl, fo_map_kl_2, ...args) => {
            // const neig_yhld = {
            //     atvn_cqpi_yfux: (yfux) => {
            //         yfux.set_yfux(fo_map_kl_2, this)
            //     }
            // }
            args.forEach(vxn => {
                yp_ey_yfux_cqpi(this.get_map_kl(fo_map_kl), vxn.get_yoch_dyih(), vxn)
                vxn.set_yfux(fo_map_kl_2, this)
            })
            return this
        }

        this.yp_yfux_bj_kyfb_yp = (fo_map_kl_1, fo_map_kl_2, ...args) => {
            // const neig_yhld = {
            //     atvn_cqpi_yfux: (yfux) => {
            //         yfux.yp_yfux(fo_map_kl_2, this)
            //     }
            // }
            args.forEach(vxn => {
                yp_ey_yfux_cqpi(this.get_map_kl(fo_map_kl_1), vxn.get_yoch_dyih(), vxn)
                vxn.yp_yfux(fo_map_kl_2, this)
            })
            return this
        }

        this.get_nixb_yfux_db_yxna = (fo_map_kl, wm_fo_yxna = [], neig_kp = {}) => {
            return wm_fo_yxna.reduce((mb, tt) => {
                return mb.get(fo_map_kl, tt)
            }, this)
        }
        this.sc_zi_get = (fo_map_kl, atvn_get_db_zi_ux = (zi_ux, ybdz_ux, neig_kp) => { }, neig_kp = {}) => {
            const map_kl_1 = this.get_map_kl(fo_map_kl)
            const neig_1 = Object.assign({
                dyvy_sgym: Math.random(),
                bnll_lb: -1,
                lb_awub: 9999
            }, neig_kp)
            neig_1.bnll_lb++
            if (neig_1.bnll_lb > neig_1.lb_awub) {
                return;
            }
            if (map_dyvy_sgym_ybkc.has(neig_1.dyvy_sgym)) {
                return;// "cd_sc_zi_get"
                // return "cd_sc_zi_get"
            } else {
                map_dyvy_sgym_ybkc.set(neig_1.dyvy_sgym, true)
            }
            for (let zi_ux of map_kl_1.values()) {
                const jtyj_1 = atvn_get_db_zi_ux(zi_ux, this, neig_1)
                if (this.w_yfux(jtyj_1, this)) {
                    return jtyj_1
                }
                const jtyj_2 = zi_ux.sc_zi_get(fo_map_kl, atvn_get_db_zi_ux, neig_1)
                // if (jtyj_2 === "cd_sc_zi_get") {
                //     return "cd_sc_zi_get"
                // } else 
                if (this.w_yfux(jtyj_2, this)) {
                    return jtyj_2
                } else {
                    continue;
                }
            }
        }
        this.get_nixb_zi_ux_db_atvn = (fo_map_kl, atvn_vbyt = (zi_ux) => false, neig_kp = {}) => {
            return this.sc_zi_get(fo_map_kl, (ux) => atvn_vbyt(ux) && ux, neig_kp)
        }
        this.get_zi_shn = (fo_map_kl, atvn_yg_ldrg = (zi_ux) => zi_ux, neig_kp = {}) => {
            const neig_1 = Object.assign({
                wm_clone: [],
                wm_nomr: []
            }, neig_kp)
            this.get_map_kl(fo_map_kl).forEach((rn1) => {
                const wm_clone = neig_1.wm_clone.slice(0)
                wm_clone.push(atvn_yg_ldrg(rn1))
                if (rn1.get_map_kl(fo_map_kl).size === 0) {
                    neig_1.wm_nomr.push(wm_clone)
                    return
                }
                rn1.get_zi_shn(fo_map_kl, atvn_yg_ldrg, Object.assign({}, neig_1, { wm_clone }))
                return wm_clone
            })
            return neig_1.wm_nomr
        }
        this.get_yf_sc_ux_zv_di_sc_wwdw_hqtz_db_atvn = (fo_map_mcvn_kl, fo_map_nixb_kl, atvn_vbyt = (yf_sc_ux, fo, ybdz_ux) => false, neig_kp = {}) => {
            const neig_1 = Object.assign({}, neig_kp)
            return this.sc_zi_get(fo_map_mcvn_kl, (zi_ux, ybdz_ux, neig_kp) => {
                return zi_ux.yj_yfux_0(fo_map_nixb_kl, atvn_vbyt, Object.assign({
                    lb_awub: neig_kp.bnll_lb
                }))
                // for (let yf_sc_ux of zi_ux.get_map_kl(fo_map_nixb_kl).values()) {
                //     const nixb_ux = yf_sc_ux.yj_yfux(fo_map_nixb_kl, atvn_vbyt, Object.assign({
                //         lb_awub: neig_kp.bnll_lb
                //     }))
                //     if (nixb_ux) {
                //         return nixb_ux
                //     } else {
                //         continue
                //     }
                // }

            }, neig_1)
        }

        // this.yp_yfux = (fo_map_kl, ...args) => {
        //     args.forEach(yo_yp_ux_kp => {
        //         yp_ey_yfux(fo_map_kl, yo_yp_ux_kp.get_yoch_dyih(), yo_yp_ux_kp)
        //     })
        //     return this
        // }

        this.yp_yfux = (fo_map_kl, ...args) => {
            args.forEach(yo_yp_ux_kp => {
                yp_ey_yfux(fo_map_kl, yo_yp_ux_kp.get_yoch_dyih(), yo_yp_ux_kp)
            })
            return this
        }

        this.yp_yfux_0 = this.yp_yfux
        this.rzvo_sopc_yfux_0 = (fo_map_kl, neig_kp = {}) => {
            this.di_li_v_yfux_cqpi_0(fo_map_kl, (ux) => ux.rzvo(neig_kp))
            return this
        }
        this.get_yb_neig = () => neig_kp
    }
    static Yp_ux_wwdb = class extends Yp_ux_a {
        constructor(neig_kp = {}, neig_nomr) {
            super(neig_kp, neig_nomr)
            const map_vxn = (() => {
                if (this.has_map_kl('vxn'))
                    return this.get_map_kl("vxn")
                else
                    return this.lckc_map_kl('vxn', new Map()).get_map_kl('vxn')
            })()
            const yo_vnwy_wwdb_zv_map_vxn = new Vnwy_wwdb().set_yo_vnwy_kp(map_vxn)
            const map_slm = (() => {
                if (this.has_map_kl('slm'))
                    return this.get_map_kl("slm")
                else
                    return this.lckc_map_kl('slm', new Map()).get_map_kl('slm')
            })()


            this.get_db_wu = (wu) => this.get_db_wu_0('vxn', wu)
            this.jcbz_yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
                return this.jcbz_yp_0("vxn", yoch_dyih_ae_yfux, neig_kp)
            }
            this.get_ctm_vxn = () => {
                const ctm_vxn = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
                    return [yg1, yg1.get_ctm_sopc_yfux()]
                })) : new Map()
                return ctm_vxn
            }

            this.get_set_wm = (atvn_tszn_yg = ([fo, yg]) => yg) => {
                return this.get_set_wm_0('vxn', atvn_tszn_yg)
            }
            this.get_map_wm = (neig_kp) => {
                return this.get_map_wm_0('vxn', neig_kp)
            }
            this.get_map_wm_vkfs = (atvn_tszn_fo = (fo, slm) => fo, atvn_tszn_yg = (yg, slm) => yg, neig_kp = {}) => {
                return this.get_map_wm_vkfs_0('vxn', atvn_tszn_fo, atvn_tszn_yg, neig_kp)
            }
            this.get_map_sopc_yfux_bj_tszn_fo_yg = (atvn_tszn_nixb_fo = (ux) => ux, atvn_tszn_nixb_yg = (ux) => ux) => {
                return this.get_map_sopc_yfux_bj_tszn_fo_yg_0('vxn', atvn_tszn_nixb_fo, atvn_tszn_nixb_yg)
            }
            this.get_map_sopc_yfux_bj_tszn_map_yg = (atvn_tszn_nixb_yg = (ux) => ux) => {
                return this.get_map_sopc_yfux_bj_tszn_map_yg_0('vxn', atvn_tszn_nixb_yg)
            }
            this.get_ctm_sopc_yfux = () => this.get_ctm_sopc_yfux_0('vxn')
            this.get_ctm_sopc_yfux_neig = () => this.get_ctm_sopc_yfux_neig_0('vxn')
            this.get_ctm_sopc_yfux_wu = () => this.get_ctm_sopc_yfux_wu_0('vxn')
            this.get_ctm_sopc_yfux_yoch_dyih = () => this.get_ctm_sopc_yfux_yoch_dyih_0('vxn')

            this.ctm_cqpi_sopc_yfux = (atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => this.ctm_cqpi_sopc_yfux_0('vxn', atvn_cqpi_slm_vxn)
            this.get_ctm_jttb = (atvn_znzk_ctm_yg = (yfux, fo) => yfux, atvn_znzk_ctm_fo = (yfux, fo) => fo, atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn]) => yfux_vxn) => this.get_ctm_jttb_0('vxn', atvn_znzk_ctm_yg, atvn_znzk_ctm_fo, atvn_cqpi_slm_vxn)
            this.yj_yfux = (atvn_vbyt = (yfux, fo, slm) => false, neig_kp = {}) => {
                return this.yj_yfux_0('vxn', atvn_vbyt, neig_kp)
            }
            this.ctm_cqpi_wfqq = (atvn_cqpi_slm_vxn = ([yfux_slm, yfux_vxn], neig_kp) => yfux_vxn, slm, neig_kp = {}) => {
                return this.ctm_cqpi_wfqq_0('vxn', atvn_cqpi_slm_vxn, slm, neig_kp)
            }
            this.di_li_v_yfux_cqpi = (atvn_di_ey_v_cqpi = (yfux, slm) => { }) => {
                return this.di_li_v_yfux_cqpi_0('vxn', atvn_di_ey_v_cqpi)
            }

            this.yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
                return this.yp_0('vxn', yoch_dyih_ae_yfux, neig_kp)
            }

            this.yp_bj_kyfb_yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
                return this.yp_bj_kyfb_yp_0('vxn', 'slm', yoch_dyih_ae_yfux, neig_kp)
            }

            this.has_vxn = (fo) => map_vxn.has(fo)
            this.has = (fo) => map_vxn.has(fo)
            this.delete_vxn = (fo) => map_vxn.delete(fo)
            this.hd_vxn = (fo) => map_vxn.delete(fo)
            this.get_map_vxn = () => map_vxn
            this.get_map_slm = () => map_slm
            this.get_vxn = (fo) => {
                return map_vxn.get(fo)
            }
            this.get = (fo) => map_vxn.get(fo)
            this.nwvt = (fo) => yo_vnwy_wwdb_zv_map_vxn.aoao_zznq_fo(fo).wlba("get", fo)
            this.get_slm = (fo) => map_slm.get(fo)
            this.set_vxn = (...args) => {
                return this.set_yfux('vxn', ...args)
            }
            this.set_vxn_bj_kyfb = (...args) => {
                return this.set_yfux_()
            }

            this.yp_vxn_bj_kyfb_set = (...args) => {
                return this.yp_yfux_bj_kyfb_set('vxn', 'slm', ...args)
            }

            this.yp_vxn_bj_kyfb_yp = (...args) => {
                return this.yp_yfux_bj_kyfb_yp('vxn', 'slm', ...args)
            }

            this.set_slm = (...args) => {
                return this.set_yfux("slm", ...args)
            }

            this.set_slm_bj_kyfb_set = (...args) => {
                return this.set_yfux_bj_kyfb_set('slm', 'vxn', ...args)
            }
            this.yp_slm_bj_kyfb_set = (...args) => {
                return this.yp_yfux_bj_kyfb_set('slm', 'vxn', ...args)
            }
            this.get_nixb_slm_db_yxna = (wm_fo_yxna = [], neig_kp = {}) => {
                return this.get_nixb_yfux_db_yxna('slm', wm_fo_yxna, neig_kp)
            }
            this.sc_mb_get = (atvn_get_db_nwn_ux = (nixb_slm, vxn) => { }, neig_kp = {}) => {
                return this.sc_zi_get('slm', atvn_get_db_nwn_ux, neig_kp)
            }
            this.get_nixb_slm_db_atvn = (atvn_vbyt_db_nwn_ux = (nwn_ux) => false, neig_kp = {}) => {
                return this.get_nixb_zi_ux_db_atvn('slm', atvn_vbyt_db_nwn_ux, neig_kp)
            }
            this.get_slm_shn = (atvn_yg_ldrg = (nwn_ux) => nwn_ux, neig_kp = {}) => {
                return this.get_zi_shn('slm', atvn_yg_ldrg, neig_kp)
            }
            this.get_nwn_ux_db_atvn = (atvn_vbyt_db_nwn_ux = (nwn_ux) => false, neig_kp = {}) => {
                return this.get_yf_sc_ux_zv_di_sc_wwdw_hqtz_db_atvn('slm', 'vxn', atvn_vbyt_db_nwn_ux, neig_kp)
            }
            this.get_nixb_nwn_ux_db_atvn = this.get_nwn_ux_db_atvn

            this.yp_slm_bj_kyfb_yp = (...args) => {
                return this.yp_yfux_bj_kyfb_yp('slm', 'vxn', ...args)
            }

            this.yp_slm = (...args) => {
                return this.yp_yfux('slm', ...args)
            }

            this.yp_vxn = (...args) => {
                return this.yp_yfux("vxn", ...args)
            }
            this.rzvo_sopc_yfux = (neig_kp = {}) => {
                return this.rzvo_sopc_yfux_0('vxn', neig_kp)
            }
        }
    }
}
module.exports = Yp_ux_a