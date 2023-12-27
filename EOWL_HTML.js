var fs1=require('fs')
function EOWL_HTML(IOWR_VNWM_1, ZKRS_1, BQEO_1,yxna_action){
    if(yxna_action==null){
        throw new Error('csrf-mcvn nrap-')
    }

    var form_1='<form name="NINI_form" action="'+yxna_action+'" method="post">';
    var RJSE_1 = "";
    for(var EQWY_1=0;EQWY_1<IOWR_VNWM_1.length;EQWY_1++){
        var ZKRS_2 = IOWR_VNWM_1[EQWY_1][ZKRS_1];
        var BQEO_2 = IOWR_VNWM_1[EQWY_1][BQEO_1];
        var RJQTGGWDBU_UBQT = '<input type="text" name="ZKRS_1" value="'+ZKRS_2+'"><input type="text" name="ZKRS_2"> 指令框:<input onfocus="select()" type="text" name="TSJQ_3"><input type="submit" value="确认">';
        RJSE_1 += '<div style="background:#fef4d2;">'+form_1+'<h3>'+ZKRS_2+'</h3>'+RJQTGGWDBU_UBQT+'<textarea onfocus="select()" name="BQEO_0_1" rows="'+BQEO_2.split(/\n/).length+'" cols="120">'+BQEO_2+'</textarea>'+'<br></form><hr></div>';
    }
    return RJSE_1;
}
module.exports=EOWL_HTML;