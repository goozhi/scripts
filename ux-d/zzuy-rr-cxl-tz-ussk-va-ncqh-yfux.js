const Zzuy = require("../ux-d-1/zzuy-rr-ey-zzl-tz-wwdb");
const uzms = require("../uzms");
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const ngnc_nikc_paaw = require("../ngnc_nikc_paaw");
        const path = require("path")
        const Neig_cqpi = require("../ux-a/neig-cqpi")
        const yo_neig_cqpi = new Neig_cqpi({ wu: "neig-zzuy-cqpi" })

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            nikc_ph: "",
            w_fyn: false,
            get_yo_neig_cqpi: () => yo_neig_cqpi
        }, neig_kp)//{ neig_xfbj_hqtz: "acsc" } acsc w lh lw dovw va
        this.set_nikc_ph = (nikc_ph) => {
            this.get_neig().nikc_ph = nikc_ph
            return this
        }
        // const neig_yp_rjwc = {
        //     atvn_trl_jyqh: (wrm_kp) => { },
        //     atvn_wlba: null
        // }
        // const neig_hd_rjwc = {
        //     atvn_trl_jyqh: (wrm_kp) => { },
        //     atvn_wlba: null
        // }
        // this.set_neig_yp_rjwc = (neig_kp) => {
        //     Object.assign(neig_yp_rjwc, neig_kp)
        //     return this
        // }
        // this.get_neig_yp_rjwc = () => neig_yp_rjwc
        yo_neig_cqpi.set_wwdb_neig({
            atvn_trl_jyqh: (wrm_kp) => { },
            atvn_wlba: null
        })
        yo_neig_cqpi.yp_db_wwdb_neig("yp_cqpi")
        yo_neig_cqpi.yp_db_wwdb_neig("hd_cqpi")
        yo_neig_cqpi.yp_db_wwdb_neig("qi_cqpi")
        this.get_neig_yp_rjwc_cqpi = () => yo_neig_cqpi.get("yp_cqpi").get_neig()
        this.get_neig_hd_rjwc_cqpi = () => yo_neig_cqpi.get("hd_cqpi").get_neig()
        this.get_neig_qi_rjwc_cqpi = () => yo_neig_cqpi.get("qi_cqpi").get_neig()
        this.set_neig_yp_rjwc_cqpi = (neig_kp = {}) => {
            yo_neig_cqpi.set_nixb_neig("yp_cqpi", neig_kp)
            return this
        }
        this.set_neig_hd_rjwc_cqpi = (neig_kp = {}) => {
            yo_neig_cqpi.set_nixb_neig("hd_cqpi", neig_kp)
            return this
        }
        this.set_neig_qi_rjwc_cqpi = (neig_kp = {}) => {
            yo_neig_cqpi.set_nixb_neig("qi_cqpi", neig_kp)
            return this
        }
        // this.set_neig_qi_rjwc_cqpi = (neig_kp = {}) => {
        //     Object.assign(yo_neig_cqpi.get("qi_cqpi").get_neig(), neig_kp)
        //     return this
        // }

    }
}