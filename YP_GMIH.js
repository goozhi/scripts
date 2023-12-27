
var RJSE_1='Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1 Q1';
var DYIH='Q1';
var YP_GMIH_1=YP_GMIH(RJSE_1, DYIH);
throw YP_GMIH_1;
function YP_GMIH(RJSE_1, DYIH) {
    var reg_1;
    var RJSE_3;
    var VN_1;
    if (/\d$/.test(DYIH)) {
        RJSE_3= DYIH.replace(/\d+$/,'');
        VN_1= Number(DYIH.match(/\d+$/)[0]);
    } else if (/^\d/.test(DYIH)) {
        RJSE_3= DYIH.replace(/^\d+/,'');
        VN_1= Number(DYIH.match(/^\d+/)[0]);
    } else {
        throw 'YP_GMIH : MCVN BRTZ MSOX : '+ DYIH;
    }
    var reg_2=new RegExp(DYIH,'g');    
    RJSE_1=RJSE_1.replace(reg_2,'酾'+VN_1);

    reg_1=new RegExp('酾'+VN_1);
    
    
    for (EQWY_1 = 0; ; EQWY_1++) {
        if (reg_1.test(RJSE_1)) {
            RJSE_1 = RJSE_1.replace(reg_1, RJSE_3+VN_1);
            VN_1++;
        }
        else {
            break;
        }
    }
    return RJSE_1;
}

