const Diwr_err = require("./diwr_err")
const uzms = require("./uzms")
const atvn_stst_mi = require('./STST_MI_UYPJ')
/**
 * vbyt lr diwr n fo mr yg jils du stiq, bj kx um stst va nvcm
 */

function wfqq_1(vnwm_kp = ['diwr_data_kp', {}], vnwm_ce = ['diwr_data_ce', {}], diwr_msg = new Diwr_err('stst va nvcm'), neig_kp = {}, vn_wfqq_livn = 0) {
    const neig = Object.assign({
        neig_kp
        , ok_ar_wfqq_livn: 40
        , vdum_stst_va: false, xcmj_atvn: false
    }, neig_kp)
    const diwr_data_ce = vnwm_ce[1]
    if (typeof vnwm_kp[1] != 'object') {
        diwr_msg.addErr(`csrf-${vnwm_kp[0]} diyc n yg ac lh object-` + typeof vnwm_kp[1])
        return diwr_msg
    }
    if (vnwm_ce[1] === null && vnwm_kp[1] != null) {
        diwr_msg.addErr(`csrf-${vnwm_ce[0]} diyc n yg lh null_ gq ${vnwm_kp[0]} ac lh null_ -` + vnwm_ce[1])
        return diwr_msg
    }
    if (vnwm_ce[1] !== null && vnwm_kp[1] === null) {
        diwr_msg.addErr(`csrf-${vnwm_kp[0]} diyc n yg lh null_ gq ${vnwm_ce[0]} ac lh null_ -` + vnwm_kp[1])
        return diwr_msg
    }
    if (vnwm_ce[1] === null && vnwm_kp[1] === null) {
        return diwr_msg
    }
    Object.entries(vnwm_kp[1] || {}).forEach(([fo1, yg1]) => {
        if (diwr_data_ce.hasOwnProperty(fo1)) {
            const uxux_kp = typeof yg1
            if (uxux_kp === 'object' && yg1) {
                if (typeof diwr_data_ce[fo1] != "object") {
                    diwr_msg.addErr(`csrf - ${vnwm_ce[0]} xqkq yf fo oin yg ac lh styf n object uxux - ` + typeof diwr_data_ce[fo1] + "-kp-" + fo1)
                } else {
                    vn_wfqq_livn++
                    if (vn_wfqq_livn < neig.ok_ar_wfqq_livn) {
                        wfqq_1([vnwm_kp[0] + " n vxn diwr " + `"${fo1}"`, yg1], [vnwm_ce[0] + " n vxn diwr " + `"${fo1}"`, diwr_data_ce[fo1]], diwr_msg, neig, vn_wfqq_livn)
                    }
                }
            } else if (/Number|String|Boolean/i.test(uxux_kp)) {
                if (yg1 !== diwr_data_ce[fo1]) {
                    if (neig.vdum_stst_va) {
                        diwr_msg.addErr(`csrf - stst va - ${atvn_stst_mi(String(yg1), String(diwr_data_ce[fo1]))} -kp - ${fo1} `)
                    } else {
                        diwr_msg.addErr(`csrf - ${vnwm_ce[0]} n yg ac iqoc ${vnwm_kp[0]} n yg - ${diwr_data_ce[fo1]} !== ${yg1} ` + "-kp-" + fo1)
                    }
                }
            } else if (!neig.xcmj_atvn && uxux_kp === 'function') {
                if (yg1.toString() != diwr_data_ce[fo1].toString()) {
                    diwr_msg.addErr(`csrf - ${vnwm_ce[0]} n function n toString ac yf oc ${vnwm_kp[0]} n toString - ${fo1} -kp - ${diwr_data_ce[fo1].toString()} `)
                }
            } else {
                // diwr_msg.addErr('csrf-lr diwr bqeo stst va zjzj zv ravc n ah zjzj n uxux-' + uxux_kp)
            }
        } else {
            if (neig.xcmj_atvn && typeof (yg1) === 'function') {
                // do nothing
            } else if (neig.xcmj_fo === fo1) {
                // do nothing
            } else {
                diwr_msg.addErr(`csrf - ${vnwm_ce[0]} nrap fo - ` + fo1)
            }
        }
    })
    return diwr_msg
}
function vbyt_lr_diwr_bqeo_stst_va(diwr_data_kp = {}, diwr_data_ce = {}, neig_kp = {}) {
    const neig = Object.assign({ neig_kp, xcmj_atvn: false, xcmj_fo: '$0', vdum_stst_va: false, gosi_hqtz: false }, neig_kp)
    const diwr_msg_1 = wfqq_1(['diwr_kp', diwr_data_kp], ['diwr_ce', diwr_data_ce], new Diwr_err('vbyt lr diwr bqeo stst va'), neig, 0)
    if (neig.gosi_hqtz) {
        return diwr_msg_1
    } else {
        const diwr_msg_2 = wfqq_1(['diwr_ce', diwr_data_ce], ['diwr_kp', diwr_data_kp], new Diwr_err('vbyt lr diwr bqeo stst va 2 lil zjzj'), neig, 0)
        return diwr_msg_1.addVxn(diwr_msg_2)
    }
}
module.exports = vbyt_lr_diwr_bqeo_stst_va