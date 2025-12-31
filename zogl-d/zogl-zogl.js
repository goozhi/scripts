const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const Yp_zogl_d = require("../ux-d/yp_zogl")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    new Zogl_hese()
        .add(new Yp_zogl_d({ wu: 'zogl-zogl-d-1' })
            .rzvo({ wm_1: [] })
            .add_zogl(9, (yg, neig_kp) => neig_kp.wm_1.push(9))
            .add_zogl(8, (yg, neig_kp) => neig_kp.wm_1.push(8))
            .add_zogl(7, (yg, neig_kp) => neig_kp.wm_1.push(7))
            .add_zogl(5, (yg, neig_kp) => neig_kp.wm_1.push(5))
            .drbz_sopc_zogl()
            .get_neig()
            , (yg) => {
                if (yg.wm_1?.[3] != 5) {
                    wrm_msg.addErr("csrf-zogl zogl ux _d msox zv neig rzvo msox-")
                }
            })
        .add(new Yp_zogl_d({ wu: 'zogl-zogl-d-2' })
            .yp(new Yp_zogl_d({ wu: "zogl-zogl-d-2-1" })
                .add_zogl(9, (yg, neig_kp) => neig_kp.wm_1.push(9))
                .add_zogl(8, (yg, neig_kp) => neig_kp.wm_1.push(8))
            )
            .add_zogl(7, (yg, neig_kp) => neig_kp.wm_1.push(7))
            .add_zogl(5, (yg, neig_kp) => neig_kp.wm_1.push(5))
            .rzvo_sopc_yfux({ wm_1: [] })
            .drbz_sopc_zogl()
            .get_neig()
            , (yg) => {
                if (yg.wm_1?.[3] != 8) {
                    wrm_msg.addErr("csrf-zogl zogl ux _d msox zv wfqq zogl msox-")
                }
            })

        .drbz_zogl()
    return wrm_msg

}