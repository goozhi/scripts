function ctm_ld_cxl_lh_ypn(ctm_kp = new Map(), neig_kp = {}, map_wm_mb = [], wfqq_lil_vn = 0) {
    map_wm_mb.push(new Map())
    const bnll_eqwy = map_wm_mb.length - 1
    ctm_kp.forEach((val, key) => {
        if (typeof val === 'object' && Reflect.getPrototypeOf(val) === Map.prototype) {
            map_wm_mb[bnll_eqwy].set(key, [...val.keys()])
            wfqq_lil_vn++
            if (wfqq_lil_vn > 999) {
                uzms('ctm_ld_cxl_lh_ypn wfqq lil vn cf ar-999')
            }
            ctm_ld_cxl_lh_ypn(val, neig_kp, map_wm_mb, wfqq_lil_vn)
        } else {
            map_wm_mb[bnll_eqwy].set(key, val)
        }
    })
    return map_wm_mb
}
module.exports = ctm_ld_cxl_lh_ypn