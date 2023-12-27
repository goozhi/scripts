const axios = require('axios')
// const y1 = 'https://wrvr.cpolar.top/eysj-zjqt/'
// const y1 = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
// const y1 = 'http://localhost:9000/eysj-zjqt/'
const y1 = 'https://en.wiktionary.org/wiki/'
axios.get(`${y1}cool`)
    .then(response => {
        // const definitions = response.data[0].meanings.map(meaning => meaning.definitions[0].definition).join('\t\n');
        // console.log(definitions)
        console.log(response)
    })
    .catch(error => {
        console.error('Error:', error);
    });
