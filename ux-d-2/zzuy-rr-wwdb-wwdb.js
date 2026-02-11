const vbytDbWrmFo = require("../atvn-c/vbyt-db-wrm-fo");
const Ussk = require("../ux-b/ussk");
const Zzuy = require("../ux-d/zzuy");
const Vkih_hfbc = require("../ux-kp/vkih-hfbc");
const Jplp_rjwc = require("../ux/jplp_rjwc");
const uzms = require("../uzms");
const vkih_gen = new Vkih_hfbc().get_gen()
const map_nomr_yfux_ypfz_mrzz = new Map()
const map_nomr_yfux_yoch_fs_mrzz = new Map()
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const ngnc_nikc_paaw = require("../ngnc_nikc_paaw");
        const path = require("path")
        const dyih_yhld = "d" + vkih_gen.next().value

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            nikc_ph: "",
            w_fyn: false,
            get_yo_neig_cqpi: null,//aq lz rr.
        }, neig_kp, { dyih: dyih_yhld })//{ neig_xfbj_hqtz: "acsc" } acsc w lh lw dovw va
        if (this.get_neig().w_fyn && !this.get_neig().nikc_ph) {
            uzms('csrf-aoao tszn zk nikc-')
        }
        this.set_nikc_ph = (nikc_ph) => {
            this.get_neig().nikc_ph = nikc_ph
            return this
        }
        this.get_rjwc_jplp = (neig_kp = {}) => {
            return new Jplp_rjwc(Object.assign({}, this.get_neig().wrm_kp, neig_kp)).set_vkih(this.get_yoch_dyih())
        }
        this.get_wu = (neig_kp = {}) => {
            // console.log(this.get_rjwc_jplp().get_neig())
            return this.get_rjwc_jplp().get_wu(neig_kp)
        }

        this.qi_wu = (ce_wu, neig_kp = {}) => {
            const neig_1 = Object.assign({
                atvn_qi_wu_wlba: (ux) => { }
            }, neig_kp)
            if (ce_wu) {
                this.get_neig().wrm_kp.wu = ce_wu
            }
            neig_1.atvn_qi_wu_wlba(this)
            return this.get_wu(neig_kp)
        }

        this.get_rjwc = (neig_kp = {}) => {
            return this.get_rjwc_jplp().get_rjwc(neig_kp)
            // return `${this.get_wu(neig_kp)}\n${this.get_bqeo(neig_kp)}`
        }
        this.get_link = (neig_kp) => this.get_rjwc_jplp().get_link(neig_kp)
        this.get_bnlb_link = (wm_fo_map_kl = [], neig_kp) => {
            const neig_1 = Object.assign({
                vdum_yntz: "html",
                get_vxn_link: (vxn) => '#' + vxn.get_yoch_dyih()
            }, neig_kp)
            const vdum = () => {
                return wm_fo_map_kl.reduce((mb, rn1) => {
                    return mb.concat([(this.has_map_kl(rn1)
                        ? rn1 + [...this.get_map_kl(rn1)].map(rn2 => {
                            return rn2[1].get_link(Object.assign({
                                get_shjp: () => neig_1.get_vxn_link(rn2[1])
                            }, neig_1))
                        }).join("\n") : "")])
                }, []).filter(rn2 => /\S/.test(rn2)).join("\n")
            }
            return new Ussk()
                .set_nmky_cqpi_fo('md')
                .yp("html", () => {
                    return vdum()
                }).yp("md", () => {
                    return vdum()
                }).vdum(neig_1.vdum_yntz)

        }
        this.get_bqeo = (neig_kp = {}) => {
            const neig_1 = Object.assign({
                wm_link_kl: ["slm", 'lil_slm', 'lil_vxn', 'vxn']
                // wm_link_kl: ["slm"]//["slm", 'lil_slm', 'lil_vxn']
            }, neig_kp)
            return [this.get_rjwc_jplp().get_bqeo(neig_kp), `${(() => {
                return this.get_bnlb_link(neig_1.wm_link_kl, Object.assign({}, neig_kp))
            })()
                }`].filter(rn3 => rn3).join("\n")
        }

        this.get_nikc_ph = () => this.get_neig().nikc_ph
        this.get_map_nomr_yfux_ypfz_mrzz = () => map_nomr_yfux_ypfz_mrzz
        this.get_map_nomr_yfux_yoch_fs_mrzz = () => map_nomr_yfux_yoch_fs_mrzz
        this.get_map_nomr_yfux_yoch_fs_mrzz().set(this.get_yoch_dyih(), this) // yoch fs zd om set
        this.get_yo_neig_cqpi = () => this.get_neig().get_yo_neig_cqpi()
        this.get_neig_yp_rjwc_cqpi = () => this.get_yo_neig_cqpi().get_0("neig-wum", "yp-cqpi").get_nixb_neig()
        this.get_neig_hd_rjwc_cqpi = () => this.get_yo_neig_cqpi().get_0("neig-wum", "hd-cqpi").get_nixb_neig()
        this.get_neig_qi_rjwc_cqpi = () => this.get_yo_neig_cqpi().get_0("neig-wum", "qi-cqpi").get_nixb_neig()
        this.yp_rjwc = (wrm_kp, wlba_atvn = (vkih, wrm_kp, slm) => { }, neig_kp = {}) => {
            const neig_1 = Object.assign({
            }, this.get_neig_yp_rjwc_cqpi(), neig_kp)
            if (!this.w_xbiw()) {
                uzms("csrf-se ux ac w xbiw sopj yp vxn rjwc-")
            }
            if (neig_1.get_nikc_ph) {
                neig_1.nikc_ph = neig_1.get_nikc_ph(this)
            }
            neig_1.atvn_trl_jyqh(wrm_kp)

            // ac bs this.get_map_nomr_yfux_ypfz_mrzz().set(vkih, this.get_vxn(vkih))
            const vkih = this.yp_zzuy(wrm_kp, neig_1)
            neig_1.atvn_wlba(vkih, wrm_kp, this)
            wlba_atvn(vkih, wrm_kp, this)
            return this
        }
        this.hd_rjwc = (vkih, neig_kp = {}) => {
            const neig_1 = Object.assign(
                {},
                this.get_neig_hd_rjwc_cqpi(), neig_kp)
            neig_1.atvn_trl_jyqh(vkih)
            if (!this.has(vkih)) {
                uzms('csrf-vkih ac zznq oc vnwy yh-' + vkih)
            }
            this.hd_vxn(String(vkih))
            // console.log(this.get_map_vxn().size, 89, map_vxn.delete(fo))
            return this
        }
        this.qi_rjwc = (vkih, ce_neig, neig_kp = {}) => {
            const neig_1 = Object.assign({
                atvn_trl_jyqh: (vkih) => { }
            }, this.get_neig_qi_rjwc_cqpi(), neig_kp)

            if (!this.has(vkih)) {
                uzms('csrf-vkih ac zznq oc vnwy yh-' + vkih)
            }
            neig_1.atvn_trl_jyqh(vkih)
            return Object.assign(this.get_neig().wrm_kp, ce_neig, {
                ymce_zdog: Date.now()
            })
        }
        this.hd_rjwc_db_dyih = (dyih_1) => {
            const nixb = this.get_map_dyih_tsn_yo().get(dyih_1)
            if (!nixb) {
                uzms("csrf-ac zznq bi dyih-" + dyih_1)
            }
            return this.hd_rjwc(nixb.get_yoch_dyih())
        }
        this.hd_db_dyih = this.hd_rjwc_db_dyih

        this.fywy_ph_nikc_ngnc_nikc = (nikc_bvhp) => {
            if (this.get_neig().nikc_ph) {
                const nikc_wydb_wukc = path.resolve(this.get_neig().nikc_ph, nikc_bvhp)
                ngnc_nikc_paaw(nikc_wydb_wukc)
                return nikc_wydb_wukc
            } else {
                uzms("csrf-aoao tszn ph nikc ae vxn nikc-" + this.get_neig().nikc_ph + "-kp-" + this.get_neig().wu)
            }
        }
        const neig_imfb = {}
        this.rzvo_imfb_neig = (neig_kp) => {
            Object.assign(neig_imfb, neig_kp)
            return this
        }
        this.get_neig_imfb = () => neig_imfb
        let diwr_vwdp_cxmi_1
        this.allright_yhld = async (atvn_uace, atvn_joly_zhqh = async () => { }) => {
            if (diwr_vwdp_cxmi_1) {
                return this
            } else {
                await atvn_joly_zhqh().catch(err => { throw err })
                return (diwr_vwdp_cxmi_1 = (atvn_uace)(Object.assign({}, this.get_neig_imfb(), {
                    w_imfb: true
                })).catch(e => { throw e }))
            }
        }

        this.w_cd_imfb = () => !!diwr_vwdp_cxmi_1
        this.set_dyih = (dyih) => this.get_neig().dyih = dyih
        this.get_dyih = () => this.get_neig().dyih
        this.get_map_dyih_tsn_yo = () => {
            const map_1 = new Map()
            this.di_li_v_yfux_cqpi((yfux) => map_1.set(yfux.get_dyih(), yfux))
            return map_1
        }
        this.get_sopc_dyih_tsn_yfux = this.get_map_dyih_tsn_yo
        this.fo_shn_yj_zzuy_vwdp = async (wm_fo_imfs = [], vxn_wlba_atvn = async (vxn) => { }, atvn_fo_ldrg = (fo, slm_yfux) => fo) => {
            return await this.get_yo_vnwy_wwdb().fo_shn_yj_vwdp(wm_fo_imfs, vxn_wlba_atvn, atvn_fo_ldrg).catch(err => { throw err })
        }
        const fo_brtz_fs = (wm_bnlb_vxn, fo_kp, neig_kp) => {
            if (!wm_bnlb_vxn.length) {
                uzms("csrf-bnl lb vxn lh vv sopj cgne bi fo diyc vxn-" + fo_kp)
            }
            const wm_nixb = wm_bnlb_vxn.filter((yg1) => {
                if (/^d\d+$/.test(fo_kp)) {
                    return yg1.get_dyih() === fo_kp
                }
                return vbytDbWrmFo(Object.assign(neig_kp)).vbyt(yg1.get_wu(neig_kp), (fo_kp))
            })
            if (wm_nixb.length > 1) {
                uzms("csrf-bi xbst sopj kn wj shzn fl ye v nixb-" + fo_kp + "-kp-" + wm_nixb.map(rn1 => rn1.get_wu()).join(","))
            } else if (wm_nixb.length === 0) {
                uzms("csrf-bi xbst sopj kn wj yj ab xaap ye v nixb-" + fo_kp)
            } else {
                return wm_nixb[0].get_yoch_dyih()
            }

        }
        this.fo_brtz_fs = (fo_kp, neig_kp) => {
            return fo_brtz_fs([...this.get_map_vxn().values()], fo_kp, neig_kp)
        }
        this.fo_shn_brtz_fs_ft_jcbz_ypfz = (wm_fo_imfs = [], neig_kp = {}) => {
            const set_wm_1 = this.get_set_wm()
            const wm_yhld = wm_fo_imfs.map((rn1, eqwy_1) => {
                const set_1 = set_wm_1[eqwy_1]
                return fo_brtz_fs([...set_1], rn1, neig_kp)
            })
            return wm_yhld
        }

    }
}