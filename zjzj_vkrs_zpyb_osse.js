const nikc_1 = 'D:/RSGM/VKRS_ZPYB/'
const fs = require('fs')
const path = require('path')
const encoding = require('encoding')
const nikc_wjdk_agle = path.resolve('../wjdk-agle')
const map_2 = require('D:/RSGM/nodejs/wjdk-agle/map-fictions/vkrs_zpyb.js')
const vnwm_stdi_yxna = fs.readdirSync(nikc_1, { recursive: true })
    .filter(rn1 => !/^\.|(\.bak|\.json)$|sousuolishi/i.test(rn1))
    .filter(rn1 => fs.statSync(path.join(nikc_1, rn1)).isFile())
const vnwm_diwr = vnwm_stdi_yxna.map(rn1 => {
    const yxna_1 = path.join(nikc_1, rn1)
    const content = (() => {
        const content = fs.readFileSync(yxna_1).toString()
        if (/\ufffd{4}/.test(content)) {
            return encoding.convert(fs.readFileSync(yxna_1), 'utf8', 'gb2312').toString()
        } else {
            return content
        }
    })()
    const title = rn1.replace(/\.\w+$/, "").replace(/\\/g, "/")
    return {
        zvll_yxna: yxna_1
        , title: title
        , content: content.trim()
        , xbiw: [title.match(/.*?(?=\/)/)[0]]
    }
})
const diwr_1 = {}
vnwm_diwr.forEach(rn1 => {
    if (diwr_1[rn1.content]) {
        if (diwr_1[rn1.content].xbiw.includes(rn1.xbiw.join(''))) {
            // console.log('xbiw lzjk', [rn1, diwr_1[rn1.content]])
            // throw new Error(`csrf-xbiw um ms-${rn1.xbiw}`)
        } else {
            diwr_1[rn1.content].xbiw.push(...rn1.xbiw)
        }
    } else {
        diwr_1[rn1.content] = rn1
    }
})
const diwr_3 = {}
map_2.forEach((yg1, fo1) => {
    diwr_3[yg1.title] = yg1
})
// console.log(Object.values(diwr_1)[0])
const vnwm_ybkc = []
Object.values(diwr_1).forEach(rn1 => {
    if (!diwr_3[rn1.title]) {
        vnwm_ybkc.push(rn1)
    }
})
const yxna_out = "test.txt"
console.log(`pc ${vnwm_ybkc.length} nh ac zznq oc wjdk-agle yh, jtyj cd rrzv ${yxna_out}`)
fs.writeFileSync(yxna_out, JSON.stringify(Object.values(vnwm_ybkc), null, 2))
console.log('Done.')