function BRTZ_FS_Beiqi_ec180(QH_NINI_WU,QH_DIYC_YG,QH_TRIG_KLVQ){
    var NHVN_GFVN_FS=require("./NHVN_GFVN_FS")
    var reg_1 = /(\w+) "(.*?)"/g;
    VNWM_1=QH_NINI_WU,QH_DIYC_YG,QH_TRIG_KLVQ.match(reg_1);
    if(VNWM_1==null){
        throw new Error("RA YJAB FRGR BRTZ DK BQEO :"+QH_NINI_WU,QH_DIYC_YG,QH_TRIG_KLVQ);
    }
    var VNWM_2=VNWM_1.map((RNSF_1)=>{
        var RJSE_YHLD=RNSF_1.replace(reg_1,"$1");
        if(!/^[0-9]+$/i.test(RJSE_YHLD)){
            throw new Error("EQWY ACJI 10 TYUB :" + RNSF_1)
        }
        return NHVN_GFVN_FS(Number(RJSE_YHLD).toString(16).toLowerCase())+":"+RNSF_1.replace(reg_1,"$2");
    });
    return '\''+VNWM_2.join("','")+"','oth:未定义';";
}
module.exports=BRTZ_FS_Beiqi_ec180;