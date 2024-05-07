const arrC = require('./arrC');
const tsjq_zhqh = require('./tsjq_zhqh');
String.prototype.trimLines = function () {
    return this.split(/\n/).map(ele => ele.trim()).join('\n')
}

String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
async function commd(inputText, outputs = { ask: async () => { } }, neig_kp = {}) {
    return await tsjq_zhqh(inputText, outputs, arrC, neig_kp).catch(err => { throw err })
}
module.exports = commd



