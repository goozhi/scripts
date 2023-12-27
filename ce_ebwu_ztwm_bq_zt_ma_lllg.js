function ce_ebwu_ztwm_bq_zt_ma_lllg(rjse_kp) {
    var rjse_mcvn=rjse_kp
    yxna1 = "./AFOA/KPLU/SI_ZTWM_3.java"
    yxna2 = "./AFOA/KPLU/SI_ZTWM_3_ma_lllg.java"
    const fs = require('fs')
    rjse_ztwm_kp = fs.readFileSync(yxna1).toString()
    rjse_ztwm_1 = rjse_ztwm_kp
    var vnwm_3 = rjse_mcvn.split("")
    vnwm_3.forEach((rnsf_2) => {
        rjse_ztwm_1 = rjse_ztwm_1.replace(new RegExp("(.*)(" + rnsf_2 + ")", "g"), "$2$1")
    })
    fs.writeFileSync(yxna2, rjse_ztwm_kp)
    fs.writeFileSync(yxna1, rjse_ztwm_1)
    return "cd vdzv" 
}
module.exports = ce_ebwu_ztwm_bq_zt_ma_lllg;