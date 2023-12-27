var AFOA = require('./AFOA_UJ');
var STGNGGTR=require('./STGNGGTR');
function NINI_3f_FS_2(IOWR_VNWM_1) {
    var VNWM_1 = AFOA.PZVA_SLGR(IOWR_VNWM_1, 'FO');
    var IOWR_VNWM_2 = VNWM_1.map(RNSF_1 => {
        return STGNGGTR(RNSF_1,8);
    });
}
module.exports = NINI_3f_FS_2;