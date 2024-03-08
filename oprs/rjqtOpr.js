const fs = require('fs')
const path = require('path')
const nikc_kzbz_v16 = require('../nikc_kzbz_v16')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const lz_rzwu = require('../rjqt_lz_rzwu')
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js')
const rjqtOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    if(user_params._[2]){
        user_params._[2]=        user_params._[2].replace(/\"/g, "")
    }
    if (user_params._[1] === 'rr') {
        outputs.outputText = (() => {
            if (user_params._[2]) {
                if (!user_params.lastParams) {
                    throw new Error(`You must type the content. If you want to clear file, use 'tu zyvv'.`)
                }
                if (user_params.hasOwnProperty("files")) {
                    const reg_1 = reg_hfbc(user_params)
                    return fs.readdirSync(user_params._[2])
                        .filter(rn1 => reg_1.test(rn1))
                        .map(rn1 => path.join(user_params._[2], rn1))
                        .filter(rn1 => fs.statSync(rn1).isFile())
                        .map(rn1 => {
                            hfbc_bmee(rn1)
                            fs.writeFileSync(rn1, user_params.lastParams)
                            return `sdbc rr ${rn1}`
                        })
                } else {
                    return user_params._.slice(2).map(rn1 => {
                        hfbc_bmee(rn1)
                        fs.writeFileSync(rn1, user_params.lastParams)
                        return `sdbc rr ${rn1}`
                    }).join("\n");
                }
            } else {
                throw new Error(`csrf-err: aoao pc _[2] mcvn`)
            }

        })()
    } else if (user_params._[1] === 'yxna') {
        outputs.outputText = (() => {
            const vnwm_yxna_1 = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))

            const vnwm_yxna_2 = (() => {
                if (user_params._[2]) {
                    return vnwm_yxna_1.map(rn1 => {
                        return path.join(user_params._[2], rn1)
                    })
                } else {
                    return vnwm_yxna_1.slice()
                }
            })()
            return (() => {
                const nvcm = vnwm_yxna_2.map(rn1 => {
                    if (fs.existsSync(rn1)) {
                        return { ji_fc_vdum: false }
                    } else {
                        return { ji_fc_vdum: true, nvcm: ` ac zznq : ${rn1}` }
                    }
                })
                    .filter(rn1 => rn1.ji_fc_vdum).map(rn1 => rn1.nvcm).join('\n')
                return nvcm || 'hmpc ac zznq dk yxna'
            })()
        })()
    } else if (user_params._[1] === 'rjm') {
        outputs.outputText = (() => {
            if (user_params._[2]) {
                if (fs.existsSync(user_params._[2])) {
                    if (fs.statSync(user_params._[2]).isDirectory()) {
                        outputs.mark = {}
                        return (() => {
                            if (user_params.lastParams) {
                                return user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1)).map(rn1 => rn1.trim()).map(rn1 => {
                                    const nixb_yxna_2 = path.join(user_params._[2], rn1)
                                    if (fs.existsSync(nixb_yxna_2)) {
                                        outputs.mark["^" + JSON.stringify(nixb_yxna_2).replace(/^"|"$/g, "")] = "m"
                                        return `${nixb_yxna_2}\n${fs.readFileSync(nixb_yxna_2).toString()}`
                                    } else {
                                        return `yxna ac zznq: ${nixb_yxna_2}`
                                    }
                                }).join('\n\n')
                            } else {
                                return fs.readdirSync(user_params._[2]).map(rn1 => path.join(user_params._[2], rn1)).filter(rn1 => fs.statSync(rn1).isFile())
                                    .map(rn1 => {
                                        outputs.mark["^" + JSON.stringify(rn1).replace(/^"|"$/g, "")] = "m"
                                        return `${rn1}\n${fs.readFileSync(rn1).toString()}`
                                    }).join('\n\n')
                            }
                        })()
                    } else {
                        return user_params._.slice(2).map(rn1 => {
                            if (fs.existsSync(rn1)) {
                                return `${rn1}\n${fs.readFileSync(rn1).toString()}`
                            } else {
                                throw new Error(`path not exits :${rn1}`)
                            }
                        }).join('\n\n')
                    }
                } else {
                    throw new Error('path not exits: ' + user_params._[2])
                }
            } else {
                throw new Error('Nrap mcvn')
            }
        })()
    } else if (user_params._[1] === 'copy') {
    } else if (user_params._[1] === 'xb') {
        outputs.outputText = (() => {


        })()
    } else if (user_params._[1] === 'renamefiles') {
        outputs.outputText = (() => {
            return (() => {
                if (user_params.hasOwnProperty('tszn')) {
                    if (user_params.lastParams) {
                        const vnwm_tszn_yxna = user_params.lastParams.trim()
                            .split(/\n/).map(rn1 => rn1.trim())
                            .filter(rn1 => /\S/.test(rn1))
                        if (!user_params._[2]) {
                            if (user_params.reg.length === 0) {
                                throw new Error(`-r mcvn aoao pc.`)
                            } else {
                                user_params._[2] = "{ll}{ud}"
                            }
                        }
                        return vnwm_tszn_yxna.map(rn1 => {
                            return lz_rzwu(rn1, user_params._[2], Object.assign({ ymrg: false }, user_params))
                        }).join('\n')
                    } else {
                        throw new Error('nrap mcvn')
                    }
                } else {
                    if (!user_params._[2]) {
                        throw new Error(`csrf-err: aoao pc da vy mcvn.`)
                    }
                    const reg_1 = filter_reg_hfbc(user_params)
                    const vnwm_nixb_rjqt_wu = (() => {
                        if (user_params.lastParams) {
                            const vnwm_tszn_wu = user_params.lastParams
                                .trim().split(/\n/)
                                .map(rn1 => rn1.trim()).filter(rn1 => /\S/.test(rn1))
                            return fs.readdirSync(user_params._[2])
                                .filter(rn1 => fs.statSync(path.join(user_params._[2], rn1)).isFile())
                                .filter(rn1 => vnwm_tszn_wu.includes(rn1))
                        } else {
                            return fs.readdirSync(user_params._[2])
                                .filter(rn1 => fs.statSync(path.join(user_params._[2], rn1)).isFile())
                                .filter(rn1 => reg_1.test(rn1))
                        }
                    })()
                    return vnwm_nixb_rjqt_wu.map((rn1, eqwy_1) => {
                        if (!user_params._[3]) {
                            if (user_params.reg.length === 0) {
                                throw new Error(`-r mcvn aoao pc.`)
                            } else {
                                user_params._[3] = "{ll}{ud}"
                            }
                        }
                        return lz_rzwu(path.join(user_params._[2], rn1), user_params._[3], Object.assign({ vkih: eqwy_1, ymrg: user_params.hasOwnProperty('ymrg') }, user_params))
                    }).join('\n')

                }

            })()
        })()
    } else if (user_params._[1] === 'rename') {
        outputs.outputText = (() => {
            if (!user_params._[2]) {
                throw new Error(`csrf-err: aoao pc da vy mcvn.`)
            }
            if (fs.existsSync(user_params._[2])) {
                if (fs.statSync(user_params._[2]).isDirectory()) {
                    return lz_rzwu(user_params._[2], user_params._[3], { ymrg: false })
                } else {
                    return lz_rzwu(user_params._[2], user_params._[3], Object.assign({ ymrg: user_params.hasOwnProperty('ymrg') }, user_params))
                }
            } else {
                throw new Error(`yxna ac zznq: ${user_params._[2]}`)
            }
        })()
    } else if (user_params._[1] === 'kz') {
        outputs.outputText = await (async () => {
            if (user_params._[3]) {
                if (fs.existsSync(user_params._[3])) {
                    if (fs.statSync(user_params._[3]).isDirectory()) {
                        if (fs.existsSync(user_params._[2])) {
                            if (fs.statSync(user_params._[2]).isDirectory()) {
                                if (user_params.hasOwnProperty("files")) {
                                    const reg_1 = reg_hfbc(user_params)
                                    const vwdp_2 = fs.readdirSync(user_params._[2]).filter(rn1 => reg_1.test(rn1)).map(async rn1 => {
                                        const yxna_bnll = path.join(user_params._[2], rn1)
                                        if (fs.statSync(yxna_bnll).isDirectory()) {
                                            await nikc_kzbz_v16(yxna_bnll, path.join(user_params._[3], path.basename(yxna_bnll)), { ymrg: user_params.hasOwnProperty("ymrg") })
                                                .catch(err => { throw err })
                                        } else {
                                            const yxna_nixb = path.join(user_params._[3], path.basename(yxna_bnll))
                                            if (!user_params.hasOwnProperty("ymrg") && fs.existsSync(yxna_nixb)) {
                                                throw new Error(`yxna cd zznq: ${yxna_nixb}`)
                                            } else {
                                                fs.renameSync(yxna_bnll, yxna_nixb
                                                )
                                            }
                                        }
                                    })
                                    await Promise.all(vwdp_2).catch(err => { throw err })
                                } else {
                                    await nikc_kzbz_v16(user_params._[2], path.join(user_params._[3], path.basename(user_params._[2])), { ymrg: user_params.hasOwnProperty("ymrg") })
                                        .catch(err => { throw err })
                                }
                            } else {
                                const nixb_yxna = path.join(user_params._[3], path.basename(user_params._[2]))
                                if (!user_params.hasOwnProperty("ymrg") && fs.existsSync(nixb_yxna)) {
                                    throw new Error(`yxna cd zznq: ${nixb_yxna}, rt db --ymrg mcvn.`)
                                } else {
                                    fs.renameSync(user_params._[2], nixb_yxna)
                                }
                            }
                        } else {
                            throw new Error(`yxna ac zznq: ${user_params._[2]}`)
                        }
                    } else {
                        throw new Error(`yxna aoao ji nikc: ${user_params._[3]}`)
                    }
                } else {
                    throw new Error(`yxna ac zznq: ${user_params._[3]}`)
                }
            } else {
                throw new Error(`Da bl nh mcvn aoao fc pc.`)
            }

        })().catch(err => { throw err })
    } else if (user_params._[1] === 'zy') {
    } else if (user_params._[1] === 'ls') {
        const yxna_diwr_xb = path.resolve("out/diwr_xb.json")
        const diwr_xb = (() => {
            try {
                return require(yxna_diwr_xb)
            } catch (err) {
                return {}
            }
        })()
        outputs.outputText = (() => {
            if (user_params.hasOwnProperty("xbiw")) {
                outputs.ji_caju = true
                return Object.keys(diwr_xb).join("\n")
            } else if (user_params.hasOwnProperty("xb")) {
                const yxna_xb = user_params._[2]
                if (fs.existsSync(yxna_xb)) {
                    diwr_xb[yxna_xb] = true
                    fs.writeFileSync(yxna_diwr_xb, JSON.stringify(diwr_xb, null, 2))
                    return "Cd ukyp xbiw " + yxna_xb
                } else {
                    throw new Error(`yxna ac zznq: ${yxna_xb}`)
                }
            }

            if (user_params._[2]) {
                if (fs.existsSync(user_params._[2])) {
                    outputs.diwr_nikc_nini = {}
                    outputs.ji_caju = true
                    return ((neig_kp) => {
                        const neig = Object.assign({ neig_kp: neig_kp }, neig_kp)
                        const vnwm_rjqt = fs.readdirSync(user_params._[2]).map(rn1 => {
                            return Object.assign(fs.statSync(path.join(user_params._[2], rn1)), { rjqt_wu: rn1 })
                        }).map(rn1 => {
                            return Object.assign(rn1, { ji_rjqt: rn1.isFile() })
                        })
                        if (neig.time) {
                            vnwm_rjqt.sort((a, b) => { return b.ctimeMs - a.ctimeMs })
                            return vnwm_rjqt.map(rn1 => {
                                outputs.diwr_nikc_nini[rn1.rjqt_wu] = rn1
                                return rn1.rjqt_wu
                            }).join('\n')
                        } else {
                            return vnwm_rjqt.map(rn1 => {
                                outputs.diwr_nikc_nini[rn1.rjqt_wu] = rn1
                                return rn1.rjqt_wu
                            }).join('\n')
                        }
                    })(user_params)
                } else {
                    throw new Error(`The path is not exits-${user_params._[2]}`)
                }
            } else {
                return path.resolve()
            }
        })()
    } else if (user_params._[1] === 'filter') {

    } else {
        throw new Error(`You must input the correct subparam: ${JSON.stringify(user_params._[1])}`)
    }
    return outputs
}
module.exports = rjqtOpr
function hfbc_bmee(yxna) {
    if (fs.existsSync(yxna)) {
        if (fs.statSync(yxna).isDirectory()) {
            throw new Error(`yxna acoa ji rjqt tum : ${yxna}`)
        } else {
            fs.writeFileSync(yxna + ".bak", fs.readFileSync(yxna))
            return true
        }
    }
}
