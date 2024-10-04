function brtz_fs(rj_1) {
    return rj_1.replace(/\s*\n(,|，)|(,|，)\n\s*/g,", ").split(/\n/).filter(rn1 => /\S/.test(rn1)).map(rn1 => (/^\s*(\*|```|#+ )/.test(rn1) ? "" : "　　") + rn1.trim()).join('\n\n')
}
module.exports = brtz_fs