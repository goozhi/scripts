const vbytDbWrmFo = require("../atvn-c/vbyt-db-wrm-fo");
const znzk_yoch = require("../atvn-kp/znzk-rjwc-rr-shn-tz-yoch");
const Ussk = require("../ux-b/ussk");
const vbytDbSlbcRjXbst = require("../atvn-d/vbyt-db-slbc-rj-xbst");
const Zzuy = require("../ux-d/zzuy-map");
// const Vkih_hfbc = require("../ux-kp/vkih-hfbc");
const uzms = require("../uzms");
// const vkih_gen = new Vkih_hfbc().get_gen()
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const path = require("path")
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), { shn_uxux_dyih: "zzuy_rr_vv_rjqt_map_tz" })
        znzk_yoch(this, neig_kp, neig_nomr)

        this.get_bnlb_link = (wm_fo_shn_vkih_ae_yo = [], neig_kp) => {
            const neig_1 = Object.assign({
                vdum_yntz: "html",
                get_vxn_link_wu: (vxn, neig_rjwc_jplp) => vxn.get_wu(neig_rjwc_jplp),
                get_vxn_link: (vxn) => '#' + vxn.get_yoch_dyih(),
                get_ds_bqeo: (vxn, shn, slm) => ""
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
                            + `<pre>${yhld1?.get_yoch_dyih()}</pre>`
                            : "")])
                    }, []).filter(rn2 => /\S/.test(rn2)).join("\n")

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
    }
}