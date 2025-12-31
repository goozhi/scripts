const grbj_ux = require("../grbj_ux")
const uzms = require("../uzms")

class zogl_hese_b extends Map {
    constructor() {
        super()
        const map_zogl_jyqh_jtyj = new Map()
        this.ybkc_zogl_jyqh_jtyj = (...args) => map_zogl_jyqh_jtyj.set(...args)
        this.get_zogl_jyqh_jtyj = (fo_symbol) => map_zogl_jyqh_jtyj.get(fo_symbol)
    }
}

module.exports = class Zogl_hese_c extends zogl_hese_b {
    constructor(neig_kp) {
        super()
        const neig = Object.assign({ neig_kp }, neig_kp)
        this.rzvo = (neig_kp) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.add = (yg_zogl, ...args) => {
            const fo = Symbol(yg_zogl)
            this.ybkc_zogl_jyqh_jtyj(fo, yg_zogl)
            this.set(fo, ...args)
            return this
        }
        this.get_neig = () => neig
        this.drbz_zogl = (neig_kp) => {
            this.forEach((yg1, fo1) => {
                if (typeof yg1 != 'function') {
                    uzms("csrf-mcvn uxux aoao w function-" + typeof yg1)
                }
                yg1(this.get_zogl_jyqh_jtyj(fo1), Object.assign({}, neig, neig_kp))
            })
            return this
        }

    }
}