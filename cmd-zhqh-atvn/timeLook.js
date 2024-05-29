String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const timeLook = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }, neig_kp = {}) => {
    outputs.outputText = (() => {
        const bnll_zdti = new Date()
        if (user_params._[1] === "human") {
            return bnll_zdti.toLocaleString().replace(/ GMT.*/, '')
        } else if (/^\d+$/.test(user_params._[1])) {
            return new Date(user_params._[1]).toString().replace(/ GMT.*/, '')
        } else {
            return String(bnll_zdti.getTime())
        }
    })()

}
module.exports = timeLook