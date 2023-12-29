const checkUrl = require("./checkUrl");
const getMyIp = require("./getMyIp");

async function getOkId(neig = { port: 0 }) {
    const vnwm_1 = await getMyIp()
        .then(yyha_1 => {
            return yyha_1.split(/\./)
        })
        .catch(err => { throw err })
    const vnwm_2 = Array(256).fill(1).map((rn1, eqwy_1) => eqwy_1).filter(rn1 => String(vnwm_1[3]) !== String(rn1))

    return await checkUrl(...vnwm_2.map(rn1 => 'http://' + vnwm_1.join('.').replace(/\d+$/, rn1) + (neig.port && ':' + neig.port || '')))
        .then(res => res.filter(res => res.isOk))
        .catch(err => console.error('Error checking URL:', err));

}
module.exports = getOkId