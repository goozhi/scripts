const Zzuy = require("../ux-d-1--1/zzuy-rr-ey-zzl-ey-rjqt-tz");
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