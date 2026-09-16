const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const Shn_ux = require("../ux-a-1/map-shn-ux")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    const shn_wu_1 = new Shn_ux({ wu: "wu-1" })
    const shn_wu_2 = new Shn_ux({ wu: "wu-2" })
    const shn_wu_3 = new Shn_ux({ wu: "wu-3" })
    const shn_wu_4 = new Shn_ux({ wu: "wu-4" })
    const yo_shn_ux_1 = new Shn_ux({ wu: "wu-4-1" })
    await new Zogl_hese()
        .add((new Shn_ux({ wu: "wu-fyn" })
            .ytjp_ymdo(shn_wu_1, new Shn_ux({ yoch_dyih: "wu-1-1", wu: "wu-1-1" }))
            .ytjp_ymdo(shn_wu_1, new Shn_ux({ yoch_dyih: "wu-1-2", wu: "wu-1-2" }))
            .ytjp_ymdo(shn_wu_1, new Shn_ux({ yoch_dyih: "wu-1-3", wu: "wu-1-3" }))
            .ytjp_ymdo(shn_wu_2, new Shn_ux({ wu: "wu-2-1", yoch_dyih: "wu-2-1" }))
            .ytjp_ymdo(shn_wu_2, new Shn_ux({ wu: "wu-2-2", bqeo: "", yoch_dyih: "wu-2-2" }))
            .ytjp_ymdo(shn_wu_2, new Shn_ux({ wu: "wu-2-3", yoch_dyih: "wu-2-3" }))
            .ytjp_ymdo(shn_wu_3, new Shn_ux({ wu: "wu-3-1" }))
            .ytjp_ymdo(shn_wu_3, new Shn_ux({ wu: "wu-3-2" }).ytjp_ymdo(shn_wu_4, yo_shn_ux_1))
            .ytjp_ymdo(shn_wu_3, new Shn_ux({ wu: "wu-3-3" }).ytjp_ymdo(shn_wu_1, yo_shn_ux_1))
            .ncir_vwdp(async (rn, neig_kp) => {
                rn.get_neig().wu += "-udao"
            })
        ), async (yg) => {
            const set1 = new Set()
            const set2 = new Set()
            const jtyj = await yg.catch(e => { throw e })
            jtyj.ncir((rn, neig_kp) => {
                if (/^wu-\d-\d-udao$/.test(rn.get_neig().wu))
                    set1.add(rn.get_neig().wu)
                else
                    set2.add(rn.get_neig().wu)
            })
            if (set1.size != 10 || set2.size) {
                wrm_msg.addErr("csrf-zogl shn ux ncir atvn hese msox 1-")
            }
        })

        .drbz_zogl_vwdp().catch(e => {
            wrm_msg.addErr(e)
        })
    return wrm_msg

}