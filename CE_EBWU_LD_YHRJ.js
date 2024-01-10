const CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS = require('./CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS');
const rj_sjbx = require('./KPLU/wrvr/yhrj_sjbx.json').join('\n')
const rj_ztwm = require('./KPLU/wrvr/ztwm.json').join('\n')
var diwr_sjbx = CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS(rj_sjbx, rj_ztwm)

function CE_EBWU_LD_YHRJ(rjse_kp) {
    var UXUX_YHLD = typeof (rjse_kp)
    if (UXUX_YHLD != "string") {
        throw new Error('csrf-mcvn aoao ji string-' + UXUX_YHLD)
    }
    var rjse_1 = rjse_kp
    var reg_eysj_1 = /\w+/g;
    var reg_eysj_2 = /\w+/;
    vnwm_eysj = rjse_1.match(reg_eysj_1)
    if (vnwm_eysj != null) {
        vnwm_eysj.forEach(rnsf => {
            var rjse_yhld = diwr_sjbx[rnsf.toLowerCase()]
            if (rjse_yhld != undefined) {
                rjse_1 = rjse_1.replace(new RegExp("\\b" + rnsf + "\\b"), rjse_yhld)
            } else {
            }
        })
    }
    return rjse_1;
}
module.exports = CE_EBWU_LD_YHRJ;