const path = require('path')
const tsjq_vcmi_zogl = require('../tsjq_vcmi_zogl')
const nikc_opr_zogl = path.resolve('opr_zogl')

async function rjqt_tsjq_zjzj() {
    await tsjq_vcmi_zogl(nikc_opr_zogl).catch(err => console.error(err))
}
module.exports = rjqt_tsjq_zjzj