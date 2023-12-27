//请输入帧号, 每行一个帧号.用于提取它所在的项目.
var fs1 = require('fs')
var YXNA_1 = 'D:\\李国志\\工作文件_正在做\\吉利\\sysData_utf8_最新.txt';
var YXNA_3 = 'D:/临时文件1.TXT'
// var VNWM_3 = RJSE_2.split(/\s*,\s*/);
var VNWM_3 = fs1.readFileSync(YXNA_3).toString().split(/(?:\r\n|\n)/);
var YXNA_2 = 'D:/临时文件2.TXT'

ZHVT_NINI(YXNA_1,VNWM_3,YXNA_2);
function ZHVT_NINI(YXNA_1, VNWM_3) {
    
if (!fs1.existsSync(YXNA_1)) {
    throw 'YXNA AC ZZNQ : ' + YXNA_1;
}
var RJSE_1 = fs1.readFileSync(YXNA_1).toString();
var RJSE_1_VNWM_1 = RJSE_1.split(/\n/);
var VNWM_2 = []
var VNWM_4 = []
RJSE_1_VNWM_1.forEach((RNSF_1,EQWY_1) => {
    if(new RegExp('(?:' + VNWM_3.join('|') + ')','i').test(RNSF_1)){
        var RJSE_1 = RNSF_1+(EQWY_1+1);
        VNWM_2.push(RJSE_1);
        VNWM_4.push(RNSF_1);
    }
})
fs1.writeFileSync(YXNA_2, VNWM_2.join('\n')+VNWM_4.join('\n'));
}