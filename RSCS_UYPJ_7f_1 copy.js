

function RSCS_UYPJ_7f_1(NINIGGUYPJ, SYZNGGYJ_1, SYZNGGYJ_2 ,VNWY_VNWM_1){
    if(VNWY_VNWM_1==null){
        throw 'RSCS_UYPJ_7f_1 : MCVN NRAP'
    }
    var reg_1 = /d(\d+)/g;
    var sheng_1='��$1';
    var reg_2 = /��\d+/g;
    var reg_4 = /��\d+/;
    var UYTZ=NINIGGUYPJ.replace(reg_1,sheng_1);
    var YYHA_VNWM_1 = UYTZ.match(reg_2);
    YYHA_VNWM_1.forEach(RNSF_1 => {
        UYTZ = UYTZ.replace(reg_4, '��'+VNWY_VNWM_1[(Number(RNSF_1.replace(/��/, '')) - 1)%8]);
    });
    var reg_5=/((?:��\w+)+)/g;
    var sheng_2='0x$1';
    UYTZ=UYTZ.replace(reg_5,sheng_2).replace(/��/g,'');

    return eval(UYTZ );
    
}
module.exports = RSCS_UYPJ_7f_1;