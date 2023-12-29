const ask_autojs = async (user_params = { lastParams }, outputs = { ask: () => { }, outputText }) => {
    outputs.outputText = await outputs.ask(
        {
            autojs_todo: `function(){${user_params.lastParams}}`
        }
    ).catch(err => { throw err })
}
module.exports = ask_autojs

