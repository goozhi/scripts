const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const { Yp_ux_wwdb } = require("../ux-kp/yp_ux_a")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-yp-ux-kp-zv-yj-yfux")
module.exports = async () => {
    new Zogl_hese()
        .add((new Yp_ux_wwdb({ wu: "wu-fyn" })
            .yp_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1" })
                .yp_bj_kyfb_yp(
                    new Yp_ux_wwdb({ wu: "wu-1-1" })
                        .yp_bj_kyfb_yp(
                            new Yp_ux_wwdb({ wu: "wu-1-1-1" })
                                .yp_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1-1-1-1" }), { yoch_dyih: "wu-1-1-1-1" })
                                .yp_slm_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1-1-1-slm-2-1-1" })
                                    .rzvo({ yoch_dyih: "wu-1-1-1-slm-2-1-1" })
                                    .yp_slm_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1-1-1-slm-2-1" })
                                        .rzvo({ yoch_dyih: "wu-1-1-1-slm-2-1" })
                                        .yp_slm_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1-1-1-slm-2" })
                                            .rzvo({ yoch_dyih: "wu-1-1-1-slm-2" })
                                        )
                                    )
                                )
                            , { yoch_dyih: "wu-1-1-1" })
                    , { yoch_dyih: "wu-1-1" })
                // .yp_bj_kyfb_yp("wu-1-1", { wu: "wu-1-1" })
                .yp_bj_kyfb_yp("wu-1-2", { wu: "wu-1-2" })
                .yp_bj_kyfb_yp("wu-1-3", { wu: "wu-1-3" })
                , { yoch_dyih: "wu-1" })
            .yp_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-2" })
                .yp_bj_kyfb_yp("wu-2-1", { wu: "wu-2-1" })
                .yp_bj_kyfb_yp("wu-2-2", { wu: "wu-2-2" })
                .yp_bj_kyfb_yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-3" })
                .yp_bj_kyfb_yp("wu-3-1", { wu: "wu-3-1" })
                .yp_bj_kyfb_yp("wu-3-2", { wu: "wu-3-2" })
                .yp_bj_kyfb_yp("wu-3-3", { wu: "wu-3-3" })
            )

        ), (yg) => {
            // const nixb = yg.get("wu-1").get("wu-1-1").get("wu-1-1-1").get("wu-1-1-1-1").get_slm_shn((ux) => ux.get_bnll_wu())
            const nixb = yg.yj_yfux((yfux, fo, slm) => yfux.get_bnll_wu() === "wu-1-1-1-1")
            // console.log(32, nixb)
            if (!yg.w_yfux(nixb)) {
                wrm_msg.addErr("csrf-zogl yp ux wwdb zv yj yfux hese msox-")
            }
        })

        .drbz_zogl()
    return wrm_msg

}