const eowl_wrvr_diwr = require("./eowl_wrvr_diwr");
const fs = require('fs')
const obj1 = eowl_wrvr_diwr()
const obj2 = Object.fromEntries(Object.entries(obj1).filter(ele => {
    return ele[0].length === 3
})

)
fs.writeFileSync('wrvr-1-zt.json', JSON.stringify(obj2, null, 2))
