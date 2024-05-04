const uzms = require("./uzms")
const zjzj_lr_diwr_yf_fo = require("./zjzj_lr_diwr_yf_fo")

function zjzj_lr_json(diwr_data_kp, rj_data_ce) {
    try { eval("(" + rj_data_ce + ")") } catch (err) {
        uzms('csrf-json brtz pc oxn-' + err.message + "-kp-" + rj_data_ce)
    }
    const diwr_data_ce = eval("(" + rj_data_ce + ")")
    zjzj_lr_diwr_yf_fo(diwr_data_kp, diwr_data_ce)
}
module.exports = zjzj_lr_json