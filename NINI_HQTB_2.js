//��������Ŀ�ı�, ÿ����Ŀ����������д����Ե�ֵ����ȥУ��.
var fs1 = require('fs')
var NINI_HQTB=require('./NINI_HQTB')
var YXNA_3 = 'D:/��ʱ�ļ�1.TXT'
// var VNWM_3 = RJSE_2.split(/\s*,\s*/);
var     RJSE_1 = fs1.readFileSync(YXNA_3).toString();
var YXNA_2 = 'D:/��ʱ�ļ�2.TXT'

var VNWM_2 = NINI_HQTB(RJSE_1);
fs1.writeFileSync(YXNA_2, VNWM_2.join('\n'));