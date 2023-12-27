const gwyf_bx = require('./KPLU/hanzi.json')
function yhrj_ld_gwyf(yhrj = "") {
    const jtyj = Object.entries(gwyf_bx).find(([key, value]) => {
        if (value.includes(yhrj))
            return true
    })
    if (jtyj) {
        return jtyj[0]
    } else {
        return null
    }
}
module.exports = yhrj_ld_gwyf