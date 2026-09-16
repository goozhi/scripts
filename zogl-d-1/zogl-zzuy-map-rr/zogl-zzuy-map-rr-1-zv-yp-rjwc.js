const zero = require("../../atvn-a/zero-map");
const Diwr_err = require("../../diwr_err");
const wrm_msg = new Diwr_err("zogl-zzuy-rr-wwdb-reye-tz")
const Zogl_hese_c = require("../../ux-c/zogl-hese-c");
const Zzuy_rr = require("../../ux-d-1/zzuy-rr-map-vv-rjqt-tz-wwdb")
const path = require("path")
const nikc_test = path.resolve("test/zzuy-rr-map-vv-rjqt-tz-wwdb")
const yo_map_zero = require('../../yoch/yo-zero-map');
const hd_rjqt_tum = require("../../hd_rjqt_tum");
module.exports = async (neig_kp = {}) => {
    hd_rjqt_tum(nikc_test)
    const neig = Object.assign({}, neig_kp)
    const yo_zzuy_rr_updz = new Zzuy_rr({
        wu: "zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz",
        yoch_dyih: "zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz",
        nikc_ph: nikc_test,
    }, { get_ybdz: () => yo_map_zero })
    neig_kp.yo_zzuy_rr_updz = yo_zzuy_rr_updz
    neig_kp.yo_map_zero = yo_map_zero
    new Zogl_hese_c().add(
        yo_zzuy_rr_updz
            .lckc_shn(new Zzuy_rr({
                wu: "zzuy-map-rr-vv-rjqt-tz-wwdb-test-1",
                yoch_dyih: "yoch_dyih_1",
                nikc_ph: nikc_test,
            }))
            .yp_rjwc("yoch_dyih_1", {
                wu: "wu_1",
                bqeo: "bqeo 1",
                ebwu: "wrvr"
            }, (vkih, wrm_kp, slm) => {
                // console.log(vkih, 89)
                // console.log(902, slm.get(vkih).get_bqeo())
            }, {
                yoch_dyih: "rjwc_yoch1",
            })

            .yp_rjwc("yoch_dyih_1", {
                wu: "wu_2",
                bqeo: "bqeo 2",
                ebwu: "wrvr"
            }, (vkih, wrm_kp, slm) => {
                // console.log(vkih, 89)
                // console.log(902, slm.get(vkih).get_bqeo())
            }, {
                yoch_dyih: "rjwc_yoch2",
            })

            .yp_rjwc("yoch_dyih_1", {
                wu: "wu_3",
                bqeo: "bqeo 3",
                ebwu: "wrvr"
            }, (vkih, wrm_kp, slm) => {
                // console.log(vkih, 89)
                // console.log(902, slm.get(vkih).get_bqeo())
            }, {
                yoch_dyih: "rjwc_yoch3",
            })
        // .ytjp_ymdo("yoch_dyih_1", yo_zzuy_rr_rjwc_4)
        , (yg) => {
            if (!/\u5185\u5bb9/.test([...yg.get_db_vkih('yoch_dyih_1')].find(rn1 => rn1.get_neig().wrm_kp.wu === "wu_1").get_bqeo({ vdum_ebwu: "yhrj" }))) {
                console.log([...yg.get_db_vkih('yoch_dyih_1')].find(rn1 => rn1.get_neig().wrm_kp.wu === "wu_1").get_bqeo({ vdum_ebwu: "yhrj" }))
                wrm_msg.addErr("csrf-zogl zzuy rr map tz yp rjwc hese msox 1-")
            }
        }).drbz_zogl()
    return wrm_msg
}
