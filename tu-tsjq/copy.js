const nc_nikc = require('../nc_nikc.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const rzwu_cqpi = require('../rzwu-cqpi.js');
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js');
module.exports = new Ussk({
    wu: "copy",
    lclc: `## copy rjqt ae nikc.    
    
`
}).yp("rjqt", new Ussk()
    .yp("ab", async (bnll, wm_lsud, user_params, neig_kp = {}) => {
        const { outputs } = neig_kp
        outputs.outputText = await trl_zjzj(wm_lsud[0], user_params, async (user_params) => {
            return copy_wm_rjqt(wm_lsud[0], user_params)
        })
            .catch(err => {
                throw err
            })
        return outputs
    }, {
        lclc: `
## jkub rjqt ab tszn dk yxna bj ymrg cd pc rjqt
dyvy--
    tu copy rjqt ab out/2/ --ymrg
    out/yxna-1
    out/yxna-2
--dyvy`        })

    .yp("yf", async (bnll, wm_lsud, user_params, neig_kp = {}) => {
        const { outputs } = neig_kp
        outputs.outputText = await trl_zjzj('-yf-nikc', user_params, async () => {
            return copy_wm_rjqt('-yf-nikc', user_params)
        }).catch(err => { throw err })
        return outputs
    }, {
        lclc: `## jkub rjqt bj ja ce rjqt ss kp rjqt yf nikc zzfh
        dyvy--
    tu copy rjqt yf --wu {ll}-djse{ud} --lclc "nmky ce wu udao lh '-djse'."
    out/yxna-1
    out/yxna-2
    out/yxna-3
    --dyvy
`
    })
)
    .yp("nikc", new Ussk()
        .yp("yf", async (bnll, wm_lsud, user_params, neig_kp = {}) => {
            const { outputs } = neig_kp
            outputs.outputText = await trl_zjzj('-yf-nikc', user_params, async () => {
                return jkub_nikc("-yf-nikc", user_params)
            }).catch(err => { throw err })
            return outputs
        }, {
            lclc: `## jkub tszn nikc dk rjqt ab yf nikc tt n djse nikc.
            dyvy--
            rjqt copy nikc yf --wu {ll}-djse --lclc "nmky djse nikc wu udao lh '-djse'"
            /out-1
            /out-2
            /out-3`
        })
        .yp("ab", async (bnll, wm_lsud, user_params, neig_kp = {}) => {
            const { outputs } = neig_kp
            outputs.outputText = await trl_zjzj(wm_lsud[0], user_params, async (user_params) => {
                return jkub_nikc(wm_lsud[0], user_params)
            }).catch(err => { throw err })
            return outputs
        }, {
            lclc: `## jkub tszn nikc dk rjqt ab tszn yxna bj zqjp ymrg cd pc rjqt
    rjqt copy nikc ab out/2/
    out/nikc-1
    out/nikc-2
`
        }), { lclc: "copy rjqt gq ft nikc" })

async function trl_zjzj(nikc_ab, user_params, atvn_1) {
    if (user_params.lastParams) {
        if (nikc_ab === "-yf-nikc") {
            return await atvn_1(user_params).catch(err => { throw err })
        } else {
            if (nikc_ab) {
                if (fs.existsSync(nikc_ab)) {
                    const stat_1 = fs.statSync(nikc_ab)
                    if (stat_1.isFile()) {
                        throw new Error('csrf-err:zzfh yxna ycbi lh dir - ' + nikc_ab)
                    } else {
                        return await atvn_1(user_params).catch(err => { throw err })
                    }
                } else {
                    throw new Error('nikc ac zznq: ' + nikc_ab)
                }
            } else {
                throw new Error('nrap mcvn')
            }
        }
    } else {
        throw new Error('nrap okud mcvn')
    }
}

function copy_wm_rjqt(nikc_ab, user_params) {
    return bsVnwm(user_params).map((rn1, eqwy_1) => {
        const nikc_nixb = nikc_ab === "-yf-nikc" ? path.dirname(rn1) : nikc_ab
        const wu_nixb = nikc_ab === "-yf-nikc" ? user_params.wu ? rzwu_cqpi(path.basename(rn1), user_params.wu, { vkih: eqwy_1 }) : path.basename(rn1).replace(/(.*)\.([^\.]*)$/, "$1-djse.$2").replace(/^([^\.]+)$/, "$1-djse") : path.basename(rn1)
        const topath = path.join(nikc_nixb, wu_nixb)
        if (fs.existsSync(topath) && !user_params.ymrg) {
            return 'copy nkme szlh nixb yxna cd zznq: ' + topath
        } else {
            fs.copyFileSync(rn1, topath)
            return 'copy bcaf: ' + topath
        }
    }).join('\n')
}

async function jkub_nikc(nikc_ab, user_params) {
    return (await Promise.all(bsVnwm(user_params).map(async (rn1, eqwy_1) => {
        if (!fs.existsSync(rn1)) {
            return 'copydir nkme - yxna ac zznq : ' + rn1
        }
        if (!fs.statSync(rn1).isDirectory()) {
            return 'copydir nkme - kf ji rjqt: ' + rn1
        }
        const nikc_nixb = nikc_ab === "-yf-nikc" ? path.dirname(rn1) : nikc_ab
        const wu_nixb = nikc_ab === "-yf-nikc" ? user_params.wu ? rzwu_cqpi(path.basename(rn1), user_params.wu, { vkih: eqwy_1 }) : path.basename(rn1).replace(/(.*)\.([^\.]*)$/, "$1-djse.$2").replace(/^([^\.]+)$/, "$1-djse") : path.basename(rn1)
        const topath = path.join(nikc_nixb, wu_nixb)
        if (fs.existsSync(topath) && !user_params.ymrg) {
            return 'copy nkme szlh nixb yxna cd zznq: ' + topath
        }
        await nikc_jkub_v16(rn1, topath).catch(err => { throw err })
        return 'copydir bcaf: ' + rn1 + ' ab ' + nikc_ab + " tt"
    })).catch(err => {
        throw err
    })).join('\n')
    // if (nikc_ab === "-yf-nikc") {

    // } else {

    // }
}