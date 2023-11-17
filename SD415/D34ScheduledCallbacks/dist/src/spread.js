/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/
export { copyArray, concat, findMin, findProduct };
/**
 * Clones an array.
 * @param {T[]} arr - The array to be cloned.
 * @returns {T[]} - The cloned array.
 */
function copyArray(arr) {
    return [...arr];
}
/**
 * Concatenates arrays into a new array.
 * @param {T[]} arr1 - The first array.
 * @param {T[]} arr2 - The second array.
 * @returns {T[]} - The concatenated array.
 */
function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
/**
 * Finds the minimum value among the given numbers.
 * @param {...number} numbers - Numbers to find the minimum from.
 * @returns {number} - The minimum value.
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}
/**
 * Finds the product of numbers.
 * @param {...number} numbers - Numbers to find the product from.
 * @returns {number} - The product of the numbers.
 */
function findProduct(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
