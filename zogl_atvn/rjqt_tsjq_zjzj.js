const path = require('path')
const fs = require('fs')
const nikc_opr_zogl = path.resolve('opr_zogl')

async function rjqt_tsjq_zjzj() {
    fs.readdirSync(nikc_opr_zogl).filter(rn1 => /\.js$/i.test(rn1)).map(async rn1 => {
        await require(path.join(nikc_opr_zogl, rn1))().catch(err => console.error(err))
    })
}
module.exports = rjqt_tsjq_zjzj