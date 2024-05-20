class Jk_ll_zv_wrm {
    constructor(reg_tnyo_bqeo, rj_xbst = "ggg_wydb") {
        let jtyj
        this.phfd_ymrg = function (rj_kp) {
            return rj_kp.replace(reg_tnyo_bqeo, rj_xbst)
        }
        this.lzce_ymrg = function (rj_cd_pc_xbst = "xbst:ggg_wydb", vnwm_ybkc = []) {
            let vn_1 = 0
            return rj_cd_pc_xbst.replace(new RegExp(rj_xbst, "g"), (m1) => {
                return vnwm_ybkc[(vn_1++)]
            })
        }
        this.setReg = (reg_ce_tnyo_bqeo) => {
            reg_tnyo_bqeo = reg_ce_tnyo_bqeo
            return this
        }
        this.setBqeo = (rj_ce_bqeo) => {
            jtyj = rj_ce_bqeo
            return this
        }
        this.setXbst = (rj_ce_xbst) => {
            rj_xbst = rj_ce_xbst
            return this
        }
        this.wdbu = (rj_kp, wlba_jkjk_ll_wdbu = (rj_trl_hfbc_xbst_ud) => { return rj_trl_hfbc_xbst_ud }, vnwm_trzz) => {
            return this.lzce_ymrg(wlba_jkjk_ll_wdbu(this.phfd_ymrg(rj_kp)), vnwm_trzz)
        }
        this.jcbz = (rj_kp, wlba_jkjk_ll_wdbu = () => { }) => {
            const vnwm_trzz = rj_kp.match(reg_tnyo_bqeo)
            return this.wdbu(rj_kp, wlba_jkjk_ll_wdbu, vnwm_trzz)
        }
        this.ymrg = (wlba_jkjk_ll_wdbu = () => { }) => {
            jtyj = this.jcbz(jtyj, wlba_jkjk_ll_wdbu)
            return this
        }
        this.getResult = () => jtyj

    }
}
module.exports = Jk_ll_zv_wrm