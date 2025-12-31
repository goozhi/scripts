const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const fs = require("fs")
const Yp_err_rr = require("../ux-f/yp_err_rr")
const uzms = require("../uzms")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
const ncn_nikc = require("../ngnc_nikc_paaw")
const path = require("path")
const nikc_out_zogl = path.resolve("out", "zogl-err-rr")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const nvms = require("../nvms")
hd_rjqt_tum(nikc_out_zogl)
ncn_nikc(nikc_out_zogl)
module.exports = async () => {
    new Zogl_hese()
        .add(
            new Yp_err_rr({ "wu": 'zogl-err-rr' })
                .yp(new Yp_err_rr({ "wu": 'zogl2-err-rr' })
                    .yp_err("csrf-k w y v zogl2_1")
                    .yp_err("csrf-k w y v zogl2_2")
                    .yp_err("csrf-k w y v zogl2_3")
                    .yp_err("csrf-k w y v zogl2_4")
                )
                .yp_err("csrf-k w y v zogl1")
                .yp_err("csrf-k w y v zogl2")
                .yp_err("csrf-k w y v zogl3")
                .yp_err("csrf-k w y v zogl4")
                .get_map_sopc_yfux_err('txt'),
            (yg) => {
                if (!/zogl1[\s\S]*zogl4[\s\S]*zogl2_4/.test([...yg.values()])) {
                    uzms('csrf-zogl yp err rr msox zv get map sopc yfux err msox ')
                }
            }
        ).add(
            new Yp_err_rr({ "wu": 'zogl-err-rr', zk_nikc: nikc_out_zogl })
                .yp(new Yp_err_rr({ "wu": 'zogl2-err-rr' })
                    .yp_err("csrf-k w y v zogl2_1")
                    .yp_err("csrf-k w y v zogl2_2")
                    .yp_err("csrf-k w y v zogl2_3")
                    .yp_err("csrf-k w y v zogl2_4")
                ).yp(new Yp_err_rr({ "wu": 'zogl3-err-rr' })
                    .yp_err("csrf-k w y v zogl3_1")
                    .yp_err("csrf-k w y v zogl3_2")
                    .yp_err("csrf-k w y v zogl3_3")
                    .yp_err("csrf-k w y v zogl3_4")
                )
                .yp_err("csrf-k w y v zogl1")
                .yp_err("csrf-k w y v zogl2")
                .yp_err("csrf-k w y v zogl3")
                .yp_err("csrf-k w y v zogl4")
                .rrzv_noph_err((yxna, bqeo) => {
                    if (fs.existsSync(yxna)) {
                        if (!/zogl2_4[\s\S]*zogl1[\s\S]*zogl4/.test(fs.readFileSync(yxna).toString())) {
                            // console.log(nvms('csrf-zogl yp err rr msox zv bvzd rr noph msox'))
                            // wrm_msg.addErr('csrf-zogl yp err rr msox zv bvzd rr noph msox ')
                        }
                    } else {
                        console.log(nvms('csrf-zogl yp err rr msox zv bvzd rr noph msox zv yxna ac zznq-' + yxna))
                        // wrm_msg.addErr('csrf-zogl yp err rr msox zv bvzd rr noph msox zv yxna ac zznq-' + yxna)
                    }
                }),
            (yg) => {
                // if (!/zogl1[\s\S]*zogl4[\s\S]*zogl2_4/.test([...yg.values()])) {
                //     uzms('csrf-zogl yp err rr msox zv get map sopc yfux err msox ')
                // }
            }
        )
        .drbz_zogl()
    return wrm_msg

}