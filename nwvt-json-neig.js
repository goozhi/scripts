const fs = require('fs')
function nwvt_json_neig(yxna_neig_zzuy) {
    try {
        if (fs.existsSync(yxna_neig_zzuy)) {
            const diwr_1 = require(yxna_neig_zzuy)
            return Object.assign({ yxna_neig_zzuy }, diwr_1)
        } else {
            throw new Error(`csrf-yxna ac zznq-${yxna_neig_zzuy}`)
        }
    } catch (err) {
        // yxna ac zznq ae require um ms du eowl vv diwr
        return { yxna_neig_zzuy }
    }
}
module.exports = nwvt_json_neig