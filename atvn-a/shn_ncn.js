const Yp_ux_a = require("../ux-kp/yp_ux_a")

module.exports = (hidz_1 = new Yp_ux_a({ wu: "shn_fs_klch" }), shn_kl_xbst, hidz_2, neig_kp) => {
    const neig = Object.assign({
        tusc: "wum",
        w_jcbz_ncn_kl: false
    }, neig_kp)
    if (!hidz_1.has_map_kl(shn_kl_xbst)) {
        const map_1 = new Map()
        map_1.tusc = neig.tusc
        hidz_1.lckc_map_kl(shn_kl_xbst, map_1)
    }
    return hidz_1.yp_0(shn_kl_xbst, hidz_2, neig)
}