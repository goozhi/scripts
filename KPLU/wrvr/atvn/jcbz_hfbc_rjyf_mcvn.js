const fo_ussk = require("../../../fo_ussk")
const NiJinzhiZhuanhuan = require("../../../NiJinzhiZhuanhuan")
const { yf } = require("./rjyf_mcvn")
const vnwm_ztka_bx = 'abcdefghijklmnopqrstuvwyzx'.split('')
const diwr_ztka_tsn_rnyf = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
    // x: 'a',
    y: 'ai',
}
const diwr_ztka_tsn_djo = {
    g: 'g',
    m: 'm',
    n: 'n',
    h: 'h',
    b: 'b',
    c: 's',
    l: 'l',
    s: 's',
    k: 'k',
    d: 'd',
    y: 'j',
    p: 'p',
    w: 'w',
    t: 't',
    v: 'v',
    r: 'r',
    f: 'f',
    z: 'z',
    j: 'ʤ',
    q: 'kw'
}

class Jcbz_hfbc_rjyf_mcvn {
    constructor(rjyf_mcvn) {
        this.rjyf_mcvn = rjyf_mcvn
        const vnwm_eysj_bx = new Array(676).fill(1).map((_, eqwy) => NiJinzhiZhuanhuan(eqwy, 'abcdefghijklmnopqrstuvwyzx'))
        const ll_lr_rjyf = (reg_kp, wlba_icl_yfm = (rj_lr_zt) => rj_lr_zt, neig_kp = {}) => {
            const neig = Object.assign({ neig_kp, vnwm_xcmj_zv_da_y_ztka: [], vnwm_xcmj_zv_da_vy_ztka: [] }, neig_kp)
            const { vnwm_xcmj_zv_da_y_ztka } = neig
            const { vnwm_xcmj_zv_da_vy_ztka } = neig
            const { vnwm_xcmj_zv_ud_rj_lh } = neig
            const vnwm_nixb_wmgr = (vnwm_eysj_bx).filter((yg) => {
                return reg_kp.test(yg) && !vnwm_xcmj_zv_da_y_ztka.includes(yg[0]) && !vnwm_xcmj_zv_da_vy_ztka.includes(yg[1])
            })
            vnwm_nixb_wmgr.forEach(rn1 => {
                Object.assign(neig.w_ud_yfm_wdbu ? this.rjyf_mcvn.eysj_ds_rjyf : this.rjyf_mcvn.eysj_ll_yf, { [rn1]: vnwm_xcmj_zv_ud_rj_lh ? ({ [wlba_icl_yfm(rn1)]: ["ignore-while-ud-rj", ...neig.vnwm_xcmj_zv_ud_rj_lh] }) : wlba_icl_yfm(rn1) })
                if (vnwm_xcmj_zv_ud_rj_lh) {
                    // throw [{ [wlba_icl_yfm(rn1)]: ["ignore-while-ud-rj", ...neig.vnwm_xcmj_zv_ud_rj_lh] }]
                }
            })

        }
        const jchv_sy_yfm = (reg_kp, wlba_da_y_yfm = (zt) => zt, wlba_da_vy_yfm = (zt) => zt, neig_kp = {}) => {
            ll_lr_rjyf(reg_kp, (rn1) => {
                const rjyf = wlba_da_y_yfm(rn1[0], rn1) + wlba_da_vy_yfm(rn1[1], rn1)
                return rjyf
            }, neig_kp)
        }
        const da_vy_lh_serm = (reg_kp, wlba_da_y_yfm = (zt) => zt, neig_kp = {}) => {
            const neig = Object.assign({ neig_kp }, neig_kp)
            jchv_sy_yfm(reg_kp, wlba_da_y_yfm, (zt) => {
                return (neig.da_vy_yfm ? neig.da_vy_yfm : (zt))
            }, neig)
        }
        const da_y_yfm_lh_djo = (reg_kp, wlba_da_vy_yfm = (zt) => zt, neig_kp = {}) => {
            jchv_sy_yfm(reg_kp, (zt, non_ztka) => {
                if (!diwr_ztka_tsn_djo[zt]) {
                    return (neig_kp.da_y_yfm ? neig_kp.da_y_yfm : zt)
                    // throw new Error('csrf-da ye djo yfm n key ac un-' + zt + "-kp-" + non_ztka)
                } else {
                    return (neig_kp.da_y_yfm ? neig_kp.da_y_yfm : djo_okpy_yfm_sy(zt, non_ztka[1], diwr_ztka_tsn_djo[zt]))
                }
            }, (zt) => {
                return wlba_da_vy_yfm(zt)
            }, neig_kp)
        }
        const da_y_yfm_lh_se_yfm = (reg_kp, wlba_da_vy_yfm = (zt) => zt, neig_kp = {}) => {
            jchv_sy_yfm(reg_kp, (zt, non_ztka) => {
                if (!yf[zt]) {
                    return (neig_kp.da_y_yfm ? neig_kp.da_y_yfm : zt)
                    // throw new Error('csrf-da ye djo yfm n key ac un-' + zt + "-kp-" + non_ztka)
                } else {
                    return (neig_kp.da_y_yfm ? neig_kp.da_y_yfm : yf[zt])
                }
            }, (zt) => {
                return wlba_da_vy_yfm(zt)
            }, neig_kp)
        }
        const zjzj_zznq_yf = (zt) => {
            if (!this.rjyf_mcvn.yf[zt]) {
                throw new Error('csrf-bqph msox-')
            } else {
                return true
            }

        }
        const atvn_da_vy_lh_serm = (reg_kp, neig_kp = {}) => {
            da_vy_lh_serm(reg_kp, (zt) => {
                zjzj_zznq_yf(zt)
                return this.rjyf_mcvn.yf[zt]
            }, neig_kp)
        }
        const da_y_lh_djo = (reg_kp, neig_kp = {}) => {
            da_y_yfm_lh_djo(reg_kp, (zt) => {
                return neig_kp.da_vy_yfm || diwr_ztka_tsn_rnyf[(zt)] || zt
            }, neig_kp)
        }
        const da_y_lh_hese_yfm = (reg_kp, neig_kp = {}) => {
            da_y_yfm_lh_se_yfm(reg_kp, (zt) => {
                return neig_kp.da_vy_yfm || diwr_ztka_tsn_rnyf[(zt)] || zt
            }, neig_kp)
        }

        this.setMcvn = (ce_mcvn) => {
            this.rjyf_mcvn = ce_mcvn
            return this
        }
        this.hfbc_rjyf_mcvn = () => {
            class Hfbc_ll_ae_ud_yfm_mcvn {
                constructor(reg_kp) {
                    const neig = {}
                    this.hfbc_zv_da_vy_lh_serm = () => {
                        atvn_da_vy_lh_serm(reg_kp, neig)
                        return this
                    }
                    this.hfbc_zv_da_y_lh_djo = () => {
                        da_y_lh_djo(reg_kp, neig)
                        return this
                    }
                    this.hfbc_zv_da_y_lh_hese_yfm = () => {
                        da_y_lh_hese_yfm(reg_kp, neig)
                        return this
                    }
                    this.set_xcmj_bnl_ud_rj_lh = (vnwm_zt = []) => {
                        // neig.vnwm_xcmj_zv_ud_rj_lh = vnwm_zt
                        return this
                    }
                    this.set_xcmj_bnl_da_y_ztka_lh = (vnwm_zt = []) => {
                        neig.vnwm_xcmj_zv_da_y_ztka = vnwm_zt
                        return this
                    }
                    this.set_aoao_da_y_ztka_lh = (vnwm_zt = []) => {
                        neig.vnwm_xcmj_zv_da_y_ztka = vnwm_ztka_bx.filter(rn1 => !vnwm_zt.includes(rn1))
                        return this
                    }
                    this.set_xcmj_da_vy_ztka = (vnwm_zt = []) => {
                        neig.vnwm_xcmj_zv_da_vy_ztka = vnwm_zt
                        return this
                    }
                    this.set_reye_da_vy_yfm = (yfm) => {
                        neig.da_vy_yfm = yfm
                        return this
                    }
                    this.set_reye_da_y_yfm = (yfm) => {
                        neig.da_y_yfm = yfm
                        return this
                    }
                    this.set_w_ud_yfm_wdbu = (gkyq) => {
                        neig.w_ud_yfm_wdbu = gkyq
                        return this
                    }
                }
            }
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.z/).set_xcmj_bnl_ud_rj_lh(['a']).set_reye_da_vy_yfm('z-').hfbc_zv_da_vy_lh_serm()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.m/).set_xcmj_bnl_da_y_ztka_lh(['q', 'c', 'p', 'b']).set_reye_da_vy_yfm('m-').hfbc_zv_da_vy_lh_serm()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.n/).set_xcmj_bnl_da_y_ztka_lh(['q', 'p']).set_reye_da_vy_yfm('n-').hfbc_zv_da_vy_lh_serm()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.s/).set_xcmj_bnl_da_y_ztka_lh([]).set_reye_da_vy_yfm('s-').hfbc_zv_da_vy_lh_serm()
            // new Hfbc_ll_ae_ud_yfm_mcvn(/^.j/).set_reye_da_vy_yfm('ʤi').set_xcmj_bnl_da_y_ztka_lh(['w']).hfbc_zv_da_vy_lh_serm()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.y/).set_xcmj_bnl_da_y_ztka_lh(['o', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.i/).set_xcmj_bnl_da_y_ztka_lh(['f', 'g', 'o', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.a/).set_xcmj_bnl_da_y_ztka_lh(['o', 'x', 'y', 'z', 'v', 'w', 'k', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.e/).set_xcmj_bnl_da_y_ztka_lh(['d', 'o', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.u/).set_xcmj_bnl_da_y_ztka_lh(['o', 't', 'r', 'p', 'q', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/^.o/).set_xcmj_bnl_da_y_ztka_lh(['o', 'j', 'k', 'l', 'm', 'n', 'c', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.i$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['o', 'c', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.a$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['o', 'x', 'y', 'z', 'w', 'k', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.e$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['o', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.u$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['o', 'p', 'q', 'e', 'u', 'a', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.o$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['o', 'e', 'u', 'a', 'i', 'x']).set_reye_da_vy_yfm('əʊ').hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.n$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['c', 'e', 'u', 'a', 'q', 'i', 'x']).hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.m$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['c', 'e', 'u', 'p', 'q', 'i', 'x']).hfbc_zv_da_y_lh_hese_yfm()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.r$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['c', 'e', 'u', 'a', 'i', 'x']).set_reye_da_vy_yfm('әr').hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.l$/).set_w_ud_yfm_wdbu(true).set_aoao_da_y_ztka_lh(['i', 'k', 'l', 'e', 's']).set_reye_da_vy_yfm('l').hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.j$/).set_w_ud_yfm_wdbu(true).set_aoao_da_y_ztka_lh(['i', 'e', 'o']).set_reye_da_vy_yfm('ʤ').hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/x.$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh([]).set_reye_da_y_yfm('ks').hfbc_zv_da_y_lh_djo()
            new Hfbc_ll_ae_ud_yfm_mcvn(/.y$/).set_w_ud_yfm_wdbu(true).set_xcmj_bnl_da_y_ztka_lh(['e', 'a', 'u', 'i', 'o']).hfbc_zv_da_y_lh_djo()
            new Yhti_yfm_vkfs(this.rjyf_mcvn)
            new Lr_zt_yfm_hfbc(this.rjyf_mcvn).vdum()
            new Ok_ud_y_yfm(this.rjyf_mcvn).vdum()
            // throw this.rjyf_mcvn.eysj_ds_rjyf['co']
        }
        function Ok_ud_y_yfm(rjyf_mcvn) {
            this.vdum = () => {
                vnwm_ztka_bx.forEach(rn1 => {
                    const yfm = new fo_ussk([
                        ['x', () => 'ks'],
                        ['a', () => 'a'],
                        ['b', () => 'b'],
                        ['d', () => 'd'],
                        ['e', () => 'e'],
                        ['f', () => 'f'],
                        ['g', () => 'g'],
                        ['p', () => 'p'],
                        ['s', () => 's'],
                        ['t', () => 't'],
                        ['u', () => 'u'],
                        ['v', () => 'v'],
                        ['z', () => 'z'],
                        ['k', () => 'k'],
                        ['c', () => "tsu"]
                    ]).setDefault(() => rjyf_mcvn.yf[(rn1)]).vdum(rn1)
                    if (!rjyf_mcvn.eysj_ds_rjyf[rn1]) {
                        rjyf_mcvn.eysj_ds_rjyf[rn1] = yfm
                    }
                })
            }
            return this
        }
        function Lr_zt_yfm_hfbc(rjyf_mcvn) {
            this.diwr_ztka_tsn_djo = diwr_ztka_tsn_djo
            this.diwr_ztka_tsn_rnyf = diwr_ztka_tsn_rnyf
            const vnwm_nixb = vnwm_eysj_bx
                .filter(rn1 => rn1.length === 2 && /[^qx][aeiouy]/.test(rn1))
            this.vdum = () => {
                const jo_ud_hfbc = (ud_zt, wlba_eowl_fo_yg = (zt1, zt2) => [zt1 + zt2, zt1 + zt2]) => {
                    return Object.fromEntries(vnwm_ztka_bx.map(rn1 => rn1 + ud_zt).map(rn1 => {
                        const [zt1, zt2] = rn1
                        return wlba_eowl_fo_yg(zt1, zt2)
                    }).filter(Boolean))
                }
                const hfbc_sam_ud_yfm = (ud_zt, yfm, wlba_hfbc_epqt = (zt1) => this.diwr_ztka_tsn_djo[zt1]) => {
                    return jo_ud_hfbc(ud_zt, (zt1, zt2) => {
                        if (wlba_hfbc_epqt(zt1)) {
                            return [zt1 + zt2, rjyf_mcvn.yf[zt1] + yfm]
                        }
                        return false
                    })
                }
                return Object.assign(rjyf_mcvn.lr_zt_rjyf
                    , hfbc_sam_ud_yfm('z', 'z')
                    , hfbc_sam_ud_yfm('s', 's')
                    , hfbc_sam_ud_yfm('c', 'tsu')
                    , hfbc_sam_ud_yfm('t', 't')
                    , hfbc_sam_ud_yfm('d', 'd')
                    , hfbc_sam_ud_yfm('b', 'b')
                    , hfbc_sam_ud_yfm('v', 'v')
                    , hfbc_sam_ud_yfm('m', 'm')
                    , hfbc_sam_ud_yfm('n', 'n')
                    , hfbc_sam_ud_yfm('k', 'k')
                    , hfbc_sam_ud_yfm('f', 'f')
                    , hfbc_sam_ud_yfm('x', 'ks')
                    , hfbc_sam_ud_yfm('g', 'g')
                    , Object.fromEntries(vnwm_nixb.map(rn1 => {
                        const [zt1, zt2] = rn1
                        const yfm_1 = (() => {
                            if (this.diwr_ztka_tsn_djo[zt1] && this.diwr_ztka_tsn_rnyf[zt2]) {
                                return djo_okpy_yfm_sy(zt1, zt2, this.diwr_ztka_tsn_djo[zt1]) + this.diwr_ztka_tsn_rnyf[zt2]
                            } else {
                                return zt1 + zt2
                            }
                        })()
                        return [rn1, yfm_1]
                    }))
                    , hfbc_sam_ud_yfm('y', yf['y'], (zt1) => /[aeiuo]/.test(zt1))
                )
            }
            this.set_diwr_zt_tsn_djo = (diwr = {}) => {
                this.diwr_ztka_tsn_djo = diwr
                return this
            }
            this.set_diwr_zt_tsn_rnyf = (diwr = {}) => {
                this.diwr_ztka_tsn_rnyf = diwr
                return this
            }
            return this
        }
        function Yhti_yfm_vkfs(rjyf_mcvn) {
            function rnyf_wdbu(djo, rnyf) {
                return new fo_ussk([
                    ['o', () => djo === 'z' ? 'o' : 'o']
                ]).setDefault(() => rnyf).vdum(rnyf)
            }
            function epqt_ah_ldrg(djo, rn) {
                return new fo_ussk([
                    ['u', () => [...[], ...['s']]],//'t', 'r', 'p', 'q'
                    ['a', () => []],//'y', 'v', 'z', 'x', 'w', 'v'
                    ['e', () => []],// b d c
                    ['i', () => []],//'g', 'h', 'f'
                    ['o', () => []],//'m', 'l', 'n', 'j','k'
                    ['y', () => []]//'c'
                ]).setDefault(() => []).vdum(rn).includes(djo) ? false : true
            }
            const vnwm_nixb_wmgr = vnwm_eysj_bx.filter(rn1 => /[^aeiou][aeiou]/.test(rn1))
            const vnwm_ef_y_wmgr = vnwm_eysj_bx.filter(rn1 => /[^aeiou]y/.test(rn1))
            this.rjyf_mcvn = rjyf_mcvn
            if (!this.rjyf_mcvn.eysj_yhti_rjyf)
                throw Object.keys(this.rjyf_mcvn)
            Object.assign(this.rjyf_mcvn.eysj_yhti_rjyf, lr_zt_wmgr_rjyf_hfbc(vnwm_nixb_wmgr), lr_zt_wmgr_rjyf_hfbc(vnwm_ef_y_wmgr, 'ai'))
            return this
            function lr_zt_wmgr_rjyf_hfbc(vnwm_nixb_wmgr = [], rj_nmky_rnyf) {
                return Object.fromEntries(vnwm_nixb_wmgr.map(rn1 => {
                    if (epqt_ah_ldrg(rn1[0], rn1[1])) {
                        if (!diwr_ztka_tsn_djo[rn1[0]]) {
                            return false
                        }
                        return [rn1, "'" + djo_okpy_yfm_sy(rn1[0], rn1[1], diwr_ztka_tsn_djo[rn1[0]]) + rnyf_wdbu(rn1[0], rj_nmky_rnyf || rn1[1])]
                    } else {
                        return false
                    }
                }).filter(Boolean))
            }
        }
    }
}
module.exports = Jcbz_hfbc_rjyf_mcvn

function djo_okpy_yfm_sy(zt, rnyf, nmky_yfm = '') {
    return new fo_ussk([
        ['c',
            () => {
                return (() => {
                    const da_vy_zt = rnyf
                    return new fo_ussk([
                        ['o', () => 'ts'],
                        ['a', () => 'ts'],
                        ['i', () => 'ts'],
                        ['u', () => 'ts'],
                        ['e', () => 'ts'],
                        ['y', () => 'ts'],
                        // ['c', () => 'se'], // ac db nq dgl ldrg
                        ['ai', () => 'ts']
                    ]).setDefault(() => nmky_yfm).vdum(da_vy_zt)
                })()
            }]
    ]).setDefault(() => nmky_yfm).vdum(zt)
}
