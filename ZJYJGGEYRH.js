var AFOA=require("./AFOA_UJ.js")
function ZJYJGGEYRH(RJSE_ZTHI_VNWM){
    var VNWM_2 = [16, 14, 12, 8];
    var RJSE_KP=AFOA.H_LD_B(RJSE_ZTHI_VNWM.join(''));
    
    var VNWM_3=[];
    for(var EQWY_1 = 0; EQWY_1< VNWM_2.length; EQWY_1++){
        var RNSF_1=VNWM_2[EQWY_1];
        var RJSE_1 = RJSE_KP.slice(0,Math.floor(RNSF_1/3*2));
        var CGNE_RJSE_ZTHI_VNWM=RJSE_KP.match(new RegExp(RJSE_1,"g"));
        if(CGNE_RJSE_ZTHI_VNWM.length>2){
            
            VNWM_3.push({TSZNGGTRVN : RNSF_1, CGNEGGLIVN: CGNE_RJSE_ZTHI_VNWM.length});
        }
    }
    return VNWM_3;
}
module.exports=ZJYJGGEYRH;