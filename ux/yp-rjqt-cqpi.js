const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const path = require('path')
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const nikc_rjqt_bx_log = path.resolve('out', 'rjqt-bx')
// const Bvzd_kivo = require("./bvzd_kivo")
const Cxl_ypn = require("./cxl_ypn")
const Yp_ux = require('./yp_ux-ce')
const yo_bvzd_kivo_gzbu = require("../yoch/yo_bvzd_kivo_gzbu")
const Bvzd_kivo_bx = require("./bvzd-kivo-bx")
const vkih_hfbc = require("../vkih_hfbc")

class Rjqt_bx {
    constructor(neig_kp) {
        const map_vxn = new Map()
        const map_slm = new Map()
        const neig = Object.assign({ neig_kp }, {
            w_rrzv_rjqt: false,
            log_rjqt_udao: ".txt",
            fsx: {},
            fs: {},
            rjqt_pzre_xbst: 'fsx',
            w_ybkc_bqeo: false,
            badb_livn: 0,
            rrzv_yntz: "txt"
        }, neig_kp)
        if (!neig.yoch_dyih) {
            neig.yoch_dyih = Date.now() + vkih_hfbc.next().value
        }
        const rjqt_cqpi = (cqpi_fr, ...args) => {
            neig.badb_livn++
            this.yp_log({
                yxna: args[0]
                , bqeo: neig.w_ybkc_bqeo ? args[1] : "ac-ybkc"
                , zdog_uufb: Date.now()
                , cqpi_fr: cqpi_fr
                , badb_livn: neig.badb_livn
            })
            return this.get_rjqt_pzre()[cqpi_fr](...args)
        }
        this.writeFileSync = (...args) => {
            return rjqt_cqpi('writeFileSync', ...args)
        }
        this.writeFile = (...args) => {
            return rjqt_cqpi('writeFile', ...args)
        }
        this.appendFileSync = (...args) => {
            return rjqt_cqpi('appendFileSync', ...args)
        }
        this.appendFile = (...args) => {
            return rjqt_cqpi('appendFile', ...args)
        }
        this.get_rjqt_pzre = () => neig.rjqt_pzre_xbst === "fsx" ? neig.fsx : neig.fs
        const ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                cqpi_fr: "set",
                atvn_cqpi_yfux: (yfux) => { }
            }, neig_kp)
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
            return yp_ey_yfux_cqpi(map_slm, fo, vxn, { cqpi_fr: "yp" })
        }
        const set_jyqh_log = new Set()
        const set_err_ybkc = new Set()
        // const vnwm_rrzv = []
        // const wrm_rrzv_ybkc = {}
        // if (neig.w_rrzv_rjqt) {
        //     const fs = require('fs')
        //     setInterval(() => {
        //         vnwm_rrzv.forEach(rn1 => {
        //             if (!rn1.w_cd_rrzv) {
        //                 wrm_rrzv_ybkc[rn1.yxna] = rn1
        //             }
        //         })
        //         Object.values(wrm_rrzv_ybkc).forEach(rn2 => {
        //             fs.writeFileSync(rn2.yxna, rn2.bqeo)
        //         })
        //     }, 2000);
        // }

        this.get_log_rjqt_udao = () => {
            return ussk_atvn(new Map()
                .set("json", () => {
                    return ".json"
                }).set("txt", () => {
                    return ".txt"
                })).setDefault(rn1 => this.get_neig().log_rjqt_udao)
                .vdum(neig.rrzv_yntz)
        }
        this.bv_rr_zv_vnwy = (yxna, bqeo, neig_kp = {
            trl_rrzv_zdog: 500
        }) => {
            // const fs = require('fs')
            // vnwm_rrzv.push({ yxna, bqeo, w_cd_rrzv: false })
            yo_bvzd_kivo_gzbu.jcbz_yp(yxna, { wu: yxna }).get_vxn(yxna).set_trl_kivo_zdog(Date.now() + neig_kp.trl_rrzv_zdog || 1000).uufb(() => {
                this.get_rjqt_pzre().writeFileSync(yxna, bqeo)
            })
        }
        this.ncn_nikc = () => {
            const ncn_nikc = require("../ngnc_nikc_paaw")
            ncn_nikc(nikc_rjqt_bx_log)
            return this
        }
        this.get_nmky_log_yxna = () => path.join(nikc_rjqt_bx_log, 'rjqt-bx-log-' + this.get_bnll_wu() + "-" + this.get_yoch_dyih() + this.get_log_rjqt_udao())
        this.get_nmky_err_yxna = () => path.join(nikc_rjqt_bx_log, 'rjqt-bx-err-' + this.get_bnll_wu() + "-" + this.get_yoch_dyih() + this.get_log_rjqt_udao())
        this.non_rrzv_log = (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                trl_rrzv_zdog: 500
            }, neig_kp)
            this.ncn_nikc()
            const yxna = this.get_nmky_log_yxna()
            const map_zhvt_log = new Map()
            const zhvt_log = (fo, yg) => {
                map_zhvt_log.set(fo, fo.get_set_log())
            }
            new Cxl_ypn({
                ctm_atvn_pc_cxl_zhqh: zhvt_log,
                ctm_atvn_so_cxl_zhqh: zhvt_log
            }).ctm_vt_rn(this.get_ctm_sopc_yfux())
            const bqeo = JSON.stringify([...map_zhvt_log].map(rn1 => {
                return [...rn1]
            }), null, 2)
            this.bv_rr_zv_vnwy(yxna, bqeo, neig_1)
        }
        this.non_rrzv_err = (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                trl_rrzv_zdog: 500
            }, neig_kp)
            this.ncn_nikc()
            const yxna = this.get_nmky_err_yxna()
            const map_zhvt_err = new Map()
            const zhvt_err = (fo, yg) => {
                map_zhvt_err.set(fo, fo.get_set_err())
            }
            new Cxl_ypn({
                ctm_atvn_pc_cxl_zhqh: zhvt_err,
                ctm_atvn_so_cxl_zhqh: zhvt_err
            }).ctm_vt_rn(this.get_ctm_sopc_yfux())
            const bqeo = JSON.stringify([...map_zhvt_err].map(([fo, rn1]) => {
                return [...rn1].map(rn3 => err_bqeo_vdum(rn3))
            }), null, 2)
            this.bv_rr_zv_vnwy(yxna, bqeo, neig_1)
            return this
        }
        const err_bqeo_vdum = (rn1) => {
            return `${rn1.message}\n${rn1.stack}`
        }
        this.get
        this.yp_log = (neig_kp = {}) => {
            if (typeof neig_kp === "string") {
                neig_kp = { bqeo: neig_kp }
            }
            set_jyqh_log.add(Object.assign({ yoch_wu: this.get_bnll_wu(), yoch_dyih: this.get_yoch_dyih() }, neig_kp))
            if (neig.w_rrzv_rjqt) {
                this.ncn_nikc()

                // let udao = 
                const bqeo = (() => {
                    if (neig.rrzv_yntz) {
                        return ussk_atvn(new Map().set("json", () => {
                            return JSON.stringify([...this.get_set_log()], null, 2)
                        })).vdum(neig.rrzv_yntz)
                    } else {
                        return this.get_rj_log()
                    }
                })()
                const yxna = this.get_nmky_log_yxna()
                this.bv_rr_zv_vnwy(yxna, bqeo)
            }
            return this
        }
        this.get_ctm_vxn = () => {
            const ctm_vxn = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
                return [yg1, yg1.get_ctm_vxn()]
            })) : this
            return ctm_vxn
        }
        this.get_yoch_dyih = () => neig.yoch_dyih
        this.get_set_log = () => set_jyqh_log
        this.get_set_err = () => set_err_ybkc
        this.get_rj_log = () => [...set_jyqh_log].map(rn1 => rn1.bqeo || JSON.stringify(rn1, null, 2)).join("\n\n")
        this.get_ctm_vxn_log = () => {
            const ctm_log = map_vxn.size ? new Map([...map_vxn].map(([fo1, yg1]) => {
                return [yg1, yg1.get_ctm_vxn_log()]
            })) : this.get_set_log()
            return ctm_log
        }
        this.get_ctm_sopc_log = () => {
            return new Map().set(this, this.get_ctm_vxn_log())
        }
        this.get_ctm_sopc_yfux = () => {
            return new Map().set(this, this.get_ctm_vxn())
        }
        this.yp = (yoch_dyih_ae_yfux, neig_kp = {}) => {
            if (typeof yoch_dyih_ae_yfux === "string") {
                const vxn1 = new Rjqt_bx(Object.assign(
                    {
                        yoch_dyih: yoch_dyih_ae_yfux
                    }, neig_kp))
                yp_ey_vxn(yoch_dyih_ae_yfux, vxn1)
            } else if (vbyt_yfux(yoch_dyih_ae_yfux, this)) {
                yp_ey_vxn(yoch_dyih_ae_yfux, yoch_dyih_ae_yfux.rzvo(neig_kp))
            } else {
                uzms("csrf-bi mcvn aoao w ztfr sum ae neig jplp ux n yoch-" + typeof yoch_dyih_ae_yfux)
            }
            return this
        }
        this.get_bnll_wu = () => this.get_neig().wu
        this.has_vxn = (fo) => map_vxn.has(fo)
        this.has_vxn = (fo) => map_vxn.has(fo)
        this.delete_vxn = (fo) => map_vxn.delete(fo)
        this.get_map_vxn = () => map_vxn
        this.get_vxn = (fo) => map_vxn.get(fo)
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

        this.yp_slm = (...args) => {
            args.forEach(slm => {
                yp_ey_v_slm(slm.get_yoch_dyih(), slm)
            })
            return this
        }
        this.yp_vxn = (...args) => {
            args.forEach(yo_rjqt_bx => {
                yp_ey_vxn(yo_rjqt_bx.get_yoch_dyih(), yo_rjqt_bx)
            })
            return this
        }

        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.get_yb_neig = () => neig_kp
        this.get_neig = () => {
            return neig
        }
    }
}
module.exports = Rjqt_bx