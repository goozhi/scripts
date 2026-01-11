const X_map = require("../ux-a/x_map");
const Zzuy = require("../ux-d/zzuy-rr");
const Jplp_kplu_sdbu = require("../ux/jplp_kplu_sdbu");
const uzms = require("../uzms");

module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const path = require("path")

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            w_jcbz_ngrw_nikc: true,
        }, neig_kp)
        this.zp_seyy_wyzv_bnlb_ce_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({ w_wyzv_ce: true })
        }
        this.zzzz_sopc = () => {
            const wdbu_msox = (err) => { throw err }
            this.di_li_v_yfux_cqpi(async (yfux) => {
                await yfux.allright()?.catch?.(err => wdbu_msox(err))
                yfux.bvzd_zzzz()
            })
            return this
        }
        this.w_bnlb_cd_imfb = () => !!this.get_neig().w_bnlb_cd_imfb
        this.imfb_bnlb_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_imfb: true
                , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.wyzv_bnlb_ce_seyy_vnwy = async () => {
            return this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy({
                w_wyzv_ce: true
                // , atvn_wlba: () => this.get_neig().w_bnlb_cd_imfb = true
            })
        }
        this.imfb_bnlb_ae_zp_seyy_wyzv_ce_vnwy = async (neig_kp) => {
            return this.imfb_ae_zp_seyy_wyzv_ce_vnwy(Object.assign({
                neig_vxn: {
                    // nikc_ph: this.get_vxn_nmky_nikc(),
                    atvn_get_nikc_ph: (vkih) => this.get_vxn_nmky_nikc(vkih)
                }
            }, neig_kp)).catch(e => { throw e })
        }

        this.fo_shn_yj_zzuy_vwdp = async (wm_fo_imfs = [], vxn_wlba_atvn = async (vxn) => { }, atvn_fo_ldrg = (fo, slm_yfux) => fo) => {
            return await this.get_yo_vnwy_wwdb().fo_shn_yj_vwdp(wm_fo_imfs, vxn_wlba_atvn, atvn_fo_ldrg).catch(err => { throw err })
        }


    }
}
