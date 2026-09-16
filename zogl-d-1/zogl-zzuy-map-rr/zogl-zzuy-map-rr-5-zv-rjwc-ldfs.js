const zero = require("../../atvn-a/zero-map");
const Diwr_err = require("../../diwr_err");
const wrm_msg = new Diwr_err("zogl-zzuy-rr-wwdb-reye-tz")
const Zogl_hese_c = require("../../ux-c/zogl-hese-c");
const Zzuy_rr = require("../../ux-d-1/zzuy-rr-map-vv-rjqt-tz-wwdb")
const path = require("path")
const fs = require('fs')
const nikc_test = path.resolve("test/zzuy-rr-map-vv-rjqt-tz-wwdb")
module.exports = async (neig_kp = {}) => {
    const neig = Object.assign({}, neig_kp)
    const yo_zzuy_rr_updz = neig_kp.yo_zzuy_rr_updz

    await new Zogl_hese_c()
        .add(
            yo_zzuy_rr_updz.yp_rjwc(yo_zzuy_rr_updz, {
                wu: "wu-test-ldfs-1",
                bqeo: "bqeo-test-ldfs-1"
            }, () => { }, {
                yoch_dyih: "test-ldfs-1"
            })
            , async (yg) => {
                // console.log([...yg.get(yo_zzuy_rr_updz)].find(rn1 => rn1.get_neig().wrm_kp.wu === "wu-test-ldfs-1"), 89)
                const bqeo = [...yg.get(yo_zzuy_rr_updz)].find(rn1 => rn1.get_neig().wrm_kp.wu === "wu-test-ldfs-1").get_bqeo()
                if (bqeo != "bqeo-test-ldfs-1") {
                    wrm_msg.addErr("csrf-zogl zzuy map rr msox zv ldfs rjwc hese msox 1-")
                }

            })
        .drbz_zogl_vwdp()
    return wrm_msg
}
