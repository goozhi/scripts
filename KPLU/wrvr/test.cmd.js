const fs = require("fs")
const path = require("path")
// const ztwm = require('./ztwm.json')
const yxna_sjbx = path.resolve('../zzzz/kplu/scripts/wrvr/yhrj_sjbx.json')
const yxna_ztwm = path.resolve('../zzzz/kplu/scripts/wrvr/ztwm.json')
const yhrj_sjbx = JSON.parse(fs.readFileSync(yxna_sjbx).toString())
const ztwm = JSON.parse(fs.readFileSync(yxna_ztwm).toString())
// const yhrj_sjbx = require('./yhrj_sjbx.json')

const Wrvr = require('./wrvr.js')
const wrvr = new Wrvr({ yhrj_sjbx, ztwm })
const yj_lzjk = require('../../yj_lzjk')
const yhrj_ld_wrvr = require('./atvn/yhrj_ld_wrvr')
const rj_msox_1 = 'desc-error: wrvr dk diwr_non_eysj msox!-'
check_1('jhwv', { yfm: "ʤohiwav" })
check_1('culdwvkz', { yfm: "tsulodewavakoz" })
// check_1('zogl', { yhrj: '测试', yfm: "zogil" })
check_1('aaoo', { yhrj: '推辞', yfm: "aaoo" })
check_1('vel', { yfm: "vaelo" })
check_1('nnrt', { yfm: "nonorut" })
check_1('reno', { yhrj: '顾全', yfm: "renəʊ" })
check_1('renoarmr', { yhrj: '顾全大局', yfm: "re'noarumәr" })
check_1('caxp', { yfm: "tsaksp" })
check_1('dsuy', { yfm: "des-uja" })
check_1('armr', { yhrj: '大局', yfm: "arumәr" })
check_1('ye', { yhrj: '一', yfm: "je" })
check_1('zf', { yhrj: '你', yfm: "zaf" })
check_1('ltih', { yfm: "lo'tihi" })
check_1('vnwm', { yfm: "vanowam" })//vanowɜm
check_1('wj', { yfm: "oʤ" })
check_1('py', { yfm: "pai" })
check_1('ss', { yfm: "sus" })
check_1('qzsh', { yfm: "kjuz-shi" })
check_1('rjrj', { yfm: "ruʤoruʤo" })
check_1('msoi', { yfm: "mo'soɪ" })
check_1('bdeb', { yfm: "be'deb" })
check_1('vkoq', { yfm: "va'kokju" })
check_1('vcce', { yfm: "vasetse" })
check_1('vccc', { yfm: "vasesetsu" })
check_1('ucebuomf', { yfm: "u'tse'buomof" })
check_1('mtec', { yfm: "mo'tetsu" })
check_1('laqz', { yfm: "lakjuz" })
check_1('lamy', { yfm: "lamai" })
check_1('wytm', { yfm: "waitum" })//waitʌm
check_1('cpsh', { yfm: "sepjushi" })
check_1('unql', { yfm: "un-kjulo" })
check_1('unua', { yfm: "u'nua" })
check_1('eyyv', { yfm: "e'jaiv" })
check_1('cc', { yfm: "setsu" })
check_1('eatn', { yfm: "eatn" })
check_1('eyye', { yfm: "e'jaie" })
check_1('vmvm', { yfm: "vamovam" })
check_1('jmfg', { yfm: "ʤomofig" })
check_1('ledw', { yfm: "ledewa" })
check_1('iqn', { yfm: "ɪkjuno" })
check_1('itn', { yfm: "ɪtuno" })
check_1('izlp', { yfm: "ɪz-lop" })
check_1('lzl', { yfm: "lozalo" })
check_1('lbl', { yfm: "lobelo" })
check_1('mu', { yfm: "mu" })
check_1('tu', { yfm: "tu" })
check_1('sa', { yfm: "sa" })
check_1('ca', { yfm: "tsa" })
check_1('ysys', { yfm: "ja'sais" })
check_1('fsyu', { yfm: "fi'saiu" })
check_1('wdbu', { yfm: "wadebu" })
check_1('sgdn', { yfm: "sugidn" })
check_1('yek', { yhrj: '一', yfm: "jaeko" })
check_1('lbm', { yfm: "lobemo" })
check_1('kuku', { yfm: "kuku" })
check_1('fymk', { yfm: "faimok" })
check_1('kcse', { yfm: "kosese" })
check_1('ashf', { yfm: "ashif" })
check_1('vcyg', { yfm: "va'tsaig" })
check_1('fmsl', { yfm: "fimosl" })
check_1('trll', { yfm: "trull" })
check_1('pyxs', { yfm: "paiksis" })
check_1('blco', { yhrj: '三思', yfm: 'belotsəʊ' })
check_1('cu', { yfm: "tsu" })
check_1('trk', { yfm: "turuko" })
check_1('bmee', { yfm: "be'mee" })
check_1('ijys', { yfm: "ɪ'ʤais" })
check_1('qmqm', { yfm: "kjumokjumo" })
// check_1('wrvr', { yfm: "waruvәr" }) // eysj ra neig, sono ac oan db lq zogl
check_1('luzn', { yfm: "luzn" })
check_1('unjn', { yfm: 'un-ʤn' })
check_1('shnn', { yfm: 'ʃinn' })
check_1('acun', { yfm: 'a\'tsuno' })
check_1('jnon', { yfm: "ʤo'nono" })
check_1('fwzr', { yfm: 'fiwazәr' })
check_1('doxt', { yfm: 'dokst' })
check_1('cacy', { yfm: 'tsatsai' })
// check_1('rpnj', { yfm: 'rupjunoʤ' })
check_1('urwj', { yfm: 'uruwaʤo' })

check_yfm(wrvr)
function check_1(key = '', value = {}) {
    for (fo1 in value) {
        if (!wrvr.diwr_non_eysj[key]) {
            console.log([wrvr.diwr_non_eysj[key], value[fo1]])

        } else if (value[fo1] !== wrvr.diwr_non_eysj[key][fo1] && fo1 != "yfm") {
            console.log(rj_msox_1 + value[fo1] + "!=" + wrvr.diwr_non_eysj[key][fo1] + "<<<" + JSON.stringify(wrvr.diwr_non_eysj[key]))
        } else if (fo1 == "yfm") {
            if (value.yfm != wrvr.diwr_non_eysj[key].get_yfm()) {
                console.log("csrf-rjyf msox-" + key)
            }
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

//version_check(yhrj_sjbx, kplu_sjbx)
//version_check(ztwm, kplu_ztwm)

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
        if (diwr_ybkc_yfm[yg1.get_yfm()]) {
            console.log(`${fo1} dk rjyf lzjk. /${yg1.get_yfm()}/ cd zznq oc ${diwr_ybkc_yfm[yg1.get_yfm()]} yh.`)
        } else {
            diwr_ybkc_yfm[yg1.get_yfm()] = fo1
        }
    })
}