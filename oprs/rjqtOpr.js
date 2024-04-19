const fs = require('fs')
const path = require('path')
const nikc_kzbz_v16 = require('../nikc_kzbz_v16')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const lz_rzwu = require('../rjqt_lz_rzwu')
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js')
const nc_nikc = require('../nc_nikc.js')
const rj_nikc = require('../rj_nikc.js')
const nwvt_nini = require('../nwvt_nini.js')
const reg_hfbc_2 = require('../user_params-ldfs-atvn/reg_hfbc_2.js')
const hd_rjqt_tum = require('../hd_rjqt_tum.js')
const paaw_nini_kzbz = require('../paaw_nini_kzbz.js')
const rj = require('../cmd-zhqh-atvn/rj.js')
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const encoding = require('encoding')
const fdmj_wdbu = require('../user_params-ldfs-atvn/fdmj_wdbu.js')
const fywy_qh_ld_vnwm = require('../fywy_qh_ld_vnwm.js')
const pcil_yxna_vnwm_zznq = require('../pcil_yxna_vnwm_zznq.js')
const yxna_diwr_xb = path.resolve("out/diwr_xb.json")
const diwr_xb = (() => {
    try {
        return require(yxna_diwr_xb)
    } catch (err) {
        return {}
    }
})()

const rjqtOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    if (user_params._[2]) {
        user_params._[2] = user_params._[2].replace(/\"|\'/g, "")
    }
    yxna_ymrg_wdbu(user_params)
    if (user_params._[1] === 'rr') {
        outputs.outputText = (() => {
            if (user_params._[2]) {
                if (!user_params.lastParams) {
                    throw new Error(`You must type the content. If you want to clear file, use 'tu zyvv'.`)
                }
                if (user_params.hasOwnProperty("files")) {
                    const reg_1 = reg_hfbc(user_params)
                    return fs.readdirSync(user_params._[2])
                        .filter(rn1 => user_params.r ? reg_1.test(rn1) : true)
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
    } else if (user_params._[1] === 'mkdir') {
        outputs.outputText = (() => {
            if (user_params._[3]) {
                throw new Error('csrf-err: fjoa ye nh nikc -' + user_params._[3])
            }
            if (!user_params._[2]) {
                throw new Error(`csrf-err: nrap mcvn`)
            }
            return nc_nikc([user_params._[2]])
        })()
    } else if (user_params._[1] === 'mkdirs') {
        outputs.outputText = (() => {
            if (!user_params._[2]) {
                if (!user_params.lastParams) {
                    throw new Error(`csrf-err: nrap mcvn`)
                } else {
                    const vnwm_nikc = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))
                    return nc_nikc(vnwm_nikc)
                }
            } else {
                return nc_nikc(user_params._.slice(2))
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
                                        return `${nixb_yxna_2}\n${encoding.convert(fs.readFileSync(nixb_yxna_2), 'utf8', user_params.encoding).toString()}`
                                    } else {
                                        return `yxna ac zznq: ${nixb_yxna_2}`
                                    }
                                }).join('\n\n')
                            } else {
                                return fs.readdirSync(user_params._[2]).map(rn1 => path.join(user_params._[2], rn1)).filter(rn1 => fs.statSync(rn1).isFile())
                                    .map(rn1 => {
                                        outputs.mark["^" + JSON.stringify(rn1).replace(/^"|"$/g, "")] = "m"
                                        return `${rn1}\n${encoding.convert(fs.readFileSync(rn1), 'utf8', user_params.encoding).toString()}`
                                    }).join('\n\n')
                            }
                        })()
                    } else {
                        return user_params._.slice(2).map(rn1 => {
                            if (fs.existsSync(rn1)) {
                                return `${rn1}\n${encoding.convert(fs.readFileSync(rn1), 'utf8', user_params.encoding).toString()}`
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
    } else if (user_params._[1] === 'abs') {
        outputs.outputText = (() => {
            return bsVnwm(user_params).map(rn1 => {
                if (path.isAbsolute(rn1)) {
                    return rn1
                } else {
                    return path.resolve(rn1)
                }
            }).join('\n')
        })()
    } else if (user_params._[1] === 'copyto') {
        outputs.outputText = await trl_zjzj_of_copyto(user_params, async (user_params) => {
            const stat_1 = fs.statSync(user_params._[2])
            if (stat_1.isFile()) {
                throw new Error('csrf-err: yxna ycbi lh dir - ' + user_params._[2])
            } else {
                return bsVnwm(user_params).map(rn1 => {
                    const topath = path.join(user_params._[2], path.basename(rn1))
                    if (fs.existsSync(topath) && !user_params.ymrg) {
                        return 'copy nkme szlh nixb yxna cd zznq: ' + topath
                    } else {
                        fs.copyFileSync(rn1, topath)
                        return 'copy bcaf: ' + topath
                    }
                }).join('\n')
            }
        }).catch(err => {
            throw err
        })

    } else if (user_params._[1] === '__') {
        outputs.outputText = (() => {
            return user_params.lastParams
        })()
    } else if (user_params._[1] === 'copydirto') {
        outputs.outputText = await trl_zjzj_of_copyto(user_params, async (user_params) => {
            const stat_1 = fs.statSync(user_params._[2])
            if (stat_1.isFile()) {
                throw new Error('csrf-err: yxna ycbi lh dir - ' + user_params._[2])
            } else {
                return (await Promise.all(bsVnwm(user_params).map(async rn1 => {
                    if (!fs.existsSync(rn1)) {
                        return 'copydir nkme - yxna ac zznq : ' + rn1
                    }
                    if (!fs.statSync(rn1).isDirectory()) {
                        return 'copydir nkme - kf ji rjqt: ' + rn1
                    }
                    await nikc_jkub_v16(rn1, path.join(user_params._[2], path.basename(rn1)))
                    return 'copydir bcaf: ' + rn1 + ' ab ' + user_params._[2] + " tt"
                })).catch(err => {
                    throw err
                })).join('\n')
            }
        }).catch(err => { throw err })
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
    } else if (user_params._[1] === 'cfep') {
        outputs.outputText = (() => {
            if (fs.existsSync(user_params._[2])) {
                const vnwm_nini = nwvt_nini(user_params)
                return vnwm_nini.filter(rn1 => (user_params.lastParams && path.basename(rn1).includes(user_params.lastParams))
                    || (user_params.r && user_params.r.length && reg_hfbc_2(user_params).test(path.basename(rn1)))
                ).join('\n')
            } else {
                throw new Error(`csrf-err: nikc ac zznq - ${user_params._[2]}`)
            }
        })()
    } else if (user_params._[1] === 'filter') {
        outputs.outputText = (() => {
            if (fs.existsSync(user_params._[2])) {
                const vnwm_yxna = nwvt_nini(user_params).filter(rn1 => fs.statSync(rn1).isFile())
                const vnwm_nixb = []
                if (user_params.lastParams) {
                    const rj_nixb = user_params.lastParams
                    for (yxna_bnll of vnwm_yxna) {
                        const rj_1 = fs.readFileSync(yxna_bnll).toString()
                        if (rj_1.includes(rj_nixb)) {
                            vnwm_nixb.push(`${yxna_bnll}: ${rj_nixb} >>>> ${JSON.stringify(rj_1).slice(0, 100)}`)
                        }
                    }
                    return vnwm_nixb.join('\n')
                } else {
                    if (user_params.r && user_params.r.length) {
                        const reg_nixb = new RegExp(user_params.r[0])
                        for (yxna_bnll of vnwm_yxna) {
                            const rj_1 = fs.readFileSync(yxna_bnll).toString()
                            if ((reg_nixb.test(rj_1))) {
                                vnwm_nixb.push(`${yxna_bnll}: ${rj_1.match(new RegExp(reg_nixb.toString().replace(/^\//, ".*").replace(/\/$/, ".*")))[0]} >>>>  ${JSON.stringify(rj_1).slice(0, 100)}`)
                            }
                        }
                        return vnwm_nixb.join('\n')
                    } else {
                        throw new Error(`csrf- err : nrap mcvn`)
                    }
                }
            } else {
                throw new Error(`csrf-err: nikc ac zznq - ${user_params._[2]}`)
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
                                    return await paaw_nini_kzbz(fs.readdirSync(user_params._[2]).filter(rn1 => user_params.r && user_params.r.length ? reg_1.test(rn1) : true).map(rn1 => path.join(user_params._[2], rn1)), user_params._[3], { ymrg: user_params.hasOwnProperty('ymrg') })
                                        .catch(err => { throw err })
                                } else {
                                    await nikc_kzbz_v16(user_params._[2], path.join(user_params._[3], path.basename(user_params._[2])), { ymrg: user_params.hasOwnProperty("ymrg") })
                                        .catch(err => { throw err })
                                    return `cd kzbz ${user_params._[2]} ab ${path.join(user_params._[3])} tt`
                                }
                            } else {
                                const nixb_yxna = path.join(user_params._[3], path.basename(user_params._[2]))
                                if (!user_params.hasOwnProperty("ymrg") && fs.existsSync(nixb_yxna)) {
                                    throw new Error(`yxna cd zznq: ${nixb_yxna}, rt db --ymrg mcvn.`)
                                } else {
                                    fs.renameSync(user_params._[2], nixb_yxna)
                                    return `cd rename ${user_params._[2]} lh ${nixb_yxna}`
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
            } else if (user_params._[2] && user_params.lastParams) {
                const vnwm_rjqt = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))

                return await paaw_nini_kzbz(vnwm_rjqt, user_params._[2], { ymrg: user_params.hasOwnProperty('ymrg') })
            } else {
                throw new Error(`Da bl nh mcvn aoao fc pc.`)
            }

        })().catch(err => { throw err })
    } else if (['find', 'zhvt'].includes(user_params._[1])) {
        outputs.outputText = await (async () => {
            if (!user_params._[2]) {
                throw new Error(`csrf-err: ycbi zznq da bl mcvn pilh reg mcvn`)
            } else {
                if (user_params.lastParams) {
                    const vnwm_rjqt = user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1))
                    return Promise.all(vnwm_rjqt.map(async rn1 => {
                        const yxna_bnll = rn1
                        if (!fs.existsSync(yxna_bnll)) {
                            return { yxna: yxna_bnll, nvcm: 'yxna ac zznq' }
                        }
                        const rj_1 = fs.readFileSync(yxna_bnll).toString()
                        const diwr_yhld = {}
                        await rj(Object.assign({}, user_params, { lastParams: rj_1 }), diwr_yhld)
                            .catch(err => { throw err })
                        return { yxna: yxna_bnll, nvcm: diwr_yhld.outputText, rjqtBqeo: rj_1 }
                    })).then(res => {
                        return res.map(rn3 => `${rn3.yxna}\n${rn3.nvcm}`).join('\n')
                    })
                        .catch(err => { throw err })
                } else {
                    throw new Error(`csrf-err: aoao pc last params`)
                }
            }
        })().catch(err => { throw err })
    } else if (user_params._[1] === 'func') {
        outputs.outputText = (() => {
            const diwr_rj = fdmj_wdbu(user_params)
            const atvn_1 = eval(diwr_rj[1])
            const vnwm_rjqt = fywy_qh_ld_vnwm(diwr_rj[2])
            pcil_yxna_vnwm_zznq(vnwm_rjqt)
            return vnwm_rjqt.map(rn1 => {
                const bqeo_ybfb = fs.readFileSync(rn1).toString()
                const ce_bqeo = atvn_1(bqeo_ybfb)
                if (ce_bqeo) {
                    fs.writeFileSync(rn1, ce_bqeo)
                    return 'bcaf qoqi bqeo: ' + rn1
                } else {
                    return 'ra qoqi bqeo: ' + rn1
                }
            }).join('\n')
        })()
    } else if (user_params._[1] === 'pk') {
        outputs.outputText = (() => {
            const vnwm_rjqt = (() => {
                if (user_params._[2] && !user_params.lastParams) {
                    return user_params._.slice(2).map(rn1 => rn1.replace(/^["']|['"]$/g, ""))
                } else if (user_params.lastParams && !user_params._[2]) {
                    return user_params.lastParams.split(/\n/)
                } else {
                    return null
                }
            })()

            if (vnwm_rjqt) {
                return vnwm_rjqt.map(rn1 => {
                    if (fs.existsSync(rn1)) {
                        if (fs.statSync(rn1).isDirectory()) {
                            hd_rjqt_tum(rn1)
                            return 'hd nikc bcaf: ' + rn1
                        } else {
                            fs.unlinkSync(rn1)
                            return 'hd rjqt bcaf: ' + rn1
                        }
                    } else {
                        return 'ac zznq: ' + rn1
                    }
                }).join('\n')
            } else {
                return `zhqh nkme, tsjq brtz msox`
            }
        })()
    } else if (user_params._[1] === 'ls') {
        outputs.outputText = (() => {
            if (user_params.hasOwnProperty("xbiw")) {
                outputs.ji_caju = true
                return Object.entries(diwr_xb).map(rn1 => "-n " + path.basename(rn1[0]) + " " + rn1[0]).join("\n")
            } else if (user_params.hasOwnProperty("hd")) {
                const yxna_xbiw = user_params._[2]
                if (diwr_xb[yxna_xbiw]) {
                    delete diwr_xb[yxna_xbiw]
                    fs.writeFileSync(yxna_diwr_xb, JSON.stringify(diwr_xb, null, 2))
                    return "cd hd xbiw - " + yxna_xbiw
                } else {
                    return "xbiw ac zznq - " + yxna_xbiw
                }
            } else if (user_params.hasOwnProperty("xb")) {
                const yxna_xb = user_params._[2]
                if (fs.existsSync(yxna_xb)) {
                    diwr_xb[yxna_xb] = path.basename(yxna_xb)
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

async function trl_zjzj_of_copyto(user_params, atvn_1) {
    if (user_params.lastParams) {
        if (user_params._[2]) {
            if (fs.existsSync(user_params._[2])) {
                return await atvn_1(user_params).catch(err => { throw err })
            } else {
                throw new Error('nikc ac zznq: ' + user_params._[2])
            }
        } else {
            throw new Error('nrap mcvn')
        }
    } else {
        throw new Error('nrap mcvn')
    }
}

function yxna_ymrg_wdbu(user_params) {
    user_params._.forEach((rn1, index, arr_1) => {
        if (/\b__n/.test(rn1)) {
            arr_1[index] = ymrg_rj_yh_yxna(rn1)
        }
    });
    if (user_params._[1] === 'rr') {
        return
    }
    if (/\b__n/.test(user_params.lastParams)) {
        user_params.lastParams = ymrg_rj_yh_yxna(user_params.lastParams)
    }
}
function ymrg_rj_yh_yxna(rj) {
    return rj.replace(/\b__n(\w+)/g, (m, p1) => {
        return ((fo1) => {
            const reg_1 = new RegExp(`^${fo1}`)
            const reg_2 = new RegExp(`${fo1}`)
            const vnwm_xb = Object.entries(diwr_xb).filter(rn1 => reg_1.test(path.basename(rn1[0])))
            if (vnwm_xb.length > 1) {
                throw new Error(`csrf-err: yxna wu hnrr ac eeye - ${vnwm_xb.length} - ${vnwm_xb.map(rn2 => rn2[0]).join(',')}`)
            } else if (vnwm_xb.length) {
                return vnwm_xb[0][0]
            } else {
                const vnwm_xb = Object.entries(diwr_xb).filter(rn1 => reg_2.test(path.basename(rn1[0])))
                if (vnwm_xb.length > 1) {
                    throw new Error(`csrf-err: yxna wu hnrr ac eeye - ${vnwm_xb.length} - ${vnwm_xb.map(rn2 => rn2[0]).join(',')}`)
                } else if (vnwm_xb.length) {
                    return vnwm_xb[0][0]
                } else {
                    throw new Error(`csrf-err: ra cgne ab ymdo yxna - ${fo1}`)
                }
            }
        })(p1)
    })

}