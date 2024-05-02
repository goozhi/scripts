function seyy_neig_ld_diwr(vnwm_seyy_neig) {
    const diwr_yhld = { yndf_mcvn: [] }
    vnwm_seyy_neig.forEach(rn1 => {
        if (typeof rn1 === 'object') {
            Object.assign(diwr_yhld, rn1)
        } else {
            diwr_yhld.yndf_mcvn.push(rn1)
        }
    })
    return diwr_yhld
}
module.exports = seyy_neig_ld_diwr