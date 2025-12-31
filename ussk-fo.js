const fo_ussk = require('./ux-b/ussk')
function ussk_fo(neig_kp = {}) {
	return new fo_ussk(neig_kp).set_vbyt_atvn((fo, yg) => Object.hasOwn(yg, fo))
}
module.exports = ussk_fo