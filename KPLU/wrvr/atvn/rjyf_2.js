const yf = require('../yf.json')
const diwr_reg_yfm_wmgr = require('../../../diwr_reg_yfm_wmgr')
// const dsyf = require('../dsyf.json')
const diwr_rjyf_mcvn = require('./rjyf_mcvn')
const fo_ussk = require('../../../fo_ussk')
const Jk_ll_zv_wrm = require('../../../jk_ll_zv_wrm')
const { dsyf } = diwr_rjyf_mcvn
const { ytm_yf } = diwr_rjyf_mcvn
const { eysj_nomr_rjyf } = diwr_rjyf_mcvn
const { eysj_yhti_rjyf } = diwr_rjyf_mcvn
const { eysj_ll_yf } = diwr_rjyf_mcvn
const { ll_ae_ds_n_ztka } = diwr_rjyf_mcvn
const { eysj_ds_rjyf } = diwr_rjyf_mcvn
Object.assign(eysj_ds_rjyf, ll_ae_ds_n_ztka)
Object.assign(eysj_ll_yf, ll_ae_ds_n_ztka)

const map_yfm_hfbc_ybkc = new Map()
function rjyf_2(rj_kp = 'abk') {
    if (map_yfm_hfbc_ybkc.has(rj_kp)) {
        return map_yfm_hfbc_ybkc.get(rj_kp)
    } else {
        map_yfm_hfbc_ybkc.set(rj_kp, rjyf_wdbu(rj_kp))
    }
    return map_yfm_hfbc_ybkc.get(rj_kp)
}
function ok_ag_eyrn_wdbu(rj_kp = "", neig_kp = {}) {
    const neig = Object.assign({ neig_kp, cd_wdbu_v_vn: 0, w_wdbu_dsyf: false }, neig_kp)
    const { cd_wdbu_v_vn } = neig
    const j = rj_kp.split('').reduce((mb_kp, rn1, eqwy) => {
        const ll_phfd_yfm = mb_kp
        return ll_phfd_yfm + (() => {
            if (neig.w_wdbu_dsyf && eqwy + cd_wdbu_v_vn > 1 && eqwy === rj_kp.length - 1 && dsyf[rn1]) {
                return okpy_yfm_sy(dsyf[rn1], ll_phfd_yfm, rj_kp, rn1, eqwy, neig)
            } else {
                return yf[rn1]
            }
        })()
    }, '')
    return j
}
function okpy_yfm_sy(rj_di_trl_yfm, ll_phfd_yfm, rj_kp, rn1, eqwy, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)

    // klkl
    // ## bnl ll rj lh 'a','b','p','f' zd cxmj trl sy yfm
    // rj_di_trl_yfm={'trl_dsyf':['ignore-while-ll-rj','a','b','p','f']}

    // ## bnl ll yfm lh a e u zd cxmj trl sy yfm
    // rj_di_trl_yfm={'trl_dsyf':['ignore-while-ll-yfm','a','e','u']}

    // ## tszn ll yfm lh a e u zd cl db trl sy yfm
    // rj_di_trl_yfm={'trl_dsyf':['while','a','e','u']}
    if (typeof rj_di_trl_yfm === 'object') {
        rj_di_trl_yfm.map || (rj_di_trl_yfm = Object.entries(rj_di_trl_yfm)[0])
        if (rj_di_trl_yfm[1][0] === "ignore-while-ll-rj") {
            if (rj_di_trl_yfm[1].some(rn4 => rj_kp.slice(0, eqwy).endsWith(rn4))) {
                return yf[rn1]
            } else {
                return rj_di_trl_yfm[0]
            }
        } else if (rj_di_trl_yfm[1][0] === "ignore-while-ud-rj") {
            if (rj_di_trl_yfm[1].some(rn4 => rj_kp.slice(eqwy).startsWith(rn4))) {
                return yf[rn1]
            } else {
                return rj_di_trl_yfm[0]
            }
        } else if (rj_di_trl_yfm[1][0] === "while") {
            if (rj_di_trl_yfm[1].some(rn2 => {
                return ll_phfd_yfm.endsWith(rn2)
            })) {
                return rj_di_trl_yfm[0]
            } else {
                return yf[rn1]
            }
        } else if (rj_di_trl_yfm[1][0] === "ignore-while-ll-yfm") {
            if (rj_di_trl_yfm[1].some(rn4 => ll_phfd_yfm.endsWith(rn4))) {
                return yf[rn1]
            } else {
                return rj_di_trl_yfm[0]
            }
        } else {
            throw new Error('csrf-acun tskl fr-' + rj_di_trl_yfm[1][0])
        }
    } else {
        return rj_di_trl_yfm
    }
}

