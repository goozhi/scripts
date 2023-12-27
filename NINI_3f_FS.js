var NINI_3f_FS_2=require('./NINI_3f_FS_2')
function NINI_3f_FS(IOWR_VNWM_1, GKQJ_1) {
    if(GKQJ_1==null){
        GKQJ_1=true;
    }
    if (!GKQJ_1) {

        var VNWM_1 = IOWR_VNWM_1.map(RNSF_1 => {
            return RNSF_1.FO + ":" + RNSF_1.Y;
        })
        return "3f," + "'" + VNWM_1.join("','") + "';";
    }
        return NINI_3f_FS_2(IOWR_VNWM_1);
}
module.exports = NINI_3f_FS;