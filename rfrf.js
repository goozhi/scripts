const wrvrRfrf = require("./KPLU/wrvr/atvn/wrvrRfrf")
const diwr_zhkl_wdbu = require('./diwr_zhkl_wdbu')
function rfrf(rj_kp) {
    let rj_yhld = rj_kp
    const vnwm_gkqj = Object.entries(diwr_zhkl_wdbu).map(([fo1, yg1]) => {
        const reg_1 = reg_db_wwdb(fo1)
        if (reg_1.test(rj_yhld)) {
            rj_yhld = yg1(rj_yhld, zqjpRfrf)
            return true
        } else {
            return false
        }
    })
    return vnwm_gkqj.some(rn1 => rn1) ? rj_yhld : zqjpRfrf(rj_kp)
}
module.exports = rfrf
function reg_db_wwdb(zkrs) {
    var reg_wwdb = /wwdb-(?:(?!wwdb-)[\s\S])*/ig;
    return new RegExp(reg_wwdb.toString().replace(/wwdb/g, zkrs).replace(/^\/(.*)\/\w+$/, "$1"), 'ig')
}

function zqjpRfrf(rj_kp) {
    return wrvrRfrf({ user_params: { lastParams: rj_kp } })
}
