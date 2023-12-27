var AFOA=require('./AFOA_UJ')
function CEGGEBWU_VKRF_ZJQT(neirong1, YBFBGGVN, ZTWM_VNWM){//CEGGEBWU_VKRF_ZJQTHanshu
    if(ZTWM_VNWM==null){
        throw new Error("CEGGEBWU_VKRF_ZJQT : MCVN NRAP")
    }
    var VNWM_2=new Array()
    neirong1=neirong1.replace(/\s/g,"");
    for(suoyin3=0;suoyin3<neirong1.length;){//xunhuanPipei
    suoyin3=(suoyin3+2)%(neirong1.length+2);
    var suoyin1=AFOA.ShunJinzhiZhuanhuan(neirong1.slice(suoyin3-2,suoyin3), YBFBGGVN);
    VNWM_2.push({KOLBGGEBWU : ZTWM_VNWM[suoyin1], WKLBGGEBWU : neirong1.slice(suoyin3-2,suoyin3)});
    }//xunhuanPipei
    return VNWM_2;
    }//CEGGEBWU_VKRF_ZJQTHanshu
module.exports=CEGGEBWU_VKRF_ZJQT;
    