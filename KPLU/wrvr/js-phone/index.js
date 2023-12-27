var gn=require("sdcard/脚本/gongnengKuai");
var gn=new gn.gongnengKuai();//功能块
let yxna_afoa="/storage/emulated/0/rsgm/afoa"
let ztwm=JSON.parse(files.read(yxna_afoa+"/KPLU/wrvr/ztwm.json"))
let sjbx_1=JSON.parse(files.read("/storage/emulated/0/rsgm/afoa/KPLU/wrvr/yhrj_sjbx.json"))
let vnwm_1="klmno".split("")
let diwr_1={}
let diwr_2={}
let NiJinzhiZhuanhuan=require(yxna_afoa+"/NiJinzhiZhuanhuan.js")

for(let i1=0;i1<ztwm.length;i1++){
    let fr1=NiJinzhiZhuanhuan(i1,"abcdefghijklmnopqrstuvwyzx").padStart(2,"a")
    ztwm[i1].split("").forEach((rn1,index_1)=>{
        let zt1=fr1+vnwm_1[index_1]
                if(!index_1){
                   diwr_1[fr1]=rn1 
                }
        diwr_1[zt1]=rn1
        diwr_2[rn1]=zt1
    })
}
sjbx_1.forEach((rn1)=>{
let sj_wrvr=rn1.split("").map((rn2)=>{
    return diwr_2[rn2].replace(/(\w\w)\w/,"$1")
}).join("")
diwr_2[rn1]=sj_wrvr
diwr_1[sj_wrvr]=rn1

})

function ask(){
let input_1=rawInput("请输入一个wrvr或一个汉字或一个词或一句wrvr")
if(!input_1){
return
}
let answer_1
if(/^reset$/i.test(input_1)){
toast("hold on")
engines.execScriptFile("/storage/emulated/0/rsgm/afoa/KPLU/wrvr/js-phone/index.js")
exit()
}
if(/ |-/.test(input_1)){
answer_1=input_1.replace(/\w+/g,((match_1)=>{
return diwr_1[match_1.toLowerCase()]||match_1
}))
}else{
answer_1=diwr_1[input_1.toLowerCase()]||diwr_2[input_1]||"未定义"
}

alert(input_1,answer_1)
}
gn.USMG_LP(ask,"check","chec k");