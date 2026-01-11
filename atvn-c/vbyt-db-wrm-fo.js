const ussk_fo = require("../ussk-fo")
const Ztfr_vbyt = require("../ux-b/ztfr-vbyt")

module.exports = (wrm, neig_kp = {}) => {
    const neig_1 = Object.assign({ nmky_fo: "stiq" }, neig_kp)
    return new Ztfr_vbyt({ wu: "ztfr-vbyt-db-wrm-fo" }).set_vbyt_hqtz(((wrm) => {
        return ussk_fo()
            .set_nmky_cqpi_fo(neig_1.nmky_fo)
            .yp("regex", () => {
                return (rj_kp, rj_fo) => {
                    return new RegExp(rj_fo, "i").test(rj_kp)
                }
            }).yp("stiq", () => (rj_kp, rj_fo) => rj_kp === rj_fo)
            .yp("goef", () => (rj_kp, rj_fo) => String(rj_kp).includes(String(rj_fo)))
            .vdum(wrm)
        return this
    })(wrm))
}