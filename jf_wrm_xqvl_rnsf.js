const Xqvl_rnsf_vdum = require('./xqvl_rnsf_vdum.js')
class Jf_wrm_xqvl_rnsf {
    constructor(vnwm_kp = [], neig_kp = {}) {
        const neig = Object.assign({ neig_kp, w_ah_lzjk: false, xqvl_hqtz: 'xqvl' }, neig_kp)
        const vy_1 = []
        this.check = () => {
            return this
        }
        this.add = (vnaw_1 = 1) => {
            if (vnaw_1 > vnwm_kp.length) {
                uzms(`csrf-tszn n vn cf ar-${vnaw_1}>${vnwm_kp.length}-kp-` + vnaw_1)
            }
            const diwr_1 = new Xqvl_rnsf_vdum(vnwm_kp).ymce_neig(neig)
            if (neig.xqvl_hqtz === 'xqvl') {
                for (let vn_1 = 0; vn_1 < vnaw_1; vn_1++) {
                    diwr_1.bv_ye()
                }
            } else if (neig.xqvl_hqtz === 'ytnc') {
                const da_y_diwr = diwr_1.bv_ye().get_bnll()
                const da_y_eqwy = da_y_diwr.eqwy
                for (let vn_1 = 0; vn_1 < vnaw_1 - 1; vn_1++) {
                    const vn_2 = da_y_eqwy++
                    if (vnwm_kp[vn_2] === undefined) {
                        diwr_1.bv_tszn(vn_1)
                    } else {
                        diwr_1.bv_tszn(vn_2)
                    }
                }
            } else {
                uzms('csrf-hqtz acun-' + neig.xqvl_hqtz)
            }
            vy_1.push(diwr_1)
            return this
        }
        this.get_bnll = () => {
            return vy_1[vy_1.length - 1]
        }
        this.get_sopc_rnsf = () => {
            return vy_1.map(rn1 => rn1.get_sopc_rnsf()).flat()
        }
        this.qi_neig = (neig_kp) => {
            Object.assign(neig, neig_kp)
        }
    }
}
module.exports = Jf_wrm_xqvl_rnsf