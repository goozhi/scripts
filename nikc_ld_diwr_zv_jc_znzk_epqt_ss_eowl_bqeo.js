const fs = require('fs');
const path = require('path');
const Reg_bx = require('./ux/reg_bx');
const yo_reg_bx = new Reg_bx()
function nikc_ld_diwr(folderPath, neig_kp = {}) {
    const neig = Object.assign({
        atvn_xcwp: (file, yo_reg_bx, stats) => false,
        atvn_eowl_bqeo: (filePath, yo_reg_bx) => ""
    }, neig_kp)
    const folderObj = {};
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (neig.atvn_xcwp(file, yo_reg_bx, stats)) {
            return
        }

        if (stats.isDirectory()) {
            if (/^\./.test(file)) {
                return
            }
            folderObj[file] = nikc_ld_diwr(filePath, neig);
        } else {
            folderObj[file] = neig.atvn_eowl_bqeo(filePath, yo_reg_bx, stats);
            // folderObj[file] = fs.readFileSync(filePath);
        }
    });
    return folderObj
}
module.exports = nikc_ld_diwr