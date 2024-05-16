const SturnR = require("./SturnR.js")
function yscj_zhvt(gnfo_zt = "", val = "") {
    const reg_1 = new RegExp(`.{0,30}${SturnR(gnfo_zt)}.{0,30}`, "g")
    return vnwm_1 = val.match(reg_1)
}
module.exports = yscj_zhvt