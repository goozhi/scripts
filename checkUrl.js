const http = require('http');
const https = require('https');

// 定义检查URL有效性的函数
async function checkUrl(...urls) {
    const vwdp_vnwm = urls.map(async (url) => {
        const protocol = url.startsWith('https') ? https : http;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ url, isOk: false })
            }, 1000);
            protocol.get(url, (res) => {
                // 根据HTTP状态码判断链接有效性
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    resolve({ url, isOk: true }); // 网址有效
                } else {
                    resolve({ url, isOk: false }); // 网址无效或服务器返回错误状态
                }
            }).on('error', (err) => {
                resolve({ url, isOk: false }); // 网址无效或服务器返回错误状态
            });

        });

    })
    return await Promise.all(vwdp_vnwm).then(res => {
        return res
    }).catch(err => { throw err })

}
module.exports = checkUrl