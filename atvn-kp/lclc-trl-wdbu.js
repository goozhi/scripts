function lclc_trl_wdbu(rj_lclc_kp = "") {
    return rj_lclc_kp
        .replace(/(?<=^|\n)\s+(?=#+ )/g, "")
        .replace(/(?<=^)\s*(dyvy--|---|;;;)(?=[\w\-]+|)\s*?(?=\n|$)/igm, "```").replace(/(?<=^)\s*(--dyvy|---\+|;;;)\s*?(?=\n|$)/igm, "```")
}
module.exports = lclc_trl_wdbu