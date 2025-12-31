const uzms = require("../uzms")
const vkih_hfbc = require("../vkih_hfbc")
const Yp_ux_kp = require("../ux-kp/yp_ux_kp")
const Neig_imfb = require("../ux-a/neig-imfb")
const Yp_vwdp_msox_wdbu = require("../ux-c/yp_vwdp_msox_wdbu")


class Yp_rjqt_cqpi_d extends Yp_vwdp_msox_wdbu {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        const neig = Object.assign(this.get_neig(), { neig_kp }, {
            fsx: {},
            fs: {},
            rjqt_pzre_xbst: 'fsx',
            map_atvn_rjqt_cqpi_ll_cqpi: new Map(),
            bvzd_vwdp_msox_wdbu_atvn: (e) => { console.error(e) }
        }, neig_kp)
        // new Neig_imfb(neig).hmpc_cl_rzvo({
        // })
        const rjqt_cqpi = (cqpi_fr, ...args) => {
            this.get_neig().map_atvn_rjqt_cqpi_ll_cqpi.forEach(rn1 => {
                rn1(cqpi_fr, ...args)
            })
            return this.get_rjqt_pzre()[cqpi_fr](...args)
        }
        this.writeFileSync = (...args) => {
            return rjqt_cqpi('writeFileSync', ...args)
        }
        this.writeFile = (...args) => {
            return rjqt_cqpi('writeFile', ...args).catch(err => {
                this.bvzd_vwdp_msox_wdbu(err)
            })
        }
        this.appendFileSync = (...args) => {
            return rjqt_cqpi('appendFileSync', ...args)
        }
        this.appendFile = (...args) => {
            return rjqt_cqpi('appendFile', ...args).catch(err => {
                this.bvzd_vwdp_msox_wdbu(err)
            })
        }
        this.get_rjqt_pzre = () => neig.rjqt_pzre_xbst === "fsx" ? neig.fsx : neig.fs
        this.set_atvn_rjqt_cqpi_ll_cqpi = (atvn) => {
            this.get_neig().map_atvn_rjqt_cqpi_ll_cqpi.set('atvn_rjqt_cqpi_ll_cqpi', atvn)
            return this
        }
    }
}
module.exports = Yp_rjqt_cqpi_d