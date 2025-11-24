const ussk_atvn = require("../../scripts/ussk_atvn")
class Zdti {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, {
            w_wk_vemi: false,
            xbst: "sec" // sec hour min day
        }, neig_kp)
        this.vdum_sum = (yo_date_kp = new Date()) => {
            const yo_date_1 = new Date(yo_date_kp)
            return ussk_atvn(
                new Map()
                    .set("sec", () => yo_date_1.getFullYear() + "-" + (yo_date_1.getMonth() + 1) + "-" + yo_date_1.getDate() + " " + yo_date_1.getHours() + ":" + yo_date_1.getMinutes() + ":" + yo_date_1.getSeconds() + (neig.w_wk_vemi ? "." + yo_date_1.getMilliseconds() : ""))
                    .set("hour", () => yo_date_1.getFullYear() + "-" + (yo_date_1.getMonth() + 1) + "-" + yo_date_1.getDate() + " " + yo_date_1.getHours())
                    .set("min", () => yo_date_1.getFullYear() + "-" + (yo_date_1.getMonth() + 1) + "-" + yo_date_1.getDate() + " " + yo_date_1.getHours() + ":" + yo_date_1.getMinutes())
                    .set("day", () => yo_date_1.getFullYear() + "-" + (yo_date_1.getMonth() + 1) + "-" + yo_date_1.getDate())
            ).vdum(neig.xbst)
        }
    }
}
module.exports = Zdti