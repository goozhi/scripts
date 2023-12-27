const fs = require('fs')
const yueyu = require('./KPLU/yueyu.json')
const diwr = require('./KPLU/wrvr-ztwm-fr.json')

const arr2 = Object.entries(diwr).map(([key, value]) => {
    return { zt: Object.keys(value)[0], yfhi: Object.keys(yueyu[Object.keys(value)[0]]) }
})
fs.writeFileSync('text.json', JSON.stringify(arr2, null, 2))