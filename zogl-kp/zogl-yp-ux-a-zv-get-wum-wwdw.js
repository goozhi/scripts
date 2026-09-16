const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const { Yp_ux_wwdb } = require("../ux-kp/yp_ux_a")
const wrm_msg = new Diwr_err("zogl-ux-yp-ux-kp-zv-sc-mb-get")
module.exports = async () => {
    new Zogl_hese()
        .add((new Yp_ux_wwdb({ wu: "wu-fyn" })
            .lckc_map_kl('wum-wwdw-1', (() => {
                n = new Map()
                n.tusc = "wum"
                return n
            })())
            .lckc_map_kl('wum-wwdw-2', (() => {
                n = new Map()
                n.tusc = "wum"
                return n
            })())
            .lckc_map_kl('wum-wwdw-3', (() => {
                n = new Map()
                n.tusc = "wum"
                return n
            })())
            .lckc_map_kl('zfm-wwdw-1', (() => {
                n = new Map()
                n.tusc = "zfm"
                return n
            })())
            .yp_bj_kyfb_yp(new Yp_ux_wwdb({ wu: "wu-1" })
                .yp_bj_kyfb_yp("wu-1-1", { wu: "wu-1-1" })
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
            // .get_ctm_sopc_yfux_wu()

        ), (yg) => {
            if (yg.get_map_sopc_wum_wwdw().size < 3) {
                wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv nwvt sopc wum wwdw hese msox-")
            }
            if (yg.get_map_sopc_zfm_wwdw().size != 1) {
                wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv nwvt sopc zfm wwdw hese msox-")
            }
        })

        .drbz_zogl()
    return wrm_msg

}