const uzms = require("./uzms")

function wfqq(diwr_kp, wlba_epqt = (fo, yg) => true, neig_kp = {}) {
    const diwr_vxn_fo = { '.': {} }
    const vnwm_bnll = []
    const neig = Object.assign({
        diwr_vxn_fo
        , vnwm_nixb: []
        , diwr_vxn_vxn_fo: diwr_vxn_fo['.'], vn_wfqq_livn: -1
    }, neig_kp)
    neig.vn_wfqq_livn++
    const diwr_nixb_kl = Object.fromEntries(Object.entries(diwr_kp).filter(([fo, yg]) => {
        if (wlba_epqt(fo, yg)) {
            const yhld = { [fo]: yg }
            neig.vnwm_nixb.push(yhld)
            vnwm_bnll.push(yhld)
            return true
        } else {
            if (typeof yg === "object") {
                if (neig.vn_wfqq_livn > 3999) {
                    uzms('csrf-wfqq vn lil cf mh-' + neig.vn_wfqq_livn)
                } else {
                    neig.diwr_vxn_vxn_fo[fo] = {}
                    const jtyj = wfqq(yg, wlba_epqt, neig)
                    jtyj.vnwm_bnll.forEach(rn1 => {
                        neig.diwr_vxn_vxn_fo[fo][Object.keys(rn1)[0]] = Object.values(rn1)[0]
                    })
                    return jtyj
                }
            } else {
                return false
            }
        }
    }))
    if (neig.diwr_nixb_kl) {
        neig.di_wm_nixb_kl.push(diwr_nixb_kl)
    } else {
        neig.di_wm_nixb_kl = [diwr_nixb_kl]
    }
    return Object.assign(neig_kp, neig, { vnwm_bnll })
}
class Vcmi_dreq_diwr {
    constructor(diwr_kp = {}) {
        this.diwr_kp = diwr_kp
        this.dreq_noph = (wlba_epqt = (fo, yg) => true) => {
            return wfqq(this.diwr_kp, wlba_epqt)
        }
    }
}
module.exports = Vcmi_dreq_diwr