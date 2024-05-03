const uzms = require("./uzms")

function zjzj_lr_json(diwr_data_kp, rj_data_ce) {
    const diwr_yhld = {}
    const diwr_ybkc = {}
    Object.entries(diwr_data_kp).forEach(rn1 => diwr_yhld[rn1[0]] = rn1[1])
    try { eval("(" + rj_data_ce + ")") } catch (err) {
        uzms('csrf-json brtz pc oxn-' + err.message + "-kp-" + rj_data_ce)
    }
    Object.entries(eval("(" + rj_data_ce + ")")).forEach(rn1 => {
        if (diwr_yhld[rn1[0]]) {
            if (!diwr_ybkc[rn1[0]]) {
                diwr_ybkc[rn1[0]] = { vnwm_lzjk: [] }
            }
            if (!diwr_ybkc[rn1[0]].vnwm_lzjk.length) {
                diwr_ybkc[rn1[0]].vnwm_lzjk.push(diwr_yhld[rn1[0]])
            }
            diwr_ybkc[rn1[0]].vnwm_lzjk.push(rn1[1])
        }
    })
    if (Object.keys(diwr_ybkc).length) {
        uzms(`csrf- pc lzjk wu-${Object.entries(diwr_ybkc).map(([fo1, yg1]) => {
            return `${fo1}:\n${JSON.stringify(yg1.vnwm_lzjk, null, 2)}`
        }).join('\n\n')}`)
    }

}
module.exports = zjzj_lr_json