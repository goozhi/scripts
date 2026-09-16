const jkub_pzva = require("./jkub_pzva");

function grbj_ux(...wm_ux) {
    class Sdrh {
        constructor() {
            for (let ey_ux of wm_ux) {
                jkub_pzva(this, new ey_ux()); // jkub yoch pzva
            }
        }
    }

    for (let ey_ux of wm_ux) {
        jkub_pzva(Sdrh, ey_ux); // jkub nfmi pzva
        jkub_pzva(Sdrh.prototype, ey_ux.prototype); // jkub ybux pzva
    }

    return Sdrh;
}
module.exports = grbj_ux