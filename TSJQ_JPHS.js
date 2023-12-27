///加载自己的模块///
var AFOA=require('./AFOA_UJ');
var CSRF_RSPJ_VNWM=require('./CSRF_RSPJ');
var TSJQ_2 = require('./TSJQ_2');
var WLYC_0= require('./WLYC');
var CSRF_RSPJ_VNWM=require('./CSRF_RSPJ');
///加载自己的模块///
////核心模块和第三方模块////
var querystring = require('querystring');
////核心模块和第三方模块////
////变量////
var IOWR_VNWM_1 = [];//存储指令对象.
IOWR_VNWM_1.push(AFOA.EOWL_IOWR(CSRF_RSPJ_VNWM, 'ZKRS', 'UKYP'));//这里的指令引用主题属性
IOWR_VNWM_1.push(AFOA.EOWL_IOWR(CSRF_RSPJ_VNWM, 'ZKRS', 'NIKC'));//这里的指令引用主题属性
////变量////
// 处理请求
function TSJQ_JPHS(request,response, RJQT_IOWR_VNWM){
    if(RJQT_IOWR_VNWM==null){
        console.log("TSJQ_JPHS: 缺少参数")
        return;
    }
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });

    // 绑定data事件，每当获取到请求参数时触发执行
    var params = '';
    request.on('data',function(part){  // 这里处理的是POST请求
        params += part;
    });
    // 绑定end事件，当请求参数获取结束时触发执行
    request.on('end',function(){
        var obj = querystring.parse(params); // 将查询字符串转换为对象
        WLYC_0.WLYC_1(TSJQ_2(obj.zhiling, obj, IOWR_VNWM_1, RJQT_IOWR_VNWM),response);
    });
}

module.exports=TSJQ_JPHS;