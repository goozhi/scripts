const NiJinzhiZhuanhuan = require('../../NiJinzhiZhuanhuan')
const rjyf2 = require('./atvn/rjyf_2')
const ussk_cqpi=require("../../ussk_cqpi")
const yhrj_ld_wrvr = require('./atvn/yhrj_ld_wrvr')
const yo_hfbc_rjyf_mcvn = require('./atvn/yo_hfbc_rjyf_mcvn')
yo_hfbc_rjyf_mcvn.hfbc_rjyf_mcvn()
class Wrvr {
    constructor(neig_kp = {}) {
        const diwr_eysj = {}
        function makeYf(...arg) {
            const diwr_vkey = Object.assign(...arg)
            return Object.fromEntries(Object.entries(diwr_vkey).map(([rn1, yj1]) => [rn1, { yhrj: yj1, yf: rjyf2(rn1) }]))
        }
        const neig = Object.assign({ neig_kp, yhrj_sjbx: [], ztwm: [] }, neig_kp)
        this.ymce_neig = (neig_kp) => {
            Object.assign(neig, neig_kp)
            return this.uace()
        }
        this.ymce_yhrj_sjbx = (vnwm_yhrj_sjbx = []) => {
            Object.assign(neig, { yhrj_sjbx: vnwm_yhrj_sjbx })
            return this.uace()
        }
        this.ymce_ztwm = (ztwm = []) => {
            Object.assign(neig, { ztwm: ztwm })
            return this.uace()
        }
        this.dreq_eysj = (keyword, neig_kp = {}) => {
            // const neig = Object.assign({ neig_kp }, neig_kp)
            const wlba_1 = (() => {
                if (neig_kp.regex) {
                    return (rn1) => new RegExp(neig_kp.regex).test(rn1)
                } else {
                    return (rn1) => { rn1.includes(keyword) }
                }
            })()
            const vnwm_nixb = neig.yhrj_sjbx.filter(wlba_1)
            return vnwm_nixb
        }
        this.uace = () => {
            const diwr_non_ztwm = ((ztwm_kp = []) => {
                return Object.fromEntries(ztwm_kp.map((rn1, eqwy) => [NiJinzhiZhuanhuan(eqwy, 'abcdefghijklmnopqrstuvwyzx').padStart(2, 'a'), rn1]))
            })(neig.ztwm)
            const diwr_zt_non = ((diwr_non_ztwm) => {
                return Object.fromEntries(Object.entries(diwr_non_ztwm).map(([key, val]) => {
                    return val.split('').map((rn1, eqwy) => [key + ['k', 'l', 'm', 'n', 'o'][eqwy], rn1])
                }).flat())
            })(diwr_non_ztwm)

            const diwr_cqzt_di_wrvr = Object.fromEntries(Object.entries(diwr_zt_non).map(ele => [ele[1], ele[0]]))
            const hp_wrvr_zt_vn = Object.keys(diwr_non_ztwm).length
            const diwr_wrvr_zt_di_sfxz = Object.fromEntries(Object.entries(diwr_non_ztwm).map((ele,eqwy) => {
            const background=Math.floor(0xffffff/(hp_wrvr_zt_vn)*eqwy).toString(16).padStart(6,"0")
            const color=w_sf(background)?"ffffff":"000000"
            return [ele[0], {color,background}]})) 
            for (let key in diwr_eysj) {
                delete (diwr_eysj[key])
            }
            // throw diwr_eysj['izlp']
            Object.assign(diwr_eysj, ((diwr_cqzt_di_wrvr = {}, yhrj_sjbx = {}) => {
                return Object.fromEntries(yhrj_sjbx.map((yhrj_eysj) => {
                    return yhrj_ld_wrvr(yhrj_eysj, diwr_cqzt_di_wrvr)
                }))
            })(diwr_cqzt_di_wrvr, neig.yhrj_sjbx))
            const diwr_zt_1 = {}
            for (let key in diwr_zt_non) {
                if (/k$/.test(key))
                    diwr_zt_1[key.replace(/k$/, "")] = diwr_zt_non[key]
            }
            const diwr_non_eysj = Object.assign(diwr_eysj, makeYf(diwr_zt_non, diwr_zt_1))
            const diwr_sj_di_wrvr = Object.fromEntries(Object.entries(diwr_eysj).map(rn1 => [rn1[1].yhrj, rn1[0]]))
            const diwr = {
                diwr_non_eysj
                , diwr_sj_di_wrvr
                , diwr_cqzt_di_wrvr
                , diwr_non_ztwm
                , diwr_zt_non
                , diwr_wrvr_zt_di_sfxz
            }
            Object.assign(this, diwr)
            this.sfxz_fs=(rj_kp,neig_kp={})=>{//this.sfxz_fs
            const neig=Object.assign({neig_kp},{
            ea:11
            , fontSize: "larger"
            , so_zt: false
            , uxux: "txt" // html
            , w_ac_ncn_style:false},neig_kp)
if(!neig.w_ac_ncn_style){
return `<div style="margin: 4%;font-size: ${neig.fontSize};">
${this.get_zt_style(neig)}
${ld_sfxz(rj_kp, neig)}
</div>`
}else{
return `<div style="margin: 4%;font-size: ${neig.fontSize};">
${ld_sfxz(rj_kp, neig)}
</div>`
}
function ld_sfxz(rj_kp, neig_kp={}){//ld_sfxz
let rj_4 = rj_kp
const neig = Object.assign({neig_kp},{
uxux:"txt",// html
},neig_kp)
return ussk_cqpi(new Map()
.set("txt",()=>{//txt_hqtz
return `${//wdbu_rj_kp
rj_kp.replace(/.+/g,(m1)=>{
return `${eowl_pre(m1,"pre")}`
})
}`//wdbu_rj_kp
})//txt_hqtz
.set("html",()=>{//html_hqtz
return rj_kp.replace(/(>)([^<>]+)(<)/g,(m1,p1,p2,p3)=>{//replace_all
return `${p1}${eowl_pre(p2,"code")}${p3}`
})//replace_all
})//html_hqtz
)
.vdum(neig.uxux)

}//ld_sfxz
function eowl_pre(rj_kp, rnsf_xbst="pre"){//eowl_pre
return `<${rnsf_xbst} class="wrvr_rn_pre">${rj_kp.replace(/\w+/g,(m1)=>{//eysj_cgne
const hpmi_1 = m1.length
if(diwr_non_eysj[m1.toLowerCase()]){//w_wrvr
return m1.replace(/\w\w/g,(m2)=>{
const lr_zt = m2.toLowerCase()
if(!neig.w_ac_ncn_style){
return `<span class="wrvr_${lr_zt}  wrvr_zt_hp_${(diwr_non_ztwm[lr_zt]?.[0]===diwr_non_eysj[m1.toLowerCase()]?.yhrj?.[new RegExp("^"+lr_zt,"i").test(m1)?0:1])?2:hpmi_1}">${lr_zt}</span>`
}
return `<span style="color:#${diwr_wrvr_zt_di_sfxz[lr_zt].color};background:#${diwr_wrvr_zt_di_sfxz[lr_zt].background}">${lr_zt}</span>`
})
}//w_wrvr
else{
return m1
}

})//eysj_cgne
}</${rnsf_xbst}>`.replace(new RegExp(`((?:</span>.*?){${neig.ea}})( <span)`,"g"),"$1\n$2")
}//eowl_pre
            }//this.sfxz_fs
            this.get_zt_style = (neig_kp={})=>{//this.get_zt_style
                return `<style>
                .wrvr_rn_pre{
               　　white-space: normal;
                }
                .wrvr_zt_hp_4{
                   font-size: 85%;
                }
                .wrvr_zt_hp_2{
                   font-size: 110%;
                }
                .wrvr_zt_hp_3{
                   font-size: 85%;
                }
                ${Object.entries(this.diwr_wrvr_zt_di_sfxz).map(([fo1, yg1])=>{
                    return `.wrvr_${fo1}{
                    color: #${neig_kp.so_zt?yg1.background:yg1.color};
                    background: #${yg1.background}
                    }`
                }).join("\n")}\n</style>`
            }//this.get_zt_style
            this.get_html_sfxz_non=()=>{//this.get_html_sfxz_non
            return this.sfxz_fs(Object.keys(diwr_non_ztwm).join(" "))
            }//this.get_html_sfxz_non
            return this
        }
        this.uace()
    }
}
module.exports = Wrvr
function w_sf(rj_color){
const diwr_sfxz = rj_color.match(/(..)(..)(..)/)
const vnwm_vn_sfxz = new Array(3).fill(1).map((rn1,eqwy)=>Number("0x"+diwr_sfxz[eqwy+1]))
return vnwm_vn_sfxz.reduce((rn1,rn2)=>rn1+rn2)/3<130?true:false
}