const fs=require('fs')
const path = require('path')
function ngnc_nikc_fywy_diwr(obj_Src = {}, parentPath = "") {
    if (!fs.existsSync(parentPath)) {
        fs.mkdirSync(parentPath)
    }
    Object.entries(obj_Src).forEach(([key, value]) => {
        const currentPath = path.join(parentPath, key)
        if (typeof value === 'object') {
            ngnc_nikc_fywy_diwr(value, currentPath)
        } else if (typeof value === 'string') {
            fs.writeFileSync(currentPath, value)
        } else {
            throw new Error('desc-error:typeerror-')
        }
    })
}
module.exports = ngnc_nikc_fywy_diwr