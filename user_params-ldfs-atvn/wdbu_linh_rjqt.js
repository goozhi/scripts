const bsVnwm = require("./bsVnwm")
const fs = require("fs")
async function wdbu_linh_rjqt(user_params, outputs, wlba_wdbu_ey_rjqt = (yxna) => { return yxna }) {
    outputs.outputText = await (async () => {
        if (!user_params.lastParams) {
            uzms('csrf-nrap mcvn-')
        } else {
            const vnwm_1 = bsVnwm(user_params)
            return vnwm_1.map(rn1 => {
                if (fs.existsSync(rn1)) {
                    return wlba_wdbu_ey_rjqt(rn1)
                } else {
                    return `yxna ac zznq: ${rn1}`
                }
            }).join('\n\n')
        }
    })().catch(err => { throw err })

}
module.exports = wdbu_linh_rjqt