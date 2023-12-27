const uz_ms = require("./uz_ms")

function HD_LZJK(diwr_mcvn) {//this.quChongfuHang
    var RJSE_1 = diwr_mcvn.RJSE_KP
    var LG_XBST = diwr_mcvn.LG_XBST
    var DS_XBST = diwr_mcvn.DS_XBST
    var gkqj_ytnc_cl_hd = diwr_mcvn.gkqj_ytnc_cl_hd
    if (typeof (gkqj_ytnc_cl_hd) != "boolean") {
        uz_ms("csrf-gkqj_ytnc_cl_hd aoao ji boolean-" + JSON.stringify(diwr_mcvn))
    }
    var gkqj_zznq_ytnc = false
    var gkqj_pc_lG_xbst = false;
    var gkqj_pc_ds_xbst = false;
    if (RJSE_1 == null) {
        uz_ms("csrf-MCVN NRAP-")
    }
    var VNWM_RJSE_1 = RJSE_1.split("\n");
    var VNWM_JTYJ = [];
    gkqj_pc_lG_xbst = Boolean(LG_XBST);
    gkqj_pc_ds_xbst = Boolean(DS_XBST);
    var VNWM_YBKC = [];
    if (gkqj_pc_ds_xbst && gkqj_pc_ds_xbst && gkqj_ytnc_cl_hd) {
        if (typeof (LG_XBST) != "string") {
            uz_ms("[MCVN UXUX MSOX , AOAO JI string]" + typeof (LG_XBST) + "<--")
        }
        var regex_1 = new RegExp("(.*?)(" + LG_XBST + ".*?" + DS_XBST + ")(.*)");
        var shengyu_1 = "$2";
        var VNWM_YHLD = [];
        for (suoyin1 in VNWM_RJSE_1) {
            var RJSE_YHLD = VNWM_RJSE_1[suoyin1].replace(regex_1, shengyu_1);
            if (VNWM_YBKC[VNWM_YBKC.length - 1] == RJSE_YHLD) {
                gkqj_zznq_ytnc = true;
            } else {
                gkqj_zznq_ytnc = false
            }
            VNWM_YBKC.push(RJSE_YHLD)
            if (VNWM_YHLD.indexOf(RJSE_YHLD) == -1) {
                VNWM_YHLD.push(RJSE_YHLD);
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            } else if (!gkqj_zznq_ytnc) {
                VNWM_YHLD.push(RJSE_YHLD);
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            }
        }
    } else if (gkqj_pc_ds_xbst && gkqj_pc_ds_xbst && !gkqj_ytnc_cl_hd) {

        if (typeof (LG_XBST) != "string") {
            uz_ms("[MCVN UXUX MSOX , AOAO JI string]" + typeof (LG_XBST) + "<--")
        }
        var regex_1 = new RegExp("(.*?)(" + LG_XBST + ".*?" + DS_XBST + ")(.*)");
        var shengyu_1 = "$2";
        var VNWM_YHLD = [];
        for (suoyin1 in VNWM_RJSE_1) {
            var RJSE_YHLD = VNWM_RJSE_1[suoyin1].replace(regex_1, shengyu_1);
            if (VNWM_YHLD.indexOf(RJSE_YHLD) == -1) {
                VNWM_YHLD.push(RJSE_YHLD);
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            }
        }
    } else if (!gkqj_pc_ds_xbst && !gkqj_pc_ds_xbst && gkqj_ytnc_cl_hd) {
        for (suoyin1 in VNWM_RJSE_1) {
            if (VNWM_YBKC[VNWM_YBKC.length - 1] == VNWM_RJSE_1[suoyin1]) {
                gkqj_zznq_ytnc = true;
            } else {
                gkqj_zznq_ytnc = false
            }
            VNWM_YBKC.push(VNWM_RJSE_1[suoyin1])
            if (VNWM_JTYJ.indexOf(VNWM_RJSE_1[suoyin1]) == -1) {
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            } else if (!gkqj_zznq_ytnc) {
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            }
        }
    } else if (!gkqj_pc_ds_xbst && !gkqj_pc_ds_xbst && !gkqj_ytnc_cl_hd) {
        for (suoyin1 in VNWM_RJSE_1) {
            if (VNWM_JTYJ.indexOf(VNWM_RJSE_1[suoyin1]) == -1) {
                VNWM_JTYJ.push(VNWM_RJSE_1[suoyin1]);
            }
        }
    } else {
        uz_ms("csrf-ravc dk epqt vbyt-kp-" + JSON.stringify(diwr_mcvn))
    }
    var RJSE_JTYJ = VNWM_JTYJ.join("\n");
    return RJSE_JTYJ;
}//this.quChongfuHang
module.exports = HD_LZJK;