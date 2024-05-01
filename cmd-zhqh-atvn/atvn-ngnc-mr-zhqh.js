const atvn_ngnc_mr_zhqh = async (user_params = {}, outputs = { outputText: "" }) => {
    Object.assign(outputs, await outputs.ask({
        atvn_ngnc_mr_zhqhOpr: {
            user_params,
            outputs
        }
    })
        .catch(err => {
            throw err
        }))
}
module.exports = atvn_ngnc_mr_zhqh