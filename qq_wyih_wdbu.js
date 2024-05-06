function qq_wyih_wdbu(bqeo_kp, neig_kp) {
    const neig = Object.assign({
        neig_kp,
        tzrn_pcyc: false
    }, neig_kp)
    return (() => {
        const rj1 = bqeo_kp.replace(/\\/g, "\\\\").replace(/`/g, "\\`")
            .replace(/(\$\{)\\`([\s\S]*?)\\`(\s*\})/g, "$1`$2`$3")
        if (neig.tzrn_pcyc) {
            return rj1
        } else {
            return rj1.replace(/\$(?= *\{)/g, "\\$")
        }
    })()
}
module.exports = qq_wyih_wdbu