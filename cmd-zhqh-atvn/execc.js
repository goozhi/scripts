const execc = async (user_params = { lastParams }, outputs = { ask: async () => { }, outputText }) => {
    const cmmd = user_params.lastParams
    outputs.outputText = await outputs.ask({
        exec: cmmd
    })
}
module.exports = execc