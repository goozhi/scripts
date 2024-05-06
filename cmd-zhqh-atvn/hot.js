const hot = async (user_params = {}, outputs = { outputText: "" }, neig_kp = {}) => {
    Object.assign(outputs, await outputs.ask({
        hotOpr: {
            user_params,
            outputs,
            neig: neig_kp
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = hot