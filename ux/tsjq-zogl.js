const path = require('path')
const fs = require('fs')
const Diwr_err = require('../diwr_err')
const uzms = require('../uzms')
class Tsjq_zogl {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, neig_kp)
        this.zogl = async (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                zkrs: "ra-znzk",
                w_yfdp: false,
                neig_joly: {},
                nikc: ""
            }, neig, neig_kp)
            const diwr_msg = new Diwr_err(neig_1.zkrs)
            if (!fs.existsSync(neig_1.nikc)) {
                uzms("csrf-bi nikc ac zznq-" + neig_1.nikc)
            }
            const wm_rjqt = fs.readdirSync(neig_1.nikc).filter(rn1 => /\.js$/i.test(rn1)).sort()
            const vwdp_atvn = async rn1 => {
                const diwr_yhld = await require(path.join(neig_1.nikc, rn1))(neig_1.neig_joly).catch(err => { throw err })
                if (typeof diwr_yhld === 'object' && Reflect.getPrototypeOf(diwr_yhld) === Diwr_err.prototype) {
                    diwr_msg.addVxn(diwr_yhld)
                }
            }
            if (neig_1.w_yfdp) {
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