function ymrg_xbyb(_, rj_kp, eysj_mcvn_rjyf, w_ok_ud = false) {
    if (!eysj_mcvn_rjyf[_]) {
        throw new Error('csrf-bqph msox, mcvn rjyf bx ac zznq bi key-' + _)
    }
    if (_ === rj_kp) {
        return `${(eysj_mcvn_rjyf[_])}\r`
    } else {
        return `\n${(eysj_mcvn_rjyf[_])}\r${w_ok_ud ? '' : '\n'}`
    }
}
function zqjp_ymrg(_, eysj_mcvn_rjyf, w_ok_ud = false) {
    if (!eysj_mcvn_rjyf[_]) {
        throw new Error('csrf-bqph msox, mcvn rjyf bx ac zznq bi key-' + _)
    }
    return eysj_mcvn_rjyf[_]
}

function hehe_wdbu(rj_kp, neig_kp = {}) {
    const neig = Object.assign({ neig_kp, rj_kp, cd_wdbu_v_vn: 0, w_wdbu_dsyf: false }, neig_kp)
    const rj_reg_ll = "^" + "(?:" + Object.keys(eysj_ll_yf).join('|') + ")"
    const rj_reg_yh = "(?<=[\\w](?:\\r\\n|))(?:" + Object.keys(eysj_yhti_rjyf).join('|') + ")(?=\\w)"
    const rj_reg_nomr = "(?:" + Object.keys(eysj_nomr_rjyf).join('|') + ")"
    const rj_reg_ds = "(?:" + Object.keys(eysj_ds_rjyf).join('|') + ")$"
    const reg_ll_ae_yh_ae_nomr = new RegExp(rj_reg_ll + "|" + rj_reg_yh + "|" + rj_reg_nomr + "|" + rj_reg_ds, "g")
    if (reg_ll_ae_yh_ae_nomr.test(rj_kp)) {
        const reg_ll = new RegExp(rj_reg_ll, 'g')
        const reg_yh = new RegExp(rj_reg_yh, 'g')
        const reg_nomr = new RegExp(rj_reg_nomr, 'g')
        const reg_ds = new RegExp(rj_reg_ds, 'g')
        const yhti_wdbu = (rj_yfm) => {
            // if (rj_kp === 'renoarmr') {
            //     throw [rj_yfm, rj_yfm.replace(/\n[^\r\n]*\r\n/g, "\r\n"), reg_yh.test(rj_yfm.replace(/\n[^\r\n]*\r\n/g, "\r\n"))]
            // }
            if (!reg_yh.test(rj_yfm.replace(/\n[^\r\n]*\r\n/g, "q"))) {
                return rj_yfm
            }
            return rj_yfm.replace(reg_yh, (_) => {
                neig.cd_wdbu_v_vn += _.length
                return ymrg_xbyb(_, rj_kp, eysj_yhti_rjyf)
            })
        }

        const rj_yhld = yhti_wdbu(new Jk_ll_zv_wrm(reg_yh, '\n1\n').setBqeo(rj_kp).ymrg(
            (rj_1) => {
                return new Jk_ll_zv_wrm(reg_ds, '\n2\n').setBqeo(rj_1).ymrg(
                    (rj_2) => {
                        return new Jk_ll_zv_wrm(reg_ll, '\n3\n').setBqeo(rj_2).ymrg(
                            (rj_3) => {
                                return rj_3.replace(reg_nomr, (_) => {
                                    neig.cd_wdbu_v_vn += _.length
                                    return ymrg_xbyb(_, rj_3, eysj_nomr_rjyf)
                                })
                            }
                        ).getResult().replace(reg_ll, (_) => {
                            neig.cd_wdbu_v_vn += _.length
                            return ymrg_xbyb(_, rj_2, eysj_ll_yf)
                        })
                    }
                ).getResult().replace(reg_ds, (_) => {
                    neig.cd_wdbu_v_vn += _.length
                    return ymrg_xbyb(_, rj_1, eysj_ds_rjyf)
                })
            }
        ).getResult())
        const rj_2 = rj_yhld.split(/\n/).map((rn1, eqwy, vnwm) => {
            if (rn1.endsWith('\r')) {
                return rn1.replace('\r', "")
            } else if (eqwy === vnwm.length - 1) {
                return ok_ag_eyrn_wdbu(rn1, neig)
            } else {
                return ok_ag_eyrn_wdbu(rn1, Object.assign({}, neig, { w_wdbu_dsyf: false }))
            }
        }).join('')
        const yhld = bpn_vt_ld(rj_kp)
        // if (rj_2 != yhld) {
        //     throw ['you loose', rj_kp, rj_2, yhld]
        // }
        return yhld
    } else {
        return ok_ag_eyrn_wdbu(rj_kp, neig)
    }

}
module.exports = rjyf_2
function rjyf_tzfs_wdbu(rjyf = "") {
    const jtyj_1 = rjyf
    const jtyj_2 = (() => {
        if ((() => {
            return Object.keys(ytm_yf).some(rn5 => jtyj_1.includes(rn5))
        })()) {
            const vnwm_yhld = Object.entries(ytm_yf).find(rn4 => {
                if (jtyj_1.includes(rn4[0])) {
                    return true
                }
            })
            return jtyj_1.replace(vnwm_yhld[0], vnwm_yhld[1])
        } else {
            return jtyj_1
        }
    })()
    const rj_reg_n_a_n_wmgr = diwr_reg_yfm_wmgr.rj_reg_n_a_n_wmgr
    const { rj_reg_sl_ux_wmgr } = diwr_reg_yfm_wmgr
    const reg_aqn_yt_yfm_gmwr = new RegExp(`^${rj_reg_n_a_n_wmgr}(?:${rj_reg_sl_ux_wmgr}|${rj_reg_n_a_n_wmgr})$`)
    if (reg_aqn_yt_yfm_gmwr.test(jtyj_2.replace(/-| /, ""))) {
        return jtyj_2.replace(/(?:-| )/, "").replace(new RegExp(rj_reg_n_a_n_wmgr), (_, p1, p2, p3) => {
            if (yf[p3]) {
                return p1 + p2 + yf[p3]
            } else {
                // kiʤ
                return _
            }
        })
    } else {
        return jtyj_2
            .replace(/-ps$/, 'ps')
            .replace(/-pt$/, 'pt')
            .replace(/-st$/, 'st')
            .replace(/-bt$/, 'bt')
            .replace(/-kt$/, 'kt')
            .replace(/s-(?=[ptdkglnmrvb])/, 's')

            .replace(/ss/, 'sis')
    }
}

