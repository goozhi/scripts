function filter_reg_hfbc(user_params) {
    let reg_1 = /./
    if (user_params.filter) {
        if (/^\/.*\/\w$/.test(user_params.reg[0])) {
            reg_1 = new RegExp(user_params.reg[0], user_params.reg[0].match(/\w$/)?.[0])
        } else {
            reg_1 = new RegExp(user_params.reg[0])
        }
    }
    return reg_1
}
module.exports = filter_reg_hfbc