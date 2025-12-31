const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const X_map = require("../ux-a/x_map")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    const wm_yhld_for_sopc_zogl = []
    const wm_yhld_for_sopc_zogl_2 = []
    new Zogl_hese()

        .add(new X_map()
            .yp("wu-1", new X_map()
                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                .yp("wu-1-3", { wu: "obj_wu-1-3" })
            )
            .yp("wu-2", new X_map()
                .yp("wu-2-1", { wu: "obj_wu-2-1" })
                .yp("wu-2-2", { wu: "obj_wu-2-2" })
                .yp("wu-2-3", { wu: "obj_wu-2-3" })
            )
            .yp("wu-3", new X_map()
                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                .yp("wu-3-3", { wu: "obj_wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .rluu_sopc()
            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
                if (new X_map().form(yg)?.get("wu-1")?.get?.("wu-1-1").wu != "obj_wu-1-1") {
                    wrm_msg.addErr("csrf-zogl yp map zv map sopc ae form msox-")
                }
            })
        .add(new X_map()
            .yp("wu-1", new X_map()
                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                .yp("wu-1-3", { wu: "obj_wu-1-3" })
            )
            .yp("wu-2", 9)
            .yp("wu-3", new X_map()
                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                .yp("wu-3-3", { wu: "obj_wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .map_sopc(([fo, yg]) => [fo, yg])
            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
                const wm = [["wu-1", [["wu-1-1", { "wu": "obj_wu-1-1" }], ["wu-1-2", { "wu": "obj_wu-1-2" }], ["wu-1-3", { "wu": "obj_wu-1-3" }]]], ["wu-2", 9], ["wu-3", [["wu-3-1", { "wu": "obj_wu-3-1" }], ["wu-3-2", { "wu": "obj_wu-3-2" }], ["wu-3-3", { "wu": "obj_wu-3-3" }]]]]
                if (JSON.stringify(yg) != JSON.stringify(wm)) {
                    wrm_msg.addErr("csrf-zogl x map zv map sopc hese msox 1-")
                }
            }).add(new X_map()
                .yp("wu-1", new X_map()
                    .yp("wu-1-1", { wu: "obj_wu-1-1" })
                    .yp("wu-1-2", { wu: "obj_wu-1-2" })
                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                )
                .yp("wu-2", new X_map()
                    .yp("wu-2-1", { wu: "obj_wu-2-1" })
                    .yp("wu-2-2", { wu: "obj_wu-2-2" })
                    .yp("wu-2-3", { wu: "obj_wu-2-3" })
                )
                .yp("wu-3", new X_map()
                    .yp("wu-3-1", { wu: "obj_wu-3-1" })
                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                )
                // .rzvo_sopc_yfux({ wm_1: [] })
                .map_sopc(([fo, yg]) => {
                    return yg.wu
                })
                // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                , (yg) => {
                    const wm = [["wu-1", ["obj_wu-1-1", "obj_wu-1-2", "obj_wu-1-3"]], ["wu-2", ["obj_wu-2-1", "obj_wu-2-2", "obj_wu-2-3"]], ["wu-3", ["obj_wu-3-1", "obj_wu-3-2", "obj_wu-3-3"]]]
                    if (JSON.stringify(yg, null, 0) != JSON.stringify(wm)) {
                        wrm_msg.addErr("csrf-zogl x map msox zv map_sopc zv atvn eowl cqpi msox-")
                    }
                    // console.log(32, JSON.stringify(yg, null, 0))
                }).add(new X_map()
                    .yp("wu-1", new X_map()
                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                        .yp("wu-1-3", { wu: "obj_wu-1-3" })
                    )
                    .yp("wu-2", { wu: "obj_wu-2-1" }
                    )
                    .yp("wu-3", new X_map()
                        .yp("wu-3-1", { wu: "obj_wu-3-1" })
                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                        .yp("wu-3-3", { wu: "obj_wu-3-3" })
                    )
                    // .rzvo_sopc_yfux({ wm_1: [] })
                    .map_sopc(([fo, yg]) => {
                        return yg.wu
                    })
                    // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                    , (yg) => {
                        const wm = [["wu-1", ["obj_wu-1-1", "obj_wu-1-2", "obj_wu-1-3"]], "obj_wu-2-1", ["wu-3", ["obj_wu-3-1", "obj_wu-3-2", "obj_wu-3-3"]]]
                        if (JSON.stringify(yg, null, 0) != JSON.stringify(wm)) {
                            wrm_msg.addErr("csrf-zogl x map msox zv map_sopc zv atvn eowl cqpi msox 2-")
                        }
                        // console.log(323, new X_map().form(yg))
                        // console.log(32, JSON.stringify(yg, null, 0))
                    })
        .add(new X_map()
            .yp("wu-1", new X_map()
                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                .yp("wu-1-3", { wu: "obj_wu-1-3" })
            )
            .yp("wu-2", 9
            )
            .yp("wu-3", new X_map()
                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                .yp("wu-3-3", { wu: "obj_wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .rluu_sopc()
            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
            })
        .add(new X_map()
            .yp("wu-1", new X_map()
                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                .yp("wu-1-3", { wu: "obj_wu-1-3" })
            )
            .yp("wu-2-x", 9)
            .yp("wu-3", new X_map()
                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                .yp("wu-3-3", { wu: "obj_wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .rluu_sopc()
            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
                // const bnll_yg = [
                //     ['wu-1',
                //         ['wu-1-1', 'wu-1-2', 'wu-1-3']],
                //     'wu-2-x',
                //     ['wu-3',
                //         ['wu-3-1', 'wu-3-2', 'wu-3-3']]
                // ]
                // // console.log(34,JSON.stringify(yg, null, 2))
                // // console.log(32, new X_map().form(yg))
                // // console.log(231, new X_map().form(yg))
                // if (new X_map().form(yg, { strictMode: false })?.get("wu-1")?.length != 3) {
                //     wrm_msg.addErr("csrf-zogl yp map zv map sopc ae form msox 2-")
                // }
            })
        .add(new X_map()
            .yp("wu-1", new X_map()
                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                .yp("wu-1-3", { wu: "obj_wu-1-3" })
            )
            .yp("wu-2-x", 9)
            .yp("wu-3", new X_map()
                .yp("wu-3-1", new X_map()
                    .yp("wu-1", new X_map()
                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                        .yp("wu-1-3", { wu: "obj_wu-1-3" })
                    )
                    .yp("wu-2-x", 9)
                    .yp("wu-3", new X_map()
                        .yp("wu-3-1", { wu: "obj_wu-3-1" })
                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                        .yp("wu-3-3", { wu: "obj_wu-3-3" })
                    ))
                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                .yp("wu-3-3", { wu: "obj_wu-3-3" })
            )
            // .rzvo_sopc_yfux({ wm_1: [] })
            .filter_sopc(([fo, yg]) => {
                return fo.includes("wu-3-2")
            })
            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
            , (yg) => {
                const wm_filter_trl_jtyj = [
                    [
                        "wu-3",
                        [
                            [
                                "wu-3-1",
                                [
                                    [
                                        "wu-3",
                                        [
                                            [
                                                "wu-3-2",
                                                {
                                                    "wu": "obj_wu-3-2"
                                                }
                                            ]
                                        ]
                                    ]
                                ]
                            ],
                            [
                                "wu-3-2",
                                {
                                    "wu": "obj_wu-3-2"
                                }
                            ]
                        ]
                    ]
                ]
                // console.log(34, JSON.stringify(yg) === JSON.stringify(wm_filter_trl_jtyj))
                // console.log(32, new X_map().form(yg).get("wu-3").get("wu-3-1").get("wu-3").get("wu-3-2"))
                if (new X_map().form(yg).get("wu-3").get("wu-3-1").get("wu-3").get("wu-3-2").wu != "obj_wu-3-2") {
                    wrm_msg.addErr("csrf-zogl yp map zv filter sopc msox 1-1-")
                }
                if (JSON.stringify(yg) != JSON.stringify(wm_filter_trl_jtyj)) {
                    wrm_msg.addErr("csrf-zogl yp map zv filter sopc msox 1-")
                }
            }).add(new X_map()
                .yp("wu-1", new X_map()
                    .yp("wu-1-1", { wu: "obj_wu-1-1" })
                    .yp("wu-1-2", { wu: "obj_wu-1-2" })
                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                )
                .yp("wu-2-x", { wu: "obj_wu-2-1" })
                .yp("wu-3", new X_map()
                    .yp("wu-3-1", new X_map()
                        .yp("wu-1", new X_map()
                            .yp("wu-1-1", { wu: "obj_wu-1-1" })
                            .yp("wu-1-2", { wu: "obj_wu-1-2" })
                            .yp("wu-1-3", { wu: "obj_wu-1-3" })
                        )
                        .yp("wu-2-x", { wu: "obj_wu-2-1" })
                        .yp("wu-3", new X_map()
                            .yp("wu-3-1", { wu: "obj_wu-3-1" })
                            .yp("wu-3-2", { wu: "obj_wu-3-2" })
                            .yp("wu-3-3", { wu: "obj_wu-3-3" })
                        ))
                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                )
                // .rzvo_sopc_yfux({ wm_1: [] })
                .filter_sopc(([fo, yg]) => {
                    return yg.wu.includes("obj_wu-")
                })
                // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                , (yg) => {
                    const wm = [["wu-1", [["wu-1-1", { "wu": "obj_wu-1-1" }], ["wu-1-2", { "wu": "obj_wu-1-2" }], ["wu-1-3", { "wu": "obj_wu-1-3" }]]], ["wu-2-x", { "wu": "obj_wu-2-1" }], ["wu-3", [["wu-3-1", [["wu-1", [["wu-1-1", { "wu": "obj_wu-1-1" }], ["wu-1-2", { "wu": "obj_wu-1-2" }], ["wu-1-3", { "wu": "obj_wu-1-3" }]]], ["wu-2-x", { "wu": "obj_wu-2-1" }], ["wu-3", [["wu-3-1", { "wu": "obj_wu-3-1" }], ["wu-3-2", { "wu": "obj_wu-3-2" }], ["wu-3-3", { "wu": "obj_wu-3-3" }]]]]], ["wu-3-2", { "wu": "obj_wu-3-2" }], ["wu-3-3", { "wu": "obj_wu-3-3" }]]]]
                    // console.log(34, JSON.stringify(yg) === JSON.stringify(wm_filter_trl_jtyj))
                    // console.log(32, new X_map().form(yg))
                    // console.log(JSON.stringify(yg, null, 2))
                    if (JSON.stringify(yg) != JSON.stringify(wm)) {
                        wrm_msg.addErr("csrf-zogl x map msox zv filter hese msox 2-")
                    }
                }).add(new X_map()
                    .yp("wu-1", new X_map()
                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                        .yp("wu-1-3", { wu: "obj_wu-1-3" })
                    )
                    .yp("wu-2", new X_map()
                        .yp("wu-2-1", { wu: "obj_wu-2-1" })
                        .yp("wu-2-2", { wu: "obj_wu-2-2" })
                        .yp("wu-2-3", { wu: "obj_wu-2-3" })
                    )
                    .yp("wu-3", new X_map()
                        .yp("wu-3-1", { wu: "obj_wu-3-1" })
                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                        .yp("wu-3-3", { wu: "obj_wu-3-3" })
                    )
                    // .rzvo_sopc_yfux({ wm_1: [] })
                    .for_sopc((yg, fo) => {
                        wm_yhld_for_sopc_zogl.push(yg)
                        // return yg.wu.includes("obj_wu-")
                    })
                    // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                    , (yg) => {
                        // console.log(wm_yhld_for_sopc_zogl.length, wm_yhld_for_sopc_zogl)
                        if (wm_yhld_for_sopc_zogl.length != 9) {
                            wrm_msg.addErr("csrf-zogl x map msox zv for sopc msox zv hese msox 1-")
                        }
                    }).add(new X_map()
                        .yp("wu-1", new X_map()
                            .yp("wu-1-1", { wu: "obj_wu-1-1" })
                            .yp("wu-1-2", { wu: "obj_wu-1-2" })
                            .yp("wu-1-3", { wu: "obj_wu-1-3" })
                        )
                        .yp("wu-2-x", { wu: "obj_wu-2-1" })
                        .yp("wu-3", new X_map()
                            .yp("wu-3-1", new X_map()
                                .yp("wu-1", new X_map()
                                    .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                    .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                )
                                .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                .yp("wu-3", new X_map()
                                    .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                ))
                            .yp("wu-3-2", { wu: "obj_wu-3-2" })
                            .yp("wu-3-3", { wu: "obj_wu-3-3" })
                        )
                        // .rzvo_sopc_yfux({ wm_1: [] })
                        .for_sopc((yg, fo) => {
                            wm_yhld_for_sopc_zogl_2.push(fo)
                            // return yg.wu.includes("obj_wu-")
                        })
                        // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                        , (yg) => {
                            const wm = [
                                'wu-1-1', 'wu-1-2',
                                'wu-1-3', 'wu-2-x',
                                'wu-1-1', 'wu-1-2',
                                'wu-1-3', 'wu-2-x',
                                'wu-3-1', 'wu-3-2',
                                'wu-3-3', 'wu-3-2',
                                'wu-3-3'
                            ]
                            // console.log(wm_yhld_for_sopc_zogl_2.length, wm_yhld_for_sopc_zogl_2)
                            if (JSON.stringify(wm) != JSON.stringify(wm_yhld_for_sopc_zogl_2)) {
                                wrm_msg.addErr("csrf-zogl x map msox zv for sopc msox zv hese msox 2-")
                            }
                        }).add(new X_map()
                            .yp("wu-1", new X_map()
                                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                .yp("wu-1-3", { wu: "obj_wu-1-3" })
                            )
                            .yp("wu-2-x", { wu: "obj_wu-2-1" })
                            .yp("wu-3", new X_map()
                                .yp("wu-3-1", new X_map()
                                    .yp("wu-1", new X_map()
                                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                        .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                    )
                                    .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                    .yp("wu-3", new X_map()
                                        .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                        .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                    ))
                                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                .yp("wu-3-3", { wu: "obj_wu-3-3" })
                            )
                            // .rzvo_sopc_yfux({ wm_1: [] })
                            .get_x_map_sopc_x_map_tsn_fo()
                            // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                            , (yg) => {
                                // console.log(yg)
                                if (!yg.size === 5) {
                                    wrm_msg.addErr("csrf-zogl x map msox zv get sopc x map zv hese msox-")
                                }
                                // console.log(wm_yhld_for_sopc_zogl_2.length, wm_yhld_for_sopc_zogl_2)
                            }).add(new X_map()
                                .yp("wu-1", new X_map()
                                    .yp("wu-1-1", new X_map()
                                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                        .yp("wu-1-3", { wu: "obj_wu-1-3" }))
                                    .yp("wu-1-2", new X_map()
                                        .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                        .yp("wu-1-3", { wu: "obj_wu-1-3" }))
                                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                )
                                .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                .yp("wu-3", new X_map()
                                    .yp("wu-3-1", new X_map()
                                        .yp("wu-1", new X_map()
                                            .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                            .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                            .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                        )
                                        .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                        .yp("wu-3", new X_map()
                                            .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                            .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                            .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                        ))
                                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                )
                                // .rzvo_sopc_yfux({ wm_1: [] })
                                .filter_sopc_x_map(([fo, yg], eqwy) => {
                                    // console.log(39, fo, (fo === "wu-3"), yg, 56)
                                    return (fo === "wu-3")
                                })
                                // // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                                , (yg) => {
                                    // console.log(32, yg.length)
                                    // console.log(JSON.stringify(yg, null, 2))
                                    // console.log(new X_map().form(yg))
                                    if (!yg.length === 1) {
                                        wrm_msg.addErr("csrf-zogl x map msox zv filter sopc x map zv hese msox-")
                                    }
                                    // console.log(wm_yhld_for_sopc_zogl_2.length, wm_yhld_for_sopc_zogl_2)
                                }).add(new X_map()
                                    .yp("wu-1", new X_map()
                                        .yp("wu-1-1", new X_map()
                                            .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                            .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                            .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                        )
                                        .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                        .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                    )
                                    .yp("wu-2", new X_map()
                                        .yp("wu-3-1", new X_map()
                                            .yp("wu-1", new X_map()
                                                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                                .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                            )
                                            .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                            .yp("wu-3", new X_map()
                                                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                                .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                            ))
                                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                        .yp("wu-3-3", { wu: "obj_wu-3-3" }))
                                    .yp("wu-3", new X_map()
                                        .yp("wu-3-1", new X_map()
                                            .yp("wu-1", new X_map()
                                                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                                .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                            )
                                            .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                            .yp("wu-3", new X_map()
                                                .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                                .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                                .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                            ))
                                        .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                        .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                    )
                                    // .rzvo_sopc_yfux({ wm_1: [] })
                                    .filter_sopc_x_map(([fo, yg], eqwy) => {
                                        return false && /^wu-1/.test(fo)
                                    })
                                    // // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                                    , (yg) => {
                                        // console.log(3, yg)
                                        // console.log(JSON.stringify(yg, null, 2))
                                        // console.log(4, )
                                        if (!yg.length === 0) {
                                            wrm_msg.addErr("csrf-zogl x map msox zv filter sopc x map zv hese msox 2-")
                                        }
                                        // console.log(wm_yhld_for_sopc_zogl_2.length, wm_yhld_for_sopc_zogl_2)
                                    }).add(new X_map()
                                        .yp("wu-1", new X_map()
                                            .yp("wu-1-1", new X_map()
                                                .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                                .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                                .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                            )
                                            .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                            .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                        )
                                        .yp("wu-2", new X_map()
                                            .yp("wu-3-1", new X_map()
                                                .yp("wu-1", new X_map()
                                                    .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                                    .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                                )
                                                .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                                .yp("wu-3", new X_map()
                                                    .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                                ))
                                            .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                            .yp("wu-3-3", { wu: "obj_wu-3-3" }))
                                        .yp("wu-3", new X_map()
                                            .yp("wu-3-1", new X_map()
                                                .yp("wu-1", new X_map()
                                                    .yp("wu-1-1", { wu: "obj_wu-1-1" })
                                                    .yp("wu-1-2", { wu: "obj_wu-1-2" })
                                                    .yp("wu-1-3", { wu: "obj_wu-1-3" })
                                                )
                                                .yp("wu-2-x", { wu: "obj_wu-2-1" })
                                                .yp("wu-3", new X_map()
                                                    .yp("wu-3-1", { wu: "obj_wu-3-1" })
                                                    .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                                    .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                                ))
                                            .yp("wu-3-2", { wu: "obj_wu-3-2" })
                                            .yp("wu-3-3", { wu: "obj_wu-3-3" })
                                        )
                                        // .rzvo_sopc_yfux({ wm_1: [] })
                                        .filter_sopc_x_map(([fo, yg], eqwy) => {
                                            return /^wu-3/.test(fo)
                                        })
                                        // // .filter_sopc((yfux, fo) => yfux.get_bnll_wu(), (yfux, fo) => fo)
                                        , (yg) => {
                                            // console.log(3, )
                                            // console.log(JSON.stringify(yg, null, 2))
                                            // console.log(4, )
                                            if (new X_map().form(yg).get("wu-3").get("wu-3-1").get("wu-1")) {
                                                wrm_msg.addErr("csrf-zogl x map msox zv filter sopc x map zv hese msox 3-")
                                            }
                                            // console.log(wm_yhld_for_sopc_zogl_2.length, wm_yhld_for_sopc_zogl_2)
                                        })
        .add(new X_map().form([
            [
                "wu-3",
                [
                    [
                        "wu-3-1",
                        [
                            [
                                "wu-3",
                                [
                                    [
                                        "wu-3-2",
                                        {
                                            "wu": "wu-3-2"
                                        }
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [
                        "wu-3-2",
                        {
                            "wu": "wu-3-2"
                        }
                    ]
                ]
            ]
        ], "-form-zogl-xbst"), (yg) => {

            // console.log(89, 'sss2', new X_map(yg.get("wu-3").get("wu-3-1").get("wu-3").get("wu-3-2")))
            // console.log(89, 'sss', yg[0]?.map_so)
            // console.log(new Cxl_ypn().x_ctm_vt_rn(yg))
            if (yg.get("wu-3").get("wu-3-1").get("wu-3").get("wu-3-2").wu != "wu-3-2") {
                wrm_msg.addErr("csrf-zogl xmap msox zv form hese msox-")
            }
        })

        .drbz_zogl()
    return wrm_msg

}