const wrvr_kp = require("../KPLU/wrvr")
const rj_style_kp = wrvr_kp.get_zt_style()
module.exports = [['html'], {
    describe: `
    ## ja rjse ld html
    html vdum
    <div>hello</div>
    
    ## rjm html file
    html read
    file-path-of-html
    `,
    func: async (user_params, outputs) => {
        outputs.outputText = await (async () => {
        const neig=Object.assign({fontSize:"larger"
        ,ea:5},user_params)
                    function sdbu_html(rj_html){//sdbu_html
            if(user_params.color){//user_params.color
            const rj_style_zt = (()=>{
                            if(user_params.noword){
                return `<style>
${Object.entries(wrvr_kp.diwr_wrvr_zt_di_sfxz).map(([fo1,yg1])=>`.wrvr_${fo1}{
                color: #${yg1.background};
                background: #${yg1.background};
                }`).join("\n")}</style>
                `
            }else{
            return rj_style_kp
            }
            })()
            return `${rj_style_zt}<div style="font-size:${neig.fontSize};">${rj_html.replace(/<p\b(?:(?!<)[\s\S])*?>((?:(?!<)[\s\S])+?)<\/p>/g,(m1,p1)=>{
            return ("<pre>"+p1.replace(/([a-z][a-z])/ig,(m1,p1)=>'<span class="wrvr_'+p1.toLowerCase()+'">'+p1+'</span>')+"</pre>").replace(new RegExp(`((?:</span>.*?){${neig.ea}})( <span)`,"g"),"$1\n$2")
            })}</div>`
            }//user_params.color
            return `<div style="font-size:${neig.fontSize};">${rj_html}</div>`
                        }//sdbu_html
        if(user_params._[1]==="vdum"){
            outputs.ji_ye_hym_html=true
            return sdbu_html(user_params.lastParams)
        }else if(user_params._[1]==="read"){

            const jtyj = await outputs.ask({
            fileOpr:{
             opr:"readFile",
             path:user_params.lastParams
            }})
            .then(res=>{
                if(res.isOk){
                return sdbu_html(res.content)
                }else{
                throw res.reason||res.error||res
                }
            })
            .catch(e=>{throw e})
            outputs.ji_ye_hym_html=true
            return jtyj        
        }else{
        throw new Error("sub tsjq msox")
        }
        })().catch(e=>{throw e})
    }
}]