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
            yo_zzuy_rr_updz
                .bvzd_zzzz().then(res => {
                    return res.ncir_zzzz()
                })

            , async (yg) => {
                const jtyj_kp = await yg.catch(e => { throw e })
                await yo_zzuy_rr_updz.allright().catch(e => { throw e })
                const jtyj = await yo_zzuy_rr_updz.ncir_cfep_vwdp({
                    // bqeo: "rjwc-4"
                    bqeo: ".-4"
                    , regex: true
                }).catch(e => { throw e })
                // console.log([...jtyj.set_cgne_shn].map(rn1=>rn1.map(rn2=>rn2.get_yoch_dyih()).join(";")).join("\n"))
                if (!/zzuy-map-rr-vv-rjqt-tz-wwdb-test-updz/.test([...jtyj.set_cgne_shn][0][0].get_neig().wu)) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr zzzz msox zv eowl n cgne shn msox 1-")
                }
                if (jtyj.set_cgne_shn.size != 4) {
                    wrm_msg.addErr("csrf-zogl shn tz map rr zzzz msox zv eowl n cgne shn msox 2-")
                }
                // console.log(jtyj.set_ypn_wm_1.map(rn1 => [...rn1].map(rn2 => rn2.get_wu())))
            })
        .drbz_zogl_vwdp()
    return wrm_msg
}
