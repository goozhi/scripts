const checkUrl = require("./checkUrl");

checkUrl('http://192.168.43.32:9000', 'http://192.168.43.237:9000'
    // , 'http://192.168.43.238:9000'
    // , 'http://192.168.43.239:9000'
    // , 'http://192.168.43.240:9000'
    // , 'http://192.168.43.241:9000'
    , 'http://192.168.43.242:9000').then(res => console.log(res)).catch(error => console.error(error))