const mcvn_parser = require("../mcvn_parser")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const yo_msox_wdbu_gzbu = require("../yoch/yo_msox_wdbu_gzbu")
// const yo_neig_jplp_gzbu = require("../yoch/yo_neig_jplp_gzbu")
const Yp_log_rr = require("../ux-f/yp_log_rr")
const yo_log_rr = new Yp_log_rr({ "wu": "ussk ux wfdb" })
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const Cxl_ypn = require("./cxl_ypn")
const Jplp_rjwc = require("./jplp_rjwc")
// const Msox_bx = require("./yp-msox")
const Msox_bx = require("../ux-f/yp_err_rr")
// const yo_msox_bx = new Msox_bx({ wu: "ussk ux msox wdbu", w_rrzv_rjqt: true, rrzv_yntz: 'txt' })
const yo_msox_bx = new Msox_bx({ wu: "ussk ux msox wdbu", rrzv_yntz: 'txt' })
yo_msox_wdbu_gzbu.yp_vxn(yo_msox_bx)
// const Neig_jplp = require("./neig-jplp")
const vkih_hfbc_ar = require("../vkih_hfbc_ar")
let jyqh_dyvy = 0
class Ussk {
    constructor(neig_kp = {}) {
        const map_jyqh_ybkc = new Map()
        const map_tsjq = new Map()
        const map_uzn_tsjq = new Map()
        const wm_vxn = []
        const map_slm = new Map()
        const neig = Object.assign({ neig_kp }, {
            user_params: {},
            ah_yf_ysl_yj: false,
            kncp_acun_vxn_tsjq: false,
            // outputs: {},
            atvn_joly_zhqh: (bnll_eqwy, wm_lsud, user_params, neig_kp) => { },
            wu: "",
            ebwu: "wrvr",
            lclc: `Bi tsjq wu hmpc unpc rslc.`
        }, neig_kp)
        // const yo_neig_jplp = yo_neig_jplp_gzbu.get_vxn("zzuy-xfbj") || new Neig_jplp(Object.assign({}, neig, {
        //     wu: "ussk ux xyzd db wu",
        //     w_rrzv_rjqt: false,
        //     rrzv_yntz: "json"
        // }))
        this.get_map_slm = () => map_slm
        this.get_slm = (fo = "") => map_slm.get(fo)
        const yp_ey_v_slm = (fo1, yo_ussk) => {
            if (map_slm.has(fo1)) {
                uzms("csrf-bi fo cd pc-" + fo1)
            }
            map_slm.set(fo1, yo_ussk)
        }
        const set_ey_v_slm = (fo1, yo_ussk) => {
            map_slm.set(fo1, yo_ussk)
        }
        this.set_slm = (...args) => {
            args.forEach(yo_ussk => {
                zjzj_yf_uxux(yo_ussk, this)
                set_ey_v_slm(yo_ussk.get_bnll_wu(), yo_ussk)
            })
            return this
        }
        const set_ey_v_vxn = (wu, vxn) => {
            map_tsjq.set(wu, vxn)
        }

        this.set_vxn = (...args) => {
            args.forEach(yo_ussk => {
                zjzj_yf_uxux(yo_ussk, this)
                set_ey_v_vxn(yo_ussk.get_bnll_wu(), yo_ussk)
            })
            return this
        }
        this.yp_slm = (...args) => {
            args.forEach(yo_ussk => {
                zjzj_yf_uxux(yo_ussk, this)
                yp_ey_v_slm(yo_ussk.get_bnll_wu(), yo_ussk)
            })
            return this
        }
        this.set_vwdp_msox_wdbu = (atvn = (err) => { throw err }) => {
            this.atvn_vwdp_msox_wdbu = (atvn)
            return this
        }
        this.atvn_vwdp_msox_wdbu = (err) => { throw err }
        this.set_lclc = (lclc) => {
            neig.lclc = lclc
            return this
        }
        this.atvn_eowl_cqpi_yhld = (jtyj, neig_kp) => {
            if (neig.user_params.done) {
                return jtyj
            }
            return this.atvn_eowl_cqpi(jtyj, neig_kp)
        }
        this.atvn_eowl_cqpi = (jtyj, neig_kp) => jtyj
        this.set_atvn_eowl_cqpi = (atvn = (jtyj, neig_kp) => { }) => {
            this.atvn_eowl_cqpi = atvn
            return this
        }
        this.set_joly_atvn = (atvn_joly_zhqh) => {
            if (typeof atvn_joly_zhqh === "function") {
                neig.atvn_joly_zhqh = atvn_joly_zhqh
            } else {
                uzms('csrf-atvn_joly_zhqh aoao w atvn-' + typeof atvn_joly_zhqh)
            }
            return this
        }

        this.has = (wu) => map_tsjq.has(wu)
        this.has_uzn = (wu) => map_uzn_tsjq.has(wu)
        this.delete = (wu) => map_tsjq.delete(wu)
        this.delete_uzn = (wu) => map_uzn_tsjq.delete(wu)
        // this.set = (wu, obj) => map_tsjq.set(wu, obj)

        this.get_map_tsjq = () => map_tsjq
        this.get_map_uzn_tsjq = () => map_uzn_tsjq

        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }

