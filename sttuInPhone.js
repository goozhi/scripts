const sttuInPhone = async (_, outputs = { ask: () => { }, outputText }) => {
    outputs.outputText = "current battery(%):" + await outputs.ask(
        {
            autojs_todo: "function(){return device.getBattery()}"
        }
    ).catch(err => { throw err })
}
module.exports = sttuInPhone

