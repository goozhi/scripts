const Zogl = require('./zogl')
/**
 * Fl gkdb oc se scripts.
 * Uo co nq yndf nikc rvdb stst atvn,
 * Rt db zogl_tsjq
 */
function tsjq_zogl(commd, outputs, equals, neig_kp) {
    new Zogl(async (inputText) => { return await commd(inputText, outputs(), neig_kp).catch(err => { throw err }) }, equals, neig_kp).zogl()
}
module.exports = tsjq_zogl