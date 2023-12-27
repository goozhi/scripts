const { default: axios } = require('axios')
const fs = require('fs')
const path = require('path')
const bgwv_kplu = __dirname + '/bgwv-kplu'
fs.mkdir(bgwv_kplu, (err) => {
})
const bgwv_kplu_ssvl = '/storage/emulated/0/wrvr/rdrj_eysj'
var gkqj_ssvl = false
if (fs.existsSync(bgwv_kplu_ssvl.replace(/wrvr.*/, ''))) {
    gkqj_ssvl = true
    fs.mkdir(bgwv_kplu_ssvl, { recursive: true }, (err) => {
    })
}
async function eysj_zjqt(neig = { rjyf: true, eysj: "" }) {
    if (!neig.eysj) {
        throw new Error('you must give a word, but there is nothing')
    } else if (!/^[-\w]+$/.test(neig.eysj)) {
        throw new Error('have some illegal characters: ' + neig.eysj)
    } else {
        if (fs.existsSync(path.join(bgwv_kplu_ssvl, neig.eysj + '.json'))) {
            eysj_vnwy = require(path.join(bgwv_kplu_ssvl, neig.eysj))
        } else if (fs.existsSync(path.join(bgwv_kplu, neig.eysj + '.json.bak'))) {
            eysj_vnwy = JSON.parse(fs.readFileSync(path.join(bgwv_kplu, neig.eysj + '.json.bak')))
        } else {
            eysj_vnwy = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${neig.eysj}`)
                .then(response => {
                    // const definitions = response.data[0].meanings.map(meaning => meaning.definitions[0].definition);
                    // console.log(response.data[0].phonetics[0].audio);
                    const rj_eysj = JSON.stringify(response.data[0], null, 4)
                    fs.writeFile(path.join(bgwv_kplu, neig.eysj + '.json.bak'), rj_eysj, (err) => {
                        if (err) {
                            throw err
                        }
                    })
                    if (gkqj_ssvl) {
                        fs.writeFile(path.join(bgwv_kplu_ssvl, neig.eysj + '.json'), rj_eysj, (err) => {
                            if (err) {
                                throw err
                            }
                        })
                    }
                    return response.data[0]
                })
                .catch(error => {
                    throw error
                });
        }
        if (neig.rjyf) {
            return eysj_vnwy.phonetics[0].audio
        } else {
            return eysj_vnwy
        }
    }
}
module.exports = eysj_zjqt