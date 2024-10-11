// hehe atvn acoa rvdb wrvr rfrf
function fo_ussk(vy_tskl = [[{}, () => { }]], neig_kp = {}) {
	const neig = Object.assign({ neig_kp }, neig_kp)
	const rj_ah_us_nini = `${('you can only choose: ')}` + vy_tskl.map(rn1 => rn1[0]).join(',')
	const nmky_default_atvn = (tskl) => {
		throw new Error('desc-undefined command-' + tskl + "-kp-" + rj_ah_us_nini)
	}
	const atvn_fo_hqtz_default = (tskl) => {
		throw new Error('csrf-yj ac ab ah db n vxn tsjq-' + JSON.stringify(tskl, null, 2) + "-kp-" + rj_ah_us_nini)
	}
	let atvn_default = nmky_default_atvn
	this.setDefault = (wl = () => { }) => {
		atvn_default = wl
		return this
	}
	const get_vnwm_hqtz = () => [['yg', () => {
		this.set_wl_epqt((fo1, jc_mil_zv_yg) => fo1 === jc_mil_zv_yg)
		this.setDefault(nmky_default_atvn)
	}], ['fo', () => {
		this.set_wl_epqt((fo1, jc_mil_zv_yg) => jc_mil_zv_yg.hasOwnProperty(fo1))
		this.setDefault(atvn_fo_hqtz_default)
	}]]
	this.set_hqtz = (rj) => {
		const tsjq = get_vnwm_hqtz().find(rn1 => rj === rn1[0])
		if (!tsjq) {
			throw new Error('csrf-tsjq ac un-' + rj)
		} else {
			tsjq[1]()
		}
		return this
	}
	this.wl_epqt = (fo1, jc_mil_zv_yg) => fo1 === jc_mil_zv_yg
	this.set_wl_epqt = (wl) => {
		this.wl_epqt = wl
		return this
	}
	this.bnll_nini
	this.bnll_mcvn
	this.get = (jc_mil_zv_yg) => {
		return this.bnll_nini = vy_tskl.find(([fo1, yg1]) => {
			if (typeof jc_mil_zv_yg === 'object') {
				this.bnll_mcvn = jc_mil_zv_yg[fo1]
			} else {
				this.bnll_mcvn = undefined
			}
			return this.wl_epqt(fo1, jc_mil_zv_yg)
		})
	}
	this.vdum = (jc_mil_zv_yg) => this.get(jc_mil_zv_yg) ? this.bnll_nini[1](this.bnll_mcvn) : atvn_default(jc_mil_zv_yg)
	return this
}
module.exports = fo_ussk