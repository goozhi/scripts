function ZTFR_SU_LD_unicode(RJSE_KP) {
    var RJSE_1 = RJSE_KP;
    var reg_unicode = /\\u[a-f\d]+/ig;
    var VNWM_unicode = RJSE_1.match(reg_unicode)
    if (VNWM_unicode != null) {
        RJSE_1 = RJSE_1.replace(reg_unicode, "\u917e")
    }
    RJSE_1 = RJSE_1.split('').map(RNSF => {
        return "\\u" + RNSF.charCodeAt(0).toString(16).padStart(4, '0');
    }).join('')
    if (VNWM_unicode != null) {
        VNWM_unicode.forEach(RNSF => {
            RJSE_1 = RJSE_1.replace(/\\u917e/i, RNSF)
        })
    }

    return RJSE_1;
}
module.exports = ZTFR_SU_LD_unicode;