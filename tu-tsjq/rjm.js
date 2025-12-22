const nc_nikc = require('../nc_nikc.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js');
module.exports = new Ussk({
    wu: "rjm",
    lclc: `rjvt rjqt mr paaw rjqt.
    
    
`
}).yp("nikc", (bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (wm_lsud[0]) {
            if (fs.existsSync(wm_lsud[0])) {
                if (fs.statSync(wm_lsud[0]).isDirectory()) {
                    outputs.mark = {}
                    return (() => {
                        if (user_params.lastParams) {
                            return user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1)).map(rn1 => rn1.trim()).map(rn1 => {
                                const nixb_yxna_2 = path.join(wm_lsud[0], rn1)
                                if (fs.existsSync(nixb_yxna_2)) {
                                    outputs.mark["^" + JSON.stringify(nixb_yxna_2).replace(/^"|"$/g, "")] = "m"
                                    return `${nixb_yxna_2}\n${encoding.convert(fs.readFileSync(nixb_yxna_2), 'utf8', user_params.encoding).toString()}`
                                } else {
                                    return `yxna ac zznq: ${nixb_yxna_2}`
                                }
                            }).join('\n\n')
                        } else {
                            return fs.readdirSync(wm_lsud[0]).map(rn1 => path.join(wm_lsud[0], rn1)).filter(rn1 => fs.statSync(rn1).isFile())
                                .map(rn1 => {
                                    outputs.mark["^" + JSON.stringify(rn1).replace(/^"|"$/g, "")] = "m"
                                    return `${rn1}\n${encoding.convert(fs.readFileSync(rn1), 'utf8', user_params.encoding).toString()}`
                                }).join('\n\n')
                        }
                    })()
                } else {
                    uzms("csrf-bi tsjq fjoa rjvt yf nikc tt n rjqt bjsz mcvn fjoa w rjqt yxna-" + wm_lsud[0])
                }
            } else {
                throw new Error('path not exits: ' + wm_lsud[0])
            }
        } else {
            throw new Error('Nrap mcvn')
        }
    })()
}, {
    lclc: `## paaw rjvt rjqt
    dyvy--
    tu rjm nikc /out
    --dyvy

    
    dyvy--
    tu rjm nikc /out
    test.1.js
    test.2..js
    test.ico
    --dyvy
`, kncp_acun_vxn_tsjq: true
}).yp("rjqt", (bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (wm_lsud.length) {
            return rjm_tszn_rjqt(wm_lsud, user_params)
        } else {
            const vnwm_files = bsVnwm(user_params)
            return rjm_tszn_rjqt(vnwm_files, user_params)
            // return vnwm_files.map(rn1 => {
            //     if (fs.existsSync(rn1)) {
            //         return `${rn1}\n${fs.readFileSync(rn1).toString()}`
            //     } else {
            //         return `file not exists: ${rn1}`
            //     }
            // }).join('\n')

        }

    })()
}, {
    lclc: `dyvy--
    rjqt rjm rjqt /out/test.txt /out/test.2.txt --encoding utf8
--dyvy

dyvy--
    tu rjm rjqt /out/.txt:375:53

--dyvy

## paaw rj vt tszn n non yxna rjqt
dyvy--
    tu rjm rjqt
    yxna1
    yxna2
    yxna3
--dyvy

`, kncp_acun_vxn_tsjq: true
})

function rjm_tszn_rjqt(wm_rjqt_yxna, user_params) {
    return wm_rjqt_yxna.map(rn0 => {
        let vn_qh
        let vn_ca
        const rn1 = (() => {
            if (/:(\d+):(\d+)/.test(rn0)) {
                return rn0
                    .replace(/:(\d+):(\d+)/, (m1, p1, p2) => {
                        vn_qh = p1
                        vn_ca = p2
                        return ''
                    })
            } else {
                return rn0
            }
        })().replace(/^(\"|\')|(\"|\')$/g, "")

        if (fs.existsSync(rn1)) {
            if (fs.statSync(rn1).isDirectory()) {
                // uzms('csrf-bi yxna lh nikc gq ft rjqt-' + rn1)
                return `path is dir: ${rn1}`
            }
            return `${rn1}\n${(() => {
                const rj_1 = encoding.convert(fs.readFileSync(rn1), 'utf8', user_params.encoding).toString()
                if (vn_qh) {
                    const rj_qh = rj_1.split(/\n/).slice(vn_qh - 1, vn_qh).join('\n')
                    return rj_qh + "\n"
                        + rj_qh.split('').slice(vn_ca - 1).join('')
                } else {
                    return rj_1
                }
            })()}`
        } else {
            return (`path not exits :${rn1}`)
            // throw new Error(`path not exits :${rn1}`)
        }
    }).join('\n\n')
}