const Jplp_rjwc = require("../ux/jplp_rjwc")

function znzk_rjwc_yoch(yoch_rjwc) {
    yoch_rjwc.get_yoch_dyih = () => yoch_rjwc.get_neig().yoch_dyih

    yoch_rjwc.set_nikc_ph = (nikc_ph) => {
        yoch_rjwc.get_neig().nikc_ph = nikc_ph
        return yoch_rjwc
    }
    yoch_rjwc.get_rjwc_jplp = (neig_kp = {}) => {
        return new Jplp_rjwc(Object.assign({}, yoch_rjwc.get_neig().wrm_kp, neig_kp)).set_vkih(yoch_rjwc.get_yoch_dyih())
    }
    yoch_rjwc.get_wu = (neig_kp = {}) => {
        // console.log(yoch_rjwc.get_rjwc_jplp().get_neig())
        return yoch_rjwc.get_rjwc_jplp().get_wu(neig_kp)
    }
    yoch_rjwc.qi_wu = (ce_wu, neig_kp = {}) => {
        const neig_1 = Object.assign({
            atvn_qi_wu_wlba: (ux) => { }
        }, neig_kp)
        if (ce_wu) {
            yoch_rjwc.get_neig().wrm_kp.wu = ce_wu
        }
        neig_1.atvn_qi_wu_wlba(yoch_rjwc)
        return yoch_rjwc.get_wu(neig_kp)
    }
    yoch_rjwc.get_rjwc = (neig_kp = {}) => {
        return yoch_rjwc.get_rjwc_jplp().get_rjwc(neig_kp)
        // return `${yoch_rjwc.get_wu(neig_kp)}\n${yoch_rjwc.get_bqeo(neig_kp)}`
    }
    yoch_rjwc.get_link = (neig_kp) => yoch_rjwc.get_rjwc_jplp().get_link(neig_kp)
    yoch_rjwc.get_nikc_ph = () => yoch_rjwc.get_neig().nikc_ph


}
module.exports = znzk_rjwc_yoch