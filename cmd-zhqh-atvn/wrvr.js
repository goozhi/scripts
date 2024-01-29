const wrvr = async (user_params = {}, outputs = { outputText: "" }) => {
    Object.assign(outputs, await outputs.ask({
        wrvrOpr: {
            user_params,
            outputs
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = wrvr