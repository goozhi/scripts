const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadFile(url, outputFilePath) {
  try {
    // 发送 HTTP GET 请求并指定 responseType 为 'stream'
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream', // 确保返回的是流
    });
    if(response.isOk===false){
        throw response.reason
    }

    //console.log(response)//
    // 创建一个可写入的文件流
    const writer = fs.createWriteStream(outputFilePath);

    // 将 HTTP 流管道化到文件写入流
    response.data.pipe(writer);

    // 定义完成下载的函数
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
      
      // 如果你想显示下载进度，可以监听 'data' 事件
      let totalLength = response.headers['content-length'];
      let receivedLength = 0;
      if (totalLength) {
        response.data.on('data', (chunk) => {
          receivedLength += chunk.length;
          //console.log(`Progress: ${Math.round(receivedLength * 100 / totalLength)}%`);
        });
      }
    });
  } catch (error) {
    console.error('Failed to download file:'+url, error.reason||error.message||error);
    throw error;
  }
}
module.exports=downloadFile
/*
downloadFile('https://example.com/largefile.zip', path.join(__dirname, 'largefile.zip'))
  .then(() => console.log('Download completed!'))
  .catch((err) => console.error('Download failed:', err));
  */