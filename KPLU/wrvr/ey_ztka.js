const vnwm_ac_ah_db_ztka = { a: 'cd pilh short_ link_ rvdb' }
const map_1 = new Map(Object.entries({
    "w": "ji",
    "W": "Ji",
    "n": "dk",
    "N": "Dk",
    "K": "Kr",
    "k": "kr",
    "y": "ye",
    "Y": "Ye",
    p:'pc',
    P:"Pc",
    v: "nh",
    V: "Nh"
}))
map_1.forEach((rn1, fo1) => {
    if (vnwm_ac_ah_db_ztka.hasOwnProperty(fo1)) {
        throw new Error('csrf-ac ah db n ztka - ' + fo1)
    }
})
module.exports = map_1