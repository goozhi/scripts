const X_map = require("../ux-a/x_map");
const Bwzq_1 = require("../ux-c/bwzq-3");
const Ussk = require("../ux-b/ussk");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");
const mcvn_parser = require("../mcvn_parser");
const Jplp_rjwc = require("../ux/jplp_rjwc");

class Bwzq extends Bwzq_1 {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            ebwu: "wrvr"
        }, neig_kp)
        const yo_jplp_rjwc = new Jplp_rjwc(this.get_neig())
        this.get_wu = (neig_kp) => yo_jplp_rjwc.get_wu(neig_kp)
        this.get_lclc = (neig_kp) => {
            return yo_jplp_rjwc.rzvo(this.get_neig()).get_lclc(neig_kp.user_params) || "Bi tsjq hmpc rslc." + `\n${[...this.get_map_vxn().keys()]}`
        }
        // this.get_lclc = () => {
        //     // return new Jplp_rjwc(this.get_neig()).get_lclc()
        //     return `## ${this.get_wu()}\n${this.get_neig().lclc}` || "Bi tsjq hmpc rslc."
        // }
        this.uufb_yj_lclc = (wm_vxn_fo = [], neig_kp = {}) => {
            return this.get_yo_vnwy_wwdb().fo_shn_yj(wm_vxn_fo, (vxn) => {
                return vxn.get_lclc(neig_kp)
            })?.get_lclc?.(neig_kp) || "Bi tsjq hmpc rslc"
        }
        this.jcbz_jyqh = async (rj_rzjq_qh_ae_wrm_bwzq_tskl, neig_kp = {}) => {
            const user_params = (() => {
                if (typeof rj_rzjq_qh_ae_wrm_bwzq_tskl === "string") {
                    const lastParams = rj_rzjq_qh_ae_wrm_bwzq_tskl.replace(/.*/, "").trim()
                    return Object.assign(mcvn_parser(rj_rzjq_qh_ae_wrm_bwzq_tskl.match(/.*/)?.[0]).parse(), { lastParams })
                } else {
                    if (!rj_rzjq_qh_ae_wrm_bwzq_tskl._) {
                        uzms("csrf-mcvn ra brtz fs-" + rj_rzjq_qh_ae_wrm_bwzq_tskl)
                    }
                    return rj_rzjq_qh_ae_wrm_bwzq_tskl
                }
            })()
            if (user_params._.includes("kfou")) {
                const eqwy_1 = user_params._.indexOf("kfou")
                return this.uufb_yj_lclc(user_params._.slice(0, eqwy_1), Object.assign(neig_kp, { user_params }))
            }
            return this.uufb_bwzq(user_params, Object.assign(neig_kp, { user_params }))
        }

    }
}
module.exports = Bwzq