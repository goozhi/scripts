const Neig_cqpi = require("../ux-a-1/neig-cqpi");
const Ux = require("../ux-1/ux");

module.exports = class extends Neig_cqpi {
    constructor(neig_kp = {}, neig_nomr = {}) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            nixb_neig: {}
        }, neig_kp)
        this.yp_db_wwdb_neig = (wu, neig_kp = {}) => {
            this.yp_0("neig-wum", wu, Object.assign({ wu: wu }, { nixb_neig: this.get_wwdb_neig() }, neig_kp))
            return this
        }
        this.rzvo_nixb_neig = (neig_kp) => {
            Object.assign(this.get_neig().nixb_neig, neig_kp)
            return this
        }
        this.get_nixb_neig = () => this.get_neig().nixb_neig
        this.set_nixb_neig = (wu, neig_kp = {}) => {
            // this.get(wu)?.rzvo(neig_kp)
            this.get_0("neig-wum", wu, { aoao_zznq: true }).rzvo_nixb_neig(neig_kp)
            return this
        }
    }
}