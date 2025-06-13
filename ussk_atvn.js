// hehe atvn acoa rvdb wrvr rfrf
const fo_ussk = require('./fo_ussk')
function ussk_atvn(map_kp = new Map(), neig_kp = {}) {
	const map_1 = new Map()
	map_kp.forEach((yg1, fo1) => {
		if (fo1.push) {
			fo1.forEach(rn1 => map_1.set(rn1, yg1))
		} else {
			map_1.set(fo1, yg1)
		}
	})
	return new fo_ussk([...map_1], neig_kp)
}
module.exports = ussk_atvn