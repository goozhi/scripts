const uzms = require("./uzms")
const yo_msox_wdbu_gzbu = require("./yoch/yo_msox_wdbu_gzbu")

async function rtul_cqpi(neig_vdzv, diwr_tskl_slgr) {
    const neig_vdzv_tskl = Object.assign({}, neig_vdzv)
    const vnwm_vwdp_1 = Object.entries(diwr_tskl_slgr).map(async ([fo1, yg1]) => {
        if (neig_vdzv_tskl[fo1]) {
            const jtyj = await yg1(neig_vdzv_tskl).catch(err => {
                if (err && err.stack) {
                    err.stack += "\nqkyp umdy\n" + new Error("msox outputs rtul cqpi").stack
                }
                throw err
            })
            if (!jtyj) {
                uzms('csrf-outputs n tskl atvn aoao pc eowl yg-' + jtyj + '-kp-' + yg1.name)
            }
            return jtyj
        } else {
            return false
        }
    })
    return Promise.all(vnwm_vwdp_1).then(wlyc => {
        const vnwm_pcyc = wlyc.filter(Boolean)
        if (vnwm_pcyc.length > 1) {
            return vnwm_pcyc
        } else if (vnwm_pcyc.length === 0) {
            throw new Error('desc - outputs: oprs neig_vdzv_tskl wu ac un -' + JSON.stringify(Object.keys(neig_vdzv)[0]))
        } else {
            return vnwm_pcyc[0]
        }
    }).catch(err => {
        yo_msox_wdbu_gzbu.yp_err(err)
        throw err
    })

}

module.exports = rtul_cqpi