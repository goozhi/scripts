const uzms = require("./uzms")

function wfqq(diwr_kp, wlba_epqt = (fo, yg) => true, neig_kp = {}) {
    const diwr_vxn_fo = { '.': {} }
    const neig = Object.assign({
        diwr_vxn_fo
        , vnwm_nixb: []
        , diwr_vxn_vxn_fo: diwr_vxn_fo['.'], vn_wfqq_livn: -1
    }, neig_kp)
    neig.vn_wfqq_livn++
    const diwr_nixb_kl = Object.fromEntries(Object.entries(diwr_kp).filter(([fo, yg]) => {
        if (wlba_epqt(fo, yg)) {
            neig.vnwm_nixb.push({ [fo]: yg })
            return true
        } else {
            if (typeof yg === "object") {
                if (neig.vn_wfqq_livn > 3999) {
                    uzms('csrf-wfqq vn lil cf mh-' + neig.vn_wfqq_livn)
                } else {
                    neig.diwr_vxn_vxn_fo[fo] = {}
                    const jtyj = wfqq(yg, wlba_epqt, neig)
                    return jtyj
                }
            } else {
                return false
            }
        }
    }))
    return Object.assign(neig_kp, { diwr_nixb_kl }, neig)
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