const Ussk = require("../ux/ussk");

module.exports = new Ussk()
    .set_joly_atvn((eqwy, wm, user_params, neig_kp = {}) => {
        const { yo_ussk_kp } = neig_kp
        return (neig_kp.atvn_help || yo_ussk_kp.atvn_help)(yo_ussk_kp.get_lclc(user_params) +
            "\n" + [...yo_ussk_kp.get_map_tsjq().keys()].join(", ") +
            "\n" + [...yo_ussk_kp.get_map_uzn_tsjq().keys()].map(rn1 => `--${rn1}`).join(",")
            , neig_kp)
    }).yp_uzn("dreq", (mcvn, user_params, neig_kp = {}) => {
        const { yo_ussk_kp } = neig_kp
        return yo_ussk_kp.dreq_help(mcvn)
    })