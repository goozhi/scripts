const fs = require('fs')
const hd_rjqt_tum = require("../hd_rjqt_tum.js")
const Diwr_err = require('../diwr_err.js');
const diwr_msg = new Diwr_err('zogl-zzuy')
const ncn_msg_yoch = (zkrs) => {
    const yo = new Diwr_err(zkrs)
    diwr_msg.addVxn(yo)
    return yo
}
const path = require('path')
const nikc_jkub = require('../nikc_jkub.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const nikc_ld_diwr_zv_rjvt_rjqt_bqeo = require('../nikc_ld_diwr_zv_rjvt_rjqt_bqeo.js')
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr.js');
const zqjp_rfrf = require('../zqjp_rfrf.js');
const { log } = require('console');

const Zogl_hese = require("../ux-c/zogl-hese-c.js")
const Zzuy_rr = require("../ux-e/zzuy_rr.js");
const vbyt_yfux = require('../vbyt_yfux.js');
const uzms = require('../uzms.js');
const nvms = require('../nvms.js');
const Zzuy = require('../ux-d/zzuy.js');
// const { Zzuy } = require("../ux-c/bwzq.js")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
const wrm_nikc = {
    zzuy_test: {
        zzuy_vnwy_vv: {},
        zzuy_vnwy: {
            "test_1.json": `{

                }`,
            "test_2.json": "{}"
        },
        dmvi_bx: {
            "yodm-1.udao": "yodm-1.udao-bqeo",
            "yodm-2": "",
            "yodm-3": ""
        }
    }
}
hd_rjqt_tum(path.resolve("out/zzuy_test"))
ngnc_nikc_fywy_diwr(wrm_nikc, path.resolve("out/"))

module.exports = async () => {
    const yo_zzuy_kp = new Zzuy({ wu: "fyn" })
    const yo_zzuy_rr_kp = new Zzuy_rr({
        wu: "zogl-zzuy"
        , nikc_ph: "out/zzuy_test"
    })
    await yo_zzuy_rr_kp.allright().then(res => {
        // console.log(res.get_ctm_jttb())
        return res
    }).catch(err => {
        wrm_msg.addErr(err)
    })

    new Zogl_hese()
        .add(yo_zzuy_kp
            .yp(new Zzuy({ wu: "zogl-1" })
                .yp(new Zzuy({
                    wu: "zogl-1-1", w_xbiw: true
                })
                    .yp_rjwc({ wu: "wu-zogl-1-1-1" })
                    .yp_rjwc({ wu: "wu-zogl-1-1-2" })
                    .yp_rjwc({ wu: "wu-zogl-1-1-3" })
                    .yp_rjwc({ wu: "wu-zogl-1-1-4" })
                    .yp_rjwc({ wu: "wu-zogl-1-1-5" })
                )
                .yp_rjwc({ wu: "zogl-1-2" })
                .yp_rjwc({ wu: "zogl-1-3" })
                .yp_rjwc({ wu: "zogl-1-4" })
                .yp_rjwc({ wu: "zogl-1-5" })
            )
            .yp_rjwc({ wu: "zogl-2" })
            .yp_rjwc({ wu: "zogl-3" })
            .yp_rjwc({ wu: "zogl-4" })
            .yp_rjwc({ wu: "zogl-5" })
            .get_set_wm(([fo, yg]) => yg.get_bnll_wu())
            , (yg) => {
                console.log(yg)
            })
        .add(yo_zzuy_rr_kp
            .yp_rjwc({ wu: "zogl-1", bqeo: "zogl-1-bqeo" })
            .yp_rjwc({ wu: "zogl-2", bqeo: "zogl-2-bqeo" })
            .yp_rjwc({ wu: "zogl-3", bqeo: "zogl-3-bqeo" })
            .yp_rjwc({ wu: "zogl-4", bqeo: "zogl-4-bqeo" })
            .bvzd_zzzz((yxna, bqeo) => {
                if (fs.existsSync(yxna)) {
                    if (!/{"wu":"zogl-1","bqeo":"zogl-1-bqeo"},/.test(bqeo)) {
                        console.error(nvms('csrf-zogl msox zv yp rjwc hese msox 1-'))
                    }
                } else {
                    console.error(nvms('csrf-zogl msox zv yxna ac zznq-' + yxna))
                    // wrm_msg.addErr("csrf-zogl 12")
                }
            })
            , (yg) => {
                // console.log(yo_zzuy_rr_kp.get_ctm_jttb())
            }

        )

        .drbz_zogl()
    return wrm_msg

}