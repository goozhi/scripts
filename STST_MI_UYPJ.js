function STST_MI_UYPJ(arr_1, arr_2_kp){
    var arr_2_yhld=arr_2_kp;
    var STST_MI;
    var STST_VN=0;
    var RJSE_YHLD
    if(arr_1.length<2||arr_2_yhld.length<2){
        if(arr_1.length<2){
            RJSE_YHLD=arr_1
        }else{
            RJSE_YHLD=arr_2_yhld
        }
        throw new Error("RJSE MCVN HPMI ACOA AGOC 2:"+RJSE_YHLD);
    }
    var VNWM_1=[]
    var VNWM_2=[]
    for(var i1=0;i1<arr_1.length-1;i1++){
        VNWM_1.push(arr_1[i1]+arr_1[i1+1])
    }
    for(var i2=0;i2<arr_2_yhld.length-1;i2++){
        VNWM_2.push(arr_2_yhld[i2]+arr_2_yhld[i2+1])
    }
    for(var i1=0;i1<VNWM_1.length;i1++){
        var EQWY_1=VNWM_2.indexOf(VNWM_1[i1])
        if(EQWY_1!=-1){
            STST_VN++;
            VNWM_2.splice(EQWY_1,1)

        }
    }
        STST_MI=STST_VN*2/((arr_1.length-1)+(arr_2_kp.length-1))
    return STST_MI
}
module.exports=STST_MI_UYPJ;