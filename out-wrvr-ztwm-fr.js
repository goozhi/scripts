const eowl_wrvr_diwr = require("./eowl_wrvr_diwr");
const fs = require('fs')
const obj1 = eowl_wrvr_diwr()
const obj2 = Object.fromEntries(Object.entries(obj1).filter(ele => {
    return ele[0].length === 3
})

)
const obj3 = {}
Object.entries(obj2).forEach(ele => {
    const rj1 = ele[0].replace(/.$/, "")
    obj3[rj1] = Object.assign(obj3[rj1] ? obj3[rj1] : {}, { [ele[1]]: "" })
})

Object.entries(obj3).map((ele) => {
    const vnwm1 = Object.keys(ele[1]);
    vnwm1.forEach((ele2, index) => {
        ele[1][ele2] = { index: index }
    })

})

fs.writeFileSync('wrvr-ztwm-fr.json', JSON.stringify(obj3, null, 2))
