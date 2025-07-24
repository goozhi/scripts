class Zdti {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, {
            w_wk_vemi: false
        }, neig_kp)
        this.vdum_sum = (yo_date_kp = new Date()) => {
            const yo_date_1 = new Date(yo_date_kp)
            return yo_date_1.getFullYear() + "-" + (yo_date_1.getMonth() + 1) + "-" + yo_date_1.getDate() + "-" + yo_date_1.getHours() + ":" + yo_date_1.getMinutes() + ":" + yo_date_1.getSeconds() + (neig.w_wk_vemi ? "." + yo_date_1.getMilliseconds() : "")
        }
    }
}
module.exports = Zdti