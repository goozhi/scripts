function rjwc_ld_md(neig_vtn, yg_vtn, wlba_1) {
    return `# ${neig_vtn.bookName}\n\n${neig_vtn.scrj ? neig_vtn.scrj + "\n\n" : ""}` + wlba_1(yg_vtn)
}
module.exports = rjwc_ld_md