function rjyf_wdbu(rj_kp) {
    if (rj_kp.length === 3) {
        return rj_kp.split('').map(rn1 => yf[rn1]).join('')
    } else if (rj_kp.length === 2) {
        return diwr_rjyf_mcvn.lr_zt_rjyf[rj_kp] || rj_kp.split('').map(rn1 => yf[rn1]).join('')
    }
    // const f = hehe_wdbu(rj_kp, { w_wdbu_dsyf: true })
    const f = bpn_vt_ld(rj_kp, { w_wdbu_dsyf: true })
    // return f
    return rjyf_tzfs_wdbu(f)
    // const nini = Object.entries(eysj_ds_rjyf).find(rn1 => rj_kp != rn1[0] && rj_kp.endsWith(rn1[0]))
    // const jtyj = (() => {
    //     if (nini) {
    //         const rj_1 = rj_kp.replace(new RegExp((nini[0]) + "$"), "")
    //         const rj_ds_yfm = nini[1]
    //         return rjyf_tzfs_wdbu(hehe_wdbu(rj_1, { w_wdbu_dsyf: false }) + rj_ds_yfm)
    //     } else {
    //         const f = hehe_wdbu(rj_kp, { w_wdbu_dsyf: true })
    //         return rjyf_tzfs_wdbu(f)
    //     }
    // })()
    return jtyj
}

