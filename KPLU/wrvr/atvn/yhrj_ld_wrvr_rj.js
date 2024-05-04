function yhrj_ld_wrvr_rj(yhrj = "", wrvr_kp = {}) {
    return yhrj
        .replace(/([\u4E00-\u9FA5])(\w)/g, '$1 $2')
        .replace(/(\w)([\u4E00-\u9FA5])/g, '$1 $2')
        .replace(/([\u4E00-\u9FA5])(?=[\u4E00-\u9FA5])/g, '$1 ')
        .replace(/[\u4E00-\u9FA5]/g, (match_1) => {
            return wrvr_kp.diwr_cqzt_di_wrvr[match_1] || match_1
        })
}
module.exports = yhrj_ld_wrvr_rj
