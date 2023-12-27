var AFOA = require('./AFOA_UJ');
function STGNGGTR(VN_16_TYUB, TRVN_1) {
    var ZTHI_VNWM_1 = [];
    var ZYZN_YJ_1 = 0;
    if (VN_16_TYUB.length % 2 != 0) {
        ZYZN_YJ_1 = 1;
        ZTHI_VNWM_1.push(VN_16_TYUB[0])
    }
    for (var i = ZYZN_YJ_1; i < VN_16_TYUB.length; i += 2) {
        ZTHI_VNWM_1.push(VN_16_TYUB.slice(i, i + 2));
    }
    var VN_VNWM_1 = [];
    for (let EQWY_1 = 0; EQWY_1 < Math.pow(2, TRVN_1); EQWY_1++) {
        VN_VNWM_1.push(EQWY_1);
    }
    var STGNGGTR_IOWR_VNWM_1 = [];
    ZTHI_VNWM_1 = [11];
    VN_VNWM_1.forEach(RNSF_1 => {
        for (EQWY_2 = 0; EQWY_2 < ZTHI_VNWM_1.length; EQWY_2++) {
            var VN_2 = RNSF_1 & eval('0x' + ZTHI_VNWM_1[EQWY_2]);
            if (VN_2 == eval('0x' + ZTHI_VNWM_1[EQWY_2])) {
                STGNGGTR_IOWR_VNWM_1.push({ VN: ZTHI_VNWM_1[EQWY_2], STGNGGVN: RNSF_1 })
            }
        }
    })
    throw STGNGGTR_IOWR_VNWM_1;
}
module.exports = STGNGGTR;