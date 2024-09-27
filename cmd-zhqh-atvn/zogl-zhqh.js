const zogl_zhqh = async (user_params, outputs) => {
    if (user_params.zhqh) {
        await (async () => {
            const atvn = eval(user_params.lastParams)
            const diwr = atvn()
            if (typeof diwr === 'object') {
                if (Reflect.getPrototypeOf(diwr) === Promise.prototype) {
                    await diwr.catch(err => { throw err })
                }
            }
            if (typeof outputs.outputText !== 'string') {
                outputs.outputText = 'zhqh sdwt\n' + user_params.lastParams
            } else {
                // do nothing
            }
        })().catch(err => { throw err })
    } else {
        outputs.outputText = JSON.stringify(user_params, null, 4)
    }
}
module.exports = zogl_zhqh