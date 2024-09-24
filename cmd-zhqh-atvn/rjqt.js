const rjqt = async (user_params = {}, outputs = { outputText: "" }, neig_kp = { zhqh: async () => { } }) => {
    Object.assign(outputs, await outputs.ask({
        rjqtOpr: {
            user_params,
            outputs,
            zhqh: neig_kp.zhqh
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = rjqt