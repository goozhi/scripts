const uzms = require("./uzms")

function atvn_ae_wrm_fs(rj_atvn) {
    try {
        return eval(`(${rj_atvn})`)
    } catch (e) {
        uzms("csrf-atvn ae diwr ebpj brtz msox-" + (e.message || e))
    }
}
module.exports = atvn_ae_wrm_fs