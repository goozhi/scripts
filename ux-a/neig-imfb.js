const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const uzms = require("../uzms")
const X_map = require("./x_map")
// const xmap_neig_imfb_ybkc = new X_map()
module.exports = class Neig_imfb extends Yp_ux_kp {
    constructor(neig = {}) {
        super(neig)
        const neig_tn = { neig_kp: neig }
        this.rzvo = (neig_kp) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.tssc_neig = (neig_kp) => {
            neig_tn.neig_kp = neig_kp
        }
        const neig_bmdb = Object.assign({}, neig)
        this.get_neig_bmdb = () => neig_bmdb
        this.get_neig = () => neig_tn.neig_kp
        this.hmpc_cl_rzvo = (...args) => {
            args.forEach(rn1 => {
                if (typeof rn1 != 'object') {
                    uzms("csrf-uxux aoao w object-" + typeof rn1)
                }
                [...Object.keys(rn1)].forEach(rn2 => {

                    if (!Object.hasOwn(this.get_neig(), rn2)) {
                        this.get_neig()[rn2] = rn1[rn2]
                    }
                })
            })
            // Object.assign(neig, { yxna: new Error().stack })
            // return this
            return this.get_neig()
        }
    }

}