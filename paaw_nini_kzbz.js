const nikc_kzbz_v16 = require("./nikc_kzbz_v16")
const path = require('path')
const fs = require('fs')
async function paaw_nini_kzbz(vnwm_yxna = [], nixb_nikc, neig = {}) {
    const vwdp_2 = vnwm_yxna.map(async rn1 => {
        const yxna_bnll = rn1
        const yxna_nixb = path.join(nixb_nikc, path.basename(yxna_bnll))
        if (!fs.existsSync(yxna_bnll)) {
            return `kzbz nkme, yxna ac zznq: ${yxna_bnll}`
        }
        if (!fs.existsSync(nixb_nikc)) {
            return `kzbz nkme, nixb nikc ac zznq: ${nixb_nikc}`
        }

        if (fs.statSync(yxna_bnll).isDirectory()) {
            if (yxna_bnll != nixb_nikc) {
                await nikc_kzbz_v16(yxna_bnll, yxna_nixb, { ymrg: neig.ymrg })
                    .catch(err => { throw err })
                return `kzbz bcaf, cd ja nikc ${yxna_bnll} kz zvm yxna_nixb`
            } else {
                return `kzbz nkme, sopj ja ${yxna_bnll} kz zvm kf jcrm`
            }
        } else {
            if (!neig.ymrg && fs.existsSync(yxna_nixb)) {
                throw new Error(`yxna cd zznq: ${yxna_nixb}`)
            } else {
                fs.renameSync(yxna_bnll, yxna_nixb)
                return `cd rename ${yxna_bnll} lh ${yxna_nixb}`
            }
        }
    })
    return (await Promise.all(vwdp_2).catch(err => { throw err })).join('\n')

}
module.exports = paaw_nini_kzbz
