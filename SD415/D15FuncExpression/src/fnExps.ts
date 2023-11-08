
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}


/**
 * @returns {number} 100 times the input
 */
export function times100(num: number) :number {
  return 100*num;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
 //   The myMap function takes an array (arr) and a mapping function (fun) as parameters. It iterates through the array, applies the fun function to each element, and stores the results in a new array result, which is then returned.
  
//   Example functions double and times100 are provided, which you can use as the mapping functions when calling myMap. They double and multiply a number by 100, respectively.
  
//   We demonstrate the use of myMap by applying it to the originalArray with both double and times100 functions and printing the results.
  
//   The output will show the original array, the doubled array, and the array with each element multiplied by 100.
  
  
  
  
export function myMap(arr: number[], fun:(num : number) => number): number[]{
     
    const newArr: number [] = [];

    for( let item of arr){
        const funItem = fun(item);
        newArr.push(funItem);

    }
    return newArr;
   }
  
  //  function double(num : number): number{
  //   return num*2;
  //  }
  //   function times100(num: number) :number {
  //       return 100*num;
  //   }

    // const intialArray = [1,2,3,4];
    // const doubleFunarray = myMap(intialArray, double);
    // const timmes100Array = myMap(intialArray,times100);

    // console.log("initialarray: ",intialArray);
    // console.log("doubleFunArray: ",doubleFunarray);
    // console.log("times100Array: ", timmes100Array);


   export function myMap1<T, U>(arr: T[], callback: (value: T) => U): U[] {
      const result: U[] = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
      }
      return result;
    }
     
    // Example input array
    const inputArray: number[] = [1, 2, 3, 4, 5];
     
    // Using myMap with an anonymous function to triple the input value
    const tripledArray = myMap(inputArray, (value) => value * 3);
    console.log(tripledArray); // Output: [3, 6, 9, 12, 15]
    
    
