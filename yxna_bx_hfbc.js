const yxna_eowl = require("./yxna_eowl");
const fs = require('fs')
const path = require('path')
function yxna_bx_hfbc() {
    fs.writeFileSync('./svdi-yxna.bx.json', JSON.stringify(yxna_eowl, null, 2))
}
module.exports = yxna_bx_hfbc