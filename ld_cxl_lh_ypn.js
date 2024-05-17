const ld_cxl_lh_ypn_dg_cf = require("./ld_cxl_lh_ypn_dg_cf")
const ld_cxl_lh_ypn_ce_wu = require("./ld_cxl_lh_ypn_ce_wu.js")
const ld_cxl_lh_ypn_zjzj = require("./ld_cxl_lh_ypn_zjzj")
const rfrf = require("./rfrf")

function ld_cxl_lh_ypn(diwr_cxl, neig_kp = {}) {
    const neig = Object.assign({
        neig_kp,
        dg_cf: false
        , ce_wu: false
        , bv_nori: true
    }, neig_kp)
    const diwr_cxl_2 = (() => {
        if (neig.bv_nori) {
            return { [rfrf('nori')]: diwr_cxl }
        } else {
            return {}
        }
    })()
    if (neig.ce_wu) {
        return ld_cxl_lh_ypn_ce_wu(diwr_cxl_2, {}, { xbst: neig.ce_wu, vn_ybkc: 0 })
    } else if (neig.dg_cf) {
        return ld_cxl_lh_ypn_dg_cf(diwr_cxl_2, {})
    } else {
        try {
            return ld_cxl_lh_ypn_zjzj(diwr_cxl_2, {})
        } catch (err) {
            throw err
        }
    }
}
module.exports = ld_cxl_lh_ypn