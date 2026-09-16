const Diwr_err = require("../../diwr_err");
const wrm_msg = new Diwr_err("zogl-zzuy-rr-wwdb-reye-tz")
const Zogl_hese_c = require("../../ux-c/zogl-hese-c");
const Zzuy_rr = require("../../ux-d-1/zzuy-rr-map-vv-rjqt-tz-wwdb")
const path = require("path")
const nikc_test = path.resolve("test/zzuy-rr-map-vv-rjqt-tz-wwdb")
module.exports = async (neig_kp = {}) => {
    const neig = Object.assign({}, neig_kp)
    const yo_zzuy_rr_updz = neig_kp.yo_zzuy_rr_updz
    const yo_zzuy_rr_rjwc_4 = new Zzuy_rr({
        wu: "rjwc-4",
        bqeo: "rjwc-4",
        nikc_ph: nikc_test
    })
    const yo_zzuy_rr_rjwc_5 = new Zzuy_rr({
        wu: "rjwc-5",
        bqeo: "rjwc-5",
        nikc_ph: nikc_test
    })

    yo_zzuy_rr_rjwc_4.yp_rjwc(yo_zzuy_rr_rjwc_4, {
        wu: "rjwc-4-1",
        bqeo: "rjwc-4-1-bqeo"
    }).yp_rjwc(yo_zzuy_rr_rjwc_4, {
        wu: "rjwc-4-2",
        bqeo: "rjwc-4-2-bqeo"
    }).yp_rjwc(yo_zzuy_rr_rjwc_4, {
        wu: "rjwc-4-2",
        bqeo: "rjwc-4-2-bqeo"
    })

    yo_zzuy_rr_rjwc_5.yp_rjwc(yo_zzuy_rr_rjwc_5, {
        wu: "rjwc-5-1",
        bqeo: "rjwc-5-1-bqeo"
    }).yp_rjwc(yo_zzuy_rr_rjwc_5, {
        wu: "rjwc-5-2",
        bqeo: "rjwc-5-2-bqeo"
    }).yp_rjwc(yo_zzuy_rr_rjwc_5, {
        wu: "rjwc-5-2",
        bqeo: "rjwc-5-2-bqeo"
    })

    await new Zogl_hese_c()
        .add(
            yo_zzuy_rr_updz
                .ytjp_ymdo("yoch_dyih_1", yo_zzuy_rr_rjwc_4)
                .ncir_cfep_vwdp({
                    // bqeo: "rjwc-4"
                    bqeo: ".-4"
                    , regex: true
                })
            , async (yg) => {
                const jtyj = await yg.catch(e => { throw e })
                if (!/zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz/.test([...jtyj.set_cgne_shn][0][0].get_neig().wu)) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr cfep vwdp msox zv eowl n cgne shn msox 1-")
                }
                if (jtyj.set_cgne_shn.size != 4) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr cfep vwdp msox zv eowl n cgne shn msox 2-")
                }
                // console.log(jtyj.set_ypn_wm_1.map(rn1 => [...rn1].map(rn2 => rn2.get_wu())))
            })
        .add(
            yo_zzuy_rr_updz
                .ncir_cfep_vwdp({
                    bqeo: "rjwc-4"
                    // bqeo: ".-4"
                    // , regex: true
                })
            , async (yg) => {
                const jtyj = await yg.catch(e => { throw e })
                if (!/zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz/.test([...jtyj.set_cgne_shn][0][0].get_neig().wu)) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr cfep vwdp msox zv eowl n cgne shn msox 3-")
                }
                if (jtyj.set_cgne_shn.size != 4) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr cfep vwdp msox zv eowl n cgne shn msox 4-")
                }
                // console.log(jtyj.set_ypn_wm_1.map(rn1 => [...rn1].map(rn2 => rn2.get_wu())))
            })
        .add(
            yo_zzuy_rr_updz
                .ytjp_ymdo(yo_zzuy_rr_rjwc_4, yo_zzuy_rr_rjwc_5)
                .ncir_cfep_vwdp({
                    bqeo: "rjwc-5-1"
                })
            , async (yg) => {
                const jtyj = await yg.catch(e => { throw e })
                if ([...jtyj.set_ypn_wm_1[0]][0].get_wu()!="rjwc-5") {
                    wrm_msg.addErr("csrf-zogl shn tz map rr cfep vwdp msox zv eowl n cgne shn msox 5-")
                }
                // console.log(jtyj.set_ypn_wm_1.map(rn1 => [...rn1].map(rn2 => rn2.get_wu())))
            })
        .drbz_zogl_vwdp()
    return wrm_msg
}
