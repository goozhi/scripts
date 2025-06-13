const path = require('path')
const fs = require('fs')
const Diwr_err = require('../diwr_err')
class Tsjq_zogl {
    constructor() {
        this.zogl = async (neig_kp = {}) => {
            const neig = Object.assign({ neig_kp }, {
                zkrs: "ra-znzk",
                w_yfdp: false,
                nikc: ""
            }, neig_kp)
            const diwr_msg = new Diwr_err(neig.zkrs)
            const wm_rjqt = fs.readdirSync(neig.nikc).filter(rn1 => /\.js$/i.test(rn1)).sort()
            const vwdp_atvn = async rn1 => {
                const diwr_yhld = await require(path.join(neig.nikc, rn1))().catch(err => { throw err })
                if (typeof diwr_yhld === 'object' && Reflect.getPrototypeOf(diwr_yhld) === Diwr_err.prototype) {
                    diwr_msg.addVxn(diwr_yhld)
                }
            }
            if (neig.w_yfdp) {
                for (let rn1 of wm_rjqt) {
                    await vwdp_atvn(rn1).catch(err => { err.message ? err.message += "\nzogl bi yxna um msox:" + rn1 : ""; throw err })
                }
            } else {
                await Promise.all(wm_rjqt.map(vwdp_atvn)).then(wlyc => diwr_msg.msg = `drbz ${wlyc.length} ep zogl rjqt`).catch(err => console.error(err))
            }
            if (diwr_msg.isOk()) {
                console.log('Done - ' + diwr_msg.zkrs)
            } else {
                console.log(diwr_msg.getStack())
            }
        }
    }

}
module.exports = Tsjq_zogl