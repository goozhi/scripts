const X_map = require("../ux-a/x_map");
const Bwzq_1 = require("../ux-b/bwzq");
const Ussk = require("../ux-b/ussk");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");

class Bwzq extends Bwzq_1 {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), { atvn_zhqh: (yfux) => { } })
        this.mh_bwo = (wrm_zk_shn = { wm_shn: [], neig_kp: {} }, di_wm_lifc_shn = [{ wm_shn: [], neig_kp: {} }]) => {
            const wm_lifc_shn_okpy_vxn = di_wm_lifc_shn.map(rn1 => this.ytnc_get_bj_zhqh(rn1.wm_shn, rn1.neig_kp, this))
            wrm_zk_shn.neig_kp.di_wm_lifc_shn = di_wm_lifc_shn
            wrm_zk_shn.neig_kp.wm_lifc_shn_okpy_vxn = wm_lifc_shn_okpy_vxn

            const zk_shn_okpy_vxn = this.ytnc_get_bj_zhqh(wrm_zk_shn.wm_shn, wrm_zk_shn.neig_kp, this)
            return zk_shn_okpy_vxn
        }

    }
}
module.exports = Bwzq