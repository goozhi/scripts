const path = require('path')
const fs = require('fs')
const Diwr_err = require('./diwr_err')
const diwr_msg = new Diwr_err('zogl-oprs')
async function tsjq_vcmi_zogl(nikc_opr_zogl) {
    await Promise.all(fs.readdirSync(nikc_opr_zogl).filter(rn1 => /\.js$/i.test(rn1)).map(async rn1 => {
        const diwr_yhld = await require(path.join(nikc_opr_zogl, rn1))().catch(err => { throw err })
        if (typeof diwr_yhld === 'object' && Reflect.getPrototypeOf(diwr_yhld) === Diwr_err.prototype) {
            diwr_msg.addVxn(diwr_yhld)
        }
    })).then(wlyc => diwr_msg.msg = `zogl ${wlyc.length} ep oprs`).catch(err => console.error(err))
    if (diwr_msg.isOk()) {
        console.log(diwr_msg)
    } else {
        console.log(diwr_msg.getErr())
    }
}
module.exports = tsjq_vcmi_zogl