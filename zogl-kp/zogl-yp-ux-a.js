const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Yp_ux_a = require("../ux-kp/yp_ux_a")
const { Yp_ux_wwdb } = Yp_ux_a
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    new Zogl_hese()
        .add((new Yp_ux_wwdb({ wu: "wu-fyn" })
            .yp(new Yp_ux_wwdb({ wu: "wu-1" })
                .yp("wu-1-1", { wu: "wu-1-1" })
                .yp("wu-1-2", { wu: "wu-1-2" })
                .yp("wu-1-3", { wu: "wu-1-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                .yp("wu-2-1", { wu: "wu-2-1" })
                .yp("wu-2-2", { wu: "wu-2-2" })
                .yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                .yp("wu-3-1", { wu: "wu-3-1" })
                .yp("wu-3-2", { wu: "wu-3-2" })
                .yp("wu-3-3", { wu: "wu-3-3" })
            )
            .get_ctm_sopc_yfux_wu()
        ), (yg) => {
            if (yg.size != 1) {
                wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv eowl map n size ac di-" + yg.size)
            } else {
                const wm_2 = new Cxl_ypn().ctm_ld_cxl_lh_ypn(yg)
                // console.log(9, [...wm_2[2].values()].join(','))
                // console.log(32,'aaf', wm_2)
                if (wm_2[0].size != 1) {
                    wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv eowl map n size ac di 2-" + wm_2[0].size)
                }
                if ([...wm_2[2].values()].join(',') != 'wu-1-1,wu-1-2,wu-1-3,wu-1,wu-2-1,wu-2-2,wu-2-3,wu-2,wu-3-1,wu-3-2,wu-3-3,wu-3') {
                    wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv get_ctm_sopc_yfux_wu hese msox-")
                }
                // console.log(32, wm_2, 23)
                if (wm_2.length != 3) {
                    wrm_msg.addErr("csrf-zogl yp ux wwdb msox zv eowl wm n hpmi ac di 2-" + wm_2.length)
                } else {
                    yg.forEach(yg => {

                    })
                }

            }
        })
        .add(new Yp_ux_wwdb({ wu: "wu-fyn" })
            .yp(new Yp_ux_wwdb({ wu: "wu-1" })
                .yp("wu-1-1", { wu: "wu-1-1" })
                .yp("wu-1-2", { wu: "wu-1-2" })
                .yp("wu-1-3", { wu: "wu-1-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                .yp("wu-2-1", { wu: "wu-2-1" })
                .yp("wu-2-2", { wu: "wu-2-2" })
                .yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                .yp("wu-3-1", { wu: "wu-3-1" })
                .yp("wu-3-2", { wu: "wu-3-2" })
                .yp("wu-3-3", { wu: "wu-3-3" })
            )
            .rzvo_sopc_yfux({ wm_1: [3] })
            , (yg) => {
                if ([...yg.get_map_sopc_yfux_bj_tszn_map_yg((ux) => ux.get_neig()).values()].map(rn1 => rn1.wm_1).join(",") != "3,3,3,3,3,3,3,3,3,3,3,3,3") {
                    wrm_msg.addErr("csrf-rzvo sopc yfux msox-")
                }
            })
        .add(new Yp_ux_wwdb({ wu: "wu-fyn" })
            .yp(new Yp_ux_wwdb({ wu: "wu-1" })
                .yp("wu-1-1", { wu: "wu-1-1" })
                .yp("wu-1-2", { wu: "wu-1-2" })
                .yp("wu-1-3", { wu: "wu-1-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                .yp("wu-2-1", { wu: "wu-2-1" })
                .yp("wu-2-2", { wu: "wu-2-2" })
                .yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                .yp("wu-3-1", { wu: "wu-3-1" })
                .yp("wu-3-2", { wu: "wu-3-2" })
                .yp("wu-3-3", { wu: "wu-3-3" })
            )
            .rzvo_sopc_yfux({ wm_1: [] })
            .di_li_v_yfux_cqpi((yfux) => {
                yfux.get_neig().wm_1.push(yfux.get_bnll_wu())
            })
            , (yg) => {
                if (yg.get_neig()?.wm_1?.length != 13) {
                    wrm_msg.addErr("csrf-zogl di li v yfux cqpi atvn msox-")
                }
            })
        .add(new Yp_ux_wwdb({ wu: "wu-fyn", yoch_dyih: "wu-fyn" })
            .yp(new Yp_ux_wwdb({ wu: "wu-1", yoch_dyih: "wu-1" })
                .yp("wu-1-1", { wu: "wu-1-1" })
                .yp("wu-1-2", { wu: "wu-1-2" })
                .yp("wu-1-3", { wu: "wu-1-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                .yp("wu-2-1", { wu: "wu-2-1" })
                .yp("wu-2-2", { wu: "wu-2-2" })
                .yp("wu-2-3", { wu: "wu-2-3" })
            )
            .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                .yp("wu-3-1", { wu: "wu-3-1" })
                .yp("wu-3-2", { wu: "wu-3-2" })
                .yp("wu-3-3", { wu: "wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .get_ctm_jttb((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
                if (yg.get("wu-fyn")?.get("wu-1")?.get("wu-1-1") != "wu-1-1") {
                    wrm_msg.addErr("csrf-zogl get ctm jttb zv qi fo ae qi yg msox-")
                }
            })
        .add(
            new Yp_ux_wwdb({ wu: "wu-fyn", yoch_dyih: "wu-fyn" })
                .yp(new Yp_ux_wwdb({ wu: "wu-1", yoch_dyih: "wu-1" })
                    .yp("wu-1-1", { wu: "wu-1-1" })
                    .yp("wu-1-2", { wu: "wu-1-2" })
                    .yp("wu-1-3", { wu: "wu-1-3" })
                )
                .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                    .yp("wu-2-1", { wu: "wu-2-1" })
                    .yp("wu-2-2", { wu: "wu-2-2" })
                    .yp("wu-2-3", { wu: "wu-2-3" })
                )
                .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                    .yp("wu-3-1", { wu: "wu-3-1" })
                    .yp("wu-3-2", { wu: "wu-3-2" })
                    .yp("wu-3-3", { wu: "wu-3-3" })
                )
                // .rzvo_sopc_yfux({ wm_1: [] })
                .get_set_wm(([fo, yg]) => yg?.get_bnll_wu())
            , (yg) => {
                // console.log(323, yg)
                if (yg.length != 3 || [...yg[0]][0] != 'wu-fyn') {
                    wrm_msg.addErr("csrf-zogl get set wm hese msox-")
                }
            }).add(
                new Yp_ux_wwdb({ wu: "wu-fyn", yoch_dyih: "wu-fyn" })
                    .yp(new Yp_ux_wwdb({ wu: "wu-1", yoch_dyih: "wu-1" })
                        .yp("wu-1-1", { wu: "wu-1-1" })
                        .yp("wu-1-2", { wu: "wu-1-2" })
                        .yp("wu-1-3", { wu: "wu-1-3" })
                        .yp(new Yp_ux_wwdb({ wu: "wu-1-4", yoch_dyih: "wu-1-4" })
                            .yp("wu-1-4-1", { wu: "wu-1-4-1" })
                            .yp("wu-1-4-2", { wu: "wu-1-4-2" })
                            .yp("wu-1-4-3", { wu: "wu-1-4-3" }))
                    )
                    .yp(new Yp_ux_wwdb({ wu: "wu-2" })
                        .yp("wu-2-1", { wu: "wu-2-1" })
                        .yp("wu-2-2", { wu: "wu-2-2" })
                        .yp("wu-2-3", { wu: "wu-2-3" })
                        .yp(new Yp_ux_wwdb({ wu: "wu-2-4", yoch_dyih: "wu-2-4" })
                            .yp("wu-2-4-1", { wu: "wu-2-4-1" })
                            .yp("wu-2-4-2", { wu: "wu-2-4-2" })
                            .yp("wu-2-4-3", { wu: "wu-2-4-3" }))
                    )
                    .yp(new Yp_ux_wwdb({ wu: "wu-3" })
                        .yp("wu-3-1", { wu: "wu-3-1" })
                        .yp("wu-3-2", { wu: "wu-3-2" })
                        .yp("wu-3-3", { wu: "wu-3-3" })
                    )
                    // .rzvo_sopc_yfux({ wm_1: [] })
                    .get_map_wm_vkfs((yg) => yg?.get_bnll_wu(), (yg) => yg?.get_bnll_wu(), { xb: 83, scfo_hqtz: "zql" })
                , (yg) => {
                    // console.log(90, new Cxl_ypn().ctm_ld_cxl_lh_ypn(hj))
                    // console.log(yg)
                    if (yg.length != 3 || [...yg[2].keys()][0] != 'wu-1-4-1') {
                        wrm_msg.addErr("csrf-zogl get map wm hese msox-")
                    }
                })
        .drbz_zogl()
    return wrm_msg

}