const uzms = require("./uzms")

function ld_cxl_lh_ypn_zjzj(diwr_cxl, diwr_1 = {}, wlba_1) {
    Object.entries(diwr_cxl).forEach(([key, val]) => {
        if (diwr_1[key]) {
            uzms('csrf-bi fo cd pc-' + key)
        }
        if (typeof val === 'object') {
            diwr_1[key] = Object.keys(val)
            ld_cxl_lh_ypn_zjzj(val, diwr_1)
        } else {
            diwr_1[key] = val
        }
    })
    return diwr_1
}
module.exports = ld_cxl_lh_ypn_zjzj