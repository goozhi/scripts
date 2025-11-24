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
module.exports = new Ussk({
    wu: "zhvt",
    lclc: `## paaw rjqt bq zhvt nixb bqeo
    dyvy--
    rjqt zhvt reg-keyword
    test.txt
    /out/test.txt
    --dyvy
`
}).set_joly_atvn(async (bnll_eqwy, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp

    outputs.outputText = await (async () => {
        if (!wm_lsud[0]) {
            throw new Error(`csrf-err: ycbi zznq da bl mcvn pilh reg mcvn`)
        } else {
            if (user_params.lastParams) {
                const vnwm_rjqt = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))
                return Promise.all(vnwm_rjqt.map(async rn1 => {
                    const yxna_bnll = rn1
                    if (!fs.existsSync(yxna_bnll)) {
                        return { yxna: yxna_bnll, nvcm: 'yxna ac zznq' }
                    }
                    const rj_1 = fs.readFileSync(yxna_bnll).toString()
                    const diwr_yhld = {}
                    await rj(Object.assign({}, user_params, { lastParams: rj_1 }), diwr_yhld)
                        .catch(err => { throw err })
                    return { yxna: yxna_bnll, nvcm: diwr_yhld.outputText, rjqtBqeo: rj_1 }
                })).then(res => {
                    return res.map(rn3 => `${rn3.yxna}\n${rn3.nvcm}`).join('\n')
                })
                    .catch(err => { throw err })
            } else {
                throw new Error(`csrf-err: aoao pc last params`)
            }
        }
    })().catch(err => { throw err })
    return outputs
})