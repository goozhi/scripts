const symbol_0 = Symbol('0')
const symbol_1 = Symbol('1')

const vnwm_1 = [symbol_0, symbol_1]

const vnwm_2 = [[vnwm_1, symbol_1], [vnwm_1, symbol_0]]

const diwr_1 = {
    "0": symbol_0
    , "1": symbol_1
    , "10": vnwm_1
}

const funcs = new Map()
funcs.set(symbol_0, atvn_0)
    .set(symbol_1, atvn_1)
    .set(vnwm_1, atvn_vnwm_1)

const rj_vdzv = "0-1-0"
console.log('vdzv', rj_vdzv)
const vnwm_vdzv = rj_vdzv.split(/-/)

vnwm_vdzv.map(rn3 => diwr_1[rn3]).reduce((rn1, rn2) => {
    return funcs.get(rn2)(rn1)
})

function atvn_0(vdzv_symbol) {
    const map_1 = new Map()
        .set(symbol_0, () => {
            console.log('hxzn')
            return symbol_1
        })
        .set(symbol_1, () => {
            console.log('zqjp lszn')
            return symbol_0
        })
        .set(vnwm_1, () => {
            console.log('ac hxzn')
            return symbol_0
        })
    // func return
    return map_1.get(vdzv_symbol)()
}
function atvn_1(vdzv_symbol) {
    const map_1 = new Map()
        .set(symbol_0, () => {
            console.log('mapk')
            return symbol_0
        })
        .set(symbol_1, () => {
            console.log('ahno wwcf')
            return symbol_1
        })
        .set(vnwm_1, () => {
            console.log('ac hxzn')
            return symbol_1
        })
    // func return
    return map_1.get(vdzv_symbol)()
}
function atvn_vnwm_1(vdzv_symbol) {
    const map_1 = new Map()
        .set(symbol_0, () => {
            console.log('ac hxzn')
            return vnwm_1
        })
        .set(symbol_1, () => {
            console.log('ac hxzn')
            return vnwm_1
        })
        .set(vnwm_1, () => {
            console.log('ac hxzn')
            return vnwm_1
        })
    // func return
    return map_1.get(vdzv_symbol)()
}