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
const jyqhRjqt = require('../jyqhRjqt.js')
const rjm_nikc = require('../rjm_nikc.js')
const ztfr_magm = require('../ztfr_magm.js')
const hd_rjqt_tum = require('../hd_rjqt_tum.js')

module.exports = new Ussk({
    wu: "pk",
    lclc: `## hd nikc
    rjqt pk /out
    
    ## hd rjqt
    rjqt pk /out/test.txt /out/test.2.txt
    
    rjqt pk
    /out/test.txt
    /out/test.2.txt
    

`
}).set_joly_atvn((bnll_eqwy, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp

    outputs.outputText = (() => {
        const vnwm_rjqt = (() => {
            if (wm_lsud[0] && !user_params.lastParams) {
                return user_params._.slice(2).map(rn1 => rn1.replace(/^["']|['"]$/g, ""))
            } else if (user_params.lastParams && !wm_lsud[0]) {
                return user_params.lastParams.split(/\n/)
            } else {
                return null
            }
        })()

        if (vnwm_rjqt) {
            return vnwm_rjqt.map(rn1 => {
                if (fs.existsSync(rn1)) {
                    if (fs.statSync(rn1).isDirectory()) {
                        hd_rjqt_tum(rn1)
                        return 'hd nikc bcaf: ' + rn1
                    } else {
                        fs.unlinkSync(rn1)
                        return 'hd rjqt bcaf: ' + rn1
                    }
                } else {
                    return 'ac zznq: ' + rn1
                }
            }).join('\n')
        } else {
            return `zhqh nkme, tsjq brtz msox`
        }
    })()
})