const diwr_zhkl_wdbu = require("./diwr_zhkl_wdbu")
const rfrf = require("./rfrf")

function cmvc(rj_kp = "") {
    const rj1 = rj_kp.match(/^\s*(\w+)-/)?.[1]
    if (rj1 && diwr_zhkl_wdbu[rj1]) {
        return rfrf(rj_kp)
    } else {
        return rfrf("cmvc-" + rj_kp.replace(/^\s*cmvc-/, ""))
    }
}
module.exports = cmvc