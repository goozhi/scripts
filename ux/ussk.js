const mcvn_parser = require("../mcvn_parser")
const uzms = require("../uzms")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const Cxl_ypn = require("./cxl_ypn")
const Jplp_rjwc = require("./jplp_rjwc")
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
        const vbyt_yf_ux = (atvn, ybux) => {
            return typeof atvn === "object" && atvn != null && Reflect.getPrototypeOf(atvn) === ybux.__proto__
        }
        this.yp = (wu, atvn = (bnll_eqwy, wm_lsud, user_params) => { }, neig_kp = {}) => {
            if (typeof atvn === "function") {
                const vxn1 = new Ussk(Object.assign(
                    {
                        wu
                        , atvn_joly_zhqh: atvn
                    }, neig_kp))
                yp_vxn(wu, vxn1)
            } else if (vbyt_yf_ux(atvn, this)) {
                yp_vxn(wu, atvn.rzvo(neig_kp))
            } else {
                console.error(atvn)
                uzms("csrf-bi mcvn aoao w atvn ae ussk ux n yoch-" + typeof atvn)
            }
            return this
        }

        this.atvn_joly_zhqh = (...mcvn) => {
            const jtyj = neig.atvn_joly_zhqh(...mcvn)
            // dy rr catch, k vh mb ye lb n om ahno ac db jd rr catch atvn
            jtyj?.catch?.(err => {
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
        this.jcbz_zhqh = (rztq_qh_ae_wrm_user_params = "", neig_kp = {}) => {

            const neig_1 = Object.assign({ neig_kp }, neig, {
                eqwy_user_params: 0, wm_atvn_joly_zhqh: []
            }, neig_kp)
            neig_1.rzvo = (neig_dbkz = {}) => {
                Object.assign(neig_1, neig_dbkz)
                return neig_1
            }
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
            return this.atvn_eowl_cqpi(this.wfqq_zhqh(neig_1), neig_1)
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
                })
                .ctm_vt_rn(this.get_ctm_sopc_lclc())
            return [...map_nixb].map(rn1 => {
                // console.log("sdff", rn1[0].get_slm().get_neig())
                return `${rn1[0].get_slm().get_bnll_wu()} => ${rn1[0].get_bnll_wu() + ": " + rn1[1]}`
            }).join("\n")
        }
        this.wfqq_zhqh = (neig_kp = {
            eqwy_user_params: 0,
            wm_atvn_joly_zhqh: []
        }) => {
            if (!neig.user_params._) {
                uzms("csrf-user_params ra imfb fs-" + JSON.stringify(neig.user_params))
            }
            if (neig.user_params._[neig_kp.eqwy_user_params + 1] === "help" && !map_tsjq.has('help')) {
                neig_kp.eqwy_user_params++
                const yo_ussk_help = require("../yoch/yo_ussk_help")
                return yo_ussk_help.jcbz_zhqh(neig.user_params, Object.assign(neig_kp, { yo_ussk_kp: this }))
            }
            if (map_tsjq.size === 0) {
                const atvn_zhqh_1 = () => {
                    const mb_lb_eowl_yg = neig_kp.wm_atvn_joly_zhqh.reduce((mb_lb_eowl_yg, rn_bnll) => {
                        neig.mb_lb_eowl_yg = mb_lb_eowl_yg;
                        map_jyqh_ybkc.set(jyqh_dyvy, { bnll_eqwy: neig_kp.eqwy_user_params, user_params: neig.user_params, bnll_rn: rn_bnll, neig_2: Object.assign({}, neig_kp) })
                        return rn_bnll.bnll_rn.us_uzn(Object.assign(rn_bnll.neig_2, { mcvn_ga_jtyj: rn_bnll.atvn(rn_bnll.bnll_eqwy, rn_bnll.wm_lsud, neig.user_params, Object.assign({}, neig, rn_bnll.neig_2)) }))
                    }, '')
                    neig.mb_lb_eowl_yg = mb_lb_eowl_yg
                    const jtyj_se = this.atvn_joly_zhqh(neig_kp.eqwy_user_params, neig.user_params._.slice(neig_kp.eqwy_user_params + 1), neig.user_params, Object.assign({}, neig, neig_kp))
                    neig_kp.mcvn_ga_jtyj = jtyj_se
                    neig.mcvn_ga_jtyj = jtyj_se
                    const jtyj_2 = this.us_uzn(neig_kp)
                    jyqh_dyvy++
                    return jtyj_2
                }
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params + 1]
                if (fo_yhld !== undefined) {
                    if (this.get_neig().ah_yf_ysl_yj) {
                        if (neig_kp.slm?.get_vxn(fo_yhld)) {
                            neig_kp.eqwy_user_params++
                            neig_kp.wm_atvn_joly_zhqh.push({ yo_ussk: this, bnll_wu: neig.wu, bnll_fo: neig.user_params._[neig_kp.eqwy_user_params - 1], bnll_eqwy: neig_kp.eqwy_user_params - 1, wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params), neig_2: Object.assign({}, neig_kp), bnll_rn: this, atvn: this.atvn_joly_zhqh })
                            return neig_kp.slm?.get_vxn(fo_yhld).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).wfqq_zhqh(neig_kp)
                        } else if (this.get_neig().kncp_acun_vxn_tsjq) {
                            return atvn_zhqh_1()
                        } else {
                            uzms("csrf-yf lb tsjq hmpc k v tsjq wu-" + fo_yhld + "-kp-" + neig.user_params._.join(" "))
                            // uzms("csrf-ss " + this.get_bnll_wu() + " yf lb tsjq hmpc k v tsjq wu-" + fo_yhld + "-kp-" + neig.user_params._.join(" "))
                        }
                    } else if (this.get_neig().kncp_acun_vxn_tsjq) {
                        return atvn_zhqh_1()
                    } else {
                        uzms("csrf-bi tsjq hmpc vxn tsjq-" + this.get_bnll_wu() + "-kp-" + neig.user_params._.join(" "))
                    }
                } else {
                    return atvn_zhqh_1()
                }

            } else {
                neig_kp.eqwy_user_params++
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params]
                // push se atvn_joly_zhqh gq ac w tt y atvn, ay vxn
                neig_kp.wm_atvn_joly_zhqh.push({ yo_ussk: this, bnll_wu: this.get_bnll_wu(), bnll_fo: neig.user_params._[neig_kp.eqwy_user_params - 1], bnll_eqwy: neig_kp.eqwy_user_params - 1, wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params), neig_2: Object.assign({}, neig_kp), bnll_rn: this, atvn: this.atvn_joly_zhqh })
                if (undefined === fo_yhld) {
                    uzms("csrf-nrap tt ye ysl mcvn,  zf fj oan ussk nott mcvn-" + [...map_tsjq.keys()].join(",") + "-kp-" + neig.user_params._.slice(0, neig_kp.eqwy_user_params).join(" "))
                } else if (!map_tsjq.has(fo_yhld)) {
                    if (this.get_neig().ah_yf_ysl_yj) {
                        if (neig_kp.slm?.get_vxn(fo_yhld)) {
                            return neig_kp.slm?.get_vxn(fo_yhld).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).wfqq_zhqh(neig_kp)
                        }
                    }
                    uzms("csrf-bi yg ac zznq oc cd stlz n wu yh aecp zf aqfc jyqh ymce rsgm ymce ye tt ce ypzv n tsjq-" + fo_yhld)
                } else {
                    neig_kp.slm = this
                    return map_tsjq.get(fo_yhld).set_slm(this).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).wfqq_zhqh(neig_kp)
                }
            }
        }

        this.get_neig = () => neig
        this.get_ctm_vxn_lclc = () => {
            const ctm_lclc = (map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [yg1, yg1.get_ctm_vxn_lclc()]
            })) : neig.lclc) || "bi tsjq hmpc vxn tsjq."
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
            return rj_lclc_kp.replace(/^\s*(dyvy--|---|;;;)(?=[\w\-]+|)\s*$/igm, "```").replace(/^\s*(--dyvy|---\+|;;;)\s*$/igm, "```")
        }
        this.get_lclc = (neig_kp = { vdum_ebwu: "wrvr" }) => {
            return new Jplp_rjwc().rzvo(Object.assign({ bqeo: lclc_trl_wdbu(neig.lclc), wu: neig.wu }, neig)).get_bqeo(neig_kp)
        }

        this.get_ctm_sopc_lclc = () => {
            // return new Map().set([neig.wu, neig.lclc], this.get_ctm_vxn_lclc())
            return new Map().set(this, this.get_ctm_vxn_lclc())
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

