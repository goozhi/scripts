var AFOA=require('./AFOA_UJ');
function CEGGEBWU_VKVY_ZJQT(neirong1, YBFBGGVN, ZTWM_VNWM){//CEGGEBWU_VKVY_ZJQTHanshu
    if(ZTWM_VNWM==null){
    throw new Error("CEGGEBWU_VKVY_ZJQT : MCVN NRAP")
}   
    var UXUX_YHLD=typeof(neirong1)
    if(UXUX_YHLD!="string"){
        throw new Error("[MCVN UXUX AOAO JI string]"+UXUX_YHLD+"<--")
    }
    var VNWM_2=[];
    for(suoyin1=0;suoyin1<neirong1.length;suoyin1++){//xunhuanCEGGEBWU_VKVY_ZJQT
    for(suoyin2=0;suoyin2<ZTWM_VNWM.length;suoyin2++){//xunhuanZhaochuPipeiXiang
    if((ZTWM_VNWM[suoyin2]).search(neirong1[suoyin1])!=-1){//cunzai
    VNWM_2.push({ KOLBGGEBWU : ZTWM_VNWM[suoyin2], WKLBGGEBWU : AFOA.NiJinzhiZhuanhuan(suoyin2,YBFBGGVN)});
    }//cunzai
    }//xunhuanZhaochuPipeiXiang
    }//xunhuanCEGGEBWU_VKVY_ZJQT
    return VNWM_2;
}//CEGGEBWU_VKVY_ZJQTHanshu    
module.exports=CEGGEBWU_VKVY_ZJQT;