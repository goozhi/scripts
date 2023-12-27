/**
 * 用户登陆
 */

// 加载模块
var http = require('http'); 
var querystring = require('querystring');

var server = http.createServer(function(request,response){
    var url = request.url;
    switch(url){
        case '/show': // 显示登陆页面
            show(request,response);
            break;
        case '/login': // 处理登陆请求
            login(request,response);
            break;
        default:
            response.writeHead(404,{});   
            break; 
    }
});

server.listen(8888,function(){
    console.log('服务器启动，监听8888端口。。。。');
});

// 显示登陆页面
function show(request,response){
    response.writeHead(200,{
        'Content-Type':'text/html'
    });

    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('    <meta charset="UTF-8">');
    response.write('    <meta name="viewport" content="width=device-width, initial-scale=1.0">');
    response.write('    <title>用户登陆</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('    <form action="/login" method="post">');
    response.write('        用户名：<input type="text" name="username"> <br>');
    response.write('        密码：<input type="password" name="password"> <br>');
    response.write('        <input type="submit" value="登陆">');
    response.write('    </form>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

// 处理登陆请求
function login(request,response){
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
        // console.log(params); // username=tom&password=123
        var obj = querystring.parse(params); // 将查询字符串转换为对象
        if(obj.username=='tom' && obj.password=='123'){
            response.write(`欢迎您：${obj.username}`);
        }else{
            response.write('用户名或密码不正确');
        }
        response.end();
    });
}