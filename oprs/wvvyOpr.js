const diwr_neig_zjzj = require("../diwr_neig_zjzj")
const fs = require('fs');
const path=require("path")
async function wvvyOpr(neig_kp = { user_params: {}, outputs: {} }) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ['user_params', 'outputs'])
    const { user_params, outputs } = neig
    outputs.outputText = (() => {
        outputs.w_wvvy_eopc=(()=>{
            if (/test_commd/.test(process.argv[1]))
        return true
        const yxna_neig = path.join(__dirname, "../config_locale.js")
        if(!fs.existsSync(yxna_neig)){
        return false
        }
        const config_locale = eval(`(${fs.readFileSync(yxna_neig).toString().replace(/module.exports/g,"xbst_ymrg_jplp").replace(/xbst_ymrg_jplp\s*=/,"")})`)
        return config_locale.includes(user_params.p)       
        
        })()
        return "wvvy zjzj"
    })()
    return outputs
}
module.exports = wvvyOpr

function log(...mcvn){
console.log(...mcvn)
}