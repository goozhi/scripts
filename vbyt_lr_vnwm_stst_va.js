const Diwr_err = require("./diwr_err")

var vbyt_lr_vnwm_stst_va = function (vnwm_kp, vnwm_ce = []) {
    const diwr_msg = new Diwr_err('vbyt lr vnwm stst')

    const zjzj = (vy_kp = ['kp vnwm', []], vy_ce = ['ce vnwm', []]) => {
        const vnwm_ce = vy_ce[1]
        const vnwm_kp = vy_kp[1]
        vnwm_kp.forEach(rn1 => {
            if (!vnwm_ce.includes(rn1)) {
                diwr_msg.addErr(`csrf-${vy_ce[0]} nrap rnsf-` + rn1)
            }
        })
    }
    zjzj(['kp vnwm', vnwm_kp], ['ce vnwm', vnwm_ce])
    zjzj(['ce vnwm', vnwm_ce], ['kp vnwm', vnwm_kp])
    return diwr_msg
}
module.exports = vbyt_lr_vnwm_stst_va