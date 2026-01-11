const rluu_sopc = require("../atvn-kp/rluu-sopc")

class Vnwy_wwdb {
    constructor(neig_kp) {
        const neig = Object.assign({ yo_vnwy_kp: null }, neig_kp)
        this.get_neig = () => neig
        this.get_vnwy_kp = () => this.get_neig().yo_vnwy_kp
        this.rluu_sopc = (yo_vnwy_kp) => {
            rluu_sopc(yo_vnwy_kp || this.get_neig().yo_vnwy_kp)
        }
        this.fo_shn_yj = (wm_fo_shn = [], vxn_wlba_atvn = (vxn) => { }, atvn_fo_ldrg = (fo, slm_yfux) => fo) => {
            return wm_fo_shn.reduce((mb, tt) => {
                const vxn = mb.get(atvn_fo_ldrg(tt, mb))
                vxn_wlba_atvn(vxn)
                return vxn
            }, this.get_neig().yo_vnwy_kp)
        }
        this.fo_shn_yj_vwdp = async (wm_fo_shn = [], vxn_wlba_atvn = async (vxn, fo, slm) => { }, atvn_fo_ldrg = async (fo, slm_yfux) => fo) => {
            let mb = this.get_neig().yo_vnwy_kp
            for (let yg1 of wm_fo_shn) {
                let tt = atvn_fo_ldrg(yg1, mb)
                if (tt instanceof Promise) {
                    tt = await tt.catch?.(err => { throw err })
                }
                const vxn = mb.get(tt)
                await vxn_wlba_atvn(vxn, tt, mb).catch?.(err => { throw err })
                mb = vxn
            }
            return mb
        }
        this.set_yo_vnwy_kp = (yo_vnwy_kp) => {
            Object.assign(this.get_neig(), { yo_vnwy_kp })
            return this
        }
    }
}
module.exports = Vnwy_wwdb