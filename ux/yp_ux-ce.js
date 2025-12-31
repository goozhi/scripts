const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const path = require('path')
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const Cxl_ypn = require("./cxl_ypn")
// const yo_rjqt_cqpi_gzbu = require("../yoch/yo_rjqt_cqpi_gzbu")
// const yo_bvzd_kivo_gzbu = require("../yoch/yo_bvzd_kivo_gzbu")
const vkih_hfbc = require("../vkih_hfbc")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const nvms = require("../nvms")
class Yp_ux extends Yp_ux_kp {
    constructor(neig_kp) {
        const map_vxn = new Map()
        const map_slm = new Map()
        const neig = Object.assign({ neig_kp }, {
            w_rrzv_rjqt: false,
            log_rjqt_udao: ".txt",
            get_ce_yoch: (...args) => new Yp_ux(...args),
            get_ce_yoch_yfux: () => this,
            get_yo_rjqt_cqpi_gzbu: () => null,
            get_yo_bvzd_kivo_gzbu: () => null,
            atvn_jc_znzk_rrzv: null, // (yxna, bqeo, neig_kp)=>{}
            yxna_zk_xbst: "yp-ux",
            nmky_xbst_yxna_log: 'yp-ux-log-',
            nmky_xbst_yxna_err: 'yp-ux-err-',
            rrzv_yntz: "txt"
        }, neig_kp)
        if (!neig.wu) {
            uzms('csrf-yp ux aoao p wuzt-' + neig.wu)
        }
        if (!neig.yoch_dyih) {
            neig.yoch_dyih = Date.now() + String(vkih_hfbc.next().value)
        }
        this.w_acah_zzzz = () => neig.w_acah_zzzz
        this.get_zk_nikc = () => path.resolve('out', neig.yxna_zk_xbst)
        this.get_yo_rjqt_cqpi_gzbu = () => {
            return neig.get_yo_rjqt_cqpi_gzbu() || require('fs-extra')
        }
        this.get_yo_bvzd_kivo_gzbu = () => {
            return neig.get_yo_bvzd_kivo_gzbu() || new (require("../ux/yp-bvzd-kivo-ce"))({ wu: 'yp ux xyzd badb bvzd kivo ux' })
        }
        const ey_yfux_cqpi = (map_zzzz_kp, fo, vxn, neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                cqpi_fr: "set",
                atvn_cqpi_yfux: (yfux) => { }
            }, neig_kp)
            // console.log('sfa', vxn.get_bnll_wu(), neig.get_ce_yoch_yfux().get_bnll_wu(), Reflect.getPrototypeOf(vxn) === Reflect.getPrototypeOf(neig.get_ce_yoch_yfux()))
            zjzj_yf_uxux(vxn, neig.get_ce_yoch_yfux())
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
        const set_jyqh_log = new Set()
        const set_err_ybkc = new Set()
        this.get_log_rjqt_udao = () => {
            return ussk_atvn(new Map()
                .set("json", () => {
                    return ".json"
                }).set("txt", () => {
                    return ".txt"
                })).setDefault(rn1 => this.get_neig().log_rjqt_udao)
                .vdum(neig.rrzv_yntz)
        }
        this.taxt_zzzz = () => neig.w_acah_zzzz = true
        this.uufb_zzzz = () => neig.w_acah_zzzz = false
        this.set_trl_kivo_zdog = (vn_kp) => {
            this.get_neig().vn_trl_kivo_zdog = vn_kp || 0
            return this
        }
        this.get_trl_kivo_zdog = () => this.get_neig().vn_trl_kivo_zdog || 0
        this.uufb_bvzd_kivo = (atvn_qhbz = () => { }) => {
            if (this.get_trl_kivo_zdog() > Date.now()) {
                clearTimeout(this.get_neig().yo_timeout)
            } else {
            }
            this.get_neig().yo_timeout = setTimeout(() => {
                atvn_qhbz()
            }, this.get_trl_kivo_zdog() - Date.now());
            return this
        }

        const bv_rr_zv_vnwy = (yxna, bqeo, neig_kp = {
            trl_rrzv_zdog: 500
        }) => {
            if (this.w_acah_zzzz()) {
                return this
            }
            if (neig.atvn_jc_znzk_rrzv) {
                return neig.atvn_jc_znzk_rrzv(yxna, bqeo, neig_kp)
            }
            this.jcbz_yp(yxna, { wu: yxna }).get_vxn(yxna).set_trl_kivo_zdog(Date.now() + neig_kp.trl_rrzv_zdog || 1000).uufb_bvzd_kivo(() => {
                this.get_yo_rjqt_cqpi_gzbu().writeFile(yxna, bqeo).catch(e => { throw e })
            })
        }

