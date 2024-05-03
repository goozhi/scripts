function fdmj_wdbu(user_params) {
    if (/-fdmj-/i.test(user_params.lastParams)) {
        const reg_1 = /([\S\s]*)-fdmj-(?:\s*\n|)([\s\S]*)/
        const diwr_1 = user_params.lastParams.match(reg_1)
        return diwr_1
    } else {
        throw new Error(`csrf-err: ra zjzo ab fdmj fr, fdmj fr aoao zznq.`)
    }

}
module.exports = fdmj_wdbu