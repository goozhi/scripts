const { Yp_ux_wwdb } = require("../ux-kp/yp_ux_a");
const Ux = require("../ux-1/ux");

module.exports = class extends Yp_ux_wwdb {
    constructor(neig_kp = {}, neig_nomr = {}) {
        super(Object.assign(neig_kp, {
            yoch_dyih: neig_kp.wu
        }, neig_kp), neig_nomr)
        this.lckc_map_kl("neig-wum", new Map())
        this.set_wwdb_neig = (wwdb_neig) => {
            Object.assign(this.get_neig(), { wwdb_neig })
            return this
        }
        this.get_wwdb_neig = () => this.get_neig().wwdb_neig || {}
    }
}