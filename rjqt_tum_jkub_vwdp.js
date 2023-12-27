//导入核心模块
const path = require('path')
const fs = require('fs')
async function rjqt_tum_jkub_vwdp(OriginFilePath, CopyFilePath, neig_kp = {}) {
    const neig_1 = Object.assign({ ignoreFiles: [] }, neig_kp)
    //读取newFile文件夹下的文件
    var files = fs.readdirSync(OriginFilePath, { withFileTypes: true })
    const ignoreFiles = [...neig_1.ignoreFiles]
    delete neig_1.ignoreFiles
    var vwdp_vnwm_1 = files.map(async file => {
        if (ignoreFiles.some(ele => ele.test(file.name))) {
            return
        }
        //获取旧文件夹中要复制的文件
        const OriginFile = path.resolve(OriginFilePath, file.name)
        //获取新文件夹中复制的地方
        const CopyFile = path.resolve(CopyFilePath, file.name)
        if (!(path.relative(CopyFilePath, OriginFile))) {
            return
        }
        else if (!/\w/.test(path.relative(CopyFilePath, OriginFile))) {
            throw new Error(`desc-error: You can not define the output file in the origin path-${CopyFilePath}-kp-${OriginFile}`)
        }

        if (!file.isDirectory()) {
            //将文件从旧文件夹复制到新文件夹中
            fs.copyFileSync(OriginFile, CopyFile)
        } else {//如果是文件夹就递归变量把最新的文件夹路径传过去
            const CopyDirPath = path.resolve(CopyFilePath, file.name)
            const OriginDirPath = path.resolve(OriginFilePath, file.name)
            try {
                fs.mkdirSync(CopyDirPath)
            } catch (err) {

            }
            // OriginFilePath = OriginPath
            // CopyFilePath = DirPath
            await rjqt_tum_jkub_vwdp(OriginDirPath, CopyDirPath, neig_1)
        }

    })
    return new Promise((resolve, reject) => {
        Promise.all(vwdp_vnwm_1).then(jtyj => {
            resolve(true)
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = rjqt_tum_jkub_vwdp