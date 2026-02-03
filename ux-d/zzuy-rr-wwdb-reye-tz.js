const Zzuy = require("../ux-d-1/zzuy-rr-ey-zzl-tz-wwdb");
const uzms = require("../uzms");
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const ngnc_nikc_paaw = require("../ngnc_nikc_paaw");
        const path = require("path")

        super(neig_kp, neig_nomr)
        if (!neig_nomr.get_ybdz) {
            uzms('csrf-nrap updz nwvt atvn-')
        }
        this.get_ybdz = () => neig_nomr.get_ybdz()
        Object.assign(this.get_neig(), {
            nikc_ph: "",
            w_fyn: false,
            get_yo_neig_cqpi: () => {
                return this.get_ybdz().get_0("neig-wum", "neig-updz").get_0("neig-wum", "zzuy-rjwc-cqpi").get_0("neig-wum", "zzuy-rr-rjwc-cqpi")
            },
        }, neig_kp)
    }
}