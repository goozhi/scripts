


var fs=require('fs')
var CEGGEBWU_VKVY_ZJQT=require('./CEGGEBWU_VKVY_ZJQT');
var CEGGEBWU_VKRF_ZJQT=require('./CEGGEBWU_VKRF_ZJQT');
var YBFBGGVN = 'ABCDEFGHIJKLMNOPQRSTUVWYZX';
function SIGGZTWM_ZJQT(YHRJ, CEGGEBWU){
var ZTWM_VNWM=fs.readFileSync(__dirname+'\u002f\u004b\u0050\u004c\u0055\u002f\u0053\u0049\u005f\u005a\u0054\u0057\u004d\u005f\u0033\u002e\u006a\u0061\u0076\u0061').toString().split('\n');
    var VNWM_1=CEGGEBWU_VKVY_ZJQT(YHRJ,YBFBGGVN,ZTWM_VNWM);
    var VNWM_2=VNWM_1.map(WLBA_1);
    var VNWM_JTYP=[VNWM_2.join(", ")];
    var VNWM_3=CEGGEBWU_VKRF_ZJQT(CEGGEBWU,YBFBGGVN,ZTWM_VNWM);
    var VNWM_4=VNWM_3.map(WLBA_2);
    VNWM_JTYP.push(VNWM_4.join(", "));
    return VNWM_JTYP;
}
function WLBA_1(RNSF){
    return RNSF.KOLBGGEBWU + " : " +RNSF.WKLBGGEBWU;
}
function WLBA_2(RNSF){
    return RNSF.WKLBGGEBWU + " : " +RNSF.KOLBGGEBWU;
}
module.exports=SIGGZTWM_ZJQT;