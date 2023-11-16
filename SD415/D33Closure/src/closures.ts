
export { inArray, inBetween, makeArmy }
/**
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 */
/**
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 */

/**
 * @returns {Function} closure that returns it's number
 */

/**
* @param {Array} arr holding values
* @returns {Function} returns a function that tests whether its argument is in the arr
*/
type FilterFunction = (value: number) => boolean;

function inArray(arr: number[]): FilterFunction {
    return function (input: number): boolean {
        return arr.includes(input);
    };
}


function inBetween(start: number, end: number): (value: number) => boolean {
    return function (input: number): boolean {
        return input >= start && input <= end
    }
}

type Shooter = () => number;

function makeArmy(): Shooter[] {
    const army: Shooter[] = [];

    for (let i = 0; i < 10; i++) {
        army[i] = (function (value: number): Shooter {
            return function (): number {
                return value;
            };
        })(i);
    }

    return army;
}


//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...