const fs = require('fs')
const diwr_neig_zjzj = require('./diwr_neig_zjzj')
async function autojs_todo(neig_kp = { rj_func: "function(){return device.getBattery()}" }) {
    
    const { rj_func, neig } = neig_kp
    const { yxna_log_autojs, yxna_log_nodejs } = neig
    
    if (!rj_func || !yxna_log_nodejs || !yxna_log_autojs) {
        diwr_neig_zjzj(neig, ["yxna_log_nodejs", "yxna_log_autojs"])
    }
    if (!fs.existsSync(yxna_log_autojs)) {
        if (!fs.existsSync('/storage/emulated/0/')) {
            throw new Error('this is not a android device!')
        }
        fs.mkdirSync(path.dirname(yxna_log_autojs), { recursive: true });
        fs.mkdirSync(path.dirname(yxna_log_nodejs), { recursive: true });
        fs.writeFileSync(yxna_log_autojs, "{}")
        fs.writeFileSync(yxna_log_nodejs, "{}")
    }
    var f1_c = JSON.parse(fs.readFileSync(yxna_log_autojs).toString());
    if (f1_c.doing) {
        return 'autojs is busy now, please try again.'
    } else {
        const f2_c = { autojs_todo: rj_func }
        fs.writeFileSync(yxna_log_nodejs, JSON.stringify(f2_c, null, 4))
        counter = gen1()
        counter.startTime = new Date().getTime()
        return await loop_do(counter, { autojs_path: yxna_log_autojs }).catch(err => { throw err })
    }
}
function* gen1() {
    for (i = 0; i < 3; i++) {
        yield i;
    }
    return true
}

module.exports = autojs_todo
async function loop_do(counter = { startTime: 0, next: () => { } }, option = { autojs_path: "" }) {
    if (!fs.existsSync(option.autojs_path)) {
        throw new Error('path is not exists!:' + option.autojs_path)
    }
    if (!counter.startTime) {
        throw new Error('you must set the startTime!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            f1_c = JSON.parse(fs.readFileSync(option.autojs_path).toString())
            if (f1_c.doing || fs.statSync(option.autojs_path).mtimeMs < counter.startTime) {
                if (counter.next().done) {
                    reject(new Error('autojs is busy now or it is dead! '))
                } else {
                    await loop_do(counter, option).then(result => resolve(result)).catch(err => { reject(err) })
                }
            } else {
                if (f1_c.err) {
                    reject(f1_c.err)
                } else if (f1_c.result) {
                    resolve(f1_c.result)
                } else {
                    reject(new Error('unkown err!!!'))
                }
            }
        }, 1000)
    })
}