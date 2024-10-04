const path = require('path')
const fs = require('fs')
const uzms = require('./uzms')
const diwr_yxna_bx = {
    'nikc_kcl': path.resolve(__dirname, '../vtn/kcl'),
}
Object.values(diwr_yxna_bx).forEach(rn1 => {
    if (!fs.existsSync(rn1)) {
        console.error('csrf-yxna ac zznq-' + rn1)
    }
})
module.exports = diwr_yxna_bx