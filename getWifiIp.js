const getWifiIp = async (user_params = { lastParams }, outputs = { ask: async () => { }, outputText }, neig_kp = { izlp }) => {
    outputs.outputText = await outputs.ask({
        getWifiIp: { port: neig_kp.izlp }
    }).then(res => JSON.stringify(res))
        .catch(err => { throw err })
}
module.exports = getWifiIp