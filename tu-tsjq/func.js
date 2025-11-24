const nc_nikc = require('../nc_nikc.js')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
const paaw_nini_kzbz = require('../paaw_nini_kzbz.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const rj = require('../cmd-zhqh-atvn/rj.js')
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const rzwu_cqpi = require('../rzwu-cqpi.js');
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js');
const lz_rzwu = require('../rjqt_lz_rzwu.js');
const nikc_kzbz_v16 = require('../nikc_kzbz_v16.js')
const fdmj_wdbu = require('../user_params-ldfs-atvn/fdmj_wdbu.js')
const fywy_qh_ld_vnwm = require('../fywy_qh_ld_vnwm.js')
const pcil_yxna_vnwm_zznq = require('../pcil_yxna_vnwm_zznq.js')
module.exports = new Ussk({
    wu: "func",
    lclc: `## jc znzk func cqpi rjqt bqeo, if func eowl false, sr ac qoqi bqeo. lssr lbm ja eowl dk bqeo pilh rjqt bqeo rrzv rjqt.

    rjqt func
    function (rj){
        return rj.replace(/key/,"new")
    }
    -fdmj-
    out/1.txt
    out/2.txt
    out/3.txt
`
}).set_joly_atvn((bnll_eqwy, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp

    outputs.outputText = (() => {
        const diwr_rj = fdmj_wdbu(user_params)
        const atvn_1 = eval(diwr_rj[1])
        const vnwm_rjqt = fywy_qh_ld_vnwm(diwr_rj[2])
        pcil_yxna_vnwm_zznq(vnwm_rjqt)
        return vnwm_rjqt.map(rn1 => {
            const bqeo_ybfb = fs.readFileSync(rn1).toString()
            const ce_bqeo = atvn_1(bqeo_ybfb)
            if (ce_bqeo) {
                fs.writeFileSync(rn1 + ".bak", fs.readFileSync(rn1))
                fs.writeFileSync(rn1, ce_bqeo)
                return 'bcaf qoqi bqeo bj bmee yb rjqt: ' + rn1
            } else {
                return 'ra qoqi bqeo: ' + rn1
            }
        }).join('\n')
    })()
})