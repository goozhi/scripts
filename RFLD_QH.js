function RFLD_QH(BQEO_KP,KNDD_AWN){
    if(KNDD_AWN==null){
        KNDD_AWN=0
    }
    VNWM_BQEO=BQEO_KP.split(/\n/).reverse();
    var VYVY_VNWM_1=[VNWM_BQEO]
    for(var i1=0;i1<KNDD_AWN;i1++){
        VYVY_VNWM_1.push(VNWM_BQEO);
    }
    return VYVY_VNWM_1.map(RNSF=>{
        return RNSF.join('\n');
    });
}
module.exports=RFLD_QH