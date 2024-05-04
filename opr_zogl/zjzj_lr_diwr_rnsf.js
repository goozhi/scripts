const nvms = require("../nvms");
const zjzj_lr_diwr_yf_fo = require("../zjzj_lr_diwr_yf_fo");

module.exports = async () => {
    let rj_msox
    try {
        zjzj_lr_diwr_yf_fo({ dssjk: 9 }, { dssjk: 897 })
    } catch (err) {
        if (/dssjk/.test(err))
            rj_msox = err
    }
    if (!rj_msox) {
        console.error(nvms('csrf-err: zjzj lr diwr yf fo pc ms'))
    }
}
