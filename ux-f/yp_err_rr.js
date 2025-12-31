const uzms = require("../uzms")
const path = require('path')
const vkih_hfbc = require("../vkih_hfbc")
const Yp_err_pzre_e = require("../ux-e/yp_err_pzre_e")
const Yp_bvzd_ogkc_pzre = require("../ux-e/yp_bvzd_ogkc_pzre")
const ussk_atvn = require("../ussk_atvn")
const Neig_imfb = require("../ux-a/neig-imfb")
const fsx = require('fs-extra')
const rluuSopc = require("../atvn-kp/rluu-sopc")

class Yp_err_rr extends Yp_err_pzre_e {
    constructor(neig_kp = {}, neig_nomr) {
        super(neig_kp, neig_nomr)

        // new Neig_imfb(neig).hmpc_cl_rzvo({
        // })
        Object.assign(this.get_neig(), {
            zk_nikc: 'out/msg',
            fsx,
            rrzv_yntz: "json",
            bnlb_err_rjqt_xbst: 'bnlb_err_rjqt',
            noph_err_rjqt_xbst: "noph_err_rjqt"
        }, neig_kp)
        const yo_yp_bvzd_ogkc = new Yp_bvzd_ogkc_pzre(this.get_neig()).set_neig_xfbj_hqtz('zqsc')
        // rvdb zqsc hqtz ahno zqjp ja neig tssc jcjc n neig
        // this.rzvo_yp_bvzd_ogkc = (neig_kp) => {
        //     yo_yp_bvzd_ogkc.rzvo(neig_kp)
        // }
        this.rrzv_bnlb_err = (wlba_atvn = (yxna, bqeo) => { }) => {
            return yo_yp_bvzd_ogkc.rrzv_ogkc_vnwy('bnlb_err_rjqt_xbst', JSON.stringify([...this.get_map_sopc_yfux_err(yo_yp_bvzd_ogkc.get_rrzv_yntz())], null, 2), wlba_atvn)
        }
        this.rrzv_noph_err = (wlba_atvn = (yxna, bqeo) => { }) => {
            return yo_yp_bvzd_ogkc.rrzv_ogkc_vnwy('noph_err_rjqt_xbst', JSON.stringify(rluuSopc(this.get_ctm_sopc_yfux_err(yo_yp_bvzd_ogkc.get_rrzv_yntz())), null, 2), wlba_atvn)
        }
    }
}
module.exports = Yp_err_rr



