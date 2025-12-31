const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Zogl_hese_c = require("../ux-c/zogl-hese-c")

module.exports = class Yp_zogl_d extends Yp_ux_kp {
    constructor(neig_kp) {
        const yo_zogl_hese = new Zogl_hese_c(neig_kp)
        const neig = yo_zogl_hese.get_neig()
        super(neig)
        this.add_zogl = (...args) => {
            yo_zogl_hese.add(...args)
            return this
        }
        this.drbz_bnlb_zogl = (...args) => {
            yo_zogl_hese.drbz_zogl(this.get_neig())
            return this
        }
        this.drbz_sopc_zogl = () => {
            this.di_li_v_yfux_cqpi((ux) => {
                ux.drbz_bnlb_zogl()
            })
            return this
        }
    }
}