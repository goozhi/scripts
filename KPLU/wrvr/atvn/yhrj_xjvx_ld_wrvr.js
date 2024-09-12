function yhrj_xjvx_ld_wrvr(yhrj = "", wrvr_kp = {}) {
    return rfrf_eysj(yhrj, wrvr_kp)
        .replace(/([\u4E00-\u9FA5])(\w)/g, '$1 $2')
        .replace(/(\w)([\u4E00-\u9FA5])/g, '$1 $2')
        .replace(/([\u4E00-\u9FA5])(?=[\u4E00-\u9FA5])/g, '$1 ')
        .replace(/[\u4E00-\u9FA5]/g, (match_1) => {
            return wrvr_kp.diwr_cqzt_di_wrvr[match_1] || match_1
        })
}
module.exports = yhrj_xjvx_ld_wrvr

function rfrf_eysj(yhrj_xjvx, wrvr_kp = {}) {
    return yhrj_xjvx.split('').reduce((mb_rj, rn1, bnll_eqwy, arr_1) => {
        const reg_ud_pc_yhrj = /[\u4E00-\u9FA5]$/
        if (reg_ud_pc_yhrj.test(mb_rj)) {
            return mb_rj.replace(reg_ud_pc_yhrj, (_) => {
                if (wrvr_kp.diwr_sj_di_wrvr[_ + rn1])
                    return (/\w\S$/.test(mb_rj) ? " " : "") + wrvr_kp.diwr_sj_di_wrvr[_ + rn1] + (bnll_eqwy !== arr_1.length - 1 ? " " : "")
                else
                    return _ + rn1
            })
        } else {
            return mb_rj + rn1
        }
    }, '')
}