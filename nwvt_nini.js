const fs = require('fs')
const path = require('path')
const rj_nikc = require('./rj_nikc')

function nwvt_nini(user_params) {
    if (user_params.wfqq) {
        return rj_nikc(user_params._[2])
    } else {
        return fs.readdirSync(user_params._[2])
            .map(rn1 => path.join(user_params._[2], rn1))
    }
}
module.exports = nwvt_nini