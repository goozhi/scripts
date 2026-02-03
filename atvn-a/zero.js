const Yp_ux_a = require("../ux-kp/yp_ux_a")
const Neig_cqpi = require("../ux-a/neig-cqpi-0")
const Zzuy = require("../ux-d/zzuy")
const Zzuy_rr = require("../ux-d/zzuy-rr-wwdb-reye-tz")
const Zzuy_rr_cxl_tz_ussk = require("../ux-d/zzuy-rr-cxl-tz-ussk-va-ncqh-yfux")
const Zzuy_rr_mfva = require("../ux-f/zzuy_rr_reye_tz_mfva_lb")
const Bwzq = require("../ux-d/bwzq-hfva-lb")
const path = require("path")
const Yp_bvzd_rr_e = require("../ux-e/yp_bvzd_rr_e")
const Yp_err_pzre_e = require("../ux-e/yp_err_pzre_e")
const Vkih_hfbc = require("../ux-kp/vkih-hfbc")
// hvoc bi rjqt ac frgr jyqh zd ypfz ybsr, sono gd ac db bi rjqt mr stgn tbco.
const gen = new Vkih_hfbc().get_gen()
module.exports = () => {
    console.log(gen.next().value)
    const zero = new Yp_ux_a({ wu: "zero", vbyt_yfux_hqtz: "kp" })
    // const yo_yp_bvzd_rr = 
    const neig_nomr = {
        get_ybdz: () => zero
    }
    zero.lckc_map_kl("zzuy-wum", new Map())
    zero.lckc_map_kl("neig-wum", new Map())
    zero.lckc_map_kl("bwzq-wum", new Map())
    zero.lckc_map_kl("bvzd-rr-wum", new Map())
    zero.lckc_map_kl("err-wdbu-wum", new Map())
    zero.yp_bj_kyfb_yp_0("zzuy-wum", "ybdz",
        new Zzuy({ wu: "zzuy-updz", yoch_dyih: "zzuy-updz" }, neig_nomr)
            .set_vbyt_yfux_hqtz("kp")
            .lckc_map_kl("ybdz", new Map())
            .lckc_map_kl("zzuy-rr-cxl-tz-ussk-va-ncqh-yfux-wum", new Map())
            .yp_bj_kyfb_yp_0("zzuy-rr-cxl-tz-ussk-va-ncqh-yfux-wum", "yhld",
                new Zzuy_rr_cxl_tz_ussk({
                    wu: "zzuy-rr-cxl-tz-ussk-zv-updz",
                    nikc_ph: path.resolve("D:/RSGM/nodejs/zzzz/kplu/zzuy-bwzq-ey-zzl-tz"),
                    w_xbiw: true
                }, neig_nomr).lckc_map_kl("yhld", new Map())
            )
            .lckc_map_kl("zzuy-rr-wwdb-reye-tz-wum")
            .yp_bj_kyfb_yp_0("zzuy-rr-wwdb-reye-tz-wum", "yhld",
                new Zzuy_rr({
                    wu: "zzuy-rr-updz",
                    yoch_dyih: "zzuy-rr-updz",
                    vbyt_yfux_hqtz: "kp",
                    nikc_ph: path.resolve("D:/RSGM/nodejs/zzzz/kplu/zzuy-bwzq-ey-zzl-tz"),
                    w_xbiw: true
                }, neig_nomr)
                    .lckc_map_kl("yhld", new Map())
                    .lckc_map_kl("zzuy-rr-mfva-lb-wum", new Map())
                    .yp_bj_kyfb_yp_0("zzuy-rr-mfva-lb-wum", "yhld",
                        new Zzuy_rr_mfva(
                            {
                                wu: "zzuy-rr-mfva-updz",
                                yoch_dyih: "zzuy-rr-mfva-updz",
                                nikc_ph: path.resolve("D:/RSGM/nodejs/zzzz/kplu/zzuy-bwzq-ey-zzl-tz")
                            }
                            , neig_nomr).lckc_map_kl("yhld", new Map())
                    )
            )
    )
        .yp_bj_kyfb_yp_0("bwzq-wum", "ybdz",
            new Bwzq({ wu: "updz-bwzq", yoch_dyih: "updz-bwzq" }).lckc_map_kl("ybdz", new Map())
        )
        .yp_bj_kyfb_yp_0("bvzd-rr-wum", "ybdz",
            new Yp_bvzd_rr_e({ wu: "updz-bvzd-rr", yoch_dyih: "updz-bvzd-rr" }).lckc_map_kl("ybdz", new Map())
        )
        .yp_bj_kyfb_yp_0("err-wdbu-wum", "ybdz",
            new Yp_err_pzre_e({ wu: "err-wdbu-updz", yoch_dyih: "err-wdbu-updz" })
                .lckc_map_kl("ybdz", new Map())
        )
        .yp_bj_kyfb_yp_0("neig-wum", "ybdz",
            new Neig_cqpi({ wu: "neig-updz" }, neig_nomr)
                .lckc_map_kl("ybdz", new Map())
                .yp_0('neig-wum', new Neig_cqpi({ wu: "zzuy-rjwc-cqpi" }, neig_nomr)
                    .yp_0("neig-wum",
                        new Neig_cqpi({ wu: "zzuy-rr-rjwc-cqpi" })
                            .set_wwdb_neig({
                                atvn_trl_jyqh: (wrm_kp) => { },
                                atvn_wlba: null
                            })
                            .yp_db_wwdb_neig("yp-cqpi")
                            .yp_db_wwdb_neig("hd-cqpi")
                            .yp_db_wwdb_neig("qi-cqpi")
                            .set_nixb_neig("yp-cqpi", {
                                get_nikc_ph: (slm) => slm.get_neig().nikc_ph,
                                atvn_wlba: (vkih, wrm_kp, slm) => {
                                    // slm.nwvt(vkih).set_nikc_ph(slm.get_neig().nikc_ph)
                                }
                            })

                    )

                )
        )
    return zero
}