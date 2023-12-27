var AFOA =require('./AFOA_UJ');
var UKYP_2 = require("./UKYP_2");
var NIKC_ZHQH = require('./NIKC_ZHQH')
function TSJQ_2(RJSE_TSJQ, obj, CSRF_RSPJ_VNWM_1, RJQT_IOWR_VNWM){
    if(RJSE_TSJQ==null||RJSE_TSJQ=="")
        {
            return "你输入了不明指令"+'<br>'+RJSE_1;
        }
    var IOWR_1 = EOWL_IOWR(CSRF_RSPJ_VNWM_1, "ZKRS", AFOA.AG_LD_AR(RJSE_TSJQ));
    if(IOWR_1!=false){
        if(IOWR_1.ZKRS=='UKYP'){
            return UKYP_2(obj, RJQT_IOWR_VNWM);
        }
        else if(IOWR_1.ZKRS=='NIKC'){
            return NIKC_ZHQH(RJQT_IOWR_VNWM);
        }
        else{
            return "你输入了不明指令"+'<br>'+RJSE_1;
        }
    }
    else{
        var RJSE_1=AFOA.PZVA_SLGR(CSRF_RSPJ_VNWM_1, "CSRF_MSQU").join('<br>');
    return "你输入了不明指令"+'<br>'+RJSE_1;
    }
}
function EOWL_IOWR (IOWR_VNWM_1 , PZVA_WUZT_1 , PZVA_BQEO_1){
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    for(var EQWY_1 = 0 ; EQWY_1 < IOWR_VNWM_1.length ; EQWY_1++){
        var IOWR_1 = IOWR_VNWM_1[EQWY_1];
        if(IOWR_1[PZVA_WUZT_1]==PZVA_BQEO_1){
            return IOWR_1;
        }
    }
    return false;
}

module.exports=TSJQ_2;