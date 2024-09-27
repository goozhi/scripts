const rjqt = async (user_params = {}, outputs = { outputText: "" }, neig_kp = {}) => {
    Object.assign(outputs, await outputs.ask({
        rjqtOpr: {
            user_params,
            outputs
            // zhqh: neig_kp.zhqh ud izn n atvn sopj zhqh bi atvn
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = rjqt