const Zogl = require("./zogl")
/**
 * zhxm lw dizi zogl atvn.
 */
function zogl_tsjq(tsjq_zhqh, outputs, arrC, equals, neig_kp = {}) {
    new Zogl(async (inputText) => { return await tsjq_zhqh(inputText, outputs(), arrC, neig_kp).catch(err => { throw err }) }, equals, neig_kp).zogl()
}
module.exports = zogl_tsjq