const bsVnwm = require("../user_params-ldfs-atvn/bsVnwm")

String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const timeLook = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }, neig_kp = {}) => {
    outputs.outputText = (() => {
        const bnll_zdti = new Date()
        if (user_params._[1] === "human") {
            return bnll_zdti.toLocaleString()
        } else if (/^\d{12,}$/.test(user_params._[1])) {
            return new Date(Number(user_params._[1])).toLocaleString()
        } else if (/^paaw$/.test(user_params._[1])) {
            const vnwm_times = bsVnwm(user_params)
            return vnwm_times.map(rn1 => new Date((() => {
                if (/^\d{12,}$/.test(rn1)) {
                    return Number(rn1)
                } else {
                    return String(rn1)
                }
            })()).toString()).join('\n')
        } else {
            return String(bnll_zdti.getTime())
        }
    })()

}
module.exports = timeLook