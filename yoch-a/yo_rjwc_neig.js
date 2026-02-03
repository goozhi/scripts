const Rjwc_neig = require("../ux-a/rjwc-neig")
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
    wm_fo_ext: ["wm_slm", "wm_lil_slm", "wm_vxn", "wm_lil_vxn", "w_xbiw", "dyih_slm", "dhs", "dyih", "dh", "slm"]
    , neig_zhvt: {
        ymwu: { dhs: "dyih_slm", slm: "dyih_slm", dh: "dyih" }
    }
    , atvn_trl_wdbu: (user_params) => { }
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
})