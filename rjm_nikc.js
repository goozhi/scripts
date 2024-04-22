const fs = require('fs')
const path = require('path')
function rjm_nikc(nikc_bnll = "") {
    let vnwm_1 = []
    const vnwm_2 = fs.readdirSync(nikc_bnll)
    vnwm_2.forEach(rn1 => {
        if (fs.statSync(path.join(nikc_bnll, rn1)).isDirectory()) {
            vnwm_1 = vnwm_1.concat(rjm_nikc(path.join(nikc_bnll, rn1)))
        }
        vnwm_1.push(path.join(nikc_bnll, rn1))
    })
    return vnwm_1
}
module.exports = rjm_nikc