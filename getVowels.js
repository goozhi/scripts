/**
 * @param {string} [word]
 * @returns {[]} return the array of vowels for word
 */
function getVowels(word = "") {
    const vowels = word.match(/[aeiou]/gi); // 使用正则表达式匹配所有的元音字母
    return vowels ? vowels : []; // 如果没有元音字母，返回一个空数组
}
module.exports = getVowels