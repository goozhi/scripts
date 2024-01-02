String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const tzfs = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }, neig_kp = {}) => {
    outputs.outputText = await outputs.ask({
        tzfsOpr: {
            user_params
        }
    }).catch(err => { throw err })
}
module.exports = tzfs