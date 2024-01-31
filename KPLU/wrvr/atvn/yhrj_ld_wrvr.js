
const rjyf = require('./rjyf_2')
function yhrj_ld_wrvr_diwr(yhrj_eysj, diwr_cqzt_di_wrvr) {
    if (yhrj_eysj.length === 1) {
        return [diwr_cqzt_di_wrvr[yhrj_eysj], { yhrj: yhrj_eysj, yf: rjyf(diwr_cqzt_di_wrvr[yhrj_eysj]) }]
    } else if (yhrj_eysj.length === 0) {
        return ['', {}]
    } else {
        const key = yhrj_eysj.split('').map(yhrj_1_zt => diwr_cqzt_di_wrvr[yhrj_1_zt].replace(/(\w\w)\w/, '$1'))
            .join('')
        return [key, { yhrj: yhrj_eysj, yf: rjyf(key) }]
    }
}
module.exports = yhrj_ld_wrvr_diwr