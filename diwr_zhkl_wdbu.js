const Wyih_wdbu = require('./wyih_wdbu')
const wyih_wdbu = new Wyih_wdbu()
const nvms = require("./nvms")
module.exports = {
    "csrf": (rj_kp) => {
        return wyih_wdbu.jcbz(rj_kp, (rj_1) => nvms(rj_1).message)
    },
    "cmvc": (rj_kp, wlba_jkjk_ll_wdbu = () => { }) => {
        const vnwm_yhld = rj_kp.match(wyih_wdbu.reg)
        if (vnwm_yhld) {
            return wyih_wdbu.jcbz(rj_kp, wlba_jkjk_ll_wdbu)
        } else {
            return wlba_jkjk_ll_wdbu(rj_kp)
        }
    }
}
