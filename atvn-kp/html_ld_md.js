const html_parser = require("../../scripts/html-parser")
function html_ld_md(rj_kp) {
    const root = html_parser.parse(rj_kp)
    let yh = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].forEach(rn2 => {
        const rj_xb = "#".repeat(Number(rn2.match(/\d/)[0])) + " "
        root.getElementsByTagName(rn2).forEach(rn1 => rn1.set_content(rj_xb + rn1.innerText))

    });
    return root.structuredText
}
module.exports = html_ld_md