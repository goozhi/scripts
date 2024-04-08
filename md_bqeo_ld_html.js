const marked = require('marked');
const codeStyle = require('./codeStyle')
function md_bqeo_ld_html(BQEO_1, neig_vdzv = {}) {
  const neig = Object.assign({ style: 'dark', ji_db_style: true }, neig_vdzv)
  var rj_style = codeStyle[neig.style]
  var RJSE_1 = `${neig.ji_db_style ? `<head><meta charset="utf-8"><style>${rj_style}</style></head>` : ''}${marked.marked(BQEO_1.replace(/(?:!|)\[.*\]\(.*?\)/g, (m) => {
    return m.replace(/\\/g, "/")
      .replace(/\.md(?=#|\)$)/i, ".html")
  }))}`
  return RJSE_1
}
module.exports = md_bqeo_ld_html