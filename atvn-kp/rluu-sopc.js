const vbyt_yfux = require("../vbyt_yfux")

const rluu_sopc = (yo_vnwy_bx = new Map()) => {

    return [...yo_vnwy_bx].map(([fo, yg], eqwy, wm) => {
        switch (true) {
            case vbyt_yfux(fo, yo_vnwy_bx) && vbyt_yfux(yg, yo_vnwy_bx):
                console.log(323, 'ss')
                return [rluu_sopc(fo), rluu_sopc(yg)]
            case vbyt_yfux(fo, yo_vnwy_bx) && !vbyt_yfux(yg, yo_vnwy_bx):
                console.log(323, 'ssw')
                return [rluu_sopc(fo), yg]
            case !vbyt_yfux(fo, yo_vnwy_bx) && vbyt_yfux(yg, yo_vnwy_bx):
                // console.log(323, 'ssp')
                return [fo, rluu_sopc(yg)]
            case !vbyt_yfux(fo, yo_vnwy_bx) && !vbyt_yfux(yg, yo_vnwy_bx):
                // console.log(323, 'ssa')
                return [fo, yg]
            default:
                uzms("csrf-ravc zbhm-")
        }
    })
}
module.exports = rluu_sopc