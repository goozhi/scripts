const md_RJOK_html_fs = require('./md_RJOK_html_fs');
const codeStyle = require('./codeStyle')
function md_bqeo_ld_html(BQEO_1, neig_vdzv = {}) {
  const neig = Object.assign({ style: 'dark' }, neig_vdzv)
  var rj_style = codeStyle[neig.style]
  var RJSE_1 = `<head><meta charset="utf-8"><style>${rj_style}</style></head>${md_RJOK_html_fs(BQEO_1)}`
  return RJSE_1
}
module.exports = md_bqeo_ld_html