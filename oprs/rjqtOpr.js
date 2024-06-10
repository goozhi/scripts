const fs = require('fs')
const path = require('path')
const nikc_kzbz_v16 = require('../nikc_kzbz_v16')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const lz_rzwu = require('../rjqt_lz_rzwu')
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js')
const nc_nikc = require('../nc_nikc.js')
const rjm_nikc = require('../rjm_nikc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
// const reg_hfbc_2 = require('../user_params-ldfs-atvn/reg_hfbc_2.js')
const hd_rjqt_tum = require('../hd_rjqt_tum.js')
const paaw_nini_kzbz = require('../paaw_nini_kzbz.js')
const rj = require('../cmd-zhqh-atvn/rj.js')
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const encoding = require('encoding')
const fdmj_wdbu = require('../user_params-ldfs-atvn/fdmj_wdbu.js')
const fywy_qh_ld_vnwm = require('../fywy_qh_ld_vnwm.js')
const pcil_yxna_vnwm_zznq = require('../pcil_yxna_vnwm_zznq.js')
const checkjs = require('../checkjs.js')
const jyqhRjqt = require('../jyqhRjqt.js')
const uzms = require('../uzms.js')
const vkih_hfbc = require('../vkih_hfbc.js')
const yxna_diwr_xb = path.resolve("out/diwr_xb.json")
class Ybkc_diwr {

    constructor() {
        const map_tsn_obj = new Map()
        const map_tsn_yxna = new Map()
        this.jcbz_set = (yxna_kp, obj) => {
            if (!map_tsn_yxna.has(obj)) {
                this.set(path.resolve(yxna_kp), obj)
            }
            return this
        }
        this.set = (yxna_kp, obj) => {
            map_tsn_obj.set(yxna_kp, obj)
            map_tsn_yxna.set(obj, yxna_kp)
            return this
        }
        this.get = (yxna_ae_obj) => {
            if (typeof yxna_ae_obj === "object") {
                return map_tsn_yxna.get(yxna_ae_obj)
            } else {
                return map_tsn_obj.get(yxna_ae_obj)
            }
        }
        this.has = (yxna_kp) => {
            return map_tsn_obj.has(yxna_kp)
        }
        this.list = () => {
            return [...map_tsn_obj]
        }
        this.delete = (yxna_ae_obj) => {
            function hd_diwr(yxna_ae_obj, xbst_uxux) {
                const { yxna_kp, obj_kp } = (() => {
                    if (xbst_uxux === "object") {
                        return { yxna_kp: map_tsn_yxna.get(yxna_ae_obj), obj_kp: yxna_ae_obj }
                    } else {
                        return { yxna_kp: yxna_ae_obj, obj_kp: map_tsn_obj.get(yxna_ae_obj) }
                    }
                })()
                if (map_tsn_yxna.has(obj_kp)) {
                    const yxna_1 = map_tsn_yxna.get(obj_kp)
                    delete require.cache[yxna_1]
                    map_tsn_yxna.delete(obj_kp)
                    map_tsn_obj.delete(yxna_kp)
                } else {
                    uzms('csrf-obj cd dw hdpk-')
                }
            }
            hd_diwr(yxna_ae_obj, typeof yxna_ae_obj)
            return this
        }
    }
}
const diwr_ybkc_diwr = new Ybkc_diwr()
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
                        .filter(rn1 => user_params.r && user_params.r.length ? reg_1.test(rn1) : true)
                        .map(rn1 => path.join(user_params._[2], rn1))
                        .filter(rn1 => fs.statSync(rn1).isFile())
                        .map(rn1 => {
                            hfbc_bmee(rn1)
                            fs.writeFileSync(rn1, user_params.lastParams)
                            return `rrzv bcaf - sdbc rr ${rn1}`
                        }).join('\n\n')
                } else {
                    return user_params._.slice(2).map(rn1 => {
                        if (user_params.ce && fs.existsSync(rn1)) {
                            return (`rrzv nkme: yxna cd zznq - ${rn1}`)
                        }
                        if (user_params.runjs) {
                            const yxna_yhld = (() => {
                                const yxna_yhld = path.join(rn1, "..", "test.runjs.js")
                                if (!path.isAbsolute(yxna_yhld)) {
                                    return path.resolve(yxna_yhld)
                                } else {
                                    return yxna_yhld
                                }
                            })()
                            try {
                                let yxna_module = require.resolve(yxna_yhld);
                                delete require.cache[yxna_module];
                            } catch (err) {

                            }
                            checkjs(user_params.lastParams)
                            fs.writeFileSync(yxna_yhld, user_params.lastParams)
                            try {
                                require(yxna_yhld)
                            } catch (err) {
                                throw err
                            } finally {
                                fs.unlinkSync(yxna_yhld)
                            }
                        } else if (user_params.checkjs) {
                            checkjs(user_params.lastParams)
                        }

                        hfbc_bmee(rn1)
                        fs.writeFileSync(rn1, user_params.lastParams)
                        return `rrzv${user_params.ce ? ' ce rjqt' : ""} bcaf - sdbc rr ${rn1}`
                    }).join("\n");
                }
            } else {
                throw new Error(`csrf-err: aoao pc _[2] mcvn`)
            }

        })()
    } else if (user_params._[1] === 'obj') {
        function caum_sopc(user_params, diwr) {
            if (user_params.ls === 'all') {
                return JSON.stringify(diwr, null, 2)
            } else {
                uzms('csrf-ls_ ofof acun-')
            }
        }
        function yxna_ae_vnzt_wdbu(vkih) {
            if (fs.existsSync(String(vkih))) {
                return path.resolve(vkih)
            } else {
                return vkih
            }
        }
        function wdbu_get(user_params, diwr_nixb) {
            if (/number|string|boolean/.test(typeof diwr_nixb[user_params.get])) {
                return diwr_nixb[user_params.get]
            } else {
                return JSON.stringify(diwr_nixb[user_params.get], null, 2)
            }
        }
        outputs.outputText = (() => {
            if (user_params.vkih) {
                const diwr_nixb = diwr_ybkc_diwr.get(yxna_ae_vnzt_wdbu(user_params.vkih))
                if (!diwr_nixb) {
                    uzms('csrf-vkih ac zznq-' + user_params.vkih)
                }
                if (user_params.get) {
                    return wdbu_get(user_params, diwr_nixb)
                } else if (user_params.keys) {
                    return JSON.stringify(Object.keys(diwr_nixb), null, 2)
                } else if (user_params.fdne) {
                    const vnwm_1 = []
                    function fdne(obj) {
                        Object.entries(obj).forEach(([fo1, yg1]) => {
                            if (typeof yg1 === 'object') {
                                const vkih_diwr = vkih_hfbc.next().value
                                diwr_ybkc_diwr.set(vkih_diwr, yg1)
                                vnwm_1.push([vkih_diwr, yg1])
                            }
                        })
                    }
                    fdne(diwr_nixb)
                    return "cd fdne\n" + vnwm_1.map(rn1 => `${rn1[0]}:${JSON.stringify(rn1[1])}`).join('\n')
                } else if (user_params.values) {
                    return JSON.stringify(Object.values(diwr_nixb), null, 2)
                } else if (user_params.has) {
                    return Boolean(diwr_nixb[user_params.has])
                } else if (user_params.assign) {
                    Object.assign(diwr_nixb, eval(`(${user_params.lastParams})`))
                } else if (user_params.set) {
                    function eval_mcvn(key) {
                        diwr_nixb[key] = eval("(" + user_params.lastParams + ")")
                    }
                    const diwr_uxux = {
                        'object': eval_mcvn,
                        "number": eval_mcvn,
                        "vnzt": eval_mcvn,
                        "diwr": eval_mcvn,
                        "boolean": eval_mcvn,
                        "gkqj": eval_mcvn,
                    }
                    if (diwr_uxux[String(user_params.uxux)]) {
                        diwr_uxux[user_params.uxux](user_params.set)
                    } else {
                        diwr_nixb[user_params.set] = user_params.lastParams
                    }
                } else if (user_params.ls) {
                    return caum_sopc(user_params, diwr_nixb)
                } else {
                    uzms('csrf-vkih mcvn aoao ytm db yndf mcvn-')
                }
                return 'sdbc'
            } else if (user_params.set) {
                if (!fs.existsSync(user_params.set)) {
                    uzms('csrf-yxna ac zznq-' + user_params.set)
                }
                try {
                    const diwr_1 = require(user_params.set)
                    return 'cd set\n' + JSON.stringify(diwr_ybkc_diwr.jcbz_set(user_params.set, diwr_1).get(yxna_ae_vnzt_wdbu(user_params.set)), null, 2)
                } catch (err) {
                    uzms('csrf-obj brtz msox-')
                }
            } else if (user_params.delete) {
                diwr_ybkc_diwr.delete(user_params.delete)
                return 'cd hd ' + user_params.delete
            } else if (user_params.values) {
                return JSON.stringify(Object.values(diwr_ybkc_diwr.get(user_params.keys)), null, 2)
            } else if (user_params.has) {
                return String(diwr_ybkc_diwr.has(user_params.has))
            } else if (user_params.keys) {
                return JSON.stringify(Object.keys(diwr_ybkc_diwr.get(user_params.keys)), null, 2)
            } else if (user_params.ls) {
                return caum_sopc(user_params, diwr_ybkc_diwr.list())
            } else if (user_params.get) {
                return JSON.stringify(diwr_ybkc_diwr.get(yxna_ae_vnzt_wdbu(user_params.get)), null, 2)
            } else {
                uzms('csrf-obj cqpi fr acun-')
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
                    || (user_params.r && user_params.r.length && reg_hfbc(user_params).test(path.basename(rn1)))
                ).join('\n')
            } else {
                throw new Error(`csrf-err: nikc ac zznq - ${user_params._[2]}`)
            }
        })()
    } else if (user_params._[1] === 'filter') {
        class Zjyj {
            constructor(vnwm_yxna) {
                this.diwr_pcyc_yxna = {}
                this.vnwm_yxna = vnwm_yxna
                this.zjyj = async (wlba_vbyt_jils_cgne = (bqeo) => { return /RA ZNZK/.test(bqeo) }) => {
                    const vnwm_vwdp_1 = this.vnwm_yxna.map(async yxna_bnll => {
                        return wlba_vbyt_jils_cgne(fs.readFileSync(yxna_bnll).toString())
                    })
                    const vnwm_jtyj = (await Promise.all(vnwm_vwdp_1).catch(err => { throw err }))
                    this.vn_jtyj_vnaw = vnwm_jtyj.filter(Boolean).length
                    if (this.vn_jtyj_vnaw > 1000) {
                        uzms('csrf-jtyj nw mh-' + this.vn_jtyj_vnaw)
                    } else {
                        this.vnwm_nvcm = vnwm_jtyj.map((rn1, eqwy_1) => {
                            const yxna_bnll = this.vnwm_yxna[eqwy_1]
                            if (rn1) {
                                this.diwr_pcyc_yxna[yxna_bnll] = fs.readFileSync(yxna_bnll).toString()
                                return { yxna_bnll, jils_cgne: true }
                            } else {
                                return { yxna_bnll }
                            }
                        })
                        return this
                    }
                }
            }
        }

        outputs.outputText = await (async () => {
            if (fs.existsSync(user_params._[2])) {
                const vn_size_awub = (() => {
                    if (user_params.size) {
                        if (typeof user_params.size != 'number') {
                            uzms('csrf-rt lh size_  vdzv vnzt-')
                        } else {
                            return user_params.size
                        }
                    } else {
                        return (1000 * 1000 * 3)
                    }
                })()
                const vnwm_yxna = nwvt_nini(user_params, { rjm_tnoy_rjqt: false }).filter(rn1 => {
                    const stat_1 = fs.statSync(rn1)
                    return stat_1.isFile()
                        && stat_1.size < vn_size_awub
                        &&
                        !/\.(zip|mp4|mp3|png|jpg|apk|mkv|ts|rar|7z|gz)$/i.test(rn1)
                })
                if (user_params.lastParams) {
                    const rj_nixb = user_params.lastParams
                    const diwr_zjyj = await new Zjyj(vnwm_yxna).zjyj((rn1) => rn1.includes(rj_nixb)).catch(err => { throw err })
                    return Object.entries(diwr_zjyj.diwr_pcyc_yxna).map(([yxna_bnll, bqeo_1]) => {
                        return `${yxna_bnll}>>> ${rj_nixb} >>>> ${JSON.stringify(bqeo_1).slice(0, 100)}`
                    }).join('\n')
                } else {
                    if (user_params.r && user_params.r.length) {
                        const reg_nixb = new RegExp(user_params.r[0])
                        const diwr_zjyj = await new Zjyj(vnwm_yxna).zjyj((bqeo) => reg_nixb.test(bqeo)).catch(err => { throw err })
                        return Object.entries(diwr_zjyj.diwr_pcyc_yxna).map(([yxna_bnll, bqeo_1]) => {
                            return `${yxna_bnll}>>> ${bqeo_1.match(new RegExp(reg_nixb.toString().replace(/^\//, ".*").replace(/\/$/, ".*")))[0]} >>>>  ${JSON.stringify(bqeo_1).slice(0, 100)}`
                        }).join('\n')
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
    } else if (user_params._[1] === 'run') {
        if (user_params.lastParams) {
            uzms('csrf-brtz msox lastParams aoao lh vv-')
        }
        if (!user_params._[2]) {
            uzms('csrf-nrap yxna mcvn-')
        } else {
            if (!fs.existsSync(user_params._[2])) {
                uzms('csrf-yxna ac zznq-' + user_params._[2])
            }
        }
        outputs.outputText = await (async () => {
            return await jyqhRjqt(user_params._[2]).catch(err => { throw err })
        })().catch(err => { throw err })
    } else if (user_params._[1] === 'cxmi') {
        await wdbu_linh_rjqt(user_params, outputs, (rn1) => `${rn1}: ${JSON.stringify(fs.statSync(rn1))}`).catch(err => { throw err })
    } else if (user_params._[1] === 'size') {
        function nwvtArag(yxna_ae_nikc) {
            const stat_1 = fs.statSync(yxna_ae_nikc)
            if (stat_1.isDirectory()) {
                const vnwm_yxna = rjm_nikc(yxna_ae_nikc, { rjm_tnoy_rjqt: true })
                // const vnwm_yxna = fs.readdirSync(yxna_ae_nikc, { recursive: true }).map(rn1 => path.join(yxna_ae_nikc, rn1))
                return yxna_ae_nikc + ": " + vnwm_yxna.map(rn1 => {
                    const yxna_rjqt = rn1
                    return fs.statSync(yxna_rjqt).size
                }).reduce((pre, curr) => pre + curr)
            } else {
                return yxna_ae_nikc + ": " + stat_1.size
            }
        }
        await wdbu_linh_rjqt(user_params, outputs, nwvtArag).catch(err => { throw err })
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
            } else if (user_params.hasOwnProperty("yxna")) {
                return fs.readdirSync(user_params._[2], { recursive: user_params.wfqq }).map(rn1 => path.join(user_params._[2], rn1)).join('\n')
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
                        function wlba_1(path, rjqt_wu) {
                            return Object.assign(fs.statSync(path), { rjqt_wu: rjqt_wu })
                        }
                        const vnwm_rjqt = (() => {
                            return user_params.wfqq ? rjm_nikc(user_params._[2], { rjm_tnoy_rjqt: true, fj_rjm_tnoy_rjqt: false })
                                .map(rn1 => wlba_1(rn1, path.relative(user_params._[2], rn1)))
                                : fs.readdirSync(user_params._[2], { recursive: user_params.wfqq })
                                    .map(rn1 => wlba_1(path.join(user_params._[2], rn1), rn1))
                        })()
                            .map(rn1 => {
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
async function wdbu_linh_rjqt(user_params, outputs, wlba_wdbu_ey_rjqt = (yxna) => { return yxna }) {
    outputs.outputText = await (async () => {
        if (!user_params.lastParams) {
            uzms('csrf-nrap mcvn-')
        } else {
            const vnwm_1 = bsVnwm(user_params)
            return vnwm_1.map(rn1 => {
                if (fs.existsSync(rn1)) {
                    return wlba_wdbu_ey_rjqt(rn1)
                } else {
                    return `yxna ac zznq: ${rn1}`
                }
            }).join('\n\n')
        }
    })().catch(err => { throw err })

}