function bpn_vt_ld(rj_kp, neig_kp = {}) {
    const neig = Object.assign({ neig_kp, rj_kp, cd_wdbu_v_vn: 0, w_wdbu_dsyf: false }, neig_kp)
    const rj_reg_ll = "^" + "(?:" + Object.keys(eysj_ll_yf).join('|') + ")"
    const rj_reg_yh = "(?<=[\\w](?:\\r\\n|))(?:" + Object.keys(eysj_yhti_rjyf).join('|') + ")(?=\\w)"
    const rj_reg_nomr = "(?:" + Object.keys(eysj_nomr_rjyf).join('|') + ")"
    const rj_reg_ds = "(?:" + Object.keys(eysj_ds_rjyf).join('|') + ")$"

    const reg_ll = new RegExp(rj_reg_ll, 'g')
    const reg_yh = new RegExp(rj_reg_yh, 'g')
    const reg_nomr = new RegExp(rj_reg_nomr, 'g')
    const reg_ds = new RegExp(rj_reg_ds, 'g')
    const reg_yf = /[a-zA-Z]/g
    const vnwm_ok_ag_eyrn = rj_kp.split('')
    const vnwm_ybkc_1 = [{ eqwy: -1, rj_yfm: '', rj_kp_lg_ab_bnll: "", wdgd: -1 }]
    vnwm_ok_ag_eyrn.reduce((mb1, rn1, eqwy, vnwm_3) => {
        const lg_ab_bnll = mb1 + rn1
        function cgne_bj_ybbp(reg = new RegExp(), mcvn_eysj_bx, neig_kp = {}) {
            const neig = Object.assign({ neig_kp, eqwy: -1, zkrs: 'se-cqpi-zkrs', wdgd: -1 }, neig_kp)
            const rj_ra_cgne_bqeo = (() => {
                // const vnwm_yf_ux = vnwm_ybkc_1.filter(rn1 => rn1.zkrs === neig.zkrs)
                // if (vnwm_yf_ux.length) {
                //     return lg_ab_bnll.slice(vnwm_yf_ux[vnwm_yf_ux.length - 1].eqwy)
                // }
                return lg_ab_bnll
            })()
            const lastIndex = reg.lastIndex
            const diwr_bnll_cgne_jtyj = reg.exec(rj_ra_cgne_bqeo)
            if (diwr_bnll_cgne_jtyj) {
        
                const last_nini = vnwm_ybkc_1[vnwm_ybkc_1.length - 1]
                const vnwm_lzyp = vnwm_ybkc_1.map((rn1, eqwy_2) => {
                    rn1.bnll_ybbp_vkih = eqwy_2
                    return rn1
                }).filter(rn1 => {
                    return rn1.ok_ds_cgne_n_eqwy >= diwr_bnll_cgne_jtyj.index && diwr_bnll_cgne_jtyj.index >= rn1.index
                })
                const ymce = (rj_yfm_mb) => {
                    const llph_yfm = (rj_yfm_mb || (() => {
                        const ztka_1 = diwr_bnll_cgne_jtyj.input.slice(0, diwr_bnll_cgne_jtyj.index)
                        if (ztka_1 === '')
                            return ''
                        return ztka_1.split('').map(zt => {
                            const ce_yfm = yf[zt]
                            if (!ce_yfm) {
                                // throw [diwr_bnll_cgne_jtyj.input.slice(0, diwr_bnll_cgne_jtyj.index), diwr_bnll_cgne_jtyj]
                                throw new Error('csrf-bqph msox 888-')
                            } else {
                                return ce_yfm
                            }
                        }).join('')
                    })())
                    const rj_yfm = llph_yfm + mcvn_eysj_bx[diwr_bnll_cgne_jtyj[0]]
                    vnwm_ybkc_1.push(Object.assign(neig, { llph_yfm, rj_kp: rj_kp, eqwy: neig.eqwy, index: diwr_bnll_cgne_jtyj.index, ok_ds_cgne_n_eqwy: diwr_bnll_cgne_jtyj.index + diwr_bnll_cgne_jtyj[0].length - 1, zkrs: neig.zkrs, mb_rj: mb1, rj_kp_lg_ab_bnll: lg_ab_bnll, rj_yfm }))
                }

                if (vnwm_lzyp.length) {
                    if (vnwm_lzyp.some(rn1 => rn1.wdgd === neig.wdgd)) {
                        throw new Error('csrf-wdgd yslz stiq msox-' + JSON.stringify(neig))
                    }
                    // vnwm_lzyp.sort((a, b) => b.ok_ds_cgne_n_eqwy - a.ok_ds_cgne_n_eqwy)
                    if (vnwm_lzyp.every((rn1) => rn1.wdgd < neig.wdgd)) {
                        const nixb_rj_yfm = (() => {
                            const nini = vnwm_ybkc_1.find(rn1 => rn1.eqwy === diwr_bnll_cgne_jtyj.index && diwr_bnll_cgne_jtyj.index <= rn1.ok_ds_cgne_n_eqwy)// vnwm_ybkc_1[ok_ar_nini.bnll_ybbp_vkih - 1].rj_yfm
                            if (!nini) {
                                // throw [diwr_bnll_cgne_jtyj.index, vnwm_ybkc_1]
                                throw new Error('csrf-nini yizi lh vv-')
                            }
                            else {
                                return nini.llph_yfm
                            }
                        })()
                        ymce(nixb_rj_yfm)
                    } else {
                        // do nothing
                    }

                } else {
                    ymce(last_nini.rj_yfm)
                }
            } else {
                reg.lastIndex = lastIndex
            }
        }
        cgne_bj_ybbp(reg_ll, eysj_ll_yf, { eqwy: eqwy, wdgd: 4, zkrs: 'll' })

        cgne_bj_ybbp(reg_yh, eysj_yhti_rjyf, { eqwy: eqwy, wdgd: 5, zkrs: 'yh' })
        if (eqwy === vnwm_3.length - 1)
            cgne_bj_ybbp(reg_ds, eysj_ds_rjyf, { eqwy: eqwy, wdgd: 3, zkrs: 'ds' })
        else
            cgne_bj_ybbp(reg_yf, yf, { eqwy: eqwy, wdgd: 1, zkrs: 'nmky-yf' })

        cgne_bj_ybbp(reg_nomr, eysj_nomr_rjyf, { eqwy: eqwy, wdgd: 2, zkrs: 'nomr' })
        // if (rj_kp === 'astu' && eqwy === 3) {
        //     console.log(888, eqwy, vnwm_ybkc_1)
        // }
        return lg_ab_bnll
    }, '')
    if (vnwm_ybkc_1.length > 1) {
        const nini = vnwm_ybkc_1[vnwm_ybkc_1.length - 1]
        if (nini.ok_ds_cgne_n_eqwy + 1 != rj_kp.length) {
            return nini.rj_yfm + ((rj_kp) => {
                if (eysj_ds_rjyf[rj_kp]) {
                    return eysj_ds_rjyf[rj_kp]
                } else {
                    return yf[rj_kp] || rj_kp
                }
            })(rj_kp.slice(nini.ok_ds_cgne_n_eqwy + 1))
            // return nini.rj_yfm + ok_ag_eyrn_wdbu(rj_kp.slice(nini.ok_ds_cgne_n_eqwy + 1), Object.assign(neig, { w_wdbu_dsyf: true }))
        } else {
            return nini.rj_yfm
        }
    }
    else
        return rj_kp

}

