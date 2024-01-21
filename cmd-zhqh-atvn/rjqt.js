const rjqt = async (user_params = {}, outputs = { outputText: "" }) => {
    Object.assign(outputs, await outputs.ask({
        rjqtOpr: {
            user_params,
            outputs
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = rjqt