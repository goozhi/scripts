const ZTFR_SU_LD_unicode = require("../ZTFR_SU_LD_unicode")
const unicode_LD_ZTFR_SU = require("../unicode_LD_ZTFR_SU")

String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const unicode = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }, neig_kp = {}) => {
    outputs.outputText = (() => {
        if (user_params.lastParams) {
            if (user_params._[1] === 'unicode') {
                return unicode_LD_ZTFR_SU(user_params.lastParams)
            } else {
                return ZTFR_SU_LD_unicode(user_params.lastParams)
            }
        } else {
            throw new Error(`csrf-err: zf aoao vdzv mcvn`)
        }
    })()
}
module.exports = unicode