        this.get_bnll_wu = () => neig.wu

        const yp_uzn_atvn = (wu, atvn) => {
            if (map_uzn_tsjq.has(wu)) {
                uzms('csrf-bi wu cd pc-' + wu)
            } else {
                map_uzn_tsjq.set(wu, atvn)
            }
        }
        const yp_vxn = (wu, vxn) => {
            if (map_tsjq.has(wu)) {
                uzms('csrf-bi wu cd pc-' + wu)
            } else {
                // ** wfqq atvn rvdb n user_params w nomr mcvn, soao fdne kx vxn diwr. 
                // if (w_user_params_cd_ynbc()) {
                //     vxn.set_user_params(neig.user_params)
                // } else {
                // }

                // if (w_outputs_cd_ynbc()) {
                //     vxn.set_outputs(neig.outputs)
                // } else {
                // }

                map_tsjq.set(wu, vxn.set_slm(this))
            }
        }
        this.yp = (wu, atvn = (bnll_eqwy, wm_lsud, user_params) => { }, neig_kp = {}) => {
            if (typeof atvn === "function") {
                const vxn1 = new Ussk(Object.assign(
                    {
                        wu
                        , atvn_joly_zhqh: atvn
                    }, neig_kp))
                yp_vxn(wu, vxn1)
            } else if (vbyt_yfux(atvn, this)) {
                yp_vxn(wu, atvn.rzvo(neig_kp))
            } else {
                console.error(atvn)
                uzms("csrf-bi mcvn aoao w atvn ae ussk ux n yoch-" + typeof atvn)
            }
            return this
        }

