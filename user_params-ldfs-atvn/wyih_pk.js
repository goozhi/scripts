const fywy_qh_ld_vnwm = require("../fywy_qh_ld_vnwm")

/**
 * 
 * @param {object} user_params 
 * @returns {object} return user_params
 */
const reg_1 = /^(?:"((?:(?!").)+)"|'((?:(?!').)+)'|`((?:(?!`).)+)`)$/g
function wyih_pk(user_params) {
    user_params._.forEach((rn1, eqwy, vnwm) => {
        if (reg_1.test(rn1))
            vnwm[eqwy] = rn1.replace(reg_1, (_, p1, p2, p3) => {
                return p1 || p2 || p3
            })
    })
    return user_params
}
module.exports = wyih_pk