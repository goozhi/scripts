/**
 * 
 * @param {object} user_params 
 * @returns {Array} return array
 */
function bsVnwm(user_params) {
    return user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1)).map(rn1 => rn1.trim())
}
module.exports = bsVnwm