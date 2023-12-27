/**
 * @param {string} [rj1=""] Replace the rj1 - one element of SUBMODULE dicts-en's explain(Chinese) to a SIMPLE explain(one Chinese word).
 * @returns {string} Return a simple explain.
 */
function replaceExplain(rj1 = "") {
    if (typeof rj1 !== 'string')
        throw new Error('csrf-The param must be a string!')
    return rj1.replace(/(;|\uff1b|,|，).*/, '').replace(/[\(\)（）]/gi, '').replace(/(\b)(?:(?!\b(?:n|adj|vt|adv|vi|prep|conj|v|int|num|aux|pron|abbr|pref|art|a)(?=\.))[a-z])+(\b)/ig, '')
}
module.exports = replaceExplain