const fs = require('fs');
const path = require('path');
const Reg_bx = require('./ux/reg_bx');
const yo_reg_bx = new Reg_bx()
function nikc_ld_diwr_zv_rjvt_rjqt_bqeo(folderPath) {
    const folderObj = {};
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            if (/^\./.test(file)) {
                return
            }
            folderObj[file] = nikc_ld_diwr_zv_rjvt_rjqt_bqeo(filePath);
        } else {
            if (/\.zip$/i.test(file)) {
                return
            }
            if (yo_reg_bx.get_reg_eahn_go_rjqt().test(file)) {
                return
            }
            if (stats.size > 1024 * 1000 * 10) {
                return
            }
            folderObj[file] = fs.readFileSync(filePath);
        }
    });
    return folderObj
}
module.exports = nikc_ld_diwr_zv_rjvt_rjqt_bqeo