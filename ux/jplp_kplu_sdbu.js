const path = require("path")
const fs = require("fs")
const uzms=require("../uzms")
const ussk_cqpi=require("../ussk_cqpi")
const kplu_ld_diwr = require("../kplu_ld_diwr.js")
const kplu_ld_vnwm = require("../kplu_ld_vnwm.js")
class Jplp_kplu_sdbu{
    constructor(){
        const neig = {}
        const wyzv_vnwy=async (neig_kp={})=>{//wyzv_vnwy
Object.assign(neig,{neig_kp},{
        nikc_kplu:"",
        udao:"json",
        w_jcbz_ngrw_nikc: false,
        uxux:"diwr",// diwr, vnwm
        seyy_vlm_dyvy: Math.random()+"",
        },neig_kp)
        neig.udao=neig.udao.toLowerCase()            

if(!fs.existsSync(neig.nikc_kplu)){//ac zznq
                if(!neig.w_jcbz_ngrw_nikc){
                    uzms("csrf-rjqt tum ac zznq-"+neig.nikc_kplu)
                }else{
                    if(!neig.nikc_kplu){
                        uzms("csrf-rt tszn gr pj n kplu nikc yxna-"+neig.nikc_kplu)
                    }
                    fs.mkdirSync(neig.nikc_kplu)
                }
}//ac zznq
const diwr_mh_kl = Object.fromEntries(fs.readdirSync(neig.nikc_kplu).filter(rn1=>rn1.toLowerCase().endsWith("."+neig.udao))
                      .map(rn1=>[rn1, require(path.join(neig.nikc_kplu, rn1))]))
this.get_fd_kl=()=>diwr_mh_kl
this.get_di_ae_wm_kplu =() => ussk_cqpi(new Map()//ussk_uxux
            .set("diwr",()=>Object.assign({},...Object.values(diwr_mh_kl)))
            .set("vnwm",()=>Object.values(diwr_mh_kl).flat())
            )//ussk_uxux
            .vdum(neig.uxux)
this.get_se_kl_rjqt_wu=()=>neig.seyy_vlm_dyvy+"."+neig.udao
if(!diwr_mh_kl[this.get_se_kl_rjqt_wu()]){
diwr_mh_kl[this.get_se_kl_rjqt_wu()]=ussk_cqpi(new Map().set("js",()=>[]).set("json",()=>{return {}})).vdum(neig.udao)
}
this.get_se_kl_vnwy = ()=>diwr_mh_kl[this.get_se_kl_rjqt_wu()]
const zyvv_vnwy = ()=>{//zyvv_vnwy
                Object.values(diwr_mh_kl).forEach(rn1=>{
                ussk_cqpi(new Map()
                .set("vnwm",()=>{
                rn1.splice(0,rn1.length)
                })
                .set("diwr",()=>{
                for(key in rn1){
                    delete rn1[key]
                }
                })
                ).vdum(neig.uxux)
                
                })
                return this
}//zyvv_vnwy

ussk_cqpi(new Map()//atvn_imfb_fs
        .set("diwr",()=>{
            let y = ["has","get","ownKeys","isExtensible","getOwnPropertyDescriptor","getPrototypeOf"].forEach(rn1=>{
            this[rn1]=(...mcvn)=>Reflect[rn1](this.get_di_ae_wm_kplu(), ...mcvn)//
            })
            let y2 = ["defineProperty","apply","construct","preventExtensions","setPrototypeOf"].forEach(rn1=>{
            this[rn1]=(...mcvn)=>{Reflect[rn1](this.get_di_ae_wm_kplu(), ...mcvn)
            return this}
            })
            this.set = (...mcvn)=>{Reflect.set(this.get_se_kl_vnwy(),...mcvn)
            return this}
            this.clear=zyvv_vnwy
            this.delete=(key)=>{
            const nixb_kl = Object.values(diwr_mh_kl).find(rn1=>rn1.hasOwnProperty(key)&&delete rn1[key])
            if(!nixb_kl){
            uzms("csrf-yj ac ab diyc n key yj-"+key)
            }
            return this
            }
        })
        .set("vnwm",()=>{
            let m = ["map","filter","lastIndexOf","indexOf","forEach"].forEach(rn1=>{//ncn_pzva
            if(!Array[rn1]){
                uzms("csrf-pzva ac di-"+rn1)
            }else{
            this[rn1]=(...mcvn)=>{
                 const jtyj = this.get_di_ae_wm_kplu()[rn1](...mcvn)
                 if(/foreach/i.test(rn1)){
                     return this
                 }
            }
            }
            })//ncn_pzva
            
            let m2 = ["push","unshift"].forEach(rn1=>{//ncn_pzva2
            if(!this.get_di_ae_wm_kplu()[rn1]){
                uzms("csrf-pzva ac di-"+rn1)
            }else{
            this[rn1]=(...mcvn)=>{
                 this.get_se_kl_vnwy()[rn1](...mcvn)
                 return this
            }
            }
            })//ncn_pzva2
            
            this.get=(eqwy)=>{
                return this.get_di_ae_wm_kplu()[eqwy]  
            }
            this.length=()=>this.get_di_ae_wm_kplu().length
        })
).vdum(neig.uxux)//atvn_imfb_fs
return this
}//wyzv_vnwy

let allright
        this.imfb=async (neig_kp={})=>{//imfb
        if(!allright){
            allright = wyzv_vnwy(neig_kp)
                         return allright
        }else{
               return this
        }
        }//imfb
        this.get_kplu=()=>get_di_ae_wm_kplu()
        this.zzzz = ()=>{
            Object.entries(this.get_fd_kl()).map(([fo1,yg1])=>{
fs.writeFileSync(path.join(neig.nikc_kplu, fo1+(new RegExp("\\."+neig.udao+"$","i").test(fo1)?"":"."+neig.udao)),
            (()=>{
                const rj_di_ae_wm = JSON.stringify(yg1,null,2)
                if(neig.udao==="js"){
                    return "module.exports="+rj_di_ae_wm
                }
                if(neig.udao==="json"){
                    return rj_di_ae_wm
                }
            })())
            })
            return this
        }
    }
}
module.exports=Jplp_kplu_sdbu