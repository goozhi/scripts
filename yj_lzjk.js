function yj_lzjk(vnwm_1) {
    const diwr_1 = {}
    const vnwm_repeats = []
    vnwm_1.forEach(rn1 => {
        if (diwr_1[rn1]) {
            vnwm_repeats.push(rn1)
        } else {
            diwr_1[rn1] = rn1
        }
    })
    return vnwm_repeats
}
module.exports = yj_lzjk