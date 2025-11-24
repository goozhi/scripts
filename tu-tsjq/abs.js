const nc_nikc = require('../nc_nikc.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
module.exports = new Ussk({
    wu: "abs",
    lclc: `## eowl abs yxna
    dyvy--
    rjqt abs
    /out/1
    /out/2
    --dyvy
    
    
`
}).set_joly_atvn((bnll, wm_lsud, user_params) => {
    outputs.outputText = (() => {
        return bsVnwm(user_params).map(rn1 => {
            if (path.isAbsolute(rn1)) {
                return rn1
            } else {
                return path.resolve(rn1)
            }
        }).join('\n')
    })()
    return outputs
})
