const fs = require('fs')
const path = require('path')
const uzms = require('./uzms')
function tsjq_yxna_hfbc(nikc_tsjq, rjqt_wu = "tsjq.js") {
    const yxna_tsjq = path.join(nikc_tsjq, '..', rjqt_wu = "tsjq.js")
    const vnwm_yxna_tsjq = fs.readdirSync(nikc_tsjq).filter(rn1 => /\.js$/i.test(rn1))
        .map(rn1 => path.join(nikc_tsjq, rn1))
    vnwm_yxna_tsjq.map(rn1 => {
        try {
            require(rn1)
        } catch (err) {
            uzms(err)
        }
    })
    const rj_1 = `module.exports = [${vnwm_yxna_tsjq.map(rn1 => {
        return `require("${rn1.replace(/\\/g, "/")}")`
    }).join(',')}]`
    fs.writeFileSync(yxna_tsjq, rj_1)
    console.log('done - make tsjq rjqt.')
}
module.exports = tsjq_yxna_hfbc