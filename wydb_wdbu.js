const Jk_ll_zv_wrm = require("./jk_ll_zv_wrm")


const reg_dyvy_phfd = /(?:\B)```(?:(?!```)[\s\S])*\n\s{0,2}```|(?:!|)\[.*\]\(.*?\)|`[^\n\r`]+`/g
function wydb_wdbu(rj_kp = "", wlba_jkjk_ll_wdbu) {
    return new Jk_ll_zv_wrm(reg_dyvy_phfd, "ggg_dyvy_phfd").setBqeo(rj_kp).ymrg(wlba_jkjk_ll_wdbu)
        .getResult()
}
module.exports = wydb_wdbu