// const grbj_ux = require("../grbj_ux")
const uzms = require("../uzms")
const vkih_hfbc = require("../vkih_hfbc")
const Yp_bvzd_kivo_d = require("../ux-d/yp_bvzd_kivo_d")
const Yp_rjqt_cqpi_d = require("../ux-d/yp_rjqt_cqpi_d")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Neig_imfb = require("../ux-a/neig-imfb")
const fsx = require('fs-extra')
const path = require('path')
const ngnc_nikc_paaw = require("../ngnc_nikc_paaw")

class Yp_bvzd_rr_e extends Yp_rjqt_cqpi_d {
    constructor(neig_kp, neig_nomr) {
        // new Neig_imfb(neig).hmpc_cl_rzvo({
        // })
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            vn_trl_kivo_zdog: Date.now() + 500,
            fsx,
            rjqt_cqpi_fr: "writeFile",
            w_yxna_jcbz_ngnc: true
        }, neig_kp)
        const yo_bvzd_kivo = new Yp_bvzd_kivo_d(this.get_neig()).set_neig_xfbj_hqtz("zqsc")
        this.set_rr_ud_zhqh = (atvn) => {
            this.rr_ud_zhqh = atvn
            return this
        }
        this.bv_rrzv_vnwy = (yxna, bqeo, wlba_atvn = (yxna, bqeo) => { }) => {
            if (!fsx.existsSync(yxna) && this.get_neig().w_yxna_jcbz_ngnc) {
                if (typeof yxna != "string") {
                    uzms("csrf-yxna aoao w zt fr sum-" + typeof yxna)
                }
                ngnc_nikc_paaw(path.dirname(yxna))
            }
            yo_bvzd_kivo.jcbz_yp(yxna, { wu: this.get_bnll_wu() + "-bvzd-kivo" })
                .get_vxn(yxna)
                .set_trl_kivo_zdog(this.get_neig().vn_trl_kivo_zdog).uufb_bvzd_kivo(() => {
                    const jtyj = this[this.get_neig().rjqt_cqpi_fr](yxna, bqeo)
                    if (jtyj.catch && jtyj.then) {
                        jtyj.then(res => {
                            if (typeof wlba_atvn != "function") {
                                console.log(32, bqeo)
                                uzms("csrf-wlba atvn aoao w function-" + typeof wlba_atvn + "-kp-" + yxna)
                            }
                            wlba_atvn(yxna, bqeo)
                            this.rr_ud_zhqh?.(yxna, bqeo)
                        }).catch?.(e => {
                            this.bvzd_vwdp_msox_wdbu(e)
                        })
                    } else {
                        wlba_atvn(yxna, bqeo)
                        this.rr_ud_zhqh?.(yxna, bqeo)
                    }
                    return this
                }, () => {
                })
            return this
        }
    }
}
module.exports = Yp_bvzd_rr_e