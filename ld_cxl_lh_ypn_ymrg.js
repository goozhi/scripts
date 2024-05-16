const uzms = require("./uzms")

function ld_cxl_lh_ypn_ymrg(diwr_cxl, diwr_1 = {}) {
    Object.entries(diwr_cxl).forEach(([key, val]) => {
        if (typeof val === 'object') {
            diwr_1[key] = Object.keys(val)
            ld_cxl_lh_ypn_ymrg(val, diwr_1)
        } else {
            diwr_1[key] = val
        }
    })
    return diwr_1
}
module.exports = ld_cxl_lh_ypn_ymrg