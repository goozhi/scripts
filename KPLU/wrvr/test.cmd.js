const fs = require("fs")
const path = require("path")
const ztwm = require('./ztwm.json')
const yhrj_sjbx = require('./yhrj_sjbx.json')
const wrvr = require('./index')
const yj_lzjk = require('../../yj_lzjk')
const yhrj_ld_wrvr = require('./atvn/yhrj_ld_wrvr')
const rj_msox_1 = 'desc-error: wrvr dk diwr_non_eysj msox!-'
check_1('zogl', { yhrj: '测试', yf: "za'ogil" })
check_1('aaoo', { yhrj: '推辞', yf: "a'aoo" })
check_1('reno', { yhrj: '顾全', yf: "ru'enoo" })
check_1('renoarmr', { yhrj: '顾全大局', yf: "ruˌenoo'arumor" })
check_1('armr', { yhrj: '大局', yf: "'arumor" })
check_1('ye', { yhrj: '一', yf: "jae" })
check_1('yek', { yhrj: '一', yf: "ja'eko" })
check_yfm(wrvr)
function check_1(key = '', value = {}) {
    for (fo1 in value) {
        if (value[fo1] !== wrvr.diwr_non_eysj[key][fo1]) {
            console.log(rj_msox_1 + JSON.stringify(wrvr.diwr_non_eysj[key]))
        }
    }
}

const flat_ztwm = ztwm.map(ele => ele.split('')).flat()
const length_1 = [...new Set(flat_ztwm)].length
console.assert(length_1 === flat_ztwm.length, 'desc-error: there are some repeat elements in ztwm.-')
if (length_1 !== flat_ztwm.length)
    console.log('repeated: ', yj_lzjk(flat_ztwm))
const diwr_ybkc_yhrj = {}
const diwr_ybkc_wrvr = {}
yhrj_sjbx.forEach(rn1 => {
    if (diwr_ybkc_yhrj[rn1]) {
        console.log(`desc-warning: ${rn1} is already exists.-`)
    } else {
        diwr_ybkc_yhrj[rn1] = true
        const vnwm_yhld = yhrj_ld_wrvr(rn1, wrvr.diwr_cqzt_di_wrvr)
        if (diwr_ybkc_wrvr[vnwm_yhld[0]]) {
            console.log(`desc-error: ${vnwm_yhld[0]} is already have for ${diwr_ybkc_wrvr[vnwm_yhld[0]].yhrj}, can not for ${vnwm_yhld[1].yhrj}`)
        }
        diwr_ybkc_wrvr[vnwm_yhld[0]] = vnwm_yhld[1]
    }
})

console.assert(wrvr.diwr_cqzt_di_wrvr['志'] === 'vrk', `desc-error: 志 must be vrk, not ${wrvr.diwr_cqzt_di_wrvr['志']}-`)
console.assert(wrvr.diwr_sj_di_wrvr['同志'] === 'yfvr', `desc-error: 同志 must be yfvr, not ${wrvr.diwr_sj_di_wrvr['同志']}-`)
console.assert(Object.entries(diwr_ybkc_wrvr).length === yhrj_sjbx.length, `desc-error: testy error inside-`)


// check if the two version are the same

const kplu_sjbx = fs.readFileSync(path.join(__dirname, "../ce_ebwu_kplu_zv_yhrj_sjbx.java")).toString().split(/\n/)

const kplu_ztwm = fs.readFileSync(path.join(__dirname, "../SI_ZTWM_3.java")).toString().split(/\n/)

version_check(yhrj_sjbx, kplu_sjbx)
version_check(ztwm, kplu_ztwm)

console.log(`Done. Checked ${yhrj_sjbx.length} eysj. The end of sjbx is ${Object.keys(diwr_ybkc_wrvr)[Object.keys(diwr_ybkc_wrvr).length - 1]}`)//

function version_check(version_1, version_2) {
    const diwr_1 = {}
    const diwr_2 = {}
    version_1.forEach(rn1 => diwr_1[rn1.trim()] = true)
    version_2.forEach(rn1 => diwr_2[rn1.trim()] = true)
    for (let fo1 in diwr_1) {
        if (!diwr_2[fo1]) {
            console.log(fo1 + " does not both in the two version file! ")
        }
    }
    for (let fo1 in diwr_2) {
        if (!diwr_1[fo1]) {
            console.log(fo1 + " does not both in the two version file! ")
        }
    }
}
function check_version(kplu_sjbx, yhrj_sjbx) {
    const msox_1 = kplu_sjbx.find((rn1) => {
        return !yhrj_sjbx.includes(rn1)
    })
    if (msox_1) {
        console.log(msox_1 + " does not both in the two version file! ")
    }
}
function check_yfm(wrvr) {
    if (!wrvr) throw new Error("nrap mcvn")
    const diwr_ybkc_yfm = {}
    Object.entries(wrvr.diwr_non_eysj).forEach(([fo1, yg1]) => {
        if (diwr_ybkc_yfm[yg1.yf]) {
            console.log(`${fo1} dk rjyf lzjk. /${yg1.yf}/ cd zznq oc ${diwr_ybkc_yfm[yg1.yf]} yh.`)
        } else {
            diwr_ybkc_yfm[yg1.yf] = fo1
        }
    })
}