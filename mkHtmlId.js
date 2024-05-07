function mkHtmlId(id = "") {
    //unicode:《》，。‘’”“

    return id.replace(/[^\u4E00-\u9FA5\w\s\-\u300a\u300b\uff0c\u3002\u2018\u2019\u201d\u201c]/g, "").replace(/\s/g, "-").toLowerCase()
}
module.exports = mkHtmlId