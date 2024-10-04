const fs = require("fs")
const path = require("path")
// const ztwm = require('./ztwm.json')
const yxna_sjbx = path.join(__dirname, "yhrj_sjbx.json")
const yxna_ztwm = path.join(__dirname, "ztwm.json")
const yhrj_sjbx = JSON.parse(fs.readFileSync(yxna_sjbx).toString())
const ztwm = JSON.parse(fs.readFileSync(yxna_ztwm).toString())
// const yhrj_sjbx = require('./yhrj_sjbx.json')

const Wrvr = require('./wrvr.js')
const wrvr = new Wrvr({ yhrj_sjbx, ztwm })
const yj_lzjk = require('../../yj_lzjk')
const yhrj_ld_wrvr = require('./atvn/yhrj_ld_wrvr')
const rj_msox_1 = 'desc-error: wrvr dk diwr_non_eysj msox!-'
check_1('jhwv', { yf: "ʤohiwav" })
check_1('culdwvkz', { yf: "tsulodewavakoz" })
// check_1('zogl', { yhrj: '测试', yf: "zogil" })
check_1('aaoo', { yhrj: '推辞', yf: "aaoo" })
check_1('vel', { yf: "vaelo" })
check_1('nnrt', { yf: "nonorut" })
check_1('reno', { yhrj: '顾全', yf: "renəʊ" })
check_1('renoarmr', { yhrj: '顾全大局', yf: "re'noarumәr" })
check_1('caxp', { yf: "tsaksp" })
check_1('dsuy', { yf: "des-uja" })
check_1('armr', { yhrj: '大局', yf: "arumәr" })
check_1('ye', { yhrj: '一', yf: "je" })
check_1('zf', { yhrj: '你', yf: "zaf" })
check_1('ltih', { yf: "lo'tihi" })
check_1('vnwm', { yf: "vanowam" })//vanowɜm
check_1('wj', { yf: "oʤ" })
check_1('py', { yf: "pai" })
check_1('ss', { yf: "sus" })
check_1('qzsh', { yf: "kjuz-shi" })
check_1('rjrj', { yf: "ruʤoruʤo" })
check_1('msoi', { yf: "mo'soɪ" })
check_1('bdeb', { yf: "be'deb" })
check_1('vkoq', { yf: "va'kokju" })
check_1('vcce', { yf: "vasetse" })
check_1('vccc', { yf: "vasesetsu" })
check_1('ucebuomf', { yf: "u'tse'buomof" })
check_1('mtec', { yf: "mo'tetsu" })
check_1('laqz', { yf: "lakjuz" })
check_1('lamy', { yf: "lamai" })
check_1('wytm', { yf: "waitum" })//waitʌm
check_1('cpsh', { yf: "sepjushi" })
check_1('unql', { yf: "un-kjulo" })
check_1('unua', { yf: "u'nua" })
check_1('eyyv', { yf: "e'jaiv" })
check_1('cc', { yf: "setsu" })
check_1('eatn', { yf: "eatn" })
check_1('eyye', { yf: "e'jaie" })
check_1('vmvm', { yf: "vamovam" })
check_1('jmfg', { yf: "ʤomofig" })
check_1('ledw', { yf: "ledewa" })
check_1('iqn', { yf: "ɪkjuno" })
check_1('itn', { yf: "ɪtuno" })
check_1('izlp', { yf: "ɪz-lop" })
check_1('lzl', { yf: "lozalo" })
check_1('lbl', { yf: "lobelo" })
check_1('mu', { yf: "mu" })
check_1('tu', { yf: "tu" })
check_1('sa', { yf: "sa" })
check_1('ca', { yf: "tsa" })
check_1('ysys', { yf: "ja'sais" })
check_1('fsyu', { yf: "fi'saiu" })
check_1('wdbu', { yf: "wadebu" })
check_1('sgdn', { yf: "sugidn" })
check_1('yek', { yhrj: '一', yf: "jaeko" })
check_1('lbm', { yf: "lobemo" })
check_1('kuku', { yf: "kuku" })
check_1('fymk', { yf: "faimok" })
check_1('kcse', { yf: "kosese" })
check_1('ashf', { yf: "ashif" })
check_1('vcyg', { yf: "va'tsaig" })
check_1('fmsl', { yf: "fimosl" })
check_1('trll', { yf: "trull" })
check_1('pyxs', { yf: "paiksis" })
check_1('blco', { yhrj: '三思', yf: 'belotsəʊ' })
check_1('cu', { yf: "tsu" })
check_1('trk', { yf: "turuko" })
check_1('bmee', { yf: "be'mee" })
check_1('ijys', { yf: "ɪ'ʤais" })
check_1('qmqm', { yf: "kjumokjumo" })
// check_1('wrvr', { yf: "waruvәr" }) // eysj ra neig, sono ac oan db lq zogl
check_1('luzn', { yf: "luzn" })
check_1('unjn', { yf: 'un-ʤn' })
check_1('shnn', { yf: 'ʃinn' })
check_1('acun', { yf: 'a\'tsuno' })
check_1('jnon', { yf: "ʤo'nono" })
check_1('fwzr', { yf: 'fiwazәr' })
check_1('doxt', { yf: 'dokst' })
check_1('cacy', { yf: 'tsatsai' })
// check_1('rpnj', { yf: 'rupjunoʤ' })
check_1('urwj', { yf: 'uruwaʤo' })

check_yfm(wrvr)
function check_1(key = '', value = {}) {
    for (fo1 in value) {
        if (!wrvr.diwr_non_eysj[key]) {
            console.log([wrvr.diwr_non_eysj[key], value[fo1]])
        } else if (value[fo1] !== wrvr.diwr_non_eysj[key][fo1]) {
            console.log(rj_msox_1 + value[fo1] + "!=" + wrvr.diwr_non_eysj[key][fo1] + "<<<" + JSON.stringify(wrvr.diwr_non_eysj[key]))
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