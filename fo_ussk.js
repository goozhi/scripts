const rfrf = require('./rfrf.js')
const uzms = require('./uzms.js')
function fo_ussk(vy_tskl = [[{}, () => { }]]) {
	let atvn_default = (tskl) => { uzms('csrf-tskl acun-' + tskl + "-kp-" + `${rfrf('fj oan us: ')}` + vy_tskl.map(rn1 => rn1[0]).join(',')) }
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