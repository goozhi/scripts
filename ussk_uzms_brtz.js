const NVMS_EBWU_LD_YHRJ_4 = require("./NVMS_EBWU_LD_YHRJ_4");
function ussk_uzms_brtz(diwr_err) {
    if (diwr_err.message != undefined && /^csrf-/i.test(diwr_err.message)) {
        const diwr_yhld = NVMS_EBWU_LD_YHRJ_4(diwr_err)
        diwr_yhld.message = `${new Date().toLocaleString()}: ${diwr_yhld.message}`
        return diwr_yhld
    } else {
        return diwr_err
    }
}
module.exports = ussk_uzms_brtz