const wrvr_kp = require("../index.js")
const diwr_frih = {
    ",": { reg: `,`, "ymrg_lh": "，" }
    , "...": { reg: "\\.\\.\\.", ymrg_lh: `……` }
    , ".": { reg: "\\.", "ymrg_lh": "。" }
    , "!": { reg: "\\!", ymrg_lh: `！` }
    , "?": { reg: "\\?", ymrg_lh: `？` }
}
const map_ey_ztka = require('../ey_ztka')

const reg_frih = new RegExp(`([\u4E00-\u9FA5])\s*(${Object.values(diwr_frih).map(rn1 => rn1.reg).join("|")})(?: |)`, "g")
function atvn_ymrg_frih(m, p1, p2) {
    if (!diwr_frih[p2])
        throw new Error(`csrf-err: ravc frih - ${p2} -`)
    return p1 + diwr_frih[p2].ymrg_lh
}
function wrvrRfrf(neig_kp) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const { user_params } = neig
    const rj_rfrf_jtyj = user_params.lastParams.replace(/\w+/g, ((match_kp) => {
        const match_1 = (() => {
            if (map_ey_ztka.has(match_kp)) {
                return map_ey_ztka.get(match_kp)
            } else if (/^constructor$/i.test(match_kp)) {
                return match_kp + '_'
            } else {
                return match_kp
            }
        })()
        return wrvr_kp.diwr_non_eysj[match_1.toLowerCase()] ? wrvr_kp.diwr_non_eysj[match_1.toLowerCase()].yhrj : match_1
    })).replace(/\ba\s+(?=[\u4E00-\u9FA5])/ig, "\u662f\u5426")
    if (user_params.ztwm) {
        if (/^[A-Za-z]{2}$|^[A-Za-z]{2}(?: [A-Za-z]{2})+$/.test(user_params.lastParams)) {
            return user_params.lastParams.split(/\s+/).map(rn1 => {
                return wrvr_kp.diwr_non_ztwm[(rn1).toLowerCase()]?.split('').join(' ')
            }).join('\n')
        } else {
            return ''
        }
    } else if (user_params.vv) {
        return rj_rfrf_jtyj
    } else {
        return rj_rfrf_jtyj.replace(/(?<!,|\.|[\?\*\[\]]|['"]) (?!\w)/g, "")
            .replace(/\b(?:_|)(\w+)_\b/g, '$1')
            .replace(/\b_(\w+)(?:_|)\b/g, '$1')

            .replace(/([\u4E00-\u9FA5])\s*,(?: |)/g, "$1，")
            .replace(reg_frih, atvn_ymrg_frih)
    }
}
module.exports = wrvrRfrf