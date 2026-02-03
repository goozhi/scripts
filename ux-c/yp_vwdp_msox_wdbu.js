const Neig_imfb = require("../ux-a/neig-imfb")
const { Yp_ux_wwdb } = require("../ux-kp/yp_ux_a")


class Yp_vwdp_msox_wdbu extends Yp_ux_wwdb {
    constructor(neig_kp = {}) {
        super(neig_kp)
        Object.assign(this.get_neig(), { neig_kp }, {
            bvzd_vwdp_msox_wdbu_atvn: (e) => { console.error(e) }
        }, neig_kp)
        // new Neig_imfb(neig).hmpc_cl_rzvo({
        // })
        this.set_bvzd_vwdp_msox_wdbu_atvn = (atvn) => {
            this.get_neig().bvzd_vwdp_msox_wdbu_atvn = atvn
        }
        this.get_bvzd_vwdp_msox_wdbu_atvn = () => this.get_neig().bvzd_vwdp_msox_wdbu_atvn
        this.bvzd_vwdp_msox_wdbu = (e) => this.get_neig().bvzd_vwdp_msox_wdbu_atvn(e)
    }
}
module.exports = Yp_vwdp_msox_wdbu