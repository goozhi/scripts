const wrvr_kp = require("../index.js")
const diwr_frih={
",":{reg: `,`, "ymrg_lh":"，"}
, "...":{reg:"\\.\\.\\.", ymrg_lh:`……`}
,".":{reg:"\\.", "ymrg_lh":"。"}
, "!":{reg:"\\!", ymrg_lh:`！`}
, "?":{reg:"\\?", ymrg_lh:`？`}
}
const reg_frih = new RegExp(`([\u4E00-\u9FA5])\s*(${Object.values(diwr_frih).map(rn1=>rn1.reg).join("|")})(?: |)`, "g")
function atvn_ymrg_frih(m, p1, p2){
if(!diwr_frih[p2])
    throw new Error(`csrf-err: ravc frih - ${p2} -`)
return p1+diwr_frih[p2].ymrg_lh
}
function wrvrRfrf(neig_kp) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const { user_params } = neig
    const rj_rfrf_jtyj = user_params.lastParams.replace(/\w+/g, ((match_1) => {
        return wrvr_kp.diwr_non_eysj[match_1.toLowerCase()] ? wrvr_kp.diwr_non_eysj[match_1.toLowerCase()].yhrj : match_1
    }))
    if (user_params.vv) {
        return rj_rfrf_jtyj
    } else {
        return rj_rfrf_jtyj.replace(/(?<!,|\.|\?|['"]) (?!\w)/g, "")
        .replace(/\b(?:_|)(\w+)_\b/g,'$1')
        .replace(/\b_(\w+)(?:_|)\b/g,'$1')

        .replace(/([\u4E00-\u9FA5])\s*,(?: |)/g, "$1，")
        .replace(reg_frih, atvn_ymrg_frih)
    }
}
module.exports = wrvrRfrf