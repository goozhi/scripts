const auto_get_ip = async (user_params = { lastParams }, outputs = { ask: () => { }, outputText }, neig_kp = {}) => {
  const neig = Object.assign({ neig_kp }, neig_kp)
  outputs.outputText = await outputs.ask(
    {
      autojs_todo: {
        neig,
        rj_func: `
            function(){
importClass("java.net.InetAddress");
importClass("java.net.NetworkInterface");
importClass("java.net.Inet6Address");

let intranetIP = getIntranetIP();

return intranetIP

log(data);

function getIntranetIP() {
  // 获取内网IP地址
  let networkInterfaces = NetworkInterface.getNetworkInterfaces();
  for(var key in networkInterfaces){
  log(key, typeof networkInterfaces[key])  
  }

  while (networkInterfaces.hasMoreElements()) {
    let networkInterface = networkInterfaces.nextElement();
    let inetAddresses = networkInterface.getInetAddresses();
    while (inetAddresses.hasMoreElements()) {
      let inetAddress = inetAddresses.nextElement();
      if (inetAddress instanceof Inet6Address) {
        continue;
      }
      let ip = inetAddress.getHostAddress();
      log("",inetAddress)
      log(ip);
      if (!"127.0.0.1".equals(ip)) {
        return inetAddress.getHostAddress();
      }
    }
  }
}

}            `

      }
    }
  ).catch(err => { throw err })
}
module.exports = auto_get_ip

