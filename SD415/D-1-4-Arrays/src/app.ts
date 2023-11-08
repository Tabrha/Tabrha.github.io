

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1,2,3]));
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a: number, b: number, c: number): number{  
        if (a >= b && a >= c) {
          return a;
        } else if (b >= a && b >= c) {
          return b;
        } else {
          return c;
        }
      }

 /**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number{
    if (arr.length === 0) {
        return 1; // If the array is empty, the product is 1 (neutral element for multiplication).
      }
    
      let product = 1;
    
      for (const num of arr) {
        product *= num;
      }
    
      return product;
    }
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
export function findLongestWord(arr: string[]): number{
    if (arr.length === 0) {
        return 0; // If the array is empty, there's no longest word.
      }
    
      let longestLength = 0;
    
      for (const word of arr) {
        const wordLength = word.length;
        if (wordLength > longestLength) {
          longestLength = wordLength;
        }
      }
    
      return longestLength;
    }

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, cols: number): number[][]{
    const result = [];
    let counter = 1;
  
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(counter);
        counter++;
      }
      result.push(row);
    }
    return result;
  }

/**
 * Compare student answers against correct answers and return an array of scores.
 * @param {number[][]} studentAnswers - Array of arrays of student answers.
 * @param {number[]} correctAnswers - Array of correct answers.
 * @returns {number[]} - Array of scores for each student.
 */
export function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
  return studentAnswers.map((student) =>
    student.reduce((score, answer, index) => {
      if (answer === correctAnswers[index]) {
        return score + 1;
      }
      return score;
    }, 0)
  );
}
/**
 * Reverse the elements of an array and return a new array.
 * @param {T[]} arr - The input array.
 * @returns {T[]} - A new array with elements in reverse order.
 */
export function reverseArray<T>(arr: T[]): T[] {
  const reversed: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/**
 * Reverse the elements of an array in place.
 * @param {T[]} arr - The input array to be reversed in place.
 */
export function reverseArrayInPlace<T>(arr: T[]): void {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}