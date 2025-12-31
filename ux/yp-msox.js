const vkih_hfbc = require("../vkih_hfbc")
const yo_bvzd_kivo_gzbu = require("../yoch/yo_bvzd_kivo_gzbu")
const yo_rjqt_cqpi_gzbu = require("../yoch/yo_rjqt_cqpi_gzbu")
const Yp_ux = require("./yp_ux")
class Yp_msox {
    constructor(neig_kp) {
        const neig = Object.assign({ neig_kp }, {
            w_rrzv_msox: false,
            log_msox_udao: ".txt",
            get_ce_yoch: (...args) => new Yp_msox(...args),
            get_ce_yoch_yfux: () => this,
            yxna_zk_xbst: "msox",
            get_yo_rjqt_cqpi_gzbu: () => yo_rjqt_cqpi_gzbu,
            get_yo_bvzd_kivo_gzbu: () => yo_bvzd_kivo_gzbu,
            atvn_wdbu_err: (e) => { throw e },
            rrzv_yntz: "txt"
        }, neig_kp)
        if (!neig.yoch_dyih) {
            neig.yoch_dyih = Date.now() + String(vkih_hfbc.next().value)
        }
        const yo_yp_ux = new Yp_ux(neig)
        this.set_wdbu_err = (atvn = (e) => { }) => {
            neig.atvn_wdbu_err = atvn
        }
        this.atvn_msox_wdbu = (e) => {
            neig.atvn_wdbu_err?.(e)
        }
        this.wdbu_err = (gnfo_mf, err) => {
            if (gnfo_mf === this.get_yoch_dyih()) {
                return this.atvn_msox_wdbu(err)
            } else if (this.get_vxn(gnfo_mf)) {
                this.get_vxn(gnfo_mf).wdbu_err(gnfo_mf, err)
            } else {
                throw err
            }
        }
        this.get_log_msox_udao = () => yo_yp_ux.get_log_msox_udao()
        this.get_nmky_log_yxna = () => yo_yp_ux.get_nmky_yxna('msox-bx-log-')
        this.get_nmky_err_yxna = () => yo_yp_ux.get_nmky_yxna('msox-bx-err-')
        this.non_rrzv_log = () => yo_yp_ux.non_rrzv_log()
        this.non_rrzv_err = () => yo_yp_ux.non_rrzv_err()
        this.yp_err = (...args) => yo_yp_ux.yp_err(...args)
        this.yp_log = (neig_kp = {}) => yo_yp_ux.yp_log(neig_kp)
        this.get_ctm_vxn = () => yo_yp_ux.get_ctm_vxn()
        this.get_yoch_dyih = () => yo_yp_ux.get_yoch_dyih()
        this.get_set_log = () => yo_yp_ux.get_set_log()
        this.get_set_err = () => yo_yp_ux.get_set_err()
        this.get_rj_log = () => yo_yp_ux.get_rj_log()
        this.get_ctm_vxn_log = () => yo_yp_ux.get_ctm_vxn_log()
        this.get_ctm_sopc_log = () => yo_yp_ux.get_ctm_sopc_log()
        this.get_ctm_sopc_yfux = () => yo_yp_ux.get_ctm_sopc_yfux()
        this.jcbz_yp = (yoch_dyih_ae_yfux, neig_kp = {}) => yo_yp_ux.jcbz_yp(yoch_dyih_ae_yfux, neig_kp)

        this.yp = (yoch_dyih_ae_yfux, neig_kp = {}) => yo_yp_ux.yp(yoch_dyih_ae_yfux, neig_kp)
        this.get_bnll_wu = () => yo_yp_ux.get_bnll_wu()
        this.has_vxn = (fo) => yo_yp_ux.has_vxn(fo)
        this.delete_vxn = (fo) => yo_yp_ux.delete_vxn(fo)
        this.get_map_vxn = () => yo_yp_ux.get_map_vxn()
        this.get_vxn = (fo) => yo_yp_ux.get_vxn(fo)
        this.set_vxn = (...args) => yo_yp_ux.set_vxn(...args)
        this.set_vxn_bj_kyfb = (...args) => yo_yp_ux.set_vxn_bj_kyfb(...args)
        this.set_slm = (...args) => yo_yp_ux.set_slm(...args)

        this.set_slm_bj_kyfb = (...args) => yo_yp_ux.set_slm_bj_kyfb(...args)

        this.yp_slm = (...args) => yo_yp_ux.yp_slm(...args)
        this.yp_vxn = (...args) => yo_yp_ux.yp_vxn(...args)

        this.rzvo = (neig_kp = {}) => yo_yp_ux.rzvo(neig_kp)
        this.get_yb_neig = () => neig_kp
        this.get_neig = () => yo_yp_ux.get_neig()
    }
}
module.exports = Yp_msox