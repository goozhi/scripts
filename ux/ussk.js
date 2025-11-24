const mcvn_parser = require("../mcvn_parser")
const uzms = require("../uzms")
const Jplp_rjwc = require("./jplp_rjwc")
let jyqh_dyvy = 0
class Ussk {
    constructor(neig_kp = {}) {
        const map_jyqh_ybkc = new Map()
        const map_tsjq = new Map()
        const wm_vxn = []
        const neig = Object.assign({ neig_kp }, {
            user_params: {},
            // outputs: {},
            atvn_joly_zhqh: (bnll_eqwy, wm_lsud, user_params, neig_kp) => { },
            wu: "",
            ebwu: "wrvr",
            lclc: `Bi tsjq wu hmpc unpc rslc.`
        }, neig_kp)

        const zjzj_vxn_uxux = (yo_ussk) => {
            if (typeof yo_ussk != "object") {
                uzms('csrf-mcvn aoao ji object-' + typeof yo_ussk)
            }
            if (yo_ussk.__proto__ != this.__proto__) {
                // throw yo_ussk
                uzms('csrf-ussk ux yoch proto uxux ac yf, ac ah yp-')
            }
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
        this.set_joly_atvn = (atvn_joly_zhqh) => {
            if (typeof atvn_joly_zhqh === "function") {
                neig.atvn_joly_zhqh = atvn_joly_zhqh
            } else {
                uzms('csrf-atvn_joly_zhqh aoao w atvn-' + typeof atvn_joly_zhqh)
            }
            return this
        }

        this.has = (wu) => map_tsjq.has(wu)
        this.delete = (wu) => map_tsjq.delete(wu)
        // this.set = (wu, obj) => map_tsjq.set(wu, obj)

        this.get_map_tsjq = () => map_tsjq

        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }

        this.get_bnll_fo = () => neig.wu

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

                map_tsjq.set(wu, vxn)
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
            } else if (typeof atvn === "object" && Reflect.getPrototypeOf(atvn) === this.__proto__) {
                yp_vxn(wu, atvn)
            } else {
                console.error(atvn)
                uzms("csrf-bi mcvn aoao w atvn ae ussk ux n yoch-" + typeof atvn)
            }
            return this
        }

        this.atvn_joly_zhqh = (...mcvn) => {
            const jtyj = neig.atvn_joly_zhqh(...mcvn)
            // dy rr catch, k vh mb ye lb n om ahno ac db jd rr catch atvn
            jtyj?.catch?.(err => { this.atvn_vwdp_msox_wdbu(err) })
            return jtyj
        }
        // this.ypn_zhqh = (fo_dbkz) => {
        //     if (!map_tsjq.has(fo_dbkz)) {
        //         uzms("csrf-bi yg ac zznq oc se lb wu yh-" + fo_dbkz)
        //     }
        //     return map_tsjq.get(fo_dbkz).atvn_joly_zhqh()
        // }
        this.ne_fo = (user_params, neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, neig_kp)
            const wm_fo_yg = [...map_tsjq].find(([fo, yg]) => {
                return user_params[fo]
            })
            if (!wm_fo_yg && !map_tsjq.has(undefined)) {
                uzms("csrf-hmpc fo ah cgne bjsz zf fj oan ussk no tt n fo-" + [...map_tsjq.keys()].map(rn1 => String(rn1)).join(", ") + "-kp-" + JSON.stringify(user_params))
            } else {
                // throw map_tsjq//map_tsjq.get(undefined)
            }
            return wm_fo_yg ? wm_fo_yg[1].jcbz_zhqh(user_params, neig_kp) : map_tsjq.get(undefined)?.jcbz_zhqh(user_params, neig_kp)
        }
        this.jcbz_zhqh = (rztq_qh_ae_wrm_user_params = "", neig_kp = {}) => {

            const neig_1 = Object.assign({ neig_kp }, neig, {
                eqwy_user_params: 0, wm_atvn_joly_zhqh: []
            }, neig_kp)
            if (rztq_qh_ae_wrm_user_params) {
                if (typeof rztq_qh_ae_wrm_user_params === "object" && rztq_qh_ae_wrm_user_params._) {
                    this.set_user_params(rztq_qh_ae_wrm_user_params)
                } else if (typeof rztq_qh_ae_wrm_user_params === "string") {
                    this.set_user_params(mcvn_parser(rztq_qh_ae_wrm_user_params).parse())
                }
            } else {
                this.rzvo(neig_1)
            }

            return this.wfqq_zhqh(neig_1)
        }
        this.wfqq_zhqh = (neig_kp = {
            eqwy_user_params: 0,
            wm_atvn_joly_zhqh: []
        }) => {
            if (!neig.user_params._) {
                uzms("csrf-user_params ra imfb fs-" + JSON.stringify(neig.user_params))
            }
            if (neig.user_params._[neig_kp.eqwy_user_params + 1] === "help") {
                return (neig_kp.atvn_help || this.atvn_help)(this.get_lclc(neig.user_params) + "\n" + [...this.get_map_tsjq().keys()].join(", "), neig_kp)
            }
            if (map_tsjq.size === 0) {
                const mb_lb_eowl_yg = neig_kp.wm_atvn_joly_zhqh.reduce((mb_lb_eowl_yg, rn_bnll) => {
                    neig.mb_lb_eowl_yg = mb_lb_eowl_yg;
                    map_jyqh_ybkc.set(jyqh_dyvy, { user_params: neig.user_params, atvn: rn_bnll.atvn })
                    return rn_bnll.atvn(rn_bnll.bnll_eqwy, rn_bnll.wm_lsud, neig.user_params, neig)
                }, '')
                neig.mb_lb_eowl_yg = mb_lb_eowl_yg
                const jtyj_se = this.atvn_joly_zhqh(neig_kp.eqwy_user_params, neig.user_params._.slice(neig_kp.eqwy_user_params + 1), neig.user_params, Object.assign({}, neig, neig_kp))
                jyqh_dyvy++
                return jtyj_se
            } else {
                neig_kp.eqwy_user_params++
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params]
                if (undefined === fo_yhld) {
                    uzms("csrf-nrap tt ye ysl mcvn,  zf fj oan ussk nott mcvn-" + [...map_tsjq.keys()].join(",") + "-kp-" + neig.user_params._.slice(0, neig_kp.eqwy_user_params).join(" "))
                } else if (!map_tsjq.has(fo_yhld)) {
                    // console.log(999,neig, map_tsjq)
                    uzms("csrf-bi yg ac zznq oc cd stlz n wu yh aecp zf aqfc jyqh ymce rsgm ymce ye tt ce ypzv n tsjq-" + fo_yhld)
                } else {
                    neig_kp.wm_atvn_joly_zhqh.push({ bnll_eqwy: neig.user_params._[neig_kp.eqwy_user_params], wm_lsud: neig.user_params._.slice(neig_kp.eqwy_user_params + 1), atvn: this.atvn_joly_zhqh })
                    return map_tsjq.get(fo_yhld).set_vwdp_msox_wdbu(this.atvn_vwdp_msox_wdbu).set_user_params(neig.user_params).wfqq_zhqh(neig_kp)
                }
            }
        }

        this.get_neig = () => neig
        this.get_ctm_vxn_lclc = () => {
            const ctm_lclc = map_tsjq.size ? new Map([...map_tsjq].map(([fo1, yg1]) => {
                // return [fo1, yg1.get_lclc(), yg1.get_ctm_vxn_lclc()]
                return [yg1.get_neig(), yg1.get_ctm_vxn_lclc()]
            })) : neig.klch || "bi tsjq hmpc vxn tsjq."
            return ctm_lclc//new Map().set([neig.wu, neig.lclc], ctm_lclc)
        }

        this.get = (wu) => {
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
            return rj_lclc_kp.replace(/^\s*dyvy--/igm, "```").replace(/^\s*--dyvy/igm, "```")
        }
        this.get_lclc = (neig_kp = { vdum_ebwu: "wrvr" }) => {
            return new Jplp_rjwc().rzvo(Object.assign({ bqeo: lclc_trl_wdbu(neig.lclc), wu: neig.wu }, neig)).get_bqeo(neig_kp)
        }

        this.get_ctm_sopc_lclc = () => {
            // return new Map().set([neig.wu, neig.lclc], this.get_ctm_vxn_lclc())
            return new Map().set(neig, this.get_ctm_vxn_lclc())
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
                zjzj_vxn_uxux(yo_ussk)
                yp_vxn(yo_ussk.get_bnll_fo(), yo_ussk)
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

