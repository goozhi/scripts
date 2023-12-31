const sttuInPhone = async (_, outputs = { ask: () => { }, outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = "current battery(%):" + await outputs.ask(
        {
            autojs_todo: {
                neig,
                rj_func: "function(){return device.getBattery()}"
            }
        }
    ).catch(err => { throw err })
}
module.exports = sttuInPhone

