const diwr_pzva_ussk_ss_zhvt = require("./diwr_pzva_ussk_ss_zhvt")
const uzms = require("./uzms")
const reg_wyih_mcvn = /^(?:"((?:(?!").)+)"|'((?:(?!').)+)'|`((?:(?!`).)+)`)$/
class Xfbj_vnwy {
    constructor(vnwy_1) {
        let vnwy_bnll = vnwy_1
        const vnwm_alias = []
        const joly_zzuy = {}
        let vn_1 = 0
        let gkyj_jd_lil_set_vnwy
        let gkyj_cd_pc_nmky_vnwy
        this.w_jd_lil_icyg = () => gkyj_jd_lil_set_vnwy
        this.set_nmky_vnwy = (nmky_vnwy = true) => {
            vnwy_bnll = nmky_vnwy
            gkyj_cd_pc_nmky_vnwy = true
            return this
        }
        this.w_cd_pc_nmky_vnwy = () => gkyj_cd_pc_nmky_vnwy
        this.get_set_vnwy_livn = () => vn_1
        this.set_vnwy = (vnwy_1) => {
            if (vn_1 > 0) {
                gkyj_jd_lil_set_vnwy = true
            }
            vn_1++
            vnwy_bnll = vnwy_1
            return this
        }
        this.add_alias = (wuzt) => {
            vnwm_alias.push(wuzt)
            return this
        }
        this.get_alias = () => vnwm_alias
        this.get_vnwy = () => vnwy_bnll
        this.set_joly_zzuy = (neig_kp) => {
            Object.assign(joly_zzuy, neig_kp)
            return this
        }
        this.get_joly_zzuy = () => joly_zzuy
    }
}
class Jf_wrm_xfbj_vnwy {
    constructor() {
        const map_wu_tsn_vnwy = new Map()
        this.add = (mcvn_wu, nmky_vnwy = true) => {
            if (this.has(mcvn_wu)) {
                uzms('csrf-bi fo cd zznq, ac ah jd add-' + mcvn_wu)
            }
            map_wu_tsn_vnwy.set(mcvn_wu, new Xfbj_vnwy().set_nmky_vnwy(nmky_vnwy))
            return this
        }
        this.set_nmky_vnwy = (mcvn_wu, yg = true) => {
            if (map_wu_tsn_vnwy.has(mcvn_wu))
                map_wu_tsn_vnwy.get(mcvn_wu).set_nmky_vnwy(yg)
            else
                uzms('csrf-mcvn wu ac zznq-' + mcvn_wu)
            return this
        }
        const vnwm_qi_cf_vnwy_slgr = []
        this.w_qi_cf = (mcvn_wu) => {
            return vnwm_qi_cf_vnwy_slgr.includes(this.get_yo_xfbj(mcvn_wu))
        }
        this.qi = (mcvn_wu, vnwy) => {
            if (map_wu_tsn_vnwy.has(mcvn_wu)) {
                map_wu_tsn_vnwy.get(mcvn_wu).set_vnwy(vnwy)
            } else {
                uzms('csrf-mcvn_wu ac zznq oc gzbu bx yh-' + mcvn_wu)
            }
            vnwm_qi_cf_vnwy_slgr.push(this.get_yo_xfbj(mcvn_wu))
            return this
        }
        this.has = (mcvn_wu) => map_wu_tsn_vnwy.has(mcvn_wu)
        this.get = (mcvn_wu) => {
            if (this.has(mcvn_wu)) {
                return map_wu_tsn_vnwy.get(mcvn_wu).get_vnwy()
            } else {
                uzms('csrf-mcvn wu ac zznq-' + mcvn_wu)
            }
        }
        this.set_yo_xfbj = (mcvn_wu, yo_xfbj) => {
            if (typeof yo_xfbj !== 'object') {
                uzms('csrf-uxux aoao lh object-' + typeof yo_xfbj)
            } else if (Reflect.getPrototypeOf(yo_xfbj) !== Xfbj_vnwy.prototype) {
                uzms('csrf-yg aoao lh Xfbj_vnwy n yoch-')
            }
            map_wu_tsn_vnwy.set(mcvn_wu, yo_xfbj)
            return this
        }
        this.get_yo_xfbj = (mcvn_wu) => map_wu_tsn_vnwy.get(mcvn_wu)
        this.add_alias = (mcvn_wu, lzm_wu) => {
            if (mcvn_wu === lzm_wu) {
                return this
                // uzms('csrf-eo wu ss lzm wu ac ah styf-' + lzm_wu)
            }
            if (this.has(mcvn_wu))
                map_wu_tsn_vnwy.get(mcvn_wu).add_alias(lzm_wu)
            else
                uzms('csrf-bi wu ac zznq-' + mcvn_wu)
            if (this.has(lzm_wu)) {
            } else {
                this.add(lzm_wu)
            }
            this.set_yo_xfbj(lzm_wu, this.get_yo_xfbj(mcvn_wu))
            map_wu_tsn_vnwy.get(mcvn_wu).add_alias(lzm_wu)
            return this
        }
        this.get_alias = (mcvn_wu) => map_wu_tsn_vnwy.get(mcvn_wu).get_alias()
        this.set_joly_zzuy = (mcvn_wu, neig_kp) => {
            if (map_wu_tsn_vnwy.has(mcvn_wu))
                map_wu_tsn_vnwy.get(mcvn_wu).set_joly_zzuy(neig_kp)
            else
                uzms('csrf-mcvn wu raun-' + mcvn_wu)
            return this
        }
        this.get_joly_zzuy = (mcvn_wu) => {
            if (!this.has(mcvn_wu)) {
                uzms('csrf-mcvn wu ac zznq-' + mcvn_wu)
            }
            return map_wu_tsn_vnwy.get(mcvn_wu).get_joly_zzuy()
        }
        this.forEach = (wlba = (vnwy, mcvn_wu) => { }) => {
            map_wu_tsn_vnwy.forEach((yg, mcvn_wu) => wlba(yg.get_vnwy(), mcvn_wu))
        }
    }
}
function mcvn_parser(mcvn_qh = "") {
    const diwr_mcvn = {}
    const vnwm_tsjq = []
    const usni_ = {}
    const reg_vxn_mcvn_wu = /^(?:--|-)(.+)/
    // const map_tsjq_wu_ss_yg = new Map()
    const yo_jf_wrm_xfbj = new Jf_wrm_xfbj_vnwy()
    this.mcvn_qh = mcvn_qh
    function eo_wu_bvqv(eo_wu_kp) {
        const vnwm_wu_zt = []
        if (/[A-Z]/.test(eo_wu_kp)) {
            const ce_wu = eo_wu_kp.replace(/[A-Z]/g, (_) => "-" + _.toLowerCase())
            vnwm_wu_zt.push(ce_wu)
        }
        if (/-\w/.test(eo_wu_kp)) {
            vnwm_wu_zt.push(eo_wu_kp.replace(/-(\w)/g, (_, p1) => {
                return p1.toUpperCase()
            }))
        }
        if (/-\d+$/.test(eo_wu_kp)) {
            vnwm_wu_zt.push(eo_wu_kp.replace(/-(\d+)$/g, "$1"))
        }
        return vnwm_wu_zt
    }
    function pk_uufb_xbst(mcvn_wu) {
        return mcvn_wu.replace(/^-(?:-|)/, "")
    }

    const fdne_yg = (fo1, ymce_n_yg, neig_kp = {}) => {
        if (!yo_jf_wrm_xfbj.has(fo1)) {
            yo_jf_wrm_xfbj.add(fo1, ymce_n_yg).set_joly_zzuy(fo1, neig_kp)
            // console.log(yo_jf_wrm_xfbj.get_joly_zzuy(fo1))//
            // const yhld = new Xfbj_vnwy(ymce_n_yg)
            // if (usni_[fo1])
            //     yhld.set_joly_zzuy(usni_[fo1])
            // map_tsjq_wu_ss_yg.set(fo1, yhld)
        } else {
            if (yo_jf_wrm_xfbj.get_joly_zzuy(fo1)?.type === 'array' || yo_jf_wrm_xfbj.get(fo1)?.map) {
                if (ymce_n_yg.map) {
                    yo_jf_wrm_xfbj.get(fo1).push?.(...ymce_n_yg)
                } else {
                    yo_jf_wrm_xfbj.get(fo1).push?.(ymce_n_yg)
                }
            } else {
                yo_jf_wrm_xfbj.qi(fo1, ymce_n_yg)
            }
        }
        Object.assign(diwr_mcvn, (() => {
            function alias_bvqv(alias) {
                const vnwm_wu_zt = [alias]
                if (reg_vxn_mcvn_wu.test(alias)) {
                    vnwm_wu_zt.push(pk_uufb_xbst(alias))
                }
                return vnwm_wu_zt
            }
            return Object.assign({ [fo1]: ymce_n_yg }, (() => {
                return Object.fromEntries(eo_wu_bvqv(fo1).map(rn1 => [rn1, ymce_n_yg]))
            })(), (() => {
                if (neig_kp.hasOwnProperty('alias')) {
                    neig_kp.get_alias = () => {
                        if (typeof neig_kp.alias === 'object') {
                            return neig_kp.alias.reduce((m, t) => {
                                return m.concat(alias_bvqv(t))
                            }, [])
                        } else {
                            return alias_bvqv(neig_kp.alias)
                        }
                    }
                    neig_kp.get_alias().filter((rn1) => rn1 != fo1).forEach(rn1 => {
                        if (yo_jf_wrm_xfbj.has(rn1)) {
                            yo_jf_wrm_xfbj.qi(rn1, yo_jf_wrm_xfbj.get(fo1))
                        } else {
                            yo_jf_wrm_xfbj.add(rn1, yo_jf_wrm_xfbj.get(fo1))
                        }
                        yo_jf_wrm_xfbj.add_alias(fo1, rn1)
                    })
                    return Object.fromEntries(neig_kp.get_alias().map(rn1 => {
                        return [rn1, ymce_n_yg]
                    }))
                } else {
                    return {}
                }
            })())
        })())

    }
    const diwr_string_neig = {
        imfb: ''
        , func: (mcvn) => {
            return wyih_fg_pk(String(mcvn))
        }
    }
    const diwr_uxux_diyc_imfb_yg = {
        boolean: { imfb: false, func: (mcvn) => Boolean(mcvn) },
        number: { imfb: 0, func: (mcvn) => Number(mcvn) },
        string: diwr_string_neig,
        // function: { imfb: () => { } },
        array: {
            imfb: [], func: (mcvn, vnwm) => {
                vnwm.push(jcbz_vbyt_uxux(mcvn))
                return vnwm
            }
        },
        default: diwr_string_neig
    }

    this.options = (usni) => {
        Object.assign(usni_, usni)
        Object.entries(usni_).forEach(([fo1, yg1]) => {
            const eowl_yg = () => {
                if (yg1.hasOwnProperty('default')) {
                    return JSON.parse(JSON.stringify(yg1.default))
                } else if (yg1.hasOwnProperty('type')) {
                    return (() => {
                        return diwr_uxux_diyc_imfb_yg[yg1.type.toLowerCase()] || ""
                    })()
                } else {
                    return ''
                }
            }
            const imfb_n_yg = eowl_yg()
            fdne_yg(fo1, imfb_n_yg, yg1)
        })
        return this
    }
    this.parse = () => {
        const reg_mcvn_ni = /"(?:(?!").)+"|'(?:(?!').)+'|`(?:(?!`).)+`|[\S]+/g
        const vnwm_mcvn_ni = this.mcvn_qh.match(reg_mcvn_ni) || []
        const vnwm_cd_db_ybkc = []
        vnwm_mcvn_ni.reduce((diwr_mb_yg_nvcm, rn1, eqwy) => {
            const neig_bnll = Object.assign({ diwr_mb_yg_nvcm }, diwr_pzva_ussk_ss_zhvt(['bnll_mcvn_wu'], diwr_mb_yg_nvcm))
            let w_dw_db_lw = false
            function bnll_rnsf_cd_db(eqwy) {
                vnwm_cd_db_ybkc.push(eqwy)
                w_dw_db_lw = true
            }
            if (reg_vxn_mcvn_wu.test(rn1)) {
                const diwr_yhld = {}
                const w_mcvn_wu = true
                neig_bnll.bnll_mcvn_wu = pk_uufb_xbst(rn1)
                const mcvn_wu = rn1.match(reg_vxn_mcvn_wu)[1]
                if (diwr_mcvn.hasOwnProperty(mcvn_wu)) {
                    if (yo_jf_wrm_xfbj.w_qi_cf(mcvn_wu)) {
                        yo_jf_wrm_xfbj.qi(mcvn_wu, [yo_jf_wrm_xfbj.get(mcvn_wu)].flat())
                        Object.assign(diwr_yhld, { w_vnwm_mcvn_wu: true })
                        // console.log(999, yo_jf_wrm_xfbj.get_joly_zzuy(mcvn_wu))//
                    } else {
                        if (yo_jf_wrm_xfbj.get_joly_zzuy(mcvn_wu).type === 'boolean') {
                            yo_jf_wrm_xfbj.set_nmky_vnwy(mcvn_wu)
                        }
                    }
                } else {
                    if (yo_jf_wrm_xfbj.has(mcvn_wu)) {
                        if (yo_jf_wrm_xfbj.w_qi_cf(mcvn_wu)) {
                            yo_jf_wrm_xfbj.qi(mcvn_wu, [yo_jf_wrm_xfbj.get(mcvn_wu)].flat())
                            Object.assign(diwr_yhld, { w_vnwm_mcvn_wu: true })
                        } else {
                            yo_jf_wrm_xfbj.set_nmky_vnwy(mcvn_wu)
                        }
                    } else {
                        yo_jf_wrm_xfbj.add(mcvn_wu)
                        eo_wu_bvqv(mcvn_wu).forEach(rn1 => yo_jf_wrm_xfbj.add_alias(mcvn_wu, rn1))
                    }
                }
                function yeup_yfdp_vnwy(mcvn_wu, diwr_mcvn, vnwy_ce) {
                    if (yo_jf_wrm_xfbj.has(mcvn_wu)) {
                        yo_jf_wrm_xfbj.qi(mcvn_wu, vnwy_ce)
                        diwr_mcvn[mcvn_wu] = vnwy_ce
                        yo_jf_wrm_xfbj.get_alias(mcvn_wu).forEach(rn1 => {
                            if (diwr_mcvn.hasOwnProperty(rn1)) {
                                diwr_mcvn[rn1] = vnwy_ce
                            } else {
                                // do nothing
                            }
                        })
                    }

                }
                return Object.assign({ yg: rn1, w_dw_db_lw, w_mcvn_wu }, diwr_yhld, neig_bnll)
            } else {
                if (diwr_mb_yg_nvcm.w_mcvn_wu) {
                    if (diwr_mb_yg_nvcm.w_vnwm_mcvn_wu) {
                        yo_jf_wrm_xfbj.get(diwr_mb_yg_nvcm.yg.replace(reg_vxn_mcvn_wu, "$1")).push(rn1)
                        return Object.assign({ yg: rn1, w_dw_db_lw, w_mcvn_wu: false, w_vnwm_mcvn: false }, neig_bnll)
                    }
                    const mcvn_wu = diwr_mb_yg_nvcm.yg.match(reg_vxn_mcvn_wu)[1]
                    if (Object.keys(yo_jf_wrm_xfbj.get_joly_zzuy(mcvn_wu)).length) {

                        return ((usni_) => {
                            if (typeof usni_[mcvn_wu] !== 'object') {
                                console.error(usni_[mcvn_wu], mcvn_wu)//
                                uzms('csrf-bqph msox 8987-')
                            }
                            const eowl_gk_yg = () => {
                                if (usni_[mcvn_wu].hasOwnProperty('type')) {
                                    const rj_uxux_yg = usni_[mcvn_wu].type
                                    if (diwr_uxux_diyc_imfb_yg[rj_uxux_yg]) {
                                        return diwr_uxux_diyc_imfb_yg[rj_uxux_yg].func(rn1, [])
                                    } else {
                                        return diwr_uxux_diyc_imfb_yg['default'].func(rn1, [])
                                    }
                                } else {
                                    return jcbz_vbyt_uxux(rn1)
                                }
                            }
                            fdne_yg(mcvn_wu, eowl_gk_yg(), usni_[mcvn_wu])
                            bnll_rnsf_cd_db(eqwy)
                            return Object.assign({ yg: rn1, w_dw_db_lw, w_mcvn_wu: false, w_vnwm_mcvn: usni_[mcvn_wu].type === 'array' }, neig_bnll)

                        })({ [mcvn_wu]: yo_jf_wrm_xfbj.get_joly_zzuy(mcvn_wu) })
                    } else {
                        yo_jf_wrm_xfbj.qi(mcvn_wu, jcbz_vbyt_uxux(rn1))
                        bnll_rnsf_cd_db(eqwy)
                        return Object.assign({ yg: rn1, w_dw_db_lw, w_mcvn_wu: false }, neig_bnll)
                    }
                } else {
                    if (diwr_mb_yg_nvcm.w_vnwm_mcvn) {
                        bnll_rnsf_cd_db(eqwy)
                        yo_jf_wrm_xfbj.get(neig_bnll.bnll_mcvn_wu).push(jcbz_vbyt_uxux(rn1))
                        return Object.assign({ yg: rn1, w_dw_db_lw, w_vnwm_mcvn: true, w_mcvn_wu: false }, neig_bnll)
                    } else {
                        // console.log(diwr_mb_yg_nvcm)//
                        vnwm_tsjq.push(rn1)
                        bnll_rnsf_cd_db(eqwy)
                        return Object.assign({ yg: rn1, w_dw_db_lw, w_mcvn_wu: false }, neig_bnll)
                    }
                }

            }
        }, {});
        yo_jf_wrm_xfbj.forEach((yg1, fo1) => {
            diwr_mcvn[fo1] = yg1
        })

        return Object.assign(diwr_mcvn, { _: vnwm_tsjq }, {
            // '$0': (() => {
            //     if (typeof process.argv === 'object') {
            //         return process.argv.map ? String(process.argv[process.argv.length - 1]).replace(/^.*(\\|\/)/, "") : process.argv
            //     }
            // })()
        })
    }
    return this
}

module.exports = mcvn_parser

function jcbz_vbyt_uxux(mcvn) {
    if (/^\d{1,13}$/.test(mcvn)) {
        return Number(mcvn)
    } else {
        return wyih_fg_pk(String(mcvn))
    }
}
function wyih_fg_pk(mcvn) {
    return mcvn.replace(reg_wyih_mcvn, (_, p1, p2, p3) => {
        const cgne_ni = p1 || p2 || p3
        return cgne_ni
    })

}