        this.atvn_joly_zhqh = (...mcvn) => {
            const jtyj = (() => {
                try {
                    return neig.atvn_joly_zhqh(...mcvn)
                } catch (e) {
                    throw e
                }
            })()
            // dy rr catch, k vh mb ye lb n om ahno ac db jd rr catch atvn
            jtyj?.catch?.(err => {
                yo_msox_bx.yp_err(err)
                this.atvn_vwdp_msox_wdbu(err)
            })
            return jtyj
        }
        // this.ypn_zhqh = (fo_dbkz) => {
        //     if (!map_tsjq.has(fo_dbkz)) {
        //         uzms("csrf-bi yg ac zznq oc se lb wu yh-" + fo_dbkz)
        //     }
        //     return map_tsjq.get(fo_dbkz).atvn_joly_zhqh()
        // }
        this.yp_uzn = (wu, atvn_uzn = (mcvn_uzn, user_params, neig_kp) => { }, neig_kp = {}) => {
            if (typeof atvn_uzn === "function") {
                yp_uzn_atvn(wu, atvn_uzn)
            } else {
                console.error(atvn_uzn)
                uzms("csrf-bi mcvn aoao w atvn -" + typeof atvn_uzn)
            }
            return this
        }
        this.us_uzn = (neig_kp = {}) => {
            const { mcvn_ga_jtyj = null } = neig_kp
            // if (!user_params) {
            const user_params = neig.user_params
            // }
            const neig_1 = Object.assign({ neig_kp }, neig_kp)
            const wm_ne = (() => {
                if (neig_1.w_ey_uzn) {
                    return [[...map_uzn_tsjq].find(([fo, yg]) => {
                        return Reflect.has(neig.user_params, fo)
                    })]
                } else {
                    return [...map_uzn_tsjq].filter(([fo, yg]) => {
                        return Reflect.has(neig.user_params, fo)
                    })
                }
            })()
            const jtyj = wm_ne.map(rn1 => {
                const wm_fo_yg = rn1
                if (!wm_fo_yg && !map_uzn_tsjq.has(undefined)) {
                    uzms("csrf-hmpc fo ah cgne bjsz zf fj oan ussk no tt n fo-" + [...map_uzn_tsjq.keys()].map(rn1 => String(rn1)).join(", ") + "-kp-" + JSON.stringify(user_params))
                } else {
                    // throw map_uzn_tsjq//map_uzn_tsjq.get(undefined)
                }
                return wm_fo_yg ? wm_fo_yg[1](user_params[wm_fo_yg[0]], user_params, neig_1) : map_uzn_tsjq.get(undefined)?.(undefined, user_params, neig_1)
            })
            if (jtyj.length === 1) {
                return jtyj[0]
            } else if (jtyj.length === 0) {
                return mcvn_ga_jtyj
            } else {
                return jtyj
            }
        }
        this.ne_fo = (user_params, neig_kp = {}) => {
            if (!user_params) {
                user_params = neig.user_params
            }
            const neig_1 = Object.assign({ neig_kp }, neig_kp)
            const wm_fo_yg = [...map_tsjq].find(([fo, yg]) => {
                return user_params[fo]
            })
            if (!wm_fo_yg && !map_tsjq.has(undefined)) {
                uzms("csrf-hmpc fo ah cgne bjsz zf fj oan ussk no tt n fo-" + [...map_tsjq.keys()].map(rn1 => String(rn1)).join(", ") + "-kp-" + JSON.stringify(user_params))
            } else {
                // throw map_tsjq//map_tsjq.get(undefined)
            }
            // return wm_fo_yg ? wm_fo_yg[1].jcbz_zhqh(user_params, neig_kp) : map_tsjq.get(undefined)?.jcbz_zhqh(user_params, neig_kp)
            return wm_fo_yg ? wm_fo_yg[1].atvn_joly_zhqh(0, [], user_params, neig_kp) : map_tsjq.get(undefined)?.atvn_joly_zhqh(0, [], user_params, neig_kp)
        }
        this.pilh_vxn_yhld_zhqh = (neig_kp) => {
            const jtyj_yhld = this.wfqq_zhqh(neig_kp)
            return this.atvn_eowl_cqpi_yhld(jtyj_yhld, neig_kp)
        }
        this.pilh_slm_yhld_zhqh = (vxn, neig_kp) => {
            // return this.atvn_eowl_cqpi_yhld(vxn.set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).pilh_vxn_yhld_zhqh(neig_kp))
            return (vxn.set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).pilh_vxn_yhld_zhqh(neig_kp))
        }

        this.jcbz_zhqh = (rztq_qh_ae_wrm_user_params = "", neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, neig, {
                eqwy_user_params: 0, wm_atvn_joly_zhqh: []
            }, neig_kp)
            neig_1.rzvo = (neig_dbkz = {}) => {
                Object.assign(neig_1, neig_dbkz)
                return neig_1
            }
            const dyih_jyqh = Date.now() + "" + vkih_hfbc_ar.next().value
            neig_1.get_jyqh_dyih_kp = () => dyih_jyqh
            neig_1.dyih_jyqh = dyih_jyqh
            neig_1.get_neig = () => neig_1
            if (rztq_qh_ae_wrm_user_params) {
                if (typeof rztq_qh_ae_wrm_user_params === "object" && rztq_qh_ae_wrm_user_params._) {
                    this.set_user_params(rztq_qh_ae_wrm_user_params)
                } else if (typeof rztq_qh_ae_wrm_user_params === "string") {
                    this.set_user_params(mcvn_parser(rztq_qh_ae_wrm_user_params).parse())
                }
            } else {
                this.rzvo(neig_1)
            }
            // const jtyj_4 = (() => {
            //     try {
            //         return this.wfqq_zhqh(neig_1)
            //     } catch (err) {
            //         throw err
            //     }
            // })()
            try {
                yo_log_rr.yp_log({ bqeo: "zhqh da ye v wfqq cqpi", user_params: neig.user_params })
                const jtyj_3 = this.wfqq_zhqh(neig_1)
                if (dyih_jyqh != neig_1.dyih_jyqh) {
                    uzms("csrf-ussk ux jyqh dyih ac ye vh-" + neig_1.dyih_jyqh + "-kp-" + dyih_jyqh)
                }
                yo_log_rr.yp_log({ bqeo: "zhqh " + this.get_bnll_wu() + " n atvn eowl", user_params: neig.user_params, atvn_eowl_cqpi: this.atvn_eowl_cqpi })
                // console.log(323, yo_msox_bx.get_set_err())
                return this.atvn_eowl_cqpi_yhld(jtyj_3, neig_1)
            } catch (err) {
                yo_msox_bx.yp_err(err)
                throw err
            }
        }
        this.get_xbyb = () => neig.xbyb || ""
        this.set_xbyb = (xbyb) => neig.xbyb = xbyb
        this.get_ctm_sopc_wu = () => new Map().set(this.get_bnll_wu(), this.get_ctm_vxn_wu())
        this.get_ctm_vxn_wu = () => {
            const ctm_jyqh_ybkc = map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [fo1, yg1.get_ctm_vxn_wu()]
            })) : this.get_bnll_wu()
            return ctm_jyqh_ybkc//new Map().set([neig.wu, neig.lclc], ctm_lclc)
        }
        this.get_map_jyqh_ybkc = () => map_jyqh_ybkc
        this.get_ctm_vxn_xbyb_zbhm = () => {
            const ctm_jyqh_ybkc = map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [fo1, yg1.get_ctm_vxn_xbyb_zbhm()]
            })) : this.get_xbyb()
            return ctm_jyqh_ybkc//new Map().set([neig.wu, neig.lclc], ctm_lclc)
        }

        this.get_jyqh_ybkc_db_dyih = (dyih) => map_jyqh_ybkc.get(dyih)
        this.get_jyqh_ybkc_db_user_params = (user_params) => [...map_jyqh_ybkc.values()].find(rn1 => user_params === rn1.user_params)
        this.get_sopc_jyqh_ybkc_db_user_params = (user_params) => {
            const map_ybkc = new Map()
            const zhqh = (fo, yg) => {
                if (fo.get_jyqh_ybkc_db_user_params(user_params)) {
                    map_ybkc.set(fo, fo.get_jyqh_ybkc_db_user_params(user_params))
                } else {
                    //do nothing
                }
            }
            new Cxl_ypn({
                ctm_atvn_so_cxl_zhqh: (key, val) => {
                    zhqh(key, val)
                },
                ctm_atvn_pc_cxl_zhqh: (key, val) => {
                    zhqh(key, val)
                }
            }).ctm_vt_rn(this.get_ctm_sopc_jyqh_ybkc())
            return map_ybkc
        }
        this.get_sopc_jyqh_ybkc_db_dyih = (dyih) => {
            const map_ybkc = new Map()
            const zhqh = (fo, yg) => {
                if (fo.get_jyqh_ybkc_db_dyih(dyih)) {
                    map_ybkc.set(fo, fo.get_jyqh_ybkc_db_dyih(dyih))
                } else {
                    //do nothing
                }
            }
            new Cxl_ypn({
                ctm_atvn_so_cxl_zhqh: (key, val) => {
                    zhqh(key, val)
                },
                ctm_atvn_pc_cxl_zhqh: (key, val) => {
                    zhqh(key, val)
                }
            }).ctm_vt_rn(this.get_ctm_sopc_jyqh_ybkc())
            return map_ybkc
        }
        this.get_ctm_sopc_jyqh_ybkc = () => new Map().set(this, this.get_ctm_vxn_jyqh_ybkc())
        this.get_ctm_vxn_jyqh_ybkc = () => {
            const ctm_jyqh_ybkc = map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [yg1, yg1.get_ctm_vxn_jyqh_ybkc()]
            })) : this.get_map_jyqh_ybkc()
            return ctm_jyqh_ybkc//new Map().set([neig.wu, neig.lclc], ctm_lclc)
        }
        this.dreq_help = (mcvn) => {
            const map_nixb = new Map()
            new Cxl_ypn()
                .rzvo({
                    ctm_atvn_so_cxl_zhqh: (fo, yg) => {
                        if (String(yg).includes(mcvn)) {
                            map_nixb.set(fo, yg)
                        }
                    }
                    , ctm_atvn_pc_cxl_zhqh: (fo, yg) => {
                        if (fo.get_lclc(neig.user_params).includes(mcvn)) {
                            map_nixb.set(fo, fo.get_lclc(neig.user_params))
                        }
                    }
                })
                .ctm_vt_rn(this.get_ctm_sopc_lclc(neig.user_params))
            return [...map_nixb].map(rn1 => {
                // console.log("sdff", rn1[0].get_slm().get_neig())
                return `## ${[...rn1[0].get_map_slm().keys()]} => ${rn1[0].get_bnll_wu() + ": \n" + rn1[1]}`
            }).join("\n")
        }
        this.wfqq_zhqh = (neig_kp = {
            eqwy_user_params: 0,
            wm_atvn_joly_zhqh: []
        }) => {
            if (neig.user_params.done) {
                uzms("csrf-userparams cd done-" + neig.user_params)
            }
            // console.log(89, neig_kp.eqwy_user_params, neig.user_params)
            let tt_ye_ysl_yhld = neig.user_params._[neig_kp.eqwy_user_params + 1]
            let bnll_ysl_yhld = neig.user_params._[neig_kp.eqwy_user_params]
            yo_log_rr.yp_log({ bqeo: "bnll ysl w :" + bnll_ysl_yhld + "; tt ye ysl w :" + tt_ye_ysl_yhld, user_params: neig.user_params })
            if (neig_kp.tt_ye_ysl) {
                if (neig.user_params._[neig_kp.eqwy_user_params] != neig_kp.tt_ye_ysl) {
                    uzms("csrf-eqwy ss rnsf ac frgr-" + neig_kp.eqwy_user_params + '-kp-' + neig_kp.tt_ye_ysl)
                } else {
                    if (tt_ye_ysl_yhld) {
                        neig_kp.tt_ye_ysl = tt_ye_ysl_yhld
                    }
                }
            }
            if (!neig.user_params._) {
                uzms("csrf-user_params ra imfb fs-" + JSON.stringify(neig.user_params))
            }
            if (neig.user_params._[neig_kp.eqwy_user_params + 1] === "help" && !map_tsjq.has('help')) {
                neig_kp.eqwy_user_params++
                neig_kp.wm_atvn_joly_zhqh.push({ yo_ussk: this, bnll_wu: neig.wu, bnll_fo: neig.user_params._[neig_kp.eqwy_user_params - 1], bnll_eqwy: neig_kp.eqwy_user_params - 1, wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params), neig_2: Object.assign({}, neig_kp), bnll_rn: this, atvn: this.atvn_joly_zhqh })
                const yo_ussk_help = require("../yoch/yo_ussk_help")
                const jtyj = yo_ussk_help.set_slm(this).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).pilh_vxn_yhld_zhqh(Object.assign(neig_kp, { wm_atvn_joly_zhqh: [] }, { yo_ussk_kp: this }))
                neig.user_params.done = true
                return jtyj
                // return yo_ussk_help.set_slm(this).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).pilh_vxn_yhld_zhqh(Object.assign(neig_kp, { yo_ussk_kp: this }))
            }
            if (map_tsjq.size === 0) {
                const atvn_zhqh_1 = () => {
                    const wm_jtyj = neig_kp.wm_atvn_joly_zhqh.map((rn_bnll) => {
                        const bnll_jtyj = rn_bnll.bnll_rn.us_uzn(Object.assign(rn_bnll.neig_2, { mcvn_ga_jtyj: rn_bnll.atvn(rn_bnll.bnll_eqwy, rn_bnll.wm_lsud, neig.user_params, Object.assign({}, neig, rn_bnll.neig_2)) }))
                        neig.bnll_jtyj = bnll_jtyj
                        yo_log_rr.yp_log({ rj_atvn: rn_bnll.atvn.toString(), bqeo: 'ussk ux zhqh bnll joly atvn', bnll_wu: rn_bnll.bnll_wu, bnll_jtyj: bnll_jtyj })
                        return bnll_jtyj
                    })
                    yo_log_rr.yp_log({ rj_atvn: this.atvn_joly_zhqh.toString(), bqeo: 'ussk ux pabm zhqh okud joly atvn' })
                    const jtyj_se = this.atvn_joly_zhqh(neig_kp.eqwy_user_params, neig.user_params._.slice(neig_kp.eqwy_user_params + 1), neig.user_params, Object.assign({}, neig, neig_kp))
                    yo_log_rr.yp_log({ rj_atvn: this.atvn_joly_zhqh.toString(), bqeo: 'ussk ux zhqh okud joly atvn', se_jtyj: jtyj_se })
                    neig_kp.mcvn_ga_jtyj = jtyj_se
                    neig.mcvn_ga_jtyj = jtyj_se
                    const jtyj_2 = this.us_uzn(neig_kp)
                    if (!neig_kp.dyih_jyqh) {
                        uzms("csrf-jyqh dyih lh vv-" + neig_kp.dyih_jyqh)
                    }
                    map_jyqh_ybkc.set(neig_kp.dyih_jyqh, { bnll_jtyj: jtyj_2, bnll_eqwy: neig_kp.eqwy_user_params, user_params: neig.user_params, neig_2: Object.assign({}, neig_kp) })
                    jyqh_dyvy++
                    return jtyj_2
                }
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params + 1]
                if (neig.user_params.xbyb) {
                    this.set_xbyb(neig.user_params.xbyb)
                }

                if (fo_yhld !== undefined) {
                    if (this.get_neig().ah_yf_ysl_yj) {
                        if (neig_kp.slm?.get_vxn(fo_yhld)) {
                            neig_kp.eqwy_user_params++
                            neig_kp.wm_atvn_joly_zhqh.push({ yo_ussk: this, bnll_wu: neig.wu, bnll_fo: neig.user_params._[neig_kp.eqwy_user_params - 1], bnll_eqwy: neig_kp.eqwy_user_params - 1, wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params), neig_2: Object.assign({}, neig_kp), bnll_rn: this, atvn: this.atvn_joly_zhqh })
                            return this.pilh_slm_yhld_zhqh(neig_kp.slm.get_vxn(fo_yhld), Object.assign(neig_kp, { yo_ussk_kp: this }))
                        } else if (this.get_neig().kncp_acun_vxn_tsjq) {
                            if (neig.user_params.xbyb) {
                                this.set_xbyb(neig.user_params.xbyb)
                            }


                            return atvn_zhqh_1()
                        } else {
                            uzms("csrf-yf lb tsjq hmpc k v tsjq wu-" + fo_yhld + "-kp-" + neig.user_params._.join(" "))
                            // uzms("csrf-ss " + this.get_bnll_wu() + " yf lb tsjq hmpc k v tsjq wu-" + fo_yhld + "-kp-" + neig.user_params._.join(" "))
                        }
                    } else if (this.get_neig().kncp_acun_vxn_tsjq) {
                        if (neig.user_params.xbyb) {
                            this.set_xbyb(neig.user_params.xbyb)
                        }


                        return atvn_zhqh_1()
                    } else {
                        uzms("csrf-bi tsjq hmpc vxn tsjq-" + this.get_bnll_wu() + "-kp-" + neig.user_params._.join(" "))
                    }
                } else {
                    if (neig.user_params.xbyb) {
                        this.set_xbyb(neig.user_params.xbyb)
                    }


                    return atvn_zhqh_1()
                }

            } else {
                if (neig.user_params.xbyb) {
                    this.set_xbyb(neig.user_params.xbyb)
                }

                neig_kp.eqwy_user_params++
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params]
                // push se atvn_joly_zhqh gq ac w tt y atvn, ay vxn
                neig_kp.wm_atvn_joly_zhqh.push({ yo_ussk: this, bnll_wu: this.get_bnll_wu(), bnll_fo: neig.user_params._[neig_kp.eqwy_user_params - 1], bnll_eqwy: neig_kp.eqwy_user_params - 1, wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params), neig_2: Object.assign({}, neig_kp), bnll_rn: this, atvn: this.atvn_joly_zhqh })
                if (undefined === fo_yhld) {
                    uzms("csrf-nrap tt ye ysl mcvn,  zf fj oan ussk nott mcvn-" + [...map_tsjq.keys()].join(",") + "-kp-" + neig.user_params._.slice(0, neig_kp.eqwy_user_params).join(" "))
                } else if (!map_tsjq.has(fo_yhld)) {
                    if (this.get_neig().ah_yf_ysl_yj) {
                        if (neig_kp.slm?.get_vxn(fo_yhld)) {
                            return neig_kp.slm?.get_vxn(fo_yhld).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).pilh_vxn_yhld_zhqh(neig_kp)
                        }
                    }
                    uzms("csrf-bi yg ac zznq oc cd stlz n wu yh aecp zf aqfc jyqh ymce rsgm ymce ye tt ce ypzv n tsjq-" + fo_yhld)
                } else {
                    neig_kp.slm = this
                    const vxn = (map_tsjq.get(fo_yhld)
                        .set_slm(this).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu)
                        .set_user_params(neig.user_params))
                    return vxn.pilh_vxn_yhld_zhqh(neig_kp)
                }
            }
        }

        this.get_neig = () => neig
        this.get_ctm_vxn_lclc = (user_params = {}) => {
            const ctm_lclc = (map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [yg1, yg1.get_ctm_vxn_lclc(user_params)]
            })) : this.get_lclc(user_params)) || "bi tsjq hmpc vxn tsjq."
            return ctm_lclc//new Map().set([neig.wu, neig.lclc], ctm_lclc)
        }

        this.get_vxn = (wu) => {
            return map_tsjq.get(wu)
        }

        this.set_user_params = (user_params = {}) => {
            Object.assign(neig, { user_params })
            return this
        }
        // this.set_outputs = (outputs = {}) => {
        //     Object.assign(neig, { outputs })
        //     return this
        // }

        function lclc_trl_wdbu(rj_lclc_kp = "") {
            return rj_lclc_kp
                .replace(/(?<=^|\n)\s+(?=#+ )/g, "")
                .replace(/(?<=^)\s*(dyvy--|---|;;;)(?=[\w\-]+|)\s*?(?=\n|$)/igm, "```").replace(/(?<=^)\s*(--dyvy|---\+|;;;)\s*?(?=\n|$)/igm, "```")
        }
        this.get_lclc = (neig_kp = { vdum_ebwu: "wrvr" }) => {
            return new Jplp_rjwc().rzvo(Object.assign({ bqeo: lclc_trl_wdbu(neig.lclc), wu: neig.wu }, neig)).get_bqeo(neig_kp)
        }

        this.get_ctm_sopc_lclc = (user_params = {}) => {
            // return new Map().set([neig.wu, neig.lclc], this.get_ctm_vxn_lclc())
            return new Map().set(this, this.get_ctm_vxn_lclc(user_params))
        }

        this.atvn_help = (lclc, neig_kp) => {
            return lclc
        }
        this.set_help = (atvn_help = (lclc, neig_kp) => { }) => {
            // const neig_1 = Object.assign({ neig_kp }, neig_kp)
            this.atvn_help = atvn_help
            return this
        }
        this.ypVxn = (...args) => {
            args.forEach(yo_ussk => {
                zjzj_yf_uxux(yo_ussk, this)
                yp_vxn(yo_ussk.get_bnll_wu(), yo_ussk)
            })
            return this
        }

        // this.vdum = (yg) => {
        //     if (map_tsjq.has(yg)) {
        //         return map_tsjq.get(yg).atvn_joly_zhqh()
        //     } else {
        //         uzms("csrf-bi yg ac zznq oc cd stlz n wu yh-" + yg)
        //     }
        // }
        function w_user_params_cd_ynbc(user_params) {
            return !(!neig.user_params._)
        }
    }
}
module.exports = Ussk
// new Ussk().yp("A")
//     .get("A")
//     .yp("A-1", () => { }).yp("A-2").yp("A-3")

