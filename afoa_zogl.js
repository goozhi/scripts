const fs = require('fs')
const hd_rjqt_tum=require("./hd_rjqt_tum")
const unicode_LD_ZTFR_SU = require('./unicode_LD_ZTFR_SU')
const yxna = "D:/xyzd/unicode_to_hanyu_pinyin.txt"
const rjyf = require('./KPLU/wrvr/atvn/rjyf')
const wrvr = require('./KPLU/wrvr')
const path = require('path')
const nikc_jkub = require('./nikc_jkub')
const nikc_ld_diwr_zv_rjvt_rjqt_bqeo = require('./nikc_ld_diwr_zv_rjvt_rjqt_bqeo')
const getMyIp = require('./getMyIp')
const vnwm_1 = []
const obj_ybkc = {}
const copy_test_src = path.resolve('test/copy_test_src')
const copy_test_tar = path.resolve('test/copy_test_src/test_1')
const neig_test = { ignoreFiles: ['^test_1/hello_2.*'] }
const obj_Src = {
    test: {
        copy_test_src: {
            test_1: {
                hello_1: 'hello 1',
                hello_2: 'hello 2',
            },
            hello_3: 'hello 3'
        }
    }
}
hd_rjqt_tum(copy_test_src)
createTestSrc(obj_Src, path.resolve())

nikc_jkub(copy_test_src,
    copy_test_tar,
    neig_test)
    .then(res => {
        const obj_tar = nikc_ld_diwr_zv_rjvt_rjqt_bqeo(copy_test_tar)
        obj_tar
        console.assert(obj_tar['test_1']['hello_1'].toString() === 'hello 1', `copy failed`)
        console.assert(!obj_tar['test_1']['hello_2'], `neig failed ${JSON.stringify(neig_test)}`)
    }).catch(err => console.error(err))

// test ip
console.assert(/\d+\.\d+\.\d+/.test(getMyIp()),"function getMyIp is wrong")
console.log("Done. Finish afoa zogl.")
function createTestSrc(obj_Src = {}, parentPath = "") {
    if (!fs.existsSync(parentPath)) {
        fs.mkdirSync(parentPath)
    }
    Object.entries(obj_Src).forEach(([key, value]) => {
        const currentPath = path.join(parentPath, key)
        if (typeof value === 'object') {
            createTestSrc(value, currentPath)
        } else if (typeof value === 'string') {
            fs.writeFileSync(currentPath, value)
        } else {
            throw new Error('desc-error:typeerror-')
        }
    })
}