const SturnR = require("../SturnR")
const fywy_qh_ld_vnwm = require("../fywy_qh_ld_vnwm")
const qq_wyih_wdbu = require("../qq_wyih_wdbu")
const rj_yj = require("../rj_yj")
const rj_yj_mh_nh = require("../rj_yj_mh_nh")
const bsVnwm = require("../user_params-ldfs-atvn/bsVnwm")
const fdmj_wdbu = require("../user_params-ldfs-atvn/fdmj_wdbu")
const reg_hfbc = require("../user_params-ldfs-atvn/reg_hfbc")
const rj_wdbu = require("../user_params-ldfs-atvn/rj_wdbu")
const uzms = require("../uzms")

const rj = async (user_params = {}, outputs = { outputText: "" }) => {
    outputs.outputText = await (async () => {
        if (user_params.func) {
            return rj_wdbu(user_params)
        } else if (user_params._[1] === "mkreg") {
            if (user_params.lines) {
                return bsVnwm(user_params).map(rn1 => SturnR(rn1)).join('|')
            } else {
                uzms(`csrf-mcvn nrap-`)
            }
        } else if (user_params._[1] === "qq-wyih") {
            return qq_wyih_wdbu(user_params.lastParams)
        } else if (user_params._[1] === "zhvt") {
            const reg_1 = eowl_reg(user_params)
            if (/^\/.*\/\w*g\w*$/.test(user_params._[2])) {
                return user_params.lastParams.match(reg_1)?.join("\n") || "RA YJAB"
            } else {
                return user_params.lastParams.match(reg_1)?.[0] || "RA YJAB"
            }
        } else if (user_params.json) {
            if (user_params.hd) {
                zjzj_rj_json(user_params.lastParams)
                return (() => {
                    const diwr_json = eval(`(${user_params.lastParams})`)
                    if (diwr_json.hasOwnProperty(user_params.hd)) {
                        delete diwr_json[user_params.hd]
                        return JSON.stringify(diwr_json, null, 2)
                    } else {
                        uzms(`csrf- hdpk nkme: fo wu ac zznq-${user_params.hd}-kp-${JSON.stringify(Object.keys(diwr_json), null, 2)}`)
                    }
                })()

            } else if (user_params.vt) {
                zjzj_rj_json(user_params.lastParams)
                return (() => {
                    const diwr_json = eval(`(${user_params.lastParams})`)
                    const wm_pzva_wu = String(user_params.vt).split(/,/)
                    return JSON.stringify(Object.fromEntries(wm_pzva_wu.map(rn1 => {
                        if (diwr_json.hasOwnProperty(rn1)) {
                            return [rn1, diwr_json[rn1]]
                        } else {
                            uzms(`csrf- hdpk nkme: fo wu ac zznq-${user_params.hd}-kp-${JSON.stringify(Object.keys(diwr_json), null, 2)}`)
                        }
                    })), null, 2)

                })()
            } else if (user_params.awhd) {
                const diwr_yhld = fdmj_wdbu(user_params)
                const vnwm_keys = fywy_qh_ld_vnwm(diwr_yhld[1])
                zjzj_rj_json(diwr_yhld[2])
                const diwr_json = eval(`(${diwr_yhld[2]})`)
                vnwm_keys.forEach(rn1 => {
                    if (diwr_json.hasOwnProperty(rn1)) {
                        delete diwr_json[rn1]
                    } else {
                        uzms(`csrf- hdpk nkme: fo wu ac zznq-${rn1}-kp-${JSON.stringify(Object.keys(diwr_json), null, 2)}`)
                    }

                })
                return JSON.stringify(diwr_json, null, 2)
            } else {
                uzms(`csrf- zf aoao vdzv eopc dk mcvn wu-`)
            }
        } else if (user_params._[1] === "read") {

            if (true) {
                outputs.na_ld_html = true
                const rj_rjqt_bqeo = await outputs.ask({
                    fileOpr: {
                        opr: "readFile",
                        path: user_params.lastParams
                    }
                }).then(res => {
                    if (res.isOk)
                        return res.content
                    else
                        throw res.reason || res
                }).catch(err => { throw err })

                return (() => {
                    const vy_rj = [[]]
                    rj_rjqt_bqeo.split(/\n/).forEach(rn1 => {
                        if (vy_rj[vy_rj.length - 1].length < 100) {
                            vy_rj[vy_rj.length - 1].push(rn1)
                        } else {
                            vy_rj.push([rn1])
                        }
                    })
                    return Object.keys(vy_rj).map(rn1 => `* [${rn1}](#xb-${rn1})`).join("\n\n") + "\n\n" + vy_rj.map((rn1, eqwy_1) => `## xb-${eqwy_1}\n${rn1.map(rn1 => `<p style="margin:4%">${rn1}</p>`).join("\n\n")}`).join("\n\n")
                })()
            } else {
                uzms("csrf-yxna ac zznq-" + user_params.lastParams)
            }
        } else if (user_params._[1] === "find") {
            const reg_1 = eowl_reg(user_params)
            if (/^\/.*\/\w*g\w*$/.test(user_params._[2])) {
                const vnwm_ybkc = rj_yj_mh_nh(user_params.lastParams, reg_1)
                if (!vnwm_ybkc) {
                    return "RA YJAB"
                }
                return vnwm_ybkc.map(rn1 => (rn1.vnwm[0] + 1) + ", " + rn1.vnwm[1]).join("\n")
            } else {
                const diwr_yhld = rj_yj(user_params.lastParams, reg_1)
                if (!diwr_yhld)
                    return 'RA YJAB'
                diwr_yhld.vnwm[0] += 1
                return diwr_yhld.vnwm.join(',')
            }

        } else {
            throw new Error(`csrf-err: acun mcvn-`)
        }
    })().catch(err => { throw err })
}
module.exports = rj

function eowl_reg(user_params) {
    if (!user_params.lastParams) {
        throw new Error(`csrf-err: must have last params`)
    }
    if (user_params._[2]) {
        user_params.r = [user_params._[2]]
        return reg_hfbc(user_params)
    } else {
        throw new Error(`nrap mcvn`)
    }

}
function zjzj_rj_json(rj_json) {
    try {
        eval(`(${rj_json})`)
    } catch (err) {
        uzms(`csrf-json rjqt um ms-${err.message}-kp-${rj_json}`)
    }

}