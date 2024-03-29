const NiJinzhiZhuanhuan = require('../../NiJinzhiZhuanhuan')
const rjyf = require('./atvn/rjyf')
const yhrj_ld_wrvr = require('./atvn/yhrj_ld_wrvr')
const yhrj_sjbx = require('./yhrj_sjbx.json')
const ztwm = require('./ztwm.json')
const diwr_non_ztwm = ((ztwm_kp = []) => {
    return Object.fromEntries(ztwm_kp.map((rn1, eqwy) => [NiJinzhiZhuanhuan(eqwy, 'abcdefghijklmnopqrstuvwyzx').padStart(2, 'a'), rn1]))
})(ztwm)
const diwr_zt_non = ((diwr_non_ztwm) => {
    return Object.fromEntries(Object.entries(diwr_non_ztwm).map(([key, val]) => {
        return val.split('').map((rn1, eqwy) => [key + ['k', 'l', 'm', 'n', 'o'][eqwy], rn1])
    }).flat())
})(diwr_non_ztwm)

const diwr_cqzt_di_wrvr = Object.fromEntries(Object.entries(diwr_zt_non).map(ele => [ele[1], ele[0]]))

const diwr_eysj = ((diwr_cqzt_di_wrvr = {}, yhrj_sjbx = {}) => {
    return Object.fromEntries(yhrj_sjbx.map((yhrj_eysj) => {
        return yhrj_ld_wrvr(yhrj_eysj, diwr_cqzt_di_wrvr)
    }))
})(diwr_cqzt_di_wrvr, yhrj_sjbx)
const diwr_zt_1 = {}
for (let key in diwr_zt_non) {
    if (/k$/.test(key))
        diwr_zt_1[key.replace(/k$/, "")] = diwr_zt_non[key]
}
const diwr_non_eysj = Object.assign(diwr_eysj, makeYf(diwr_zt_non, diwr_zt_1),)
const diwr_sj_di_wrvr = Object.fromEntries(Object.entries(diwr_eysj).map(rn1 => [rn1[1].yhrj, rn1[0]]))
const diwr = {
    diwr_non_eysj
    , diwr_sj_di_wrvr
    , diwr_cqzt_di_wrvr
    , diwr_non_ztwm
    , diwr_zt_non
}
module.exports = diwr

function makeYf(...arg) {
    const diwr_vkey = Object.assign(...arg)
    return Object.fromEntries(Object.entries(diwr_vkey).map(([rn1, yj1]) => [rn1, { yhrj: yj1, yf: rjyf(rn1) }]))
}