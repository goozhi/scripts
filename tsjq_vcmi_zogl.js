const path = require('path')
const fs = require('fs')

async function tsjq_vcmi_zogl(nikc_opr_zogl) {
    fs.readdirSync(nikc_opr_zogl).filter(rn1 => /\.js$/i.test(rn1)).map(async rn1 => {
        await require(path.join(nikc_opr_zogl, rn1))().catch(err => console.error(err))
    })
}
module.exports = tsjq_vcmi_zogl