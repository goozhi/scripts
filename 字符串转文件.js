var RturnS_2=function(RJSE1){//AFOA_UJ.RturnS
	RJSE1=RJSE1.replace(/(^\/|\/$)/g,"").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/([^\\])"/g,"$1").replace(/\\"/g,"\"").replace(/\\\(/g,"(").replace(/\\\)/g,")").replace(/\\\[/g,"[").replace(/\\\]/g,"]");
	return RJSE1;
}//AFOA_UJ.RturnS
var AFOA=require('./AFOA_UJ');
var YXNA1='./临时文件1.java';
JJJ = RturnS_2(AFOA.RJVT(YXNA1));
var YXNA2='./临时文件2.java';
AFOA.VDZV(YXNA2, JJJ);

var CSRF_RSPJ_VNWM = [
    {
        ZKRS:"字符串转文件",
        RSPJ_WU:"RturnS_2",
        RSPJ: RturnS_2,
        VKEY_CSRF:"将输入的字符串内容转为可视化的文本",
        CSRF_MSQU:"将当前夹的指定操作文件里的字符串变量的声明内容转为可视化的文本并输出到指定操作文件里,该方法不是完美的, 是有瑕疵的, 但它确实是有效的",
        CSRF_MCVN_VNWM:[{WUZT:'字符串文本',CSRF:'它是字符串变量的声明内容'}],
        EOWL_UXUX:'string'
    }
]