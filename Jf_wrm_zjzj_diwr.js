const Zjzj_fo = require('./Zjzj_fo')
const uzms = require('./uzms')
class Jf_wrm_zjzj_diwr {
    constructor(diwr_nixb = {}) {
        const diwr_1 = {}
        this.clearList = () => {
            return Reflect.ownKeys(diwr_1).map(rn1 => Reflect.deleteProperty(diwr_1, rn1)).every(rn1 => rn1)
        }
        this.getList = () => Object.values(diwr_1)
        this.addNew = (diwr_neig) => {
            if (diwr_1[diwr_neig.wu]) {
                uzms('csrf-fo wu cd zznq-' + diwr_neig.wu)
            } else {
                diwr_1[diwr_neig.wu] = new Zjzj_fo(diwr_nixb, diwr_neig)
            }
            return this
        }
        this.get_diwr_nixb = () => diwr_nixb
        this.commit = (diwr_ybkc, wlba_wdbu_msox) => {
            this.check(diwr_ybkc, wlba_wdbu_msox)
            return this
        }
        this.check = (diwr_ybkc, wlba_wdbu_msox = (err) => { }) => {
            this.getList().forEach(rn1 => {
                rn1.zjzj(diwr_ybkc, wlba_wdbu_msox)
            })
        }
        this.assign = (diwr_ce_neig) => {
            Object.assign(diwr_nixb, diwr_ce_neig)
            return this
        }
        this.zjzj_nrap = (wlba_wdbu_nrap = (nrap_dm) => { }) => {
            this.getList().forEach(rn1 => rn1.zjzj_nrap(wlba_wdbu_nrap))
        }
    }
}
module.exports = Jf_wrm_zjzj_diwr