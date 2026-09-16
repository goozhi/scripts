const Yp_ux_a = require("../ux-kp/yp_ux_a")
const Neig_cqpi = require("../ux-a/neig-cqpi-0")
const Zzuy = require("../ux-d/zzuy")
const Zzuy_rr_cxl_tz_ussk = require("../ux-d/zzuy-rr-cxl-tz-ussk-va-ncqh-yfux")
const Zzuy_rr_mfva = require("../ux-f/zzuy_rr_reye_tz_mfva_lb")
const Bwzq = require("../ux-d/bwzq-hfva-lb")
const path = require("path")
const Yp_bvzd_rr_e = require("../ux-e/yp_bvzd_rr_e")
const Yp_err_pzre_e = require("../ux-e/yp_err_pzre_e")
// const Yp_zzuy_rr_vv_rjqt_tz = require("../ux-d-1/zzuy-rr-vv-rjqt-tz-wwdb")
const Zzuy_shn_tz = require("../ux-d/zzuy-map")
const Vkih_hfbc = require("../ux-kp/vkih-hfbc")
const Shn_ux = require("../ux-a-1/map-shn-ux")
// hvoc bi rjqt ac frgr jyqh zd ypfz ybsr, sono gd ac db bi rjqt mr stgn tbco.
const gen = new Vkih_hfbc().get_gen()
const Zzuy_rr_map = require("../ux-d-1/zzuy-rr-map-vv-rjqt-tz-wwdb")
const X_map = require("../ux-a/x_map")
module.exports = () => {
    const zero = new Shn_ux({ wu: "zero", vbyt_yfux_hqtz: "kp" })
    // const yo_yp_bvzd_rr = 
    const neig_nomr = {
        get_ybdz: () => zero
    }
    const yo_yp_bvzd_zzzz = new Yp_bvzd_rr_e({ wu: "updz-bvzd-rr-1", yoch_dyih: "updz-bvzd-rr-1" })
    const yo_shn_zzuy_rr = new Zzuy_shn_tz({ wu: "zzuy-rr", yoch_dyih: "zzuy-rr", bqeo: "Bi shn ji dboc ytjp zjpc rjqt rjrr afoa n yoch" }, neig_nomr)
    const yo_shn_bvzd_zzzz = new Zzuy_shn_tz({ wu: "bvzd-zzzz", yoch_dyih: "bvzd-zzzz", bqeo: "Bi shn ji dboc ytjp zjpc bvzd zzzz afoa n yoch" }, neig_nomr)
    const yo_shn_zzuy_rr_vv_rjqt_yp_tz = new Zzuy_shn_tz({
        wu: "zzuy_rr_vv_rjqt_yp_tz"
        , xmap_yp_mrzz: new X_map()
        , get_yo_bvzd_rr: () => yo_yp_bvzd_zzzz
        , atvn_ic_yoch_fs: (yoch_kp, fo_shn_vkih, vkih_hidz) => {
            if (yoch_kp.get_map_nomr_yfux_yoch_fs_mrzz().has(vkih_hidz)) {
                yoch_kp.yp_0(fo_shn_vkih, yoch_kp.get_map_nomr_yfux_yoch_fs_mrzz().get(vkih_hidz))
            } else {
                yoch_kp.yp_0(fo_shn_vkih, vkih_hidz, {
                    wu: "ra-znzk",
                    nikc_ph: yoch_kp.get_nikc_ph()
                })
                if (neig_1.w_jcbz_yp_mrzz)
                    yoch_kp.get_map_nomr_yfux_yoch_fs_mrzz().set(vkih_hidz, yoch_kp.get_0(fo_shn_vkih, vkih_hidz))
            }

        }
        , yoch_dyih: "zzuy_rr_vv_rjqt_yp_tz"
        , bqeo: "Bi shn ji dboc ytjp zjpc yp ux zzuy rr vv rjqt tz n hidz"
    }, neig_nomr)
    const yo_shn_zzuy_rr_vv_rjqt_map_tz = new Zzuy_shn_tz({
        wu: "zzuy_rr_vv_rjqt_map_tz"
        , xmap_yp_mrzz: new X_map()
        , get_yo_bvzd_rr: () => yo_yp_bvzd_zzzz
        , atvn_ic_yoch_fs: (yoch_kp, fo_shn_vkih, vkih_hidz) => {
            if (yoch_kp.get_nomr_yoch_fs_mrzz().has(vkih_hidz)) {
                yoch_kp.ytjp_ymdo(fo_shn_vkih, yoch_kp.get_nomr_yoch_fs_mrzz().get(vkih_hidz))
            } else {
                yoch_kp.ytjp_ymdo(fo_shn_vkih, yoch_kp.ncn_db_nmky_pzva({
                    yoch_dyih: vkih_hidz
                    , wu: "ra-znzk",
                    nikc_ph: yoch_kp.get_nikc_ph()
                }))
            }
        }
        , yoch_dyih: "zzuy_rr_vv_rjqt_map_tz"
        , bqeo: "Bi shn ji dboc ytjp zjpc map ux zzuy rr vv rjqt tz n hidz"
    }, neig_nomr)

    const yo_shn_bvzd_rr = new Shn_ux({ wu: "bvzd-rr", yoch_dyih: "bvzd-rr", bqeo: "Bi yoch pilh shn dboc ytjp zjpc bvzd rr afoa n hidz" }, neig_nomr)
    const yo_shn_vnwy_qgbz = new Shn_ux({ wu: "vnwy-qgbz", yoch_dyih: "vnwy-qgbz", bqeo: "Bi yoch pilh shn dboc ytjp zjpc vnwy qgbz afoa n hidz" }, neig_nomr)
    const yo_shn_zzuy_shn = new Shn_ux({ wu: "zzuy-shn", yoch_dyih: "zzuy-shn", bqeo: "Bi yoch pilh shn dboc ytjp zjpc zzuy shn wdbu afoa n hidz" }, neig_nomr)

    zero
        .lckc_shn(yo_shn_zzuy_shn)
        .ytjp_ymdo(yo_shn_bvzd_rr, yo_yp_bvzd_zzzz)
        .ytjp_ymdo(yo_shn_zzuy_shn,
            new Zzuy_shn_tz(
                {
                    wu: "zzuy"
                    , bqeo: "Bi hidz lh zzuy shn tz n kuzn hidz"
                }
            )
                .lckc_shn(yo_shn_zzuy_rr)
                .ytjp_ymdo(yo_shn_zzuy_rr,
                    new Zzuy_rr_map({
                        wu: "ybkc updz"
                        , shn_uxux_dyih: "zzuy_rr_vv_rjqt_map_tz"
                        , yoch_dyih: "zzuy-rr-mfva-updz"
                        , nikc_ph: path.resolve("../zzzz/kplu/zzuy-bwzq-vv-rjqt-tz")
                        , get_yo_bvzd_rr: () => {
                            return yo_yp_bvzd_zzzz
                            // return [...zero.get(yo_shn_bvzd_zzzz)].find(rn1 => rn1.wu?.includes("updz-bvzd-rr"))
                        }
                        , get_yo_neig_cqpi: () => {
                            const yo_zero_yp = require("../yoch/yo-zero")
                            return yo_zero_yp.get_0("neig-wum", "neig-updz").get_0("neig-wum", "zzuy-rjwc-cqpi").get_0("neig-wum", "zzuy-rr-rjwc-cqpi")
                        }
                    }, neig_nomr)
                )
        )
        .lckc_shn(yo_shn_bvzd_zzzz)
        .ytjp_ymdo(yo_shn_bvzd_zzzz,
            yo_yp_bvzd_zzzz
        )
        .lckc_shn(yo_shn_vnwy_qgbz)
        .ytjp_ymdo(yo_shn_vnwy_qgbz, new Shn_ux({ wu: "set", bqeo: "Bi hidz lh kupc n set qgbz hidz" }))
        .ytjp_ymdo(yo_shn_vnwy_qgbz, new Shn_ux({ wu: "get", bqeo: "Bi hidz lh kupc n get qgbz hidz" }))
        .ytjp_ymdo(yo_shn_vnwy_qgbz, new Shn_ux({ wu: "delete", bqeo: "Bi hidz lh kupc n delete qgbz hidz" }))

    return zero
}