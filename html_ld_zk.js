function html_ld_zk(rj_kp){
    var rj_1=rj_kp;
    return rj_1.replace(/\{/g,"&#123;").replace(/\}/g,"&#125;").replace(/>/g,"&#62;").replace(/</g,"&#60;")
}
module.exports=html_ld_zk;