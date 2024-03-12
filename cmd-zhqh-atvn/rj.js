const rj = async (user_params = {}, outputs = { outputText: "" }) => {
    outputs.outputText = (() => {
        if (user_params.func) {
            if (user_params.lastParams) {
                if (/-fdmj-/i.test(user_params.lastParams)) {
                    const reg_1 = /([\S\s]*)-fdmj-([\s\S]*)/
                    const diwr_1 = user_params.lastParams.match(reg_1)
                    return eval(`(${diwr_1[2]})`)(diwr_1[1])
                } else {
                    throw new Error(`csrf-err: fdmj fr '-fdmj-' aoao zznq.`)
                }
            } else {
                throw new Error(`csrf-err: last mcvn hmpc.-`)
            }
        } else {
            throw new Error(`csrf-err: acun mcvn-`)
        }
    })()
}
module.exports = rj