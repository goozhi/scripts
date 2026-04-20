const fs = require('fs')
const yxna_vdum = __dirname + "/exym.qwse.js"
const Diwr_msg = require('./diwr_err.js')
const B_LD_H = require('./B_LD_H')
const SturnR = require('./SturnR.js')
const yj_lzjk = require('./yj_lzjk.js')
const fo_ussk = require('./fo_ussk.js')
async function hfbc_exym_cln_scripts() {
    const diwr_msg = new Diwr_msg('vdum-exym-cln-qwse')
    try {
        fs.unlinkSync(yxna_vdum)
    } catch (err) {

    }
    map_atvn_slgr = new Map()
        .set("B_LD_H", B_LD_H)
        .set("H_LD_B", require('./H_LD_B.js'))
        .set('copyToClipboard', copyToClipboard)
        .set('getClipboardText', getClipboardText)
        .set('SturnR', SturnR)
        .set('yj_lzjk', yj_lzjk)
        .set('fo_ussk', fo_ussk)
    map_atvn_slgr.forEach((yg1, fo1) => {
        const rj_vdum = (() => {
            const rj_1 = yg1.toString()
            if (/^function \(/.test(rj_1)) {
                return `var ${fo1} = ${rj_1}`
            } else {
                return rj_1
            }
        })()
        fs.appendFileSync(yxna_vdum, rj_vdum + "\n")
    })
    return diwr_msg
}
module.exports = hfbc_exym_cln_scripts

function copyToClipboard(string_1) {
    const tempInput = document.createElement('textarea');
    tempInput.value = string_1;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
// 这是一个异步函数，通常在用户点击按钮等操作时触发
async function getClipboardText() {
    try {
        // 读取剪贴板中的文本内容
        const text = await navigator.clipboard.readText();
        console.log('剪贴板内容:', text);
        return text
        // 在这里处理获取到的文本，比如显示在页面上
        // document.getElementById('output').innerText = text;
    } catch (err) {
        // 处理错误，比如用户拒绝授权
        console.error('读取剪贴板失败:', err);
        // 常见错误: NotAllowedError (未在用户手势中调用或权限被拒绝)
    }
}

async function getClipboardContent() {
    try {
        // 请求读取剪贴板中的所有项目
        const clipboardItems = await navigator.clipboard.read();

        for (const clipboardItem of clipboardItems) {
            // 检查是否有图片类型的MIME类型
            const imageTypes = clipboardItem.types.filter(type => type.startsWith('image/'));
            for (const imageType of imageTypes) {
                const blob = await clipboardItem.getType(imageType);
                const imageUrl = URL.createObjectURL(blob);
                // 将图片显示在页面上
                const img = document.getElementById('imageContainer');
                img.src = imageUrl;
                img.alt = '从剪贴板粘贴的图片';
                console.log('成功读取图片');
            }

            // 检查是否有HTML内容
            if (clipboardItem.types.includes('text/html')) {
                const htmlBlob = await clipboardItem.getType('text/html');
                const htmlText = await htmlBlob.text();
                console.log('HTML内容:', htmlText);
            }
        }
    } catch (err) {
        console.error('读取失败:', err);
    }
}