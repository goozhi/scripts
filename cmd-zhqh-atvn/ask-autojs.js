const ask_autojs = async (user_params = { lastParams }, outputs = { ask: () => { }, outputText }, neig_kp = {}) => {

    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await outputs.ask(
        {
            autojs_todo: {
                neig: neig,
                rj_func: `function(){${user_params.lastParams}}`
            }
        }
    ).catch(err => { throw err })
}
module.exports = ask_autojs

