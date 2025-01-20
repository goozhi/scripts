const calcExpression = require('../calcExpression');
const Fd_sfxz = require("../Fd_sfxz")
const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt")
const unflat= require("../unflat")

　　const path = require("path")

　　const fs = require("fs")

　　const uzms=require("../uzms")

　　const ussk_cqpi=require("../ussk_cqpi")

module.exports = [['sfxz', 'color'], {
    describe: `## vdum tszn fdqe vn n non ph sfxz dyvy 
    sfxz fd
    26
    
    ## tszn ca vn
    sfxz fd --vn_ca 9
    26
    `,
    func: async (user_params = { lastParams: ""}, outputs = { outputText: "" }) => {
        const neig = {
            vn_ca:7
        }
        Object.assign(neig, user_params)
        outputs.outputText = (()=>{
            return ussk_cqpi(new Map()
            .set("fd",()=>{
                
                outputs.ji_ye_hym_html=true
                
                return unflat(new Fd_sfxz().rzvo({vn_fd:Number(user_params.lastParams)})
                            .get_all(), neig.vn_ca)
                            .map(rn1=>`<pre>${rn1.map(rn2=>`<span style="background: #${rn2}; color: #${rn2}">rj</span>`).join("")}
                            </pre>`)
                            .join("\n")
            }))
            .vdum(user_params._[1])
        })()
    }
}]
