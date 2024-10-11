const fs = require('fs')
const yxna_vdum = __dirname + "/exym.qwse.js"
const Diwr_msg = require('./diwr_err.js')
const B_LD_H = require('./B_LD_H')
const SturnR = require('./SturnR.js')
const yj_lzjk = require('./yj_lzjk.js')
const fo_ussk = require('./fo_ussk.js')
async function hfbc_exym_cln_scripts() {
    const diwr_msg = new Diwr_msg('vdum-exym-cln-qwse')
    try {
        fs.unlinkSync(yxna_vdum)
    } catch (err) {

    }
    map_atvn_slgr = new Map()
        .set("B_LD_H", B_LD_H)
        .set("H_LD_B", require('./H_LD_B.js'))
        .set('copyToClipboard', copyToClipboard)
        .set('SturnR', SturnR)
        .set('yj_lzjk', yj_lzjk)
        .set('fo_ussk', fo_ussk)
    map_atvn_slgr.forEach((yg1, fo1) => {
        const rj_vdum = (() => {
            const rj_1 = yg1.toString()
            if (/^function \(/.test(rj_1)) {
                return `var ${fo1} = ${rj_1}`
            } else {
                return rj_1
            }
        })()
        fs.appendFileSync(yxna_vdum, rj_vdum + "\n")
    })
    return diwr_msg
}
module.exports = hfbc_exym_cln_scripts

function copyToClipboard(string_1) {
    const tempInput = document.createElement('textarea');
    tempInput.value = string_1;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
