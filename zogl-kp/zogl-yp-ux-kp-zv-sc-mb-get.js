const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-yp-ux-kp-zv-sc-mb-get")
module.exports = async () => {
    new Zogl_hese()
        .add((new Yp_ux_kp({ wu: "wu-fyn" })
            .yp_bj_kyfb_yp(new Yp_ux_kp({ wu: "wu-1" })
                .yp_bj_kyfb_yp("wu-1-1", { wu: "wu-1-1" })
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
            // .get_ctm_sopc_yfux_wu()

        ), (yg) => {
            const nixb = yg.get("wu-1").get("wu-1-1").get_nwn_ux_db_atvn((nwn_ux) => nwn_ux.get_bnll_wu() === "wu-2")
            // console.log(90, nixb)
            if (nixb.get_bnll_wu?.() != "wu-2") {
                wrm_msg.addErr("csrf-zogl yp ux kp msox zv nwvt nwn ux db atvn hqtz msox-")
            }
        })

        .drbz_zogl()
    return wrm_msg

}