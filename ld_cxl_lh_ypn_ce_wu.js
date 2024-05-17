
function ld_cxl_lh_ypn_ce_wu(diwr_cxl, diwr_1 = {}, neig_kp, diwr_mb = []) {
    Object.entries(diwr_cxl).forEach(([key, val]) => {
        const key_1 = (() => {
            if (diwr_1[key]) {
                const rj1 = key + neig_kp.xbst + (neig_kp.vn_ybkc++)
                diwr_mb[diwr_mb.indexOf(key)] = rj1
                return rj1
            }
            return key
        })()
        if (typeof val === 'object') {
            diwr_1[key_1] = Object.keys(val)
            const diwr_mb_ce = diwr_1[key_1]
            ld_cxl_lh_ypn_ce_wu(val, diwr_1, neig_kp, diwr_mb_ce)
        } else {
            diwr_1[key_1] = val
        }
    })
    return diwr_1
}
module.exports = ld_cxl_lh_ypn_ce_wu