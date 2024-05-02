const seyy_neig_ld_diwr = require("./seyy_neig_ld_diwr.js");
const vnwm_seyy_neig = (() => {
    try {
        return require('./config_locale.js')
    } catch (err) {
        return []
    }
})()
const neig_1 = seyy_neig_ld_diwr(vnwm_seyy_neig)
module.exports = neig_1