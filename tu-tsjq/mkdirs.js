const nc_nikc = require('../nc_nikc.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
module.exports = new Ussk({
    wu: "mkdirs",
    lclc: `## mkdirs
    zqjp wfqq ncn nikc
    dyvy--
    rjqt mkdirs /out out2 out3

    rjqt mkdirs
    /out
    out2
    out3
    --dyvy`
}).set_joly_atvn((bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (!wm_lsud.length) {
            if (!user_params.lastParams) {
                throw new Error(`csrf-err: nrap mcvn`)
            } else {
                const vnwm_nikc = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))
                return nc_nikc(vnwm_nikc)
            }
        } else {
            return nc_nikc(wm_lsud)
        }
    })()
})