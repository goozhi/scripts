/**
 * @param {string} [word]
 * @param {string} [p1] you can use a character to replace the vowels
 * @returns {string} return the new display of the word
 */
function replaceVowels(word = "", p1 = "_") {
    return word.replace(/[aeiou]/gi, p1); // 使用正则表达式匹配所有的元音字母
}
module.exports = replaceVowels