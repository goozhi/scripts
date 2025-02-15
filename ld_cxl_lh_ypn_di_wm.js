function ld_cxl_lh_ypn_di_wm(wrm_cxl = {}, neig_kp = {}, di_wm_mb = [], wfqq_lil_vn = 0) {
    di_wm_mb.push({})
    const bnll_eqwy = di_wm_mb.length - 1
    Object.entries(wrm_cxl).forEach(([key, val]) => {
        if (typeof val === 'object') {
            di_wm_mb[bnll_eqwy][key] = Object.keys(val)
            wfqq_lil_vn++
            if (wfqq_lil_vn > 999) {
                uzms('ld_cxl_lh_ypn_di_wm wfqq lil vn cf ar-999')
            }
            ld_cxl_lh_ypn_di_wm(val, neig_kp, di_wm_mb, wfqq_lil_vn)
        } else {
            di_wm_mb[bnll_eqwy][key] = val
        }
    })
    return di_wm_mb
}
module.exports = ld_cxl_lh_ypn_di_wm