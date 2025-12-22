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
module.exports = new Ussk({
    wu: "run",
    lclc: `## jyqh js_ rjqt
    dyvy--
    tu run yxna
--dyvy`,
    kncp_acun_vxn_tsjq: true
}).set_joly_atvn(async (bnll_eqwy, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    if (user_params.lastParams) {
        uzms('csrf-brtz msox lastParams aoao lh vv-')
    }
    if (!wm_lsud[0]) {
        uzms('csrf-nrap yxna mcvn-')
    } else {
        if (!fs.existsSync(wm_lsud[0])) {
            uzms('csrf-yxna ac zznq-' + wm_lsud[0])
        }
    }
    outputs.outputText = await (async () => {
        return await jyqhRjqt(wm_lsud[0]).catch(err => { throw err })
    })().catch(err => { throw err })
    return outputs
})