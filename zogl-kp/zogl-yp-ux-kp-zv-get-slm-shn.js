const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-yp-ux-kp-zv-sc-mb-get")
module.exports = async () => {
    new Zogl_hese()
        .add((new Yp_ux_kp({ wu: "wu-fyn" })
            .yp_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1" })
                .yp_bj_kyfb_yp(
                    new Yp_ux_kp({ wu: "wu-1-1" })
                        .yp_bj_kyfb_yp(
                            new Yp_ux_kp({ wu: "wu-1-1-1" })
                                .yp_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1-1-1-1" }), { yoch_dyih: "wu-1-1-1-1" })
                                .yp_slm_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1-1-1-slm-2-1-1" })
                                    .rzvo({ yoch_dyih: "wu-1-1-1-slm-2-1-1" })
                                    .yp_slm_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1-1-1-slm-2-1" })
                                        .rzvo({ yoch_dyih: "wu-1-1-1-slm-2-1" })
                                        .yp_slm_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1-1-1-slm-2" })
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
            .yp_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-2" })
                .yp_bj_kyfb_yp("wu-2-1", { wu: "wu-2-1" })
                .yp_bj_kyfb_yp("wu-2-2", { wu: "wu-2-2" })
                .yp_bj_kyfb_yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-3" })
                .yp_bj_kyfb_yp("wu-3-1", { wu: "wu-3-1" })
                .yp_bj_kyfb_yp("wu-3-2", { wu: "wu-3-2" })
                .yp_bj_kyfb_yp("wu-3-3", { wu: "wu-3-3" })
            )

        ), (yg) => {
            // console.log(32, yg.get("wu-1").get("wu-1-1").get_map_vxn())
            const nixb = yg.get("wu-1").get("wu-1-1").get("wu-1-1-1").get("wu-1-1-1-1").get_slm_shn_db_atvn((ux) => ux.get_bnll_wu())
            if (!/"wu-1-1-1","wu-1-1-1-slm-2-1-1","wu-1-1-1-slm-2-1","wu-1-1-1-slm-2"/.test(JSON.stringify(nixb)) || !/\["wu-1-1-1","wu-1-1","wu-1","wu-fyn"\]/.test(JSON.stringify(nixb))) {
                wrm_msg.addErr("csrf-zogl yp ux kp zv nwvt slm shn hese msox-")
            }
        })

        .drbz_zogl()
    return wrm_msg

}