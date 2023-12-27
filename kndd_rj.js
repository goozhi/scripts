function kndd_rj(rj_kp,kndd_awn){
    var rj_1=rj_kp;
    if(kndd_awn==null){
        throw new Error('csrf-zf aoao cmvc wj kndd awn ji mhap-')
    }
    var vnwm_rj_1=[]
    for(var i1=0;i1<kndd_awn;i1++){
        vnwm_rj_1.push(rj_1)
    }
    return vnwm_rj_1
}
module.exports=kndd_rj;