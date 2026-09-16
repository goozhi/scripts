const znzk_yoch = require("../atvn-kp/znzk-yoch")
const paaw_jkub_pzva = require("../jkub_tszn_pzva")
const Ux = require("../ux-1/ux")
class Map_ux extends Map {
    constructor(neig_kp, neig_nomr) {
        super()

        paaw_jkub_pzva(this, new Ux(neig_kp, neig_nomr), {
            wm_pzva: [
                "get_bnll_neig_xfbj_hqtz",
                "set_neig_xfbj_hqtz",
                "get_neig",
                "rzvo"]
        })
        Object.assign(this.get_neig(), {
            instance_kp: Map_ux,
            vbyt_yfux_hqtz: "kp"
        })
        znzk_yoch(this)
    }
}
module.exports = Map_ux