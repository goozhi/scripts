const fs = require('fs')
function nc_nikc(vnwm_nikc = []) {
    return vnwm_nikc.map(rn1 => {
        fs.mkdirSync(rn1, { recursive: true })
        return 'cd nc : ' + rn1
    }).join('\n')
}
module.exports = nc_nikc