function zjzj_outputText(outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    if (typeof outputs.outputText !== "string") {
        console.error(`${neig.zkrs || 'csrf-err'}:\noutputs dk outputText aoao lh string uxux.`)
    }
}
module.exports = zjzj_outputText