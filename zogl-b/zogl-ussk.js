const Diwr_err = require("../diwr_err")
const Cxl_ypn = require("../ux/cxl_ypn")
const X_map = require("../ux-a/x_map")
const Zogl_hese = require("../ux-c/zogl-hese-c")
const Ussk = require("../ux-b/ussk")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    const wm_yhld_for_sopc_zogl = []
    const wm_yhld_for_sopc_zogl_2 = []
    new Zogl_hese()
        .add(new Ussk().set_nmky_cqpi_fo("hell1").yp("hell2", () => 9)
            .yp("hell1", () => 10)
            .yp("hell3", () => 12)
            .vdum()
            , (yg) => {
                if (yg != 10) {
                    wrm_msg.addErr("csrf-zogl ussk msox zv syig nmky yg msox-")
                }
            })
        .drbz_zogl()
    return wrm_msg

}