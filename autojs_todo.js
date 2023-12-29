const fs = require('fs')
async function autojs_todo(rj_func = "function(){return device.getBattery()}") {
    const f1 = "/storage/emulated/0/脚本/log-autojs.json"
    const f2 = "/storage/emulated/0/脚本/log-nodejs.json"
    if (!fs.existsSync(f1)) {
        if (!fs.existsSync('/storage/emulated/0/')) {
            throw new Error('this is not a android device!')
        }
        fs.mkdirSync(path.dirname(f1), { recursive: true });
        fs.mkdirSync(path.dirname(f2), { recursive: true });
        fs.writeFileSync(f1, "{}")
        fs.writeFileSync(f2, "{}")
    }
    var f1_c = JSON.parse(fs.readFileSync(f1).toString());
    if (f1_c.doing) {
        return 'autojs is busy now, please try again.'
    } else {
        const f2_c = { autojs_todo: rj_func }
        fs.writeFileSync(f2, JSON.stringify(f2_c, null, 4))
        counter = gen1()
        counter.startTime = new Date().getTime()
        return await loop_do(counter, { autojs_path: f1 }).catch(err => { throw err })
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