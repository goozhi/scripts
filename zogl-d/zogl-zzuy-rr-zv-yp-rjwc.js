const zero = require("../atvn-a/zero");
const Diwr_err = require("../diwr_err");
const wrm_msg = new Diwr_err("zogl-zzuy-rr-wwdb-reye-tz")
const Zogl_hese_c = require("../ux-c/zogl-hese-c");
const Zzuy = require("../ux-d/zzuy");
const Zzuy_rr = require("../ux-d/zzuy-rr-wwdb-reye-tz")
const path = require("path")
const nikc_test = path.resolve("test/zzuy-rr-ey-zzl-tz-wwdb")
const yo_zero = zero()
module.exports = async () => {
    new Zogl_hese_c().add(
        new Zzuy_rr({
            wu: "zzuy-rr-ey-zzl-tz-wwdb-zogl",
            nikc_ph: nikc_test,
            w_xbiw: true
        }, { get_ybdz: () => yo_zero }).yp_rjwc({
            wu: "wu_1",
            bqeo: "bqeo 1",
            ebwu: "wrvr"
        }, (vkih, wrm_kp, slm) => {
            // console.log(vkih, 89)
            // console.log(902, slm.get(vkih).get_bqeo())
        }, {
            yoch_dyih: "yoch1",
        })
        , (yg) => {
            if(!/\u5185\u5bb9/.test(yg.get('yoch1').get_bqeo({ vdum_ebwu: "yhrj" }))){
                console.log(yg.get('yoch1').get_bqeo({ vdum_ebwu: "yhrj" }))
                wrm_msg.addErr("csrf-zogl zzuy rr wwdb reye tz hese msox 1-")
            }
            // console.log(yg.get_map_kl("vxn").values())
        }).drbz_zogl()
    return wrm_msg
}
