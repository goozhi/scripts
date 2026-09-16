const uzms = require("../uzms")
const vbyt_yfux = require("../vbyt_yfux")

function znzk_yoch(yoch_kp) {
    yoch_kp.get_instance_kp = () => yoch_kp.get_neig().instance_kp
    yoch_kp.instanceof_kp = (yoch) => {
        return yoch instanceof yoch_kp.get_instance_kp()
    }
    yoch_kp.w_yfux = (yfux) => {
        // if (!yfux) {
        //     uzms("csrf-bi mcvn lh vv-" + yfux)
        // }
        switch (yoch_kp.get_neig().vbyt_yfux_hqtz) {
            case "kp":
                return yoch_kp.instanceof_kp(yfux)
            case "yfux":
                return vbyt_yfux(yfux, yoch_kp)
            default:
                uzms("csrf-vbyt yfux hqtz xbst acun-" + yoch_kp.get_neig().vbyt_yfux_hqtz)
        }
    }
}
module.exports = znzk_yoch