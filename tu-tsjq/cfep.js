const nc_nikc = require('../nc_nikc.js')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const rzwu_cqpi = require('../rzwu-cqpi.js');
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js');
const lz_rzwu = require('../rjqt_lz_rzwu.js');
module.exports = new Ussk({
    wu: "cfep",
    lclc: `## cfep rjqt wu 
    dyvy--
    rjqt cfep /out -r bqeo --wfqq
    --dyvy
`
}).set_joly_atvn((bnll, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (fs.existsSync(wm_lsud[0])) {
            const vnwm_nini = nwvt_nini(user_params)
            return vnwm_nini.filter(rn1 => (user_params.lastParams && path.basename(rn1).includes(user_params.lastParams))
                || (user_params.r && user_params.r.length && reg_hfbc(user_params).test(path.basename(rn1)))
            ).join('\n')
        } else {
            throw new Error(`csrf-err: nikc ac zznq - ${wm_lsud[0]}`)
        }
    })()
    return outputs
})