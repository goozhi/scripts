
module.exports = [['html'], {
    describe: `
    ## rj html file
    html read
    file-path-of-html
    `,
    func: async (user_params, outputs) => {
        outputs.outputText = await (async () => {
            const jtyj = await outputs.ask({
            fileOpr:{
             opr:"readFile",
             path:user_params.lastParams
            }})
            .then(res=>{
                if(res.isOk){
                return res.content
                }else{
                throw res.reason||res.error||res
                }
            })
            .catch(e=>{throw e})
            outputs.ji_ye_hym_html=true
            return jtyj
        })().catch(e=>{throw e})
    }
}]