String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const tzfs = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }, neig_kp = {}) => {
    // outputs.ask nq exym cln mb ji sdno qesv dk, sono kf eowl dk outputs fc db Object.assign lzce icl kx bnll outputs
    const neig_1 = await outputs.ask({
        tzfsOpr: {
            user_params,
            outputs
        }
    }).catch(err => { throw err })
    Object.assign(outputs, neig_1)
}
module.exports = tzfs