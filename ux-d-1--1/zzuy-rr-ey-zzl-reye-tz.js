const fs = require('fs')
const Zzuy = require("../ux-d-1/zzuy-rr-ey-zzl-tz-wwdb");
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const ngnc_nikc_paaw = require("../ngnc_nikc_paaw");
        const path = require("path")

        super(neig_kp, neig_nomr)
        this.zp_seyy_rzvo_se_wrm_kp = () => {
            const yxna = this.get_rjwc_seyy_yxna()
            if (fs.existsSync(yxna)) {
                const wrm_kp = require(yxna)
                Object.assign(this.get_neig().wrm_kp, wrm_kp)
                // nq yoch fs se ux zd om ycbi zqjp ypzv mrzz lw gq ac ji dynq yp
                // this.get_map_nomr_yfux_yoch_fs_mrzz().set(this.get_yoch_dyih(), this)
            } else {
                // do nothing
            }
        }
        this.bvzd_zzzz = async (wlba_atvn = (yxna, bqeo) => { }) => {
            if (!this.w_cd_imfb()
                && (/ra.znzk/i.test(this.get_neig().wrm_kp.wu) || !this.get_neig().wrm_kp.wu)
                && (!this.get_neig().wrm_kp.bqeo || /ra.znzk/i.test(this.get_neig().wrm_kp.bqeo))) {
                return this
            }
            await this.get_yo_yp_bvzd_rr().bv_rrzv_vnwy(this.get_rjwc_seyy_yxna(), JSON.stringify(this.get_wrm_kp_seyy_fs_vnwy()), wlba_atvn).catch?.(err => { throw err })
            return this
        }
        this.get_wrm_kp_seyy_fs_vnwy = () => {
            return Object.assign({}, this.get_neig().wrm_kp, {
                wm_slm: [...this.get_map_slm().keys()],
                wm_vxn: [...this.get_map_vxn().keys()],
                wm_lil_slm: [...this.get_map_kl('lil_slm').keys()],
                wm_lil_vxn: [...this.get_map_kl('lil_vxn').keys()]
            })
        }
        this.get_nixb_rjwc_seyy_yxna = (vkih) => path.join(this.get_neig().nikc_ph, "rjwc", vkih + ".json")
        this.get_rjwc_seyy_yxna = () => this.get_nixb_rjwc_seyy_yxna(this.get_yoch_dyih())

        this.zzzz = this.bvzd_zzzz


    }
}