// 计算中位数
function calculateMedian(values) {
    const sortedValues = values.slice(0).sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedValues.length / 2);

    if (sortedValues.length % 2 === 0) {
        // 如果是偶数个元素，取中间两个数的平均值
        return (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2;
    } else {
        // 如果是奇数个元素，直接返回中间的数
        return sortedValues[middleIndex];
    }
}
module.exports = calculateMedian