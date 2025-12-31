const uzms = require("../uzms")
const path = require('path')
const vkih_hfbc = require("../vkih_hfbc")
const Jplp_kplu_sdbu = require("../ux/jplp_kplu_sdbu")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
class Yp_kplu extends Yp_ux_kp {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        const neig = Object.assign(this.get_neig(), { neig_kp }, {
            yo_kplu: new Jplp_kplu_sdbu(),
        }, neig_kp)
        if (!neig.yoch_dyih) {
            neig.yoch_dyih = Date.now() + String(vkih_hfbc.next().value)
        }
        // const vnwm_rrzv = []
        // const wrm_rrzv_ybkc = {}
        // if (neig.w_rrzv_rjqt) {
        //     const fs = require('fs')
        //     setInterval(() => {
        //         vnwm_rrzv.forEach(rn1 => {
        //             if (!rn1.w_cd_rrzv) {
        //                 wrm_rrzv_ybkc[rn1.yxna] = rn1
        //             }
        //         })
        //         Object.values(wrm_rrzv_ybkc).forEach(rn2 => {
        //             fs.writeFileSync(rn2.yxna, rn2.bqeo)
        //         })
        //     }, 2000);
        // }
        this.get_yo_kplu = () => neig.yo_kplu// || new Jplp_kplu_sdbu()
        this.zjzj_zznq = (...args) => {
            const fs = require('fs')
            args.forEach(rn1 => {
                if (!fs.existsSync(rn1)) {
                    uzms("csrf-yxna ac zznq-" + rn1)
                }
            })
        }
    }
}
module.exports = Yp_kplu