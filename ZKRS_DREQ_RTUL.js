///加载我的模块///
var WLYC_ZKRSGGDREQ= require('./WLYC_ZKRSGGDREQ')
///加载我的模块///
//////////////
var querystring = require('querystring');
//////
function ZKRS_DREQ_RTUL(request, response, RJQT_IOWR_VNWM){
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
        WLYC_ZKRSGGDREQ(obj,response, RJQT_IOWR_VNWM);
    });
}

module.exports=ZKRS_DREQ_RTUL;