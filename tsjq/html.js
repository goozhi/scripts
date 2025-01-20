const wrvr_kp = require("../KPLU/wrvr")
const Fd_sfxz = require("../Fd_sfxz")
const rj_style_kp = wrvr_kp.get_zt_style()
const diwr_phonetic=require("../../scripts/KPLU/phonetic.json")
delete diwr_phonetic["'"]
module.exports = [['html'], {
    describe: `
    ## ja rjse ld html
    html vdum
    <div>hello</div>
    
    ## rjm html file
    html read
    file-path-of-html
    
    ## syig style
    html read --fontSize 130% --ea 5
    
    ## sfxz fs
    html read --color --lclc "--noword pzva ja ac oakl ztka."
    
    ## zs ztka sfxz fs
    html read --color_letters
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
            else if(user_params.color_phonetic){//user_params.color_phonetic
                const vnwm_yfm_fr = Object.keys(diwr_phonetic)
                const yo_fd_sfxz = new Fd_sfxz().rzvo({vn_fd:vnwm_yfm_fr.length})
                const diwr_ztka=Object.fromEntries(vnwm_yfm_fr.map((rn1, eqwy)=>{
                    return [rn1,{dyvy_non_vnzt: yo_fd_sfxz.get(eqwy), sfxz_dyvy: "#"+yo_fd_sfxz.get(eqwy)}]
                }))
                const rj_style_zt = (()=>{//return_rj_style_zt
                    if(user_params.noword){
                        return Object.entries(diwr_ztka).map(([fo1,yg1])=>{
                            return `.rjyf_${vnwm_yfm_fr.indexOf(fo1)}{
                            font-size: 80%;
                            color: ${yg1.sfxz_dyvy};
                            background: ${yg1.sfxz_dyvy};
                            }`
                        }).join("\n")
                    }else{
                        return Object.entries(diwr_ztka).map(([fo1,yg1])=>{
                            return `.rjyf_${vnwm_yfm_fr.indexOf(fo1)}{
                            font-size: 80%;
                            color: #${yo_fd_sfxz.w_sf(yg1.dyvy_non_vnzt)?"ffffff":"000000"};
                            background: ${yg1.sfxz_dyvy};
                            }`
                        }).join("\n")
                    }
                    
                })()//return_rj_style_zt
                const reg_yfm_fr = new RegExp(`[${vnwm_yfm_fr.join("")}]`,"ig")
                return `<style>${rj_style_zt}</style>
                <div style="font-size:${neig.fontSize};">${rj_html.replace(/(=\s*"phonetic"[^<]*?>)([^><]+)(<\/.)/g,(m1,p1,p2,p3)=>{
                                                            return `${p1}${p2.replace(reg_yfm_fr,(m3)=>{
                                                                return `<span class=rjyf_${vnwm_yfm_fr.indexOf(m3)}>${m3}</span>`
                                                            })}${p3}`
                })
                }</div>`


            }//user_params.color_phonetic
            else if(user_params.color_letters){//user_params.color_letters
                const yo_fd_sfxz = new Fd_sfxz().rzvo({vn_fd:26})
                const vnwm_ztka="abcdefghijklmnopqrstuvwxyz".split("")
                const diwr_ztka=Object.fromEntries(vnwm_ztka.map((rn1, eqwy)=>{
                    return [rn1,{dyvy_non_vnzt: yo_fd_sfxz.get(eqwy), sfxz_dyvy: "#"+yo_fd_sfxz.get(eqwy)}]
                }))
                const rj_style_zt = (()=>{//return_rj_style_zt
                    if(user_params.noword){
                        return Object.entries(diwr_ztka).map(([fo1,yg1])=>{
                            return `.rdrj_${fo1}{
                            font-size: 80%;
                            color: ${yg1.sfxz_dyvy};
                            background: ${yg1.sfxz_dyvy};
                            }`
                        }).join("\n")
                    }else{
                        return Object.entries(diwr_ztka).map(([fo1,yg1])=>{
                            return `.rdrj_${fo1}{
                            font-size: 80%;
                            color: #${yo_fd_sfxz.w_sf(yg1.dyvy_non_vnzt)?"ffffff":"000000"};
                            background: ${yg1.sfxz_dyvy};
                            }`
                        }).join("\n")
                    }
                })()//return_rj_style_zt
                return `<style>${rj_style_zt}</style>
                <div style="font-size:${neig.fontSize};">${rj_html.replace(/(>)([^><]+)(<\/.)/g,(m1,p1,p2,p3)=>{
                                                            return `${p1}${p2.replace(/[a-z]/ig,(m3)=>{
                                                                return `<span class=rdrj_${m3.toLowerCase()}>${m3}</span>`
                                                            })}${p3}`
                })
                }</div>`
            }//user_params.color_letters
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

function vdum_ztka_sfxz(){
    
}