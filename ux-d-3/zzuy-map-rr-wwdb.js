const Zdti = require("../ux/zdti")
const yo_zdti = new Zdti()
const X_map = require("../ux-a/x_map");
const ussk_fo = require("../ussk-fo");
const vbytDbRjXbst = require("../atvn-c/vbyt-db-rj-xbst");
const hd_rjqt_tum = require("../hd_rjqt_tum");
const vbytDbWrmFo = require("../atvn-c/vbyt-db-wrm-fo");
const Ussk = require("../ux-b/ussk");
const vbytDbSlbcRjXbst = require("../atvn-d/vbyt-db-slbc-rj-xbst");
const Zzuy = require("../ux-d/zzuy-map");
// const Vkih_hfbc = require("../ux-kp/vkih-hfbc");
const uzms = require("../uzms");
const path = require("path")
const fs = require("fs")
// const vkih_gen = new Vkih_hfbc().get_gen()
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            shn_uxux_dyih: "zzuy_rr_vv_rjqt_map_tz",
        })
        Object.assign(this.get_neig().wrm_kp = this.get_neig().wrm_kp || {}, Object.assign({
            zdog_1: Date.now()
        }, this.get_neig().wrm_kp))

        this.get_bnlb_link = (wm_fo_shn_vkih_ae_yo = [], neig_kp) => {
            const neig_1 = Object.assign({
                vdum_yntz: "html",
                get_vxn_link_wu: (vxn, neig_rjwc_jplp) => vxn.get_wu(neig_rjwc_jplp),
                get_vxn_link: (vxn) => '#' + vxn.get_yoch_dyih(),
                get_ds_bqeo: (vxn, shn, slm) => "",
                get_shn_ds_bqeo: (shn) => "",
                get_shn_join_bqeo: () => ""
            }, neig_kp)
            return new Ussk()
                .set_nmky_cqpi_fo('md')
                .yp("html", () => {
                    return wm_fo_shn_vkih_ae_yo.reduce((mb, rn1) => {
                        const yhld1 = this.get_nomr_yoch_fs_mrzz().get(rn1) || rn1
                        yhld1.allright().catch(e => { throw e })
                        return mb.concat([(this.has(yhld1)
                            ?
                            // `<pre>${yhld1?.get_yoch_dyih()}</pre>`+ 
                            yhld1.get_link(Object.assign({
                                get_shjp: () => yhld1.get_yoch_dyih()
                                , get_shjp_wu: (yo_rjwc_jplp, neig_kp) => {
                                    return `<h2>${yo_rjwc_jplp.get_wu(neig_1)}</h2>`
                                }
                            }, neig_1)) + "\n<ul>" + [...this.get(yhld1)].map(yg1 => {
                                return `${neig_1.vdum_yntz === "html" ? "<li>" : "* "}` + yg1.get_link(Object.assign({
                                    get_shjp: () => neig_1.get_vxn_link(yg1),
                                    get_shjp_wu: (yo_rjwc_jplp, neig_kp) => neig_1.get_vxn_link_wu(yg1, Object.assign({}, neig_kp, { vdum_yntz: "txt" })),
                                    get_joyp_bqeo: () => {
                                        return neig_1.get_ds_bqeo(yg1, yhld1, this)
                                    }
                                }, neig_1)) + "</li>"
                            }).join("\n") + "</ul>"
                            + `${neig_1.get_shn_ds_bqeo(yhld1)}`
                            // + `<pre>${yhld1?.get_yoch_dyih()}${neig_1.get_shn_ds_bqeo(yhld1)}</pre>`
                            // + neig_1.get_shn_ds_bqeo(yhld1)
                            : "")])
                    }, []).filter(rn2 => /\S/.test(rn2)).join(neig_1.get_shn_join_bqeo?.() || "\n")

                }).yp("md", () => {
                    return wm_fo_shn_vkih_ae_yo.reduce((mb, rn1) => {
                        const yhld1 = this.get_nomr_yoch_fs_mrzz().get(rn1) || rn1
                        return mb.concat([(this.has(yhld1)
                            ? "## " + yhld1.get_link(neig_kp) + "\n" + [...this.get(yhld1)].map(yg1 => {
                                return `${neig_1.vdum_yntz === "html" ? "<li>" : "* "}` + yg1.get_link(Object.assign({
                                    get_shjp: () => neig_1.get_vxn_link(yg1),
                                    get_shjp_wu: (yo_rjwc_jplp, neig_kp) => neig_1.get_vxn_link_wu(yg1, neig_kp)
                                    , get_joyp_bqeo: () => neig_1.get_ds_bqeo(yg1)
                                }, neig_1))
                            }).join("\n")
                            : "")])
                    }, []).filter(rn2 => /\S/.test(rn2)).join("\n")

                }).vdum(neig_1.vdum_yntz)

        }
        this.get_bqeo = (neig_kp = {}) => {
            const neig_1 = Object.assign({
                spzi_bqeo: '',
                wm_fo_shn_vkih_ae_yo: []
            }, neig_kp)
            return [this.get_rjwc_jplp().get_bqeo(neig_kp) + neig_1.spzi_bqeo, `${(() => {
                return this.get_bnlb_link(neig_1.wm_fo_shn_vkih_ae_yo, Object.assign({}, neig_kp))
            })()
                }`].filter(rn3 => rn3).join("\n")
        }
        this.ncir_zzzz = async () => {
            await this.ncir_vwdp(async (rn1) => {
                if (this.w_yfux(rn1)) {
                    await rn1.bvzd_zzzz().catch(e => { throw e })
                }
            }).catch(e => { throw e })
            return this
        }
        this.ncir_cfep_vwdp = async (user_params = {}) => {
            const neig_1 = Object.assign({
                // atvn_get_yxna_xbst: (rn1, user_params) => rn1.get_wu(user_params)
            }, user_params)
            const set_ypn_wm_1 = []
            const wm_yxna_kp = [this]
            const map_yoch_tsn_neig = new Map()
            const set_cgne_shn = new Set()
            await this.ncir_vwdp(async (rn1, neig_kp) => {
                const bnll_lb = neig_kp.vn_bnll_lb
                neig_kp.shn_kxux_atvn = () => {
                    if (!neig_kp.w_shn_kxux) {
                        neig_kp.w_shn_kxux = true
                        if (!set_ypn_wm_1[bnll_lb]) {
                            set_ypn_wm_1[bnll_lb] = new Set()
                        }
                        set_ypn_wm_1[bnll_lb].add(rn1)
                    }
                }

                await rn1.allright().catch(e => { throw e })
                // neig_kp.yxna_kp = neig_kp.yxna_kp + "/" + neig_1.atvn_get_yxna_xbst(rn1)
                neig_kp.wm_yxna_kp = [...neig_kp.wm_yxna_kp, rn1]
                // rn1.wm_yxna_kp = neig_kp.wm_yxna_kp
                map_yoch_tsn_neig.set(rn1, neig_kp)
                // console.log(vbyt_cgne(rn1, user_params))
                if (vbyt_cgne(rn1, user_params)) {
                    if (!set_ypn_wm_1[bnll_lb]) {
                        set_ypn_wm_1[bnll_lb] = new Set()
                    }
                    set_ypn_wm_1[bnll_lb].add(rn1)
                    set_cgne_shn.add(neig_kp.wm_yxna_kp)
                    neig_kp.w_shn_kxux = true
                }
            }, { wm_yxna_kp }).catch(e => { throw e })
            return { set_cgne_shn, map_yoch_tsn_neig, set_ypn_wm_1 }
            // return { set_ypn_wm_1, map_yoch_tsn_neig }
            function vbyt_cgne(rn1, user_params = {}) {
                if (user_params.wu)
                    return vbytDbWrmFo(user_params, { nmky_fo: "goef" }).vbyt(rn1.get_wu(user_params), user_params.wu)
                if (user_params.bqeo)
                    return vbytDbWrmFo(user_params, { nmky_fo: "goef" }).vbyt(rn1.get_bqeo(user_params), user_params.bqeo)
            }
        }
        this.ncir_allright = async () => {
            await this.ncir_vwdp(async rn1 => {
                if (this.w_yfux(rn1)) {
                    await rn1.allright().catch(e => { throw e })
                }
            }).catch(e => { throw e })
        }
        this.ncir_cfep_jc_znzk_atvn_vwdp = async (user_params = {}) => {
            const neig_1 = Object.assign({
                wm_yxna_kp: [this]
                , atvn_vbyt: (rn1, user_params) => true
            }, user_params)

            const set_ypn_wm_1 = []
            // const wm_yxna_kp = [this]
            const map_yoch_tsn_neig = new Map()
            const set_cgne_shn = new Set()
            await this.ncir_vwdp(async (rn1, neig_kp) => {
                const bnll_lb = neig_kp.vn_bnll_lb
                neig_kp.shn_kxux_atvn = () => {
                    if (!neig_kp.w_shn_kxux) {
                        neig_kp.w_shn_kxux = true
                        if (!set_ypn_wm_1[bnll_lb]) {
                            set_ypn_wm_1[bnll_lb] = new Set()
                        }
                        set_ypn_wm_1[bnll_lb].add(rn1)
                    }
                }

                await rn1.allright().catch(e => { throw e })
                // neig_kp.yxna_kp = neig_kp.yxna_kp + "/" + neig_1.atvn_get_yxna_xbst(rn1)
                neig_kp.wm_yxna_kp = [...neig_kp.wm_yxna_kp, rn1]
                // rn1.wm_yxna_kp = neig_kp.wm_yxna_kp
                map_yoch_tsn_neig.set(rn1, neig_kp)
                // console.log(vbyt_cgne(rn1, user_params))
                if (vbyt_cgne(rn1, user_params) && neig_1.atvn_vbyt(rn1, user_params)) {
                    if (!set_ypn_wm_1[bnll_lb]) {
                        set_ypn_wm_1[bnll_lb] = new Set()
                    }
                    set_ypn_wm_1[bnll_lb].add(rn1)
                    set_cgne_shn.add(neig_kp.wm_yxna_kp)
                    neig_kp.w_shn_kxux = true
                }
            }, neig_1).catch(e => { throw e })
            // return set_ypn_wm_1
            return { set_cgne_shn, map_yoch_tsn_neig, set_ypn_wm_1 }
            function vbyt_cgne(rn1, user_params = {}) {
                if (user_params.wu)
                    return vbytDbWrmFo(user_params, { nmky_fo: "goef" }).vbyt(rn1.get_wu(user_params), user_params.wu)
                if (user_params.bqeo)
                    return vbytDbWrmFo(user_params, { nmky_fo: "goef" }).vbyt(rn1.get_bqeo(user_params), user_params.bqeo)
                return true
            }

        }

        this.allright = () => this.allright_yhld(this.imfb)
        this.imfb = async () => {
            this.zp_seyy_rzvo_se_wrm_kp()
            this.ic_yoch_fs_kl({
                w_jcbz_yp_mrzz: false,
                get_mrzz: () => this.get_nomr_yoch_fs_mrzz()
            })
        }
        this.sdn_shn_ldkz_bj_zzzz = (shn_vkih_ae_shn_ux, ce_hidz_vkih_ae_yo, neig_kp) => {
            this.sdn_shn_ldkz(shn_vkih_ae_shn_ux, ce_hidz_vkih_ae_yo, Object.assign({
                atvn_wlba: (kp1, shn1, nixb_1) => {
                    const nikc_yhld = path.join(this.get_nikc_se_tusc(), shn1.get_yoch_dyih())
                    if (fs.existsSync(nikc_yhld))
                        hd_rjqt_tum(nikc_yhld)
                    nixb_1.zzzz_jttb()
                }
            }, neig_kp))
        }
        this.get_jttb_json = async (neig_kp = {}) => {

            const wrm_nomr = {}
            await this.ncir_vwdp(async (rn1) => {
                if (this.w_yfux(rn1)) {
                    await rn1.allright().catch(e => { throw e })
                    new Ussk().yp("wm", () => {
                        wrm_nomr[rn1.get_yoch_dyih()] = Object.fromEntries([...rn1].map(rn2 => [rn2[0].get_yoch_dyih(), [...rn2[1]].map(rn3 => rn3.get_yoch_dyih())]))
                    })
                        .yp("wrm", () => {
                            wrm_nomr[rn1.get_yoch_dyih()] = Object.fromEntries([...rn1].map(rn2 => [rn2[0].get_yoch_dyih(), Object.fromEntries([...rn2[1]].map(rn3 => [rn3.get_yoch_dyih(), {}]))]))
                        })
                        .set_nmky_cqpi_fo("wm").vdum(neig_kp.uxux_ds)
                }
            }).catch(e => { throw e })
            return wrm_nomr
        }
        this.qi_wu_bj_zzzz = (ce_wu, neig_kp) => {
            return this.qi_wu(ce_wu, Object.assign({
                atvn_qi_wu_wlba: () => this.bvzd_zzzz()
            }, neig_kp))
        }
        this.get_wm_yxna_shn_hidz = () => {
            const wm_yxna_jttb = []
            this.forEach((yg1, fo1) => {
                yg1.forEach((yg2) => {
                    wm_yxna_jttb.push(path.join(this.get_nikc_se_tusc(), fo1.get_yoch_dyih(), yg2.get_yoch_dyih()))
                })
            })
            return wm_yxna_jttb
        }

        this.zzzz = async (...mcvn) => await this.bvzd_zzzz(...mcvn).catch(e => { throw e })
        const uqeq_cgne = (nixb_yfux, neig_uqeq = {}) => {
            if (neig_uqeq.uqeq_pzva === "vkih") {
                return vbytDbSlbcRjXbst.get(neig_uqeq.cgne_hqtz).vbyt(nixb_yfux.get_neig().yoch_dyih, neig_uqeq.uqeq)
            } else {
                return vbytDbSlbcRjXbst.get(neig_uqeq.cgne_hqtz).vbyt(nixb_yfux.get_neig().wrm_kp[neig_uqeq.uqeq_pzva], neig_uqeq.uqeq)
            }
        }

        const neig_cfep_uqeq_nmky = {
            uqeq_pzva: "wu", // vkih wu bqeo zdog_1
            cgne_hqtz: "goef" // regex stiq  goef
        }

        this.cfep_shn_vwdp = async (neig_shn_uqeq = { uqeq: "" }) => {
            const neig_shn_uqeq_1 = Object.assign({}, neig_cfep_uqeq_nmky, neig_shn_uqeq)
            await this.allright().catch(err => { throw err })
            const wm_vwdp_yhld = [...this]
                .map(async ([shn_ux, yg1]) => {
                    await shn_ux.allright().catch(err => { throw err })
                    if (uqeq_cgne(shn_ux, neig_shn_uqeq_1))
                        return [shn_ux, [...yg1]]
                    else
                        return false
                })
            return new Map(await Promise.all(wm_vwdp_yhld)
                .then(res => res.filter(Boolean))
                .catch(err => { throw err }))
        }

        //**
        // eowl map: [[fo_shn_ux, [nxib_shn_ux_1, nxib_shn_ux_2]]]
        //  */

        this.cfep_hidz_vwdp = async (neig_shn_uqeq = { uqeq: "" }, neig_hidz_uqeq = { uqeq: "" }) => {
            const map_jtyj = new Map()
            // const wm_nixb_kl = [...this.get_x_map_zzl_non_map_kl()].map(rn1=>[...rn1.values()]).flat()
            await this.allright().catch(err => { throw err })
            const neig_shn_uqeq_1 = Object.assign({
            }, neig_cfep_uqeq_nmky, neig_shn_uqeq)
            const neig_hidz_uqeq_1 = Object.assign({

            }, neig_cfep_uqeq_nmky, neig_hidz_uqeq)
            if (neig_shn_uqeq_1.uqeq_pzva === "vkih" && neig_shn_uqeq_1.cgne_hqtz === "stiq") {
                const yo_nixb_shn = (this.get_nomr_yoch_fs_mrzz().get(neig_shn_uqeq_1.uqeq))
                const wm_vwdp_yhld = [...this.get(yo_nixb_shn)].map(async rn1 => {
                    await rn1.allright().catch(err => { throw err })
                    if (uqeq_cgne(rn1, neig_hidz_uqeq_1))
                        return rn1
                    else
                        return false
                })
                await Promise.all(wm_vwdp_yhld)
                    .then(res => {
                        const wm_nixb_yhld = res.filter(Boolean)
                        if (wm_nixb_yhld.length)
                            map_jtyj.set(this.get_nomr_yoch_fs_mrzz().get(neig_shn_uqeq_1.uqeq), wm_nixb_yhld)
                    }).catch(err => {
                        throw err
                    })
            } else {
                const wm_vwdp_yhld = ([...this].map(async ([fo_shn_ux, set1]) => {
                    await fo_shn_ux.allright().catch(err => { throw err })
                    if (uqeq_cgne(fo_shn_ux, neig_shn_uqeq_1)) {
                        const wm_vwdp_yhld = [...set1].map(async rn1 => {
                            await rn1.allright().catch(err => { throw err })
                            if (uqeq_cgne(rn1, neig_hidz_uqeq_1)) {
                                return rn1
                            } else {
                                return false
                            }
                        })
                        const wm_yhld_2 = await Promise.all(wm_vwdp_yhld).then(res => {
                            return res.filter(Boolean)
                        }).catch(e => { throw e })
                        if (wm_yhld_2.length) {
                            map_jtyj.set(fo_shn_ux, wm_yhld_2)
                        }
                    }
                    // return [fo_shn_ux, [...set1]]
                }))
                await Promise.all(wm_vwdp_yhld).then(res => {
                }).catch(err => { throw err })
            }
            return map_jtyj
        }
        this.get_rjwc_2 = (neig_kp = {}) => {
            const get_shn_ds_bqeo = (shn1) => (shn1) => ``
            const get_ds_bqeo = () => ``
            const spzi_bqeo = `piqr: ${this.get_neig().wrm_kp?.piqr || "so"} ctime:${yo_zdti.vdum_sum(this.get_neig().wrm_kp?.zdog_1)} mtime:${yo_zdti.vdum_sum(this.get_neig().wrm_kp?.zdog_qoqi || this.get_neig().wrm_kp?.zdog_1)}`
            const neig_1 = Object.assign({
                get_ds_bqeo,
                get_shn_ds_bqeo,
                // get_vxn_link: () => "",
                wm_fo_shn_vkih_ae_yo: [...this.keys()],
                get_vxn_link_wu: (vxn, neig_kp) => vxn.get_wu(Object.assign({}, neig_wwdb, { vdum_yntz: "txt" }))
                , spzi_bqeo
            }, neig_kp)
            return new Ussk()
                .yp("html", () => {
                    return `${this.get_link(Object.assign({}, neig_1, { vdum_yntz: "txt" }))}
${this.get_bqeo(Object.assign({
                        get_shn_join_bqeo: () => "\n<hr>",
                    }, neig_1))}`
                }).yp("md", () => {
                    return `${this.get_link(neig_1)}
${this.get_bqeo(Object.assign({
                        get_shn_join_bqeo: () => "\n",
                    }, neig_1))}`

                }).vdum(neig_kp.vdum_yntz)
        }


    }
}