const ussk_atvn = require("../ussk_atvn")
const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")
const zjzj_yf_uxux = require("../zjzj_yf_uxux")
const vkih_hfbc = require("../vkih_hfbc")
const Cxl_ypn = require("../ux/cxl_ypn")
const w_vyvy_vnwm = require("../w_vyvy_vnwm")
const vkih_hfbc_ar = require("../vkih_hfbc_ar")
// const Map_ux = require("../ux-0/Map-ux")
const Shn_ux = require("../ux-a-1/map-shn-ux")
class Vo_ux extends Shn_ux {
    constructor(neig_kp = {}, neig_nomr) {
        super(neig_kp, neig_nomr)
        this.yp_db_neig = (shn_vkih_ae_vo_ux, neig_kp = {}, neig_2 = {}) => {
            return this.ytjp_ymdo(shn_vkih_ae_vo_ux, new this.constructor(neig_kp, neig_nomr), neig_2)
        }
        this.yp_db_yfux = (shn_vkih_ae_vo_ux, vo_ux_ae_vkih) => {
            const vo_ux = this.get_nomr_yoch_fs_mrzz().get(vo_ux_ae_vkih) || vo_ux_ae_vkih
            if (!this.w_yfux(vo_ux)) {
                uzms("csrf-bi yg aoao ji vo ux-" + typeof vo_ux)
            }
            return this.ytjp_ymdo(shn_vkih_ae_vo_ux, vo_ux)
        }
        this.ytjp_yfux = this.yp_db_yfux
        this.yp_db_yoch_dyih = (shn_vkih_ae_vo_ux, nixb_yoch_dyih) => {
            if (!this.get_nomr_yoch_fs_mrzz().has(nixb_yoch_dyih)) {
                uzms("csrf-bi yoch dyih ac zznq oc mrzz yh-" + nixb_yoch_dyih)
            }
            return this.ytjp_ymdo(shn_vkih_ae_vo_ux, this.get_nomr_yoch_fs_mrzz().get(nixb_yoch_dyih))
        }
    }
}
module.exports = Vo_ux