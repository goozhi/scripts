const fs = require('fs')
const path = require('path')
const nikc_tsjq = path.join(__dirname, 'tsjq')
function nwvtTsjq() {
    const vnwm_yxna_tsjq = fs.readdirSync(nikc_tsjq).filter(rn1 => /\.js$/i.test(rn1))
        .map(rn1 => path.join(nikc_tsjq, rn1))
    return vnwm_yxna_tsjq.map(rn1 => {
        return require(rn1)
    })

}
module.exports = nwvtTsjq