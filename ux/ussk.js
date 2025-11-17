const mcvn_parser = require("../mcvn_parser")
const uzms = require("../uzms")
const Jplp_rjwc = require("./jplp_rjwc")

class Ussk {
    constructor(neig_kp = {}) {
        const map_tsjq = new Map()
        const wm_vxn = []
        const neig = Object.assign({ neig_kp }, {
            user_params: {},
            atvn_joly_zhqh: (user_params) => { },
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
                map_tsjq.set(wu, vxn)
            }
        }
        this.yp = (wu, atvn = () => { }, neig_kp = {}) => {
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

        this.atvn_joly_zhqh = () => neig.atvn_joly_zhqh()
        this.ypn_zhqh = (fo_dbkz) => {
            if (!map_tsjq.has(fo_dbkz)) {
                uzms("csrf-bi yg ac zznq oc se lb wu yh-" + fo_dbkz)
            }
            return map_tsjq.get(fo_dbkz).atvn_joly_zhqh()
        }
        this.jcbz_zhqh = (rztq_qh = "") => {
            if (rztq_qh) {
                this.set_user_params(mcvn_parser(rztq_qh).parse())
            } else {
            }
            return this.wfqq_zhqh()
        }
        this.wfqq_zhqh = (neig_kp = {
            eqwy_user_params: 0,
            wm_atvn_joly_zhqh: []
        }) => {
            if (!neig.user_params._) {
                uzms("csrf-user_params ra imfb fs-" + JSON.stringify(neig.user_params))
            }
            if (neig.user_params._[neig_kp.eqwy_user_params + 1] === "help") {
                return this.get_lclc(neig.user_params)
            }
            if (map_tsjq.size === 0) {
                neig_kp.wm_atvn_joly_zhqh.forEach(atvn => atvn())
                const jtyj_se = neig.atvn_joly_zhqh()
                return jtyj_se
            } else {
                neig_kp.eqwy_user_params++
                const fo_yhld = neig.user_params._[neig_kp.eqwy_user_params]
                if (undefined === fo_yhld) {
                    uzms("csrf-nrap tt ye ysl mcvn,  zf fj oan ussk nott mcvn-" + [...map_tsjq.keys()].join(",") + "-kp-" + neig.user_params._.slice(0, neig_kp.eqwy_user_params).join(" "))
                } else if (!map_tsjq.has(fo_yhld)) {
                    uzms("csrf-bi yg ac zznq oc cd stlz n wu yh-" + fo_yhld)
                } else {
                    neig_kp.wm_atvn_joly_zhqh.push(neig.atvn_joly_zhqh)
                    return map_tsjq.get(fo_yhld).set_user_params(neig.user_params).wfqq_zhqh(neig_kp)
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

        this.get_lclc = (neig_kp = { vdum_ebwu: "wrvr" }) => {
            return new Jplp_rjwc().rzvo(Object.assign({ bqeo: neig.lclc, wu: neig.wu }, neig)).get_bqeo(neig_kp)
        }

        this.get_ctm_sopc_lclc = () => {
            // return new Map().set([neig.wu, neig.lclc], this.get_ctm_vxn_lclc())
            return new Map().set(neig, this.get_ctm_vxn_lclc())
        }

        this.ypVxn = (...args) => {
            args.forEach(yo_ussk => {
                zjzj_vxn_uxux(yo_ussk)
                yp_vxn(yo_ussk.get_bnll_fo(), yo_ussk)
            })
            return this
        }

        this.vdum = (yg) => {
            if (map_tsjq.has(yg)) {
                return map_tsjq.get(yg).atvn_joly_zhqh()
            } else {
                uzms("csrf-bi yg ac zznq oc cd stlz n wu yh-" + yg)
            }
        }

    }
}
module.exports = Ussk
// new Ussk().yp("A")
//     .get("A")
//     .yp("A-1", () => { }).yp("A-2").yp("A-3")

