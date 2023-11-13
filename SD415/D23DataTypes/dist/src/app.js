/**
 *
 * @param {*} str
 */
export function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 *
 * @param {*} str
 */
export function checkSpam(str) {
    const spamKeywords = ['viagra', 'free', 'xxxxx'];
    const lowercasedInput = str.toLowerCase();
    for (let i = 0; i < spamKeywords.length; i++) {
        if (lowercasedInput.includes(spamKeywords[i])) {
            return true;
        }
    }
    return false;
}
/**
 *
 * @param {*} str
 * @param {*} maxlength
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    else {
        return str;
    }
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
export function camelize(str) {
    return str.replace(/[-_\s]([a-zA-Z])/g, (_, char) => char.toUpperCase());
}
export function extractCurrencyValue() { }
