const SturnR = require("./SturnR.js")
const regHfbc = require("./regHfbc.js")
function yscj_zhvt(gnfo_zt = "", val = "", neig_kp = {}) {
    const reg_1 = (() => {
        return neig_kp.regex ?
            regHfbc(neig_kp.regex, "g") :
            new RegExp(`.{0,30}${SturnR(gnfo_zt)}.{0,30}`, "g")
    })()
    return vnwm_1 = val.match(reg_1)
}
module.exports = yscj_zhvt