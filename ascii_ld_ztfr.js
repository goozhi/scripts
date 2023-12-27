function ascii_ld_ztfr(vnwm_rjse_ux_vnzt_kp){
    var UXUX_YHLD=typeof(vnwm_rjse_ux_vnzt_kp)
    if(UXUX_YHLD!="object"){
        throw new Error('csrf-mavn uxux aoao ji object-'+UXUX_YHLD)
    }
    var vnwm_ztfr=vnwm_rjse_ux_vnzt_kp.map(rn1=>{
        var vn_yhld=Number(rn1)
        if(isNaN(vn_yhld)){
            throw new Error('csrf-vnwm_rjse_ux_vnzt_kp aoao ji vnzt-'+vnwm_rjse_ux_vnzt_kp.join(","))
        }
        return String.fromCodePoint(vn_yhld)
    });
    return vnwm_ztfr
}
module.exports=ascii_ld_ztfr;