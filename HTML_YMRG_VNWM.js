function HTML_YMRG_VNWM(VNWM_1, RJSE_HTML, QOFTGGDYVY,GNFO_ZT){
    if(QOFTGGDYVY==null){
        throw "HTML_YMRG_VNWM : MCVN NRAP";
    }
    if(GNFO_ZT==null){
        GNFO_ZT='酾';
    }
    return RJSE_HTML.replace(GNFO_ZT,VNWM_1.join(QOFTGGDYVY));
}
module.exports=HTML_YMRG_VNWM;
