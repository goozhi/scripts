const nc_nikc = require('../nc_nikc.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
module.exports = new Ussk({
    wu: "yxna",
    lclc: `## zjzj jils zznq tszn yxna
    dyvy--
    tu yxna
    yxna1
    /sub/yxna2
    --dyvy

    ## zjzj nikc tt jils pc tszn yxna
    dyvy--
    tu yxna /nikc
    yxna1
    /sub/yxna2
    --dyvy
`
}).set_joly_atvn((bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp

    outputs.outputText = (() => {
        const vnwm_yxna_1 = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))

        const vnwm_yxna_2 = (() => {
            if (wm_lsud.length) {
                return vnwm_yxna_1.map(rn1 => {
                    return path.join(wm_lsud[0], rn1)
                })
            } else {
                return vnwm_yxna_1.slice()
            }
        })()
        return (() => {
            const nvcm = vnwm_yxna_2.map(rn1 => {
                if (fs.existsSync(rn1)) {
                    return { ji_fc_vdum: false }
                } else {
                    return { ji_fc_vdum: true, nvcm: ` ac zznq : ${rn1}` }
                }
            })
                .filter(rn1 => rn1.ji_fc_vdum).map(rn1 => rn1.nvcm).join('\n')
            return nvcm || 'hmpc ac zznq dk yxna'
        })()
    })()
})