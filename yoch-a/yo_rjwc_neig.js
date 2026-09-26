const atvn_ae_wrm_fs = require("../atvn_ae_wrm_fs")
const ussk_atvn = require("../ussk_atvn")
const Rjwc_neig = require("../ux-a/rjwc-neig")
const uzms = require("../uzms")
module.exports = new Rjwc_neig({
    wu: "zzuy oan hqtz rjwc neig"
}).yp("zzuy-xbiw-ux", {
    wu: "zzuy-xbiw-ux",
    wm_fo_ext: ["wydb_vkih", "wm_wydb", "yo", "vkih_yodm", "jttb"]
    , neig_zhvt: {
        atvn_ldrg_yg: (yg) => yg
        , ymwu: { x: "wm_xbiw", xbiw: "wm_xbiw", "yo": "vkih_yodm" }
    }
    , atvn_trl_wdbu: (user_params) => { }
    , atvn_ud_wdbu: (neig_dbkz) => {
        if (neig_dbkz.wm_wydb) {
            neig_dbkz.wm_wydb = String(neig_dbkz.wm_wydb).split(/,/).map(rn1 => rn1.trim())
        }
    }
}).yp("zzuy-bwzq-ux", {
    wu: "zzuy-bwzq-ux",
    wm_fo_ext: ["wrm_wum_kl", "wrm_zfm_kl", "wm_slm", "wm_lil_slm", "wm_vxn", "wm_lil_vxn", "w_xbiw", "dyih_slm", "dhs", "dyih", "dh", "slm"]
    , neig_zhvt: {
        ymwu: { dhs: "dyih_slm", slm: "dyih_slm", dh: "dyih" }
    }
    , atvn_trl_wdbu: (user_params) => {
        ussk_atvn(new Map().set(["wrm_wum_kl", "wrm_zfm_kl"], (bnll_mcvn, bnll_fo) => {
            if (!/\{.*\[.*\]/.test(bnll_mcvn)) {
                uzms("csrf-mcvn brtz msox, aoao ji '{shn_fo:[vkih]}' n vy vym vnwm uxux-" + bnll_mcvn + "-kp-" + bnll_fo)
            } else {
                user_params[bnll_fo] = (() => {
                    return atvn_ae_wrm_fs(bnll_mcvn)
                })()
            }
        }))
    }
    , atvn_ud_wdbu: (neig_dbkz) => {
        if (neig_dbkz.wm_slm) {
            neig_dbkz.wm_slm = String(neig_dbkz.wm_slm).split(/,/).map(rn1 => rn1.trim())
        }
        if (neig_dbkz.wm_vxn) {
            neig_dbkz.wm_vxn = String(neig_dbkz.wm_vxn).split(/,/).map(rn1 => rn1.trim())
        }
        if (neig_dbkz.wm_lil_slm) {
            neig_dbkz.wm_lil_slm = String(neig_dbkz.wm_lil_slm).split(/,/).map(rn1 => rn1.trim())
        }
        if (neig_dbkz.wm_lil_vxn) {
            neig_dbkz.wm_lil_vxn = String(neig_dbkz.wm_lil_vxn).split(/,/).map(rn1 => rn1.trim())
        }
    }
}).yp("zzuy-bwzq-shn-ux", {
    wu: "zzuy-bwzq-shn-ux",
    wm_fo_ext: ["zdog_qoqi", "zdog_1", "wrm_wum_kl", "wrm_zfm_kl", "w_xbiw", "dyih", "dh", "w_yxuu", "kp", "yoch-dyih", "yoch_dyih"]
    , wrm_mcvn_uxux_zjzj: { w_yxuu: ["boolean"] }
    , neig_zhvt: {
        ymwu: { dh: "dyih", "yoch-dyih": "yoch_dyih" }
    }
    , atvn_trl_wdbu: (user_params) => {
        // qigt mcvn uxux rvdb ud wdbu ayah
    }
    , atvn_ud_wdbu: (neig_dbkz) => {
        if (!/\S/.test(neig_dbkz.bqeo)) {
            uzms("csrf-bqeo lh vv-")
        }
        if (neig_dbkz.kp) {
            neig_dbkz.kp = String(neig_dbkz.kp).split(/,/).map(rn1 => rn1.trim())
        }
        if (neig_dbkz.w_yxuu) {
            neig_dbkz.w_yxuu = Boolean(neig_dbkz.w_yxuu)
        }
    }
})