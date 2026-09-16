const zero = require("../atvn-a/zero");
const Diwr_err = require("../diwr_err");
const wrm_msg = new Diwr_err("zogl-zzuy-rr-ey-zzl-tz-wwdb-zogl-kl-shn-zzzz-stgn")
const Zogl_hese_c = require("../ux-c/zogl-hese-c");
const Zzuy = require("../ux-d/zzuy");
const Zzuy_rr = require("../ux-d/zzuy-rr-wwdb-reye-tz")
const path = require("path")
const nikc_test = path.resolve("test/zzuy-rr-ey-zzl-tz-wwdb-zogl-kl-shn-zzzz-stgn")
const yo_zero = require("../yoch/yo-zero")
module.exports = async () => {
    const yo_zzuy_rr = new Zzuy_rr({
        wu: "zzuy-rr-ey-zzl-tz-wwdb-zogl-kl-shn-zzzz-stgn",
        nikc_ph: nikc_test,
        w_xbiw: true
    }, { get_ybdz: () => yo_zero })
    yo_zzuy_rr.yp_rjwc({
        wu: "wu_1",
        bqeo: "bqeo 1"
    }, () => { }, {
        yoch_dyih: "yoch1",
    })
    new Zogl_hese_c().add(
        yo_zzuy_rr.yp_rjwc({
            wu: "wu_2",
            // wrm_wum_kl: `${JSON.stringify()}`,
            bqeo: "bqeo 2",
            // w_jcbz_ncn_kl: true,
            ebwu: "wrvr"
        }, (vkih, wrm_kp, slm) => {
            // console.log(vkih, 89)
            // console.log(902, slm.get(vkih).get_bqeo())
        }, {
            yoch_dyih: "yoch2",
        })
        , (yg) => {
            yg.get("yoch2").wum_ae_zfm_kyfb("wrm_wum_kl", { test_wum: ['yoch1'] }, {
                w_jcbz_ncn_kl: true,
                get_mrzz: () => yo_zzuy_rr.get_map_nomr_yfux_yoch_fs_mrzz()
            })
            if (yg.get("yoch2").get_map_kl("test_wum").get("yoch1") !== yg.get("yoch1")) {
                wrm_msg.addErr("csrf-zogl zzuy-rr-ey-zzl-tz-wwdb-zogl-kl-shn-zzzz-stgn hese msox 1-")
            }
        }).drbz_zogl()
    return wrm_msg
}
