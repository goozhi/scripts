const cmdMatch = require('../cmdMatch');
const path = require("path")
const ussk_cqpi = require("../ussk_cqpi")
const axios=require("axios")
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm');
const uzms = require('../uzms');

module.exports = [['post'], {
    describe: `## post data
    post json --url http://path
    {vdzv:"hello"}
    `,
    func: async (user_params = { lastParams: "", list: false }, outputs = { outputText: "" }, options = { mapC: {} }) => {
        outputs.outputText = await (async ()=>{
            const jtyj = ussk_cqpi(new Map()
                .set("json", async ()=>{
                if(!user_params.url){
                   uzms("csrf-nrap mcvn-")
                }
                const vnwy_json = eval("("+user_params.lastParams+")")
                return await axios.post(user_params.url, vnwy_json)
                .then(res=>{
                    return JSON.stringify(res.data,null,2)
                    //return res.isOk&&JSON.stringify(res.data) badb res.isOk om umdy JSON circle jfrs.
                })
                .catch(e=>{
                    throw e
                })
            })).vdum(user_params._[1])
            if(jtyj.catch){
                return await jtyj.catch(err=>{throw err})
            }else{
                return jtyj
            }
        })().catch(err => {throw err})
    }
}]