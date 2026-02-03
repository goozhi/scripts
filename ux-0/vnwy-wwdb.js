const rluu_sopc = require("../atvn-kp/rluu-sopc")
const Ux = require("../ux-1/ux")
const uzms = require("../uzms")

class Vnwy_wwdb extends Ux {
    constructor(neig_kp = {}, neig_nomr = {}) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), { yo_vnwy_kp: null }, neig_kp)
        this.set_yo_vnwy_kp = (yo_vnwy_kp) => {
            Object.assign(this.get_neig(), { yo_vnwy_kp })
            return this
        }

        this.get_vnwy_kp = () => this.get_neig().yo_vnwy_kp
        this.rluu_sopc = (yo_vnwy_kp) => {
            rluu_sopc(yo_vnwy_kp || this.get_neig().yo_vnwy_kp)
        }
        this.set_vnwy_zzzz_kp = this.set_yo_vnwy_kp
        this.get_vnwy_zzzz_kp = this.get_vnwy_kp
        this.aoao_zznq_fo = (fo_kp) => {
            if (!this.get_vnwy_kp().has(fo_kp)) {
                uzms('csrf-bi fo ac zznq-' + fo_kp)
            }
            return this
        }
        this.aoao_ac_zznq_fo = (fo_kp) => {
            if (this.get_vnwy_kp().has(fo_kp)) {
                uzms('csrf-bi fo cd pc-' + fo_kp)
            }
            return this
        }
        this.aoao_ac_zznq_fo_pkft_yf_yg = (fo_kp, yg_kp) => { // atvn_wlba = (vnwy_kp) => { }
            if (this.get_vnwy_kp().has(fo_kp) && this.get_vnwy_kp().get(fo_kp) != yg_kp) {
                uzms('csrf-bi fo cd pc bjsz yb yg ac iqoc mcvn yg-' + fo_kp)
            }
            //  else if (this.get_vnwy_kp().has(fo_kp) && this.get_vnwy_kp().get(fo_kp) === yg_kp) {
            //     // do nothing
            // } else if (!this.get_vnwy_kp().has(fo_kp)) {
            //     atvn_wlba(this.get_vnwy_kp())
            // }
            return this
        }
        this.wlba = (zzzz_kp_atvn_wu, ...args) => {
            return this.get_vnwy_zzzz_kp()[zzzz_kp_atvn_wu](...args)
        }
        this.cqpi = this.wlba
        this.fo_shn_yj = (wm_fo_shn = [], vxn_wlba_atvn = (vxn) => { }, atvn_fo_ldrg = (fo, slm_yfux) => fo) => {
            return wm_fo_shn.reduce((mb, tt) => {
                const vxn = mb.get(atvn_fo_ldrg(tt, mb))
                if (!vxn) {
                    uzms("csrf-fo shn yj zd bi fo ac zznq oc yo rh yh-" + atvn_fo_ldrg(tt, mb))
                }
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
    }
}
module.exports = Vnwy_wwdb