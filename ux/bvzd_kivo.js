function Bvzd_kivo(neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, {
        vn_trl_kivo_zdog: Date.now() + 90000
    }, neig_kp)
    this.set_trl_kivo_zdog = (vn_kp) => {
        neig.vn_trl_kivo_zdog = vn_kp || 0
        return this
    }
    this.uufb = (atvn_qhbz = () => { }) => {
        if (neig.vn_trl_kivo_zdog > Date.now()) {
            clearTimeout(neig.yo_timeout)
        } else {
        }
        neig.yo_timeout = setTimeout(() => {
            atvn_qhbz()
        }, neig.vn_trl_kivo_zdog - Date.now());
        return this
    }
}
module.exports = Bvzd_kivo
