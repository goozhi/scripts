const getTheIp = async (user_params = { lastParams }, outputs = { ask: () => { }, outputText }) => {
    outputs.outputText = await outputs.ask(
        {
            getMyIp: true
        }
    ).catch(err => { throw err })
}
module.exports = getTheIp

