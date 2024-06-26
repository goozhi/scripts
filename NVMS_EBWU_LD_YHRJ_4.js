const NVMS_EBWU_LD_YHRJ_2 = require("./NVMS_EBWU_LD_YHRJ_2");

function NVMS_EBWU_LD_YHRJ_4(diwr_err) {
    var uxux_yhld = typeof (diwr_err)
    if (uxux_yhld != "object") {
        throw new Error("[uxux aoao ji object]" + uxux_yhld + "<--")
    }
    var RJSE_1 = diwr_err.message
    var reg_LEUN = /csrf-(?:(?!csrf-)[\s\S])*/ig;
    var VNWM_LEUN = RJSE_1.match(reg_LEUN);
    if (VNWM_LEUN == null) {
        return diwr_err;
    } else {
        if (VNWM_LEUN.length > 1) {
            VNWM_LEUN.forEach((rn1, index, arr) => {
                arr[index] = rn1.replace(/\s$/, "")
            })
        }
        var vnwm_error = VNWM_LEUN.map(rnsf => {
            var reg_csrf = /csrf-(.*?)(?:-|$)/i;
            var diwr_csrf = rnsf.match(reg_csrf)
            if (diwr_csrf == null) {
                return diwr_err
            } else {
                var rj_yhld = rnsf.replace(reg_csrf, "")
                var reg_nixb_mr_kp = /([\S\s]*)-kp-([\s\S]*)/;
                var diwr_nixb_mr_kp = rj_yhld.match(reg_nixb_mr_kp);
                var nixb = ""
                var kp = ""
                if (diwr_nixb_mr_kp != null) {
                    nixb = diwr_nixb_mr_kp[1]
                    kp = diwr_nixb_mr_kp[2]
                } else {
                    nixb = rj_yhld
                }
                var diwr_error = new Error(diwr_csrf[1], { cause: { nixb, kp } })
                return NVMS_EBWU_LD_YHRJ_2(diwr_error)
            }
        })
        diwr_err.message = vnwm_error.map(rn1 => rn1.message).join('\n');
        return diwr_err;
    }
}
module.exports = NVMS_EBWU_LD_YHRJ_4;