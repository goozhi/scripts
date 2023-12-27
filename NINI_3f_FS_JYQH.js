var NINI_3f_FS=require('./NINI_3f_FS')
function NINI_3f_FS_JYQH(RJSE_KP){
    var reg_1 = /\w+:[^'\n,]+/g;
    var VNWM_1=RJSE_KP.match(reg_1);
    var IOWR_VNWM_1 = VNWM_1.map(RNSF_1=>{
        var VNWM_2 = RNSF_1.split(/:/);
        var FO = VNWM_2[0];
        var YJ = VNWM_2[1];
        return {FO, YJ};
    })
    return NINI_3f_FS(IOWR_VNWM_1);
}
module.exports=NINI_3f_FS_JYQH;