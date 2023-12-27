const ascii_ld_ztfr = require("./ascii_ld_ztfr");

function ld_ascii_zv_zqjp_ymrg(rjse_kp) {
    var rj_1 = rjse_kp
    var reg_vnzt = /(?:0x\w+|\d+)/g;
    var vnwm_rjse_ux_vnzt = rj_1.match(reg_vnzt)
    if (vnwm_rjse_ux_vnzt == null) {
        throw new Error('csrf-mcvn bq hmpc vnzt-' + rjse_kp)
    }
    var vnwm_ztfr = ascii_ld_ztfr(vnwm_rjse_ux_vnzt)
    vnwm_ztfr.forEach((rn1,eqwy_1) => {
        rj_1=rj_1.replace(vnwm_rjse_ux_vnzt[eqwy_1],rn1)
    });
    return rj_1
}
module.exports = ld_ascii_zv_zqjp_ymrg