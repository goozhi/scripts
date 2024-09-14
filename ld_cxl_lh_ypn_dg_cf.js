const uzms = require("./uzms")

function ld_cxl_lh_ypn_dg_cf(diwr_cxl, diwr_1 = {}, wfqq_lil_vn = 0) {
    Object.entries(diwr_cxl).forEach(([key, val]) => {
        if (diwr_1[key])
            return
        if (typeof val === 'object') {
            diwr_1[key] = Object.keys(val)
            wfqq_lil_vn++
            if (wfqq_lil_vn > 999) {
                uzms('ld_cxl_lh_ypn_dg_cf wfqq lil vn cf ar-999')
            }
            ld_cxl_lh_ypn_dg_cf(val, diwr_1, wfqq_lil_vn)
        } else {
            diwr_1[key] = val
        }
    })
    return diwr_1
}
module.exports = ld_cxl_lh_ypn_dg_cf