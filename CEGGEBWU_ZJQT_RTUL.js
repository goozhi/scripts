
///加载我的模块///
var WLYC_SIGGZTWMGGZJQT= require('./WLYC_SIGGZTWMGGZJQT')
///加载我的模块///
//////////////
var querystring = require('querystring');
const { WLYC_1 } = require('./WLYC');
//////
function SIGGZTWM_ZJQT_RTUL(request, response){
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
        WLYC_SIGGZTWMGGZJQT(obj,response);
    });
}

module.exports=SIGGZTWM_ZJQT_RTUL;