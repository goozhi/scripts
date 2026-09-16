const vbytDbWrmFo = require("../atvn-c/vbyt-db-wrm-fo");
const znzk_rjwc_rr_yoch = require("../atvn-kp/znzk-rjwc-rr-shn-tz-yoch");
const Ussk = require("../ux-b/ussk");
const Zzuy = require("../ux-d/zzuy-shn-tz");
const X_map = require("../ux-a/x_map");

// const Vkih_hfbc = require("../ux-kp/vkih-hfbc");
const uzms = require("../uzms");
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {
        const path = require("path")
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), { shn_uxux_dyih: "zzuy-rr-yp" })
        znzk_rjwc_rr_yoch(this, neig_kp, neig_nomr)

        this.get_bnlb_link = (wm_fo_map_kl = [], neig_kp) => {
            const neig_1 = Object.assign({
                vdum_yntz: "html",
                get_vxn_link_wu: (vxn, neig_rjwc_jplp) => vxn.get_wu(neig_rjwc_jplp),
                get_vxn_link: (vxn) => '#' + vxn.get_yoch_dyih()
            }, neig_kp)
            const vdum = () => {
                return wm_fo_map_kl.reduce((mb, rn1) => {
                    return mb.concat([(this.has_map_kl(rn1)
                        ? this.get_map_nomr_yfux_yoch_fs_mrzz().get(rn1).get_wu(neig_kp) + [...this.get_map_kl(rn1)].map(rn2 => {
                            return rn2[1].get_link(Object.assign({
                                get_shjp: () => neig_1.get_vxn_link(rn2[1]),
                                get_shjp_wu: (yo_rjwc_jplp, neig_kp) => neig_1.get_vxn_link_wu(rn2[1], neig_kp)
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
                spzi_bqeo: '',
                wm_link_kl: []
                // wm_link_kl: ["slm"]//["slm", 'lil_slm', 'lil_vxn']
            }, neig_kp)
            return [this.get_rjwc_jplp().get_bqeo(neig_kp) + neig_1.spzi_bqeo, `${(() => {
                return this.get_bnlb_link(neig_1.wm_link_kl, Object.assign({}, neig_kp))
            })()
                }`].filter(rn3 => rn3).join("\n")
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