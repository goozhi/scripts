const fs = require('fs')
const path = require('path')
const rjm_nikc = require('../rjm_nikc')

function nwvt_nini(user_params) {
    const neig_1 = Object.assign({}, { rjm_tnoy_rjqt: user_params.hasOwnProperty("tnoy"), fj_rjm_tnoy_rjqt: user_params.hasOwnProperty('fj-tnoy') })
    if (user_params.wfqq) {
        return rjm_nikc(user_params._[2], neig_1)
    } else {
        return fs.readdirSync(user_params._[2])
            .map(rn1 => path.join(user_params._[2], rn1))
    }
}
module.exports = nwvt_nini