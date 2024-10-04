// hehe atvn acoa rvdb wrvr rfrf
function fo_ussk(vy_tskl = [[{}, () => { }]], neig_kp = {}) {
	const neig = Object.assign({ neig_kp }, neig_kp)
	let atvn_default = (tskl) => { throw new Error('desc-undefined command-' + tskl + "-kp-" + `${rfrf('you can only choose: ')}` + vy_tskl.map(rn1 => rn1[0]).join(',')) }
	this.setDefault = (wl = () => { }) => {
		atvn_default = wl
		return this
	}
	this.wl_epqt = (fo1, jc_mil_zv_yg) => fo1 === jc_mil_zv_yg
	this.set_wl_epqt = (wl) => {
		this.wl_epqt = wl
		return this
	}
	this.bnll_nini
	this.get = (jc_mil_zv_yg) => {
		return this.bnll_nini = vy_tskl.find(([fo1, yg1]) => {
			return this.wl_epqt(fo1, jc_mil_zv_yg)
		})
	}
	this.vdum = (jc_mil_zv_yg) => this.get(jc_mil_zv_yg) ? this.bnll_nini[1]() : atvn_default(jc_mil_zv_yg)
	return this
}
module.exports = fo_ussk