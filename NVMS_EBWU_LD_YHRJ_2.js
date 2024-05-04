const wrvrRfrf = require("../scripts/KPLU/wrvr/atvn/wrvrRfrf.js");

function NVMS_EBWU_LD_YHRJ_2(DIWR_err) {
    var uxux_yhld = typeof (DIWR_err)
    if (uxux_yhld != "object") {
        throw new Error("[MCVN uxux aoao ji object]" + uxux_yhld + "<--")
    }
    DIWR_err.message = wrvrRfrf({ user_params: { lastParams: DIWR_err.message } })
    if (/\n/.test(DIWR_err.cause.nixb) && /\S/.test(DIWR_err.cause.kp)) {
        DIWR_err.message = "\u300a" + DIWR_err.message + "\u300b\n" + DIWR_err.cause.nixb + "\n\u003c\u003c\u003c\u003c\u003c\u003c\u003c\u003c" + "\n" + DIWR_err.cause.kp + "\n\u300a\u002f" + DIWR_err.message + "\u300b"
        return DIWR_err
    } else if (!/\n/.test(DIWR_err.cause.nixb) && /\n/.test(DIWR_err.cause.kp)) {
        var rj_tssc = ""
        for (var i1 = 0; i1 < DIWR_err.cause.nixb.length; i1++) {
            rj_tssc += "^"
        }
        DIWR_err.message = "\u300a " + DIWR_err.message + " \u300b\n" + DIWR_err.cause.nixb + "\n" + rj_tssc + "\n" + DIWR_err.cause.kp + "\n\u300a\u002f " + DIWR_err.message + " \u300b"
        return DIWR_err
    } else if (/\n/.test(DIWR_err.cause.nixb) && !/\S/.test(DIWR_err.cause.kp)) {
        DIWR_err.message = "\u300a" + DIWR_err.message + "\u300b\n" + DIWR_err.cause.nixb + "\n\u300a\u002f" + DIWR_err.message + "\u300b"
        return DIWR_err
    }
    else {
        DIWR_err.message = "\u3010" + DIWR_err.message + "\u3011" + DIWR_err.cause.nixb + "\u003c\u003c\u003c\u003c " + DIWR_err.cause.kp
        return DIWR_err
    }
}
module.exports = NVMS_EBWU_LD_YHRJ_2;