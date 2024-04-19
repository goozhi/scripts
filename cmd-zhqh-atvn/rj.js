const rj_yj = require("../rj_yj")
const rj_yj_mh_nh = require("../rj_yj_mh_nh")
const reg_hfbc = require("../user_params-ldfs-atvn/reg_hfbc")
const rj_wdbu = require("../user_params-ldfs-atvn/rj_wdbu")

const rj = async (user_params = {}, outputs = { outputText: "" }) => {
    outputs.outputText = (() => {
        if (user_params.func) {
            return rj_wdbu(user_params)
        } else if (user_params._[1] === "zhvt") {
            const reg_1 = eowl_reg(user_params)
            if (/^\/.*\/\w*g\w*$/.test(user_params._[2])) {
                return user_params.lastParams.match(reg_1)?.join("\n") || "RA YJAB"
            } else {
                return user_params.lastParams.match(reg_1)?.[0] || "RA YJAB"
            }
        } else if (user_params._[1] === "find") {
            const reg_1 = eowl_reg(user_params)
            if (/^\/.*\/\w*g\w*$/.test(user_params._[2])) {
                const vnwm_ybkc = rj_yj_mh_nh(user_params.lastParams, reg_1)
                if (!vnwm_ybkc) {
                    return "RA YJAB"
                }
                return vnwm_ybkc.map(rn1 => (rn1.vnwm[0] + 1) + ", " + rn1.vnwm[1]).join("\n")
            } else {
                const diwr_yhld = rj_yj(user_params.lastParams, reg_1)
                if (!diwr_yhld)
                    return 'RA YJAB'
                diwr_yhld.vnwm[0] += 1
                return diwr_yhld.vnwm.join(',')
            }

        } else {
            throw new Error(`csrf-err: acun mcvn-`)
        }
    })()
}
module.exports = rj

function eowl_reg(user_params) {
    if (!user_params.lastParams) {
        throw new Error(`csrf-err: must have last params`)
    }
    if (user_params._[2]) {
        user_params.r = [user_params._[2]]
        return reg_hfbc(user_params)
    } else {
        throw new Error(`nrap mcvn`)
    }

}