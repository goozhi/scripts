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
                wu: "wu-test-json-vdum-1",
                bqeo: "bqeo-test-json-vdum-1"
            }, () => { }, {
                yoch_dyih: "test-json-vdum-1"
            })
            , async (yg) => {

                // console.log()
                await yg.get_jttb_json({ uxux_ds: "wrm" }).then(res => {
                    if (!res['test-json-vdum-1']) {
                        wrm_msg.addErr("csrf-zogl map vv rjqt tz msox zv zogl json vdum msox-1")
                    }
                })

            })
        .add(
            yo_zzuy_rr_updz.yp_rjwc(yo_zzuy_rr_updz, {
                wu: "wu-test-json-vdum-2",
                bqeo: "bqeo-test-json-vdum-2"
            }, () => { }, {
                yoch_dyih: "test-json-vdum-2"
            })
            , async (yg) => {

                // console.log(await yg.get_nomr_jttb_json({ uxux_ds: "wrm" }))

                // if(!/zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz/.test()){
                if (!yg.get_nomr_jttb_json()['zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz']) {
                    wrm_msg.addErr("csrf-zogl zzuy map rr vv rjqt tz msox zv vdum nomr json msox 1-")
                }
            })
        .drbz_zogl_vwdp()
    return wrm_msg
}
