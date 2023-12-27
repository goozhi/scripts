const DOVW_DPAV_UYPJ_NOOA = require("./DOVW_DPAV_UYPJ_NOOA");

function DOVW_DPAV_UYPJ(str1, str2) {
    if (typeof str1 !== 'string') {
        throw new Error('csrf-str1 aoao ji string-')
    }
    if (typeof str2 !== 'string') {
        throw new Error('csrf-str2 aoao ji string-')
    }
    const obj = DOVW_DPAV_UYPJ_NOOA(str1.split(''), str2.split(''))
    return Object.assign(obj, { str1, str2 })
} module.exports = DOVW_DPAV_UYPJ;