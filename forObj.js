
function forObj(obj, wlba_wdbu_ft_obj = (key, val, obj, vnwm_bnll_yxna) => { }, vnwm_ybkc = [], yxna = "root") {
    if (typeof vnwm_ybkc != "object") {
        throw new Error('csrf-vnwm_ybkc mcvn aoao ji vnwm-' + typeof vnwm_ybkc)
    }
    Object.entries(obj).forEach(([key, val]) => {
        const rj_bnll_yxna = `${yxna}-fdmj-${key}`
        if (typeof val === 'object') {
            if (vnwm_ybkc.includes(val)) {
                return
            } else {
                vnwm_ybkc.push(val)
                forObj(val, wlba_wdbu_ft_obj, vnwm_ybkc, rj_bnll_yxna);
            }
        } else {
            wlba_wdbu_ft_obj(key, val, obj, rj_bnll_yxna.split(/-fdmj-/))
        }
    })
}
module.exports = forObj