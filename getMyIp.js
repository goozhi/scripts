const os = require('os');

async function getMyIp() {
    const addr = os.networkInterfaces()
    if (addr) {
        const ip = JSON.stringify(addr).match(/(?<=address.*)192\.\d+.\d+.\d+/)
        if (ip) {
            return (ip[0])
        }
    } else {
        return ('0.0.0.0')
    }
}
module.exports=getMyIp
