const rjqt = async (user_params = {}, outputs = { outputText: "" }) => {
    if (user_params.lastParams) {
        outputs.outputText = await outputs.ask({
            rjqtOpr: {
                user_params
            }
        })
            .catch(err => {
                throw err
            })
    } else {
        throw new Error(`There must have a parameter.`)
    }
}
module.exports = rjqt