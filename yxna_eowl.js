const path = require('path')
const fs = require('fs')
const uzms = require('./uzms')
const diwr_yxna_bx = {
    'nikc_kcl': path.resolve(__dirname, '../vtn/kcl'),
    'nikc_yhrj_sjbx': path.resolve(__dirname, '../zzzz/kplu/scripts/wrvr/yhrj_sjbx.json'),
    'nikc_ztwm': path.resolve(__dirname, '../zzzz/kplu/scripts/wrvr/ztwm.json'),
    'nikc_ssvl_qwse': path.resolve(__dirname, '../../\u811a\u672c'),
    'nikc_ssvl_afoa_bx': path.resolve(__dirname, '../../\u811a\u672c/AFOA_BX'),
}
Object.values(diwr_yxna_bx).forEach(rn1 => {
    if (!fs.existsSync(rn1)) {
        console.error('csrf-yxna ac zznq-' + rn1)
    }
})
module.exports = diwr_yxna_bx