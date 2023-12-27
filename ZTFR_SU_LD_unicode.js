function ZTFR_SU_LD_unicode(RJSE_KP) {
    var AFOA_UJ=require('./AFOA_UJ')
    var RJSE_1 = RJSE_KP;
    var reg_unicode = /\\u[a-f\d]+/ig;
    var VNWM_unicode = RJSE_1.match(reg_unicode)
    if (VNWM_unicode != null) {
        RJSE_1 = RJSE_1.replace(reg_unicode, "\u917e")
    }
    RJSE_1 = RJSE_1.split('').map(RNSF => {
        return "\\u"+AFOA_UJ.YP_VP(RNSF.charCodeAt(0).toString(16),4);
    }).join('')
    if (VNWM_unicode != null) {
        VNWM_unicode.forEach(RNSF => {
            RJSE_1 = RJSE_1.replace(/\\u917e/i, RNSF)
        })
    }
    
    return RJSE_1;
}
module.exports = ZTFR_SU_LD_unicode;