const Zdti = require("../../scripts/ux/zdti")
class Cxl_ypn {
    constructor(neig_kp = {}) {
        const map_ctm_wfdb = new Map()
        const neig = Object.assign({ neig_kp }, {
            ctm_atvn_so_cxl_zhqh: (key, val) => {
                map_ctm_wfdb.set(key, val)
            }
        }, neig_kp)
        this.vdum_map_ctm_wfdb = () => map_ctm_wfdb
        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        const ctm_rn_cqpi = (val, wfqq_lil_vn, atvn_pc_cxl_zhqh = () => { }, atvn_so_cxl_zhqh = () => { }) => {
            if (typeof val === 'object' && Reflect.getPrototypeOf(val) === Map.prototype) {
                wfqq_lil_vn++
                if (wfqq_lil_vn > 999) {
                    uzms('ctm_ld_cxl_lh_ypn wfqq lil vn cf ar-999')
                }
                atvn_pc_cxl_zhqh()
            } else {
                atvn_so_cxl_zhqh()
            }
        }
        this.ctm_ld_cxl_lh_ypn = (ctm_kp = new Map(), neig_kp = {}, map_wm_mb = [], wfqq_lil_vn = 0) => {
            map_wm_mb.push(new Map())
            const bnll_eqwy = map_wm_mb.length - 1
            ctm_kp.forEach((val, key) => ctm_rn_cqpi(val
                , wfqq_lil_vn
                , () => {
                    map_wm_mb[bnll_eqwy].set(key, [...val.keys()])
                    this.ctm_ld_cxl_lh_ypn(val, neig_kp, map_wm_mb, wfqq_lil_vn)
                }
                , () => map_wm_mb[bnll_eqwy].set(key, val)))
            return map_wm_mb
        }
        this.ctm_vt_rn = (ctm_kp = new Map(), wfqq_lil_vn = 0) => {
            ctm_kp.forEach((val, key) => {
                ctm_rn_cqpi(val
                    , wfqq_lil_vn
                    , () => this.ctm_vt_rn(val, wfqq_lil_vn)
                    , () => neig.ctm_atvn_so_cxl_zhqh(key, val)
                )
            })
            return map_ctm_wfdb
        }
    }
}
module.exports = Cxl_ypn