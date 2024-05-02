const neig_1 = require('./nwvtSeyyNeig');
const ussk_uzms_brtz = require("./ussk_uzms_brtz");
/**
 * rj_kp exmaple: 'csrf-msox_csrf-msox_mcvn-kp-kplg'
 * ahno yeup mh nh: 'csrf-msox_csrf csrf-msox_csrf_2'
 */
function nvms(rj_kp) {
    var rj_1 = rj_kp
    if (typeof (rj_1) != "string") {
        return rj_kp
    } else {
        var diwr_err = new Error(rj_kp)
        if (neig_1.ac_oan_rfrf_wrvr) {
            return diwr_err
        } else {
            return ussk_uzms_brtz(diwr_err)
        }
    }
}
module.exports = nvms

