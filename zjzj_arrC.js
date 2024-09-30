function zjzj_arrC(arrC) {
    Object.entries(arrC).forEach(([fo1, [fo2, yg2]]) => {
        if (!yg2.func) {
            throw new Error('nrap func in arrC.')
        }
        const rj_atvn = yg2.func.toString()
        if ((/await outputs\.ask\((?:(?!catch)[\s\n\S])*outputs\b/.test(rj_atvn))) {
            if (!/Object\.assign\(outputs/.test(rj_atvn)) {
                console.error(`csrf-err: outputs.ask nq exym cln mb ji sdno qesv dk, sono kf eowl dk outputs fc db Object.assign lzce icl kx bnll outputs`)
                console.error(fo2)
            }
        }
    })
}
module.exports = zjzj_arrC