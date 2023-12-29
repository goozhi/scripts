const checkUrl = require("./checkUrl");

// 使用该函数
checkUrl('http://192.168.98.3', 'http://192.168.43.32:9000/')
    .then(isValid => console.log(isValid))
    .catch(err => console.error('Error checking URL:', err));
