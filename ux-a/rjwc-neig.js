const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const uzms = require("../uzms")

module.exports = class extends Yp_ux_kp {
    constructor(neig_kp, neig_norm) {
        super(neig_kp, neig_norm)
        Object.assign(this.get_neig(), {
            wm_fo_nmky: ["wu", "ebwu", "zdog_1", "vkih", "w_ocxt_rfrf", "w_oh_oam", "bqeo", "wm_xbiw", "x", "xbiw"],
            wm_fo_ext: ["wydb_vkih", "wm_wydb", "yo", "vkih_yodm", "jttb"]
            , neig_zhvt: {
                atvn_ldrg_yg: (yg) => yg
                , ymwu: { x: "wm_xbiw", xbiw: "wm_xbiw", "yo": "vkih_yodm" }
            }
            , atvn_trl_wdbu: (user_params) => { }
            , atvn_ud_wdbu: (neig_dbkz) => {
                if (neig_dbkz.wm_xbiw) {
                    neig_dbkz.wm_xbiw = String(neig_dbkz.wm_xbiw).split(/,/).map(rn1 => rn1.trim())
                }
                if (neig_dbkz.wm_wydb) {
                    neig_dbkz.wm_wydb = String(neig_dbkz.wm_wydb).split(/,/).map(rn1 => rn1.trim())
                }
            }

        }, neig_kp)
        this.atvn_trl_wdbu = (user_params) => {
            return this.get_neig().atvn_trl_wdbu?.(user_params)
        }
        this.atvn_ud_wdbu = (neig_dbkz) => {
            return this.get_neig().atvn_ud_wdbu?.(neig_dbkz)
        }
        this.ce_rjwc_neig_brtz_fs = (user_params) => {
            // console.log(user_params, bs_neig(user_params, [...this.get_neig().wm_fo_nmky, ...this.get_neig().wm_fo_ext], this.get_neig().neig_zhvt, this.atvn_trl_wdbu, this.atvn_ud_wdbu))
            return bs_neig(user_params, [...this.get_neig().wm_fo_nmky, ...this.get_neig().wm_fo_ext], this.get_neig().neig_zhvt, this.atvn_trl_wdbu, this.atvn_ud_wdbu)
        }
    }
}
function bs_neig(user_params = {}, wm_fo, neig_zhvt = {}, atvn_trl_wdbu, atvn_ud_wdbu) {
    atvn_trl_wdbu?.(user_params)
    const neig_dbkz = Object.assign({
        ebwu: "so",
        bqeo: user_params.lastParams
    }, diwr_pzva_ussk_ss_zhvt(wm_fo, user_params, neig_zhvt))
    atvn_ud_wdbu?.(neig_dbkz)
    if (neig_dbkz.zdog_1) {
        const zdog1 = new Date(neig_dbkz.zdog_1)
        if (zdog1.toString() === "Invalid Date") {
            uzms("csrf-zdti mcvn brtz msox-" + neig_dbkz.zdog_1)
        } else {
            // neig_dbkz.zdog_1
        }
    }
    if (neig_dbkz.wm_xbiw) {
        neig_dbkz.wm_xbiw = String(neig_dbkz.wm_xbiw).split(/,/).map(rn1 => rn1.trim())
    }
    if (!neig_dbkz.bqeo) {
        delete neig_dbkz.bqeo
    }
    if (!user_params.ebwu) {
        if (/[\u4E00-\u9FA5]{5}/.test(user_params.lastParams)) {
            neig_dbkz_yhld.ebwu = "yhrj"
        } else {
            //do nothing
        }
    }

    return neig_dbkz
}
