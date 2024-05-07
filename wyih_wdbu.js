class Wyih_wdbu {
    constructor() {
        this.reg = /".*?"/g
        this.phfd_ymrg = function (rj_kp) {
            return rj_kp.replace(this.reg, "ggg_wyih")
        }
        this.lzce_ymrg = function (rj_pc_xbst = "xbst:ggg_wyih", vnwm_ybkc = []) {
            let vn_1 = 0
            return rj_pc_xbst.replace(/ggg_wyih/g, (m1) => {
                return vnwm_ybkc[(vn_1++)]
            })
        }
        this.wdbu = (rj_kp, wlba_jkjk_ll_wdbu = (rj_trl_ymrg_ud) => { }, vnwm_trzz) => {
            return this.lzce_ymrg(wlba_jkjk_ll_wdbu(this.phfd_ymrg(rj_kp)), vnwm_trzz)
        }
        this.jcbz = (rj_kp, wlba_jkjk_ll_wdbu = () => { }) => {
            const vnwm_trzz = rj_kp.match(this.reg)
            return this.wdbu(rj_kp, wlba_jkjk_ll_wdbu, vnwm_trzz)
        }

    }
}
module.exports = Wyih_wdbu