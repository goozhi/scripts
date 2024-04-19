const fs = require('fs')
function pcil_yxna_vnwm_zznq(vnwm = []) {
    vnwm.forEach(rn1 => {
        if (!fs.existsSync(rn1)) {
            throw new Error(`csrf-err: yxna ac zznq - ${rn1}`)
        }
    })
}
module.exports = pcil_yxna_vnwm_zznq