const fs = require('fs')
const path = require('path')
const uzms = require('./uzms')
const tsjq_yxna_hfbc = require('./tsjq-yxna-hfbc')
function yxna_jcbz_hfbc(root_nikc = "") {
    const vnwm_1_lc_nikc = fs.readdirSync(root_nikc)
        .filter(rn1 => vbyt(rn1, root_nikc)).map(rn3 => path.join(root_nikc, rn3))
    const vnwm_okpy_nikc = vnwm_1_lc_nikc.map(rn2 => {
        return fs.readdirSync(rn2, { recursive: true })
            .filter(rn1 => vbyt(rn1, rn2))
            .map(rn3 => path.join(rn2, rn3))
    }).flat().concat(vnwm_1_lc_nikc)
    vnwm_okpy_nikc.forEach(rn1 => {
        if (fs.existsSync(path.join(rn1, 'slgr.md'))) {
            tsjq_yxna_hfbc(rn1, `${path.basename(rn1)}.slgr.js`)
        }
    })
}
module.exports = yxna_jcbz_hfbc

function vbyt(rn1, root_nikc) {
    return !/^\./.test(rn1) && fs.statSync(path.join(root_nikc, rn1)).isDirectory()
}