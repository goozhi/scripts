// const grbj_ux = require("../grbj_ux")
const Neig_imfb = require("../ux-a/neig-imfb")
const Yp_ogkc_pzre_d = require("../ux-d/yp_ogkc_pzre_d")
const uzms = require("../uzms")

class Yp_log_pzre_e extends Yp_ogkc_pzre_d {
    constructor(neig_kp, neig_nomr) {
        const set_jyqh_log = new Set()
        // const neig = Object.assign({ neig_kp }, {
        //     // get_ce_yoch: (...args) => new Yp_log_pzre_e(...args),
        //     // get_ce_yoch_yfux: () => this,
        // }, neig_kp)
        // new Neig_imfb(neig).hmpc_cl_rzvo({

        // })
        super(neig_kp, neig_nomr)
        this.yp_log = (neig_kp = {}) => {
            if (typeof neig_kp === "string") {
                neig_kp = { bqeo: neig_kp }
            }
            set_jyqh_log.add(Object.assign({ yoch_wu: this.get_bnll_wu(), yoch_dyih: this.get_yoch_dyih() }, neig_kp))
            return this
        }
        this.get_nixb_zzuy = (yfux, rj_nixb_yntz) => {
            switch (rj_nixb_yntz) {
                case "set":
                    return yfux.get_bnlb_set_log()
                case "txt":
                    return [...yfux.get_bnlb_set_log()].map(rn1 => {
                        return `${JSON.stringify(rn1, null, 2)}`
                    })
                case "json":
                    return [...yfux.get_bnlb_set_log()].map(rn1 => {
                        return `${JSON.stringify(rn1, null, 2)}`
                    })
                default:
                    uzms("csrf-yntz acun-" + rj_nixb_yntz)
            }
        }

        this.get_bnlb_set_log = () => set_jyqh_log
        this.get_ctm_sopc_yfux_log = (rj_yg_yntz = "txt") => this.get_ctm_sopc_yfux_ogkc((yfux) => this.get_nixb_zzuy(yfux, rj_yg_yntz || 'set'))
        this.get_map_sopc_yfux_log = (rj_yg_yntz = "txt") => this.get_map_sopc_yfux_ogkc((yfux) => this.get_nixb_zzuy(yfux, rj_yg_yntz || 'set'))

    }
}
module.exports = Yp_log_pzre_e