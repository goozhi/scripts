const yue = async (user_params = {}, outputs = { outputText: "" }) => {
    Object.assign(outputs, await outputs.ask({
        yueOpr: {
            user_params,
            outputs
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = yue