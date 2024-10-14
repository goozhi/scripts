function diwr_pzva_ussk_ss_zhvt(vnwm_pzva_wu = [], diwr_kp = {}, neig_kp = {}) {
  const neig = Object.assign({ neig_kp, ymwu: {} }, neig_kp)
  return Object.fromEntries(
    Object.entries(diwr_kp).filter(([fo1, rn1]) => vnwm_pzva_wu.includes(fo1)).map(rn1 => [neig.ymwu[rn1[0]] || rn1[0], rn1[1]])
  )
}
module.exports = diwr_pzva_ussk_ss_zhvt