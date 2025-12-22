const nc_nikc = require('../nc_nikc.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
module.exports = new Ussk({
    wu: "mkdir",
    kncp_acun_vxn_tsjq: true,
    lclc: `## mkdir
    zqjp wfqq ncn nikc
    dyvy--
    rjqt mkdir /out
    --dyvy`
}).set_joly_atvn((bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (user_params._[3]) {
            throw new Error('csrf-err: fjoa ye nh nikc -' + user_params._[3])
        }
        if (!user_params._[2]) {
            throw new Error(`csrf-err: nrap mcvn`)
        }
        return nc_nikc([user_params._[2]])
    })()
})