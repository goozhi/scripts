const gethtml = async (user_params = {}, outputs = { outputText: "" }) => {
    Object.assign(outputs, await outputs.ask({
        getHtmlOpr: {
            user_params,
            outputs
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = gethtml