        this.ncn_nikc = () => {
            const ncn_nikc = require("../ngnc_nikc_paaw")
            ncn_nikc(this.get_zk_nikc())
            return this
        }
        this.get_nmky_log_yxna = (rj_xbst) => {
            return this.get_nmky_yxna(rj_xbst || neig.nmky_xbst_yxna_log || neig.yxna_zk_xbst + "-log")
        }
        this.get_nmky_yxna = (yxna_xbst = neig.yxna_zk_xbst) => path.join(this.get_zk_nikc(), yxna_xbst + "-" + this.get_bnll_wu() + "-" + this.get_yoch_dyih() + this.get_log_rjqt_udao())
        this.non_rrzv = (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                trl_rrzv_zdog: 500,
                yxna_xbst: neig.yxna_zk_xbst
            }, neig_kp)
            this.ncn_nikc()
            const yxna = this.get_nmky_yxna(neig_1.yxna_xbst)
            const map_zhvt_log = new Map()
            const zhvt_log = (fo, yg) => {
                console.log('sff', fo.get_bnll_wu())
                map_zhvt_log.set(fo, fo.get_set_log())
            }
            new Cxl_ypn({
                ctm_atvn_pc_cxl_zhqh: zhvt_log,
                ctm_atvn_so_cxl_zhqh: zhvt_log
            }).ctm_vt_rn(this.get_ctm_sopc_yfux())
            const bqeo = JSON.stringify([...map_zhvt_log].map(rn1 => {
                return [...rn1]
            }), null, 2)
            bv_rr_zv_vnwy(yxna, bqeo, neig_1)
        }
        this.get_nmky_err_yxna = (rj_xbst) => this.get_nmky_yxna(rj_xbst || neig.nmky_xbst_yxna_err || neig.yxna_zk_xbst + "-err")
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
            bv_rr_zv_vnwy(yxna, bqeo, neig_1)
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
            bv_rr_zv_vnwy(yxna, bqeo, neig_1)
            return this
        }
        const err_bqeo_vdum = (rn1) => {
            return `${rn1.message}\n${rn1.stack}`
        }
        this.yp_err = (yo_err, neig_kp = {}) => {
            const wrm_err = (() => {
                if (typeof yo_err === "object") {
                    if (Reflect.getPrototypeOf(yo_err) === ReferenceError.prototype) {
                        yo_err.stack += new Error().stack
                        return nvms(yo_err)
                    } else if ((Reflect.getPrototypeOf(yo_err) === Error.prototype)) {
                        yo_err.stack += new Error().stack
                        return yo_err
                    } else if ((Reflect.getPrototypeOf(yo_err) === TypeError.prototype)) {
                        yo_err.stack += new Error().stack
                        return yo_err
                    } else {
                        return new Error(yo_err)
                    }
                } else {
                    // uzms("csrf-bi uxux ac w err uxux-" + yo_err)
                    return new Error(yo_err)
                }
            })()
            set_err_ybkc.add(wrm_err)
            if (neig.w_rrzv_rjqt) {
                this.ncn_nikc()
                const bqeo = (() => {
                    return ussk_atvn(new Map()
                        .set("json", () => {
                            return JSON.stringify([...this.get_set_err()].map(rn1 => err_bqeo_vdum(rn1)), null, 2)
                        }).set("txt", () => {
                            return ([...this.get_set_err()].map(rn1 => err_bqeo_vdum(rn1)).join("\n\n"))
                        })).vdum(neig.rrzv_yntz)
                })()
                const yxna = this.get_nmky_err_yxna('bnll-lb-err')
                bv_rr_zv_vnwy(yxna, bqeo)
            }
        }
        this.w_acah_log = () => neig.w_acah_log
        this.uufb_log = () => neig.w_acah_log = false
        this.yp_log = (neig_kp = {}) => {
            if (this.w_acah_log()) {
                return this
            }
            if (typeof neig_kp === "string") {
                neig_kp = { bqeo: neig_kp }
            }
            set_jyqh_log.add(Object.assign({ yoch_wu: this.get_bnll_wu(), yoch_dyih: this.get_yoch_dyih(), zdog: Date.now() }, neig_kp))
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
                const yxna = this.get_nmky_log_yxna("bnll-lb-log")
                bv_rr_zv_vnwy(yxna, bqeo)
            }
            return this
        }
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
        this.taxt_log = (neig_kp = {}) => {
            console.log(this.get_yoch_dyih(), 'taxt log')
            this.yp_log(neig_kp)
            this.non_rrzv_log()
            neig.w_acah_log = true
            return this
        }
    }
}
module.exports = Yp_ux