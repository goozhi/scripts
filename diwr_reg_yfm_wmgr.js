const rn_yfm = ['a', 'i', 'e', 'ʌ', 'o', 'u', 'ɪ', "ɜ"]
const rj_reg_rn_yfm = "(?:ju|" + rn_yfm.join('|') + ")"
const rj_reg_ft_rn_yfm = "(?:s[pkmnbtdgl]|kj|pj|vj|sh|[^" + rn_yfm.join('') + "])"
const rj_reg_n_a_n_wmgr = `(${rj_reg_ft_rn_yfm})(${rj_reg_rn_yfm})(${rj_reg_ft_rn_yfm})`
const rj_reg_de_djo = `[dstfklp]`
const rj_reg_sl_ux_wmgr = `(${rj_reg_de_djo}l)`
module.exports = {
    rj_reg_n_a_n_wmgr,
    rj_reg_sl_ux_wmgr
}