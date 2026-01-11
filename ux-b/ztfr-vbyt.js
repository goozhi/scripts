// const X_map = require("../ux-a/x_map");
const Yp_ux_kp = require("../ux-kp/yp_ux_kp");
const Ussk = require("./ussk");

module.exports = class Ztfr_vbyt extends Yp_ux_kp {
    constructor(neig_kp) {
        super(neig_kp)
        Object.assign(this.get_neig(), {
            atvn_ztfr_vbyt: (rj_kp, rj_fo) => rj_kp === rj_fo
        }, neig_kp)
        this.vbyt = (rj_kp, rj_fo) => {
            return this.get_neig().atvn_ztfr_vbyt(rj_kp, rj_fo)
        }
        this.set_vbyt_hqtz = (atvn = (rj_kp, rj_fo) => false) => {
            this.get_neig().atvn_ztfr_vbyt = atvn
            return this
        }
    }
}