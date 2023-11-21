export function myMap(arr, func) {
    const newArr = [];
    for (const currentValue of arr) {
        newArr.push(func(currentValue, arr.indexOf(currentValue), arr));
    }
    return newArr;
}
export function myFilter(arr, func) {
    let filteredEl = [];
    for (const currentValue of arr) {
        if (func(currentValue, arr.indexOf(currentValue), arr)) {
            filteredEl.push(currentValue);
        }
    }
    return filteredEl;
}
export function myReduce(arr, func, initialValue) {
    let accumulator = initialValue;
    for (const currentValue of arr) {
        accumulator = func(accumulator, currentValue, arr.indexOf(currentValue), arr);
    }
    return accumulator;
}
//making a map method for array of numbers
function myMapNum(arr, callback) {
    let newMap = [];
    for (const ele of arr) {
        newMap.push(callback(ele));
    }
    return newMap;
}
