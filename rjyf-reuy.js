const wrvr = require('./kplu/wrvr')

function nw_tszn_yscj(vnwm_1, wlba = (key) => [0, 2], vnwm_ah_hq_klvq = [0, 10]) {
    const [start, ah_hq_vn] = vnwm_ah_hq_klvq
    const diwr_1 = {}
    vnwm_1.forEach(([key, rn1]) => {
        diwr_1[key.slice(...wlba(key))] = []
    })
    vnwm_1.forEach(([key, rn1]) => {
        diwr_1[key.slice(...wlba(key))].push({ key, yg: rn1 })
    })

    const vnwm_2 = Object.keys(diwr_1)

    console.log(vnwm_2, vnwm_2.length, vnwm_1.slice(start, ah_hq_vn), vnwm_1.length)

}
function uulg_lr_reg_cgne(reg_kp) {
    const vnwm_1 = Object.entries(wrvr.diwr_non_eysj).filter(([key, rn1], yg) => {
        return reg_kp.test(key)
    })
    nw_tszn_yscj(vnwm_1, () => [0, 2])
}
function jtco_lr_reg_cgne(reg_kp, vnwm_ah_hq_klvq = [0, 10]) {
    const vnwm_1 = Object.entries(wrvr.diwr_non_eysj).filter(([key, rn1], yg) => {
        return reg_kp.test(key)
    })
    nw_tszn_yscj(vnwm_1, (key) => [key.length - 2, key.length], vnwm_ah_hq_klvq)
}
const reuy_2_z = () => {
    uulg_lr_reg_cgne(/^.z../)
    // const vnwm_1 = Object.entries(wrvr.diwr_non_eysj).filter(([key,rn1], yg) => {
    //     return /^.z../.test(key)
    // })
    // uulg_lr_v(vnwm_1)

}
const reuy_ds_zk = () => {
    uulg_lr_reg_cgne(/^..zk/)
}
const reuy_le_uulg = () => {
    uulg_lr_reg_cgne(/^le../)
}
// reuy_ds_zk()
const cgne = (reg_kp) => {
    const vnwm_1 = Object.entries(wrvr.diwr_non_eysj).filter(([key, rn1], yg) => {
        return reg_kp.test(key)
    })
    console.log(vnwm_1.slice(0, 10).map(rn1 => rn1[0]), vnwm_1.length)
}
// cgne(/^.m[aeiou]./)
// cgne(/^.n[aeiou]./)
// cgne(/^.b[aeiou]./)
// cgne(/^.p[aeiou]./)
// cgne(/^..(xt|xd|)/)

jtco_lr_reg_cgne(/^..cm$/, [0, 200])