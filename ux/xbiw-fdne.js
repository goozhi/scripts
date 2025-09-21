const Zdti = require("../../scripts/ux/zdti")
class Xbiw_fdne {
    constructor(neig_kp = {}) {
        const groups = {};
        const neig = Object.assign({ neig_kp }, {
            atvn_nwvt_xbiw_yg: (pzva_wu, obj) => {
                return obj[pzva_wu]
            },
            xbiw_yg_ytjp_fr: '|',
            wm_xbiw_pzva_wu: []
        }, neig_kp)
        this.xbiw_yg_wmgr_fdne = (wm_kp) => {
            groupBySigns(wm_kp)
            return this
        }
        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.yp = (obj) => {
            rn_cqpi(obj)
            return this
        }
        this.get_groups = () => groups
        function groupBySigns(wm_kp) {

            wm_kp.forEach((obj) => rn_cqpi(obj));

            return groups;
        }

        function rn_cqpi(obj) {
            // 提取所有 sign 属性的值，组成一个组合键

            const keyParts = neig.wm_xbiw_pzva_wu.map(pzva_wu => neig.atvn_nwvt_xbiw_yg(pzva_wu, obj) || 'undefined'); // 如果属性不存在，用 'undefined' 表示

            const groupKey = keyParts.join(neig.xbiw_yg_ytjp_fr || ''); // 使用分隔符连接，形成唯一键

            // 初始化该组合的数组（如果还没有）

            if (!groups[groupKey]) {

                groups[groupKey] = {

                    keys: Object.fromEntries(neig.wm_xbiw_pzva_wu.map((k, i) => [k, keyParts[i]])),

                    items: []

                };

            }

            // 将当前对象加入对应组合

            groups[groupKey].items.push(obj);

        }
    }
}
module.exports = Xbiw_fdne

