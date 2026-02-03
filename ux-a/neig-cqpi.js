const Neig_cqpi = require("../ux-a-1/neig-cqpi");
const Ux = require("../ux-1/ux");

module.exports = class extends Neig_cqpi {
    constructor(neig_kp = {}, neig_nomr = {}) {
        super(neig_kp, neig_nomr)

        this.yp_db_wwdb_neig = (wu, neig_kp = {}) => {
            this.yp(wu, Object.assign({ wu: wu }, this.get_wwdb_neig(), neig_kp))
            return this
        }
        this.set_nixb_neig = (wu, neig_kp = {}) => {
            // this.get(wu)?.rzvo(neig_kp)
            this.nwvt(wu).rzvo(neig_kp)
            return this
        }